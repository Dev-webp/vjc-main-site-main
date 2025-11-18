import fs from "fs";
import path from "path";

// Set config for Next.js to not parse the body automatically
export const config = {
  api: { bodyParser: false },
};

export async function POST(req) {
  // Use req.formData() for App Router
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
  }

  // Convert File to Buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Setup directory and filename
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  fs.mkdirSync(uploadDir, { recursive: true });

  // Sanitize filename and add timestamp for uniqueness
  const fileName = Date.now() + "-" + file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const filePath = path.join(uploadDir, fileName);
  
  // Write the file to disk
  fs.writeFileSync(filePath, buffer);

  // Return the public URL for the news admin component to save
  return new Response(JSON.stringify({ url: `/uploads/${fileName}` }), { status: 200 });
}