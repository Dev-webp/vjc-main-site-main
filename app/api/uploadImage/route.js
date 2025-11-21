import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Ensure the upload directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    // Generate a safe file name
    const mimeType = file.type || 'image/jpeg';
    const ext = mimeType.split('/')[1] || 'jpg';
    const safeName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;

    // Write file to /public/uploads
    const bytes = await file.arrayBuffer();
    await fs.writeFile(path.join(uploadDir, safeName), Buffer.from(bytes));

    // Create public accessible URL
    const publicUrl = `/uploads/${safeName}`;
    // On VPS: https://your-domain.com/uploads/safeName

    return NextResponse.json({ url: publicUrl }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Image upload failed." }, { status: 500 });
  }
}
