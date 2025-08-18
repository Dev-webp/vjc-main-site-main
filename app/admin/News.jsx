"use client";
import { useEffect, useState } from "react";
import slugify from "@/app/latest-news/slugify";

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    image: "",
    tag: "",
    time: "",
    readTime: "",
    content: "",
  });

  // Load all news
  const loadNews = async () => {
    const res = await fetch("/api/news");
    const data = await res.json();
    setNews(data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  // Add news
  const handleAdd = async () => {
    const newNews = { ...form, slug: slugify(form.title) };

    await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNews),
    });

    setForm({
      title: "",
      summary: "",
      image: "",
      tag: "",
      time: "",
      readTime: "",
      content: "",
    });

    loadNews();
  };

  // Delete news by slug
  const handleDelete = async (slug) => {
    await fetch("/api/news", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });

    loadNews(); // refresh list after delete
  };

  return (
    <div className="p-4 border rounded mb-8 bg-gray-50">
      <h1 className="text-xl font-bold mb-4">📰 Manage News</h1>

      {/* FORM */}
      <div className="mb-6 grid gap-3">
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          className="border p-2 w-full rounded"
        />
        <textarea
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          placeholder="Summary"
          className="border p-2 w-full rounded"
        />
        <input
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          placeholder="Image URL"
          className="border p-2 w-full rounded"
        />
        <input
          value={form.tag}
          onChange={(e) => setForm({ ...form, tag: e.target.value })}
          placeholder="Tag (e.g. Breaking News)"
          className="border p-2 w-full rounded"
        />
        <input
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          placeholder="Time (e.g. 16m ago)"
          className="border p-2 w-full rounded"
        />
        <input
          value={form.readTime}
          onChange={(e) => setForm({ ...form, readTime: e.target.value })}
          placeholder="Read Time (e.g. 2 min read)"
          className="border p-2 w-full rounded"
        />
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Full Content (HTML allowed)"
          rows={6}
          className="border p-2 w-full rounded"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded w-fit"
        >
          ➕ Add News
        </button>
      </div>

      {/* LIST with scrollable limit */}
      <div className="max-h-64 overflow-y-auto border rounded p-2 bg-white">
        <ul className="space-y-3">
          {news.map((n) => (
            <li
              key={n.slug}
              className="flex justify-between items-start border p-3 rounded bg-gray-50 shadow-sm"
            >
              <div>
                <strong className="block">{n.title}</strong>
                <p className="text-sm text-gray-600">{n.summary}</p>
                <p className="text-xs text-gray-400">
                  {n.tag} • {n.time} • {n.readTime}
                </p>
              </div>
              <button
                onClick={() => handleDelete(n.slug)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                🗑 Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
