import { NextResponse } from "next/server";
import db from "../../../lib/db";

// GET all migrate entries ordered by parentSlug and name
export async function GET() {
  try {
    const migrate = db.prepare("SELECT * FROM migrate ORDER BY parentSlug, name").all();
    return NextResponse.json(migrate);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST add a new migrate entry
export async function POST(req) {
  try {
    const visa = await req.json();

    // Check if parentSlug + slug combo exists (allows same slug under different parents)
    const existing = db.prepare(`
      SELECT id FROM migrate 
      WHERE slug = ? AND (parentSlug = ? OR (parentSlug IS NULL AND ? IS NULL))
    `).get(visa.slug, visa.parentSlug, visa.parentSlug);
    
    if (existing) {
      return NextResponse.json({ 
        error: `/${visa.parentSlug || ''}/${visa.slug} already exists under this parent` 
      }, { status: 409 });
    }

    const stmt = db.prepare(`
      INSERT INTO migrate
      (parentSlug, name, slug, description, descriptionImage, descriptionImageWidth, descriptionImageHeight, descriptionImagePosition,
       info, metaTitle, metaDescription, metaKeywords, image, addonHeading, addonDescription) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      visa.parentSlug || null,
      visa.name,
      visa.slug,
      visa.description || "",
      visa.descriptionImage || "",
      visa.descriptionImageWidth || "120",
      visa.descriptionImageHeight || "80",
      visa.descriptionImagePosition || "left",
      visa.info || "",
      visa.metaTitle || "",
      visa.metaDescription || "",
      visa.metaKeywords || "",
      visa.image || "",
      visa.addonHeading || "",
      visa.addonDescription || ""
    );

    const insertedVisa = db.prepare("SELECT * FROM migrate WHERE id = ?").get(result.lastInsertRowid);
    return NextResponse.json({ message: "Visa added", visa: insertedVisa });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT update a migrate entry by id
export async function PUT(req) {
  try {
    const visa = await req.json();
    if (!visa.id) {
      return NextResponse.json({ error: "Visa ID missing" }, { status: 400 });
    }

    // Check if new parentSlug + slug combo conflicts (skip if same ID)
    const conflictCheck = db.prepare(`
      SELECT id FROM migrate 
      WHERE slug = ? AND (parentSlug = ? OR (parentSlug IS NULL AND ? IS NULL))
      AND id != ?
    `).get(visa.slug, visa.parentSlug, visa.parentSlug, visa.id);
    
    if (conflictCheck) {
      return NextResponse.json({ 
        error: `/${visa.parentSlug || ''}/${visa.slug} already exists under this parent` 
      }, { status: 409 });
    }

    const stmt = db.prepare(`
      UPDATE migrate SET
        parentSlug = ?, 
        name = ?, 
        slug = ?, 
        description = ?, 
        descriptionImage = ?, 
        descriptionImageWidth = ?, 
        descriptionImageHeight = ?, 
        descriptionImagePosition = ?, 
        info = ?, 
        metaTitle = ?, 
        metaDescription = ?, 
        metaKeywords = ?, 
        image = ?, 
        addonHeading = ?, 
        addonDescription = ?
      WHERE id = ?
    `);

    const result = stmt.run(
      visa.parentSlug || null,
      visa.name,
      visa.slug,
      visa.description || "",
      visa.descriptionImage || "",
      visa.descriptionImageWidth || "120",
      visa.descriptionImageHeight || "80",
      visa.descriptionImagePosition || "left",
      visa.info || "",
      visa.metaTitle || "",
      visa.metaDescription || "",
      visa.metaKeywords || "",
      visa.image || "",
      visa.addonHeading || "",
      visa.addonDescription || "",
      visa.id
    );

    if (result.changes === 0) {
      return NextResponse.json({ error: "Visa not found" }, { status: 404 });
    }

    const updatedVisa = db.prepare("SELECT * FROM migrate WHERE id = ?").get(visa.id);
    return NextResponse.json({ message: "Visa updated", visa: updatedVisa });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE a migrate entry by id
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Visa ID missing" }, { status: 400 });
    }

    const stmt = db.prepare("DELETE FROM migrate WHERE id = ?");
    const result = stmt.run(id);

    if (result.changes === 0) {
      return NextResponse.json({ error: "Visa not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Visa deleted" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
