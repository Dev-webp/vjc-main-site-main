import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file"); // Your form key must be "file"
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Use original filename or fallback to unique timestamp
    const filename = file.name || `file_${Date.now()}`;

    // Upload directory outside your Next.js app (IMPORTANT for persistence)
    const uploadDir = "/var/www/uploads";

    // Create uploads folder if it doesn't exist
    await fs.mkdir(uploadDir, { recursive: true });

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Complete filepath to save
    const filePath = path.join(uploadDir, filename);

    // Write file to disk
    await fs.writeFile(filePath, buffer);

    // Return URL served by Nginx pointing to uploads folder (adjust domain as needed)
    const url = `https://www.vjcoverseas.com/uploads/${filename}`;

    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    console.error("Image processing failed:", error);
    return NextResponse.json({ error: "Image processing failed on server." }, { status: 500 });
  }
}
