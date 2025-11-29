"use client";
import { useState, useEffect } from "react";

export default function MetaDashboard() {
  const [routes, setRoutes] = useState([]);
  const [form, setForm] = useState({
    route: "",
    title: "",
    description: "",
    keywords: "",
    html_content: "",
  });
  const [editing, setEditing] = useState(false);
  const [showHtmlPreview, setShowHtmlPreview] = useState(false);

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
      html_content: meta.html_content || "",
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
      html_content: "",
    });
    setEditing(false);
    setShowHtmlPreview(false);
  };

  // Submit new/update meta (SEND slug from route!)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/metas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: form.route,
        title: form.title,
        description: form.description,
        keywords: form.keywords,
        html_content: form.html_content,
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Meta Dashboard</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Route/URL (e.g. /study-abroad)</label>
            <input
              type="text"
              name="route"
              value={form.route}
              onChange={e => setForm({ ...form, route: e.target.value })}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              disabled={editing}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Description (Plain Text or HTML)</label>
            <textarea
              name="description"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              rows={3}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-vertical"
              placeholder="Enter plain text OR HTML content (both work!)"
            />
            <p className="text-xs text-gray-500 mt-1">Supports both plain text and HTML</p>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Keywords (comma separated)</label>
            <input
              type="text"
              name="keywords"
              value={form.keywords}
              onChange={e => setForm({ ...form, keywords: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="visa, canada, immigration, study"
            />
          </div>
        </div>

        <div>
          <label className="flex text-sm font-semibold mb-2 items-center">
            <input
              type="checkbox"
              checked={showHtmlPreview}
              onChange={e => setShowHtmlPreview(e.target.checked)}
              className="mr-2"
            />
            HTML Content (Full Page HTML) - Show Preview
          </label>
          <textarea
            name="html_content"
            value={form.html_content}
            onChange={e => setForm({ ...form, html_content: e.target.value })}
            rows={showHtmlPreview ? 4 : 8}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-vertical font-mono text-sm"
            placeholder='<div class="container"><h1>Your full HTML here</h1></div>'
          />
          
          {showHtmlPreview && form.html_content && (
            <div className="mt-3 p-4 bg-gray-100 rounded-lg border max-h-48 overflow-auto">
              <div 
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: form.html_content }}
              />
            </div>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors" type="submit">
            {editing ? "Update" : "Add"} Meta
          </button>
          {editing && (
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors" type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-semibold mb-4">All Routes ({routes.length})</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <th className="p-4 text-left font-semibold">Route</th>
              <th className="p-4 text-left font-semibold">Title</th>
              <th className="p-4 text-left font-semibold">Description</th>
              <th className="p-4 text-left font-semibold">Keywords</th>
              <th className="p-4 text-left font-semibold">HTML Content</th>
              <th className="p-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(Array.isArray(routes) ? routes : []).map((meta) => (
              <tr key={meta.route} className="hover:bg-gray-50 transition-colors border-b">
                <td className="p-4 font-mono text-blue-600">{meta.route}</td>
                <td className="p-4 max-w-xs truncate" title={meta.title}>{meta.title}</td>
                <td className="p-4 max-w-md truncate" title={meta.description}>
                  {meta.description?.startsWith('<') ? (
                    <span className="text-green-600">📄 HTML ({meta.description.length} chars)</span>
                  ) : (
                    <span className="text-blue-600">📝 Text ({meta.description?.length || 0} chars)</span>
                  )}
                </td>
                <td className="p-4 max-w-xs truncate" title={meta.keywords}>{meta.keywords}</td>
                <td className="p-4">
                  {meta.html_content ? (
                    <span className="text-green-600 font-medium">✅ Yes ({meta.html_content.length} chars)</span>
                  ) : (
                    <span className="text-gray-500 font-medium">❌ No</span>
                  )}
                </td>
                <td className="p-4">
                  <button
                    className="text-blue-600 hover:text-blue-800 underline mr-4 font-medium"
                    type="button"
                    onClick={() => handleEdit(meta)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 underline font-medium"
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
    </div>
  );
}
