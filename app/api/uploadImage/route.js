import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

// Set your upload folder location (must be inside public or your static serving path)
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Ensure uploads directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    // Grab extension from mime or original name, build safe filename
    const mimeType = file.type || 'image/jpeg';
    const ext = mimeType.split('/')[1] || 'jpg';
    const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;

    // Save the file to disk
    const bytes = await file.arrayBuffer();
    await fs.writeFile(path.join(uploadDir, fileName), Buffer.from(bytes));

    // Return a public URL
    const publicUrl = `/uploads/${fileName}`; // Relative public path
    // If needed: const absoluteUrl = `https://www.vjcoverseas.com${publicUrl}`;

    return NextResponse.json({ url: publicUrl }, { status: 200 });
  } catch (error) {
    console.error("Image upload failed:", error);
    return NextResponse.json({ error: "Image upload failed on server." }, { status: 500 });
  }
}
