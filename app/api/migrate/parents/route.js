import { NextResponse } from "next/server";
import db from "../../../../lib/db"; // Adjust path if needed

// GET all unique parent slugs (entries where parentSlug is NULL or empty)
export async function GET() {
  try {
    const parents = db.prepare(`
      SELECT DISTINCT 
        slug as slug, 
        name,
        id
      FROM migrate 
      WHERE parentSlug IS NULL OR parentSlug = ''
      ORDER BY name ASC
    `).all();

    return NextResponse.json(parents);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
