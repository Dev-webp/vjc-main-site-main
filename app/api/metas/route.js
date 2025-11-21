import db from '@/lib/db';

// GET: /api/metas?slug=/your-route
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    const metas = db.prepare("SELECT * FROM metas").all();
    return Response.json(metas);
  } else {
    const meta = db.prepare("SELECT * FROM metas WHERE route = ?").get(slug);
    return Response.json(meta ?? {});
  }
}

// POST: Create/update meta for route
export async function POST(request) {
  const { slug, title, description, keywords } = await request.json();
  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }
  db.prepare(`
    INSERT INTO metas (route, title, description, keywords)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(route) DO UPDATE SET title=?, description=?, keywords=?
  `).run(slug, title, description, keywords, title, description, keywords);
  return Response.json({ ok: true });
}

// DELETE: Remove meta for route
export async function DELETE(request) {
  const { slug } = await request.json();
  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }
  db.prepare("DELETE FROM metas WHERE route = ?").run(slug);
  return Response.json({ ok: true });
}
