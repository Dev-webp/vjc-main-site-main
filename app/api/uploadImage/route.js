import { NextResponse } from "next/server";

/**
 * Handles POST requests to process a file upload.
 * It takes a file from FormData, converts it to a Base64 Data URI,
 * and returns the URI in the JSON response.
 * @param {Request} req The incoming request object.
 * @returns {NextResponse} The JSON response containing the data URI or an error.
 */
export async function POST(req) {
  try {
    // 1. Get the FormData from the request
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      // Handle case where no file is provided
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // 2. Convert the file object into a Node.js Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 3. Determine MIME type (default to image/jpeg if not found)
    const mimeType = file.type || "image/jpeg";
    
    // 4. Convert the buffer to a Base64 string
    const base64Data = buffer.toString("base64");
    
    // 5. Construct the Data URI format
    const dataUri = `data:${mimeType};base64,${base64Data}`;

    // 6. Return the Base64 Data URI URL to the client
    return NextResponse.json({ url: dataUri }, { status: 200 });

  } catch (error) {
    console.error("Image processing failed:", error);
    return NextResponse.json({ error: "Image processing failed on server." }, { status: 500 });
  }
}