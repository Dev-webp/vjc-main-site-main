"use client";
import { useState, useEffect } from "react";

export default function MetaDashboard() {
  const [routes, setRoutes] = useState([]);
  const [form, setForm] = useState({
    route: "",
    title: "",
    description: "",
    keywords: "",
  });
  const [editing, setEditing] = useState(false);

  // Fetch all metas on mount & after change
  const fetchMetas = () => {
    fetch("/api/metas")
      .then(res => res.json())
      .then(data => setRoutes(Array.isArray(data) ? data : []))
      .catch(() => setRoutes([]));
  };

  useEffect(fetchMetas, []);

  // Set form for edit
  const handleEdit = (meta) => {
    setForm({
      route: meta.route || "",
      title: meta.title || "",
      description: meta.description || "",
      keywords: meta.keywords || "",
    });
    setEditing(true);
  };

  // Reset form
  const resetForm = () => {
    setForm({
      route: "",
      title: "",
      description: "",
      keywords: "",
    });
    setEditing(false);
  };

  // Submit new/update meta (SEND slug from route!)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/metas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: form.route, // <-- This guarantees API works!
        title: form.title,
        description: form.description,
        keywords: form.keywords,
      }),
    });
    fetchMetas();
    resetForm();
  };

  // Handle delete (SEND slug from route!)
  const handleDelete = async (route) => {
    if (!window.confirm("Are you sure you want to delete meta for " + route + "?")) return;
    await fetch("/api/metas", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: route }),
    });
    fetchMetas();
    resetForm();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Meta Dashboard</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded shadow-sm">
        <div>
          <label className="block text-sm font-semibold">Route/URL (e.g. /study-abroad)</label>
          <input
            type="text"
            name="route"
            value={form.route}
            onChange={e => setForm({ ...form, route: e.target.value })}
            required
            className="w-full p-2 border rounded"
            disabled={editing}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            rows={2}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Keywords</label>
          <input
            type="text"
            name="keywords"
            value={form.keywords}
            onChange={e => setForm({ ...form, keywords: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold" type="submit">
            {editing ? "Update" : "Add"} Meta
          </button>
          {editing && (
            <button className="bg-gray-400 text-white px-4 py-2 rounded" type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-lg font-semibold mt-6">All Routes</h3>
      <table className="w-full mt-2 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Route</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Keywords</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(routes) ? routes : []).map((meta) => (
            <tr key={meta.route}>
              <td className="p-2 border">{meta.route}</td>
              <td className="p-2 border">{meta.title}</td>
              <td className="p-2 border">{meta.description}</td>
              <td className="p-2 border">{meta.keywords}</td>
              <td className="p-2 border">
                <button
                  className="text-blue-600 underline mr-4"
                  type="button"
                  onClick={() => handleEdit(meta)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 underline"
                  type="button"
                  onClick={() => handleDelete(meta.route)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
