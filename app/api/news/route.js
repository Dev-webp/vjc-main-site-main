import { NextResponse } from "next/server";
import db from "../../../lib/db"; // Adjust path if needed

// Helper to get news by slug
const getNewsBySlug = (slug) => {
  return db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);
};

// GET all news
export async function GET() {
  try {
    const news = db.prepare("SELECT * FROM news ORDER BY id DESC").all();
    return NextResponse.json(news);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST add news
export async function POST(req) {
  try {
    const news = await req.json();

    if (!news.title?.trim() || !news.slug?.trim()) {
      return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
    }

    const stmt = db.prepare(`
      INSERT INTO news (title, slug, summary, image, tag, time, readTime, content)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      news.title,
      news.slug,
      news.summary || "",
      news.image || "",
      news.tag || "",
      news.time || "",
      news.readTime || "",
      news.content || ""
    );

    return NextResponse.json({ message: "News added", data: news }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT update news by slug
export async function PUT(req) {
  try {
    const news = await req.json();
    if (!news.slug?.trim()) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const existing = getNewsBySlug(news.slug);
    if (!existing) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }

    const stmt = db.prepare(`
      UPDATE news SET title = ?, summary = ?, image = ?, tag = ?, time = ?, readTime = ?, content = ?
      WHERE slug = ?
    `);

    stmt.run(
      news.title,
      news.summary || "",
      news.image || "",
      news.tag || "",
      news.time || "",
      news.readTime || "",
      news.content || "",
      news.slug
    );

    return NextResponse.json({ message: "News updated", data: news });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE news by slug
export async function DELETE(req) {
  try {
    const { slug } = await req.json();
    if (!slug?.trim()) {
      return NextResponse.json({ error: "Slug required" }, { status: 400 });
    }

    const stmt = db.prepare("DELETE FROM news WHERE slug = ?");
    const result = stmt.run(slug);

    if (result.changes === 0) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "News deleted" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
