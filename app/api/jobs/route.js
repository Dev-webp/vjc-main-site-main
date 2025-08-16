import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "jobs.json");

// GET all jobs
export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return new Response(data, { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify([]), { status: 200 });
  }
}

// POST add a new job
export async function POST(req) {
  try {
    const newJob = await req.json();
    const data = await fs.readFile(filePath, "utf8");
    const jobs = JSON.parse(data || "[]");

    jobs.push(newJob);

    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2));
    return new Response(JSON.stringify(newJob), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// DELETE a job
export async function DELETE(req) {
  const { id } = await req.json();
  const data = await fs.readFile(filePath, "utf8");
  let jobs = JSON.parse(data || "[]");

  jobs = jobs.filter((job) => job.id !== id);

  await fs.writeFile(filePath, JSON.stringify(jobs, null, 2));
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
