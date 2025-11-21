import { NextResponse } from "next/server";
import db from "../../../lib/db"; // Adjust path if needed

// GET all visitvisas
export async function GET() {
  try {
    const resume = db.prepare("SELECT * FROM resume").all();
    return NextResponse.json(resume);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST add a new visitvisa
export async function POST(req) {
  try {
    const visa = await req.json();

    const stmt = db.prepare(`
      INSERT INTO resume 
      (name, slug, description, descriptionImage, descriptionImageWidth, descriptionImageHeight, descriptionImagePosition,
       info, metaTitle, metaDescription, metaKeywords, image, addonHeading, addonDescription) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      visa.name,
      visa.slug,
      visa.description,
      visa.descriptionImage,
      visa.descriptionImageWidth,
      visa.descriptionImageHeight,
      visa.descriptionImagePosition,
      visa.info,
      visa.metaTitle,
      visa.metaDescription,
      visa.metaKeywords,
      visa.image,
      visa.addonHeading || "",
      visa.addonDescription || ""
    );

    const insertedVisa = db.prepare("SELECT * FROM resume WHERE id = ?").get(result.lastInsertRowid);
    return NextResponse.json({ message: "Visa added", visa: insertedVisa });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT update a visitvisa by id
export async function PUT(req) {
  try {
    const visa = await req.json();
    if (!visa.id) {
      return NextResponse.json({ error: "Visa ID missing" }, { status: 400 });
    }

    const stmt = db.prepare(`
      UPDATE resume SET
        name = ?, slug = ?, description = ?, descriptionImage = ?, descriptionImageWidth = ?, descriptionImageHeight = ?, 
        descriptionImagePosition = ?, info = ?, metaTitle = ?, metaDescription = ?, metaKeywords = ?, image = ?, 
        addonHeading = ?, addonDescription = ?
      WHERE id = ?
    `);

    const result = stmt.run(
      visa.name,
      visa.slug,
      visa.description,
      visa.descriptionImage,
      visa.descriptionImageWidth,
      visa.descriptionImageHeight,
      visa.descriptionImagePosition,
      visa.info,
      visa.metaTitle,
      visa.metaDescription,
      visa.metaKeywords,
      visa.image,
      visa.addonHeading || "",
      visa.addonDescription || "",
      visa.id
    );

    if (result.changes === 0) {
      return NextResponse.json({ error: "Visa not found" }, { status: 404 });
    }

    const updatedVisa = db.prepare("SELECT * FROM resume WHERE id = ?").get(visa.id);
    return NextResponse.json({ message: "Visa updated", visa: updatedVisa });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE a visitvisa by id
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Visa ID missing" }, { status: 400 });
    }

    const stmt = db.prepare("DELETE FROM resume WHERE id = ?");
    const result = stmt.run(id);

    if (result.changes === 0) {
      return NextResponse.json({ error: "Visa not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Visa deleted" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
