import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to JSON file in project root
const filePath = path.join(process.cwd(), "news-data.json");

// Utility: read file
function readNewsFile() {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([])); // create file if missing
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.error("Read error:", err);
    return [];
  }
}

// Utility: write file
function writeNewsFile(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Write error:", err);
  }
}

// GET all news
export async function GET() {
  const newsData = readNewsFile();
  return NextResponse.json(newsData, { status: 200 });
}

// POST add news
export async function POST(req) {
  try {
    const body = await req.json();
    let newsData = readNewsFile();
    newsData.push(body);
    writeNewsFile(newsData);
    return NextResponse.json(
      { message: "News added", data: newsData },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE news by title
// DELETE news by slug
export async function DELETE(req) {
  try {
    const { slug } = await req.json();
    if (!slug) {
      return NextResponse.json({ error: "Slug required" }, { status: 400 });
    }

    let newsData = readNewsFile();
    newsData = newsData.filter((n) => n.slug !== slug);
    writeNewsFile(newsData);

    return NextResponse.json(
      { message: "Deleted", data: newsData },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

}
