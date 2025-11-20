import { NextResponse } from "next/server";
import db from "../../../lib/db";

// -------------------- GET ALL INVESTOR VISAS --------------------
export async function GET() {
  try {
    const visas = db.prepare(`SELECT * FROM investor_visa`).all();
    return NextResponse.json(visas);
  } catch (error) {
    console.error("GET ERROR:", error);
    return NextResponse.json({ error: "Failed to fetch investor visas" }, { status: 500 });
  }
}

// -------------------- ADD NEW INVESTOR VISA --------------------
export async function POST(req) {
  try {
    const data = await req.json();

    const stmt = db.prepare(`
      INSERT INTO investor_visa 
      (name, slug, description, descriptionImage, descriptionImageWidth, descriptionImageHeight, descriptionImagePosition, 
      info, metaTitle, metaDescription, metaKeywords, image, addonHeading, addonDescription)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      data.name,
      data.slug,
      data.description,
      data.descriptionImage,
      data.descriptionImageWidth,
      data.descriptionImageHeight,
      data.descriptionImagePosition,
      data.info,
      data.metaTitle,
      data.metaDescription,
      data.metaKeywords,
      data.image,
      data.addonHeading,
      data.addonDescription
    );

    return NextResponse.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error("POST ERROR:", error);
    return NextResponse.json({ error: "Failed to add investor visa" }, { status: 500 });
  }
}

// -------------------- UPDATE INVESTOR VISA --------------------
export async function PUT(req) {
  try {
    const data = await req.json();

    const stmt = db.prepare(`
      UPDATE investor_visa SET
        name=?, slug=?, description=?, descriptionImage=?, descriptionImageWidth=?, 
        descriptionImageHeight=?, descriptionImagePosition=?, info=?, 
        metaTitle=?, metaDescription=?, metaKeywords=?, image=?, 
        addonHeading=?, addonDescription=?
      WHERE id=?
    `);

    stmt.run(
      data.name,
      data.slug,
      data.description,
      data.descriptionImage,
      data.descriptionImageWidth,
      data.descriptionImageHeight,
      data.descriptionImagePosition,
      data.info,
      data.metaTitle,
      data.metaDescription,
      data.metaKeywords,
      data.image,
      data.addonHeading,
      data.addonDescription,
      data.id
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PUT ERROR:", error);
    return NextResponse.json({ error: "Failed to update investor visa" }, { status: 500 });
  }
}

// -------------------- DELETE INVESTOR VISA --------------------
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    const stmt = db.prepare(`DELETE FROM investor_visa WHERE id = ?`);
    stmt.run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json({ error: "Failed to delete investor visa" }, { status: 500 });
  }
}