"use client";
import { useEffect, useState } from "react";
import slugify from "@/app/latest-news/slugify"; // Assuming the path is correct

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    image: "", // Stores the URL returned from the upload API
    tag: "",
    time: "",
    readTime: "",
    content: "",
  });
  const [editSlug, setEditSlug] = useState(null); // original slug for update
  const [imageFile, setImageFile] = useState(null); // New state for selected file
  const [isUploading, setIsUploading] = useState(false);

  // Helper function to upload the selected image file
  const handleImageUpload = async (file) => {
    if (!file) return form.image; // If no new file, return current image URL

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Image upload failed.");
      }

      const data = await res.json();
      setIsUploading(false);
      return data.url; // Returns the public URL, e.g., /uploads/filename.jpg
    } catch (err) {
      console.error("Image upload error:", err);
      setIsUploading(false);
      alert("Image upload failed. Check console for details.");
      return null;
    }
  };

  // ✅ Load all news from backend SQLite API
  const loadNews = async () => {
    try {
      const res = await fetch("/api/news");
      let data = await res.json();

      const fixedData = data
        .map((n) => ({
          ...n,
          content: n.content || n.description || "",
        }))
        .filter((n) => n.title?.trim() && n.slug?.trim());

      setNews(fixedData);
    } catch (err) {
      console.error("Failed to load news:", err);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  // Validation helper for required fields
  const isValid = (obj) => {
    if (!obj.title?.trim()) return false;
    if (!obj.content?.trim()) return false;
    return true;
  };

  // Add new news item
  const handleAdd = async () => {
    if (!isValid(form)) {
      alert("⚠️ Title and Full Content are required.");
      return;
    }

    const imageUrl = await handleImageUpload(imageFile);
    if (imageFile && !imageUrl) return; // Stop if upload failed and a file was selected

    const newNews = {
      ...form,
      image: imageUrl || form.image, // Use new URL or fallback to existing (though should be empty here)
      slug: slugify(form.title),
    };

    try {
      await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNews),
      });

      resetForm();
      loadNews();
    } catch (err) {
      console.error("Add failed:", err);
    }
  };

  // Update existing news item
  const handleUpdate = async () => {
    if (!isValid(form)) {
      alert("⚠️ Title and Full Content are required.");
      return;
    }

    // 1. Upload new image if a file is selected
    const imageUrl = await handleImageUpload(imageFile);
    if (imageFile && !imageUrl) return; // Stop if upload failed

    // 2. Prepare data for database
    const updatedNews = {
      ...form,
      image: imageUrl || form.image, // Use new URL or keep the existing URL
      slug: editSlug, // keep original slug for update
    };

    try {
      await fetch("/api/news", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedNews),
      });

      resetForm();
      loadNews();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // Delete a news item by slug (kept unchanged)
  const handleDelete = async (slug) => {
    if (!slug) {
      if (!confirm("Delete empty/invalid entries?")) return;
    } else {
      if (!confirm("Are you sure you want to delete this news?")) return;
    }

    try {
      await fetch("/api/news", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      loadNews();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Set form fields to news item values for editing
  const handleEdit = (n) => {
    setForm({
      title: n.title,
      summary: n.summary,
      image: n.image,
      tag: n.tag,
      time: n.time,
      readTime: n.readTime,
      content: n.content || n.description || "",
    });
    setEditSlug(n.slug);
    setImageFile(null); // Clear any selected file when starting an edit
  };

  // Reset form fields to empty
  const resetForm = () => {
    setForm({
      title: "",
      summary: "",
      image: "",
      tag: "",
      time: "",
      readTime: "",
      content: "",
    });
    setEditSlug(null);
    setImageFile(null);
  };

  return (
    <div className="p-4 border rounded mb-8 bg-gray-50">
      <h1 className="text-xl font-bold mb-4">📰 Manage News</h1>

      {/* FORM */}
      <div className="mb-6 grid gap-3">
        {/* Title */}
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title *"
          className="border p-2 w-full rounded"
        />
        {/* Summary */}
        <textarea
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          placeholder="Summary"
          className="border p-2 w-full rounded"
        />
        
        {/* 🔥 IMAGE UPLOAD SECTION */}
        <div className="border p-2 w-full rounded bg-white flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Image File Upload (Replaces Image URL):</label>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full text-sm text-gray-500"
            />
            {isUploading && (
                <p className="text-blue-500 text-sm font-medium">Uploading image... please wait.</p>
            )}

            {/* Display current image path/URL */}
            {form.image && !imageFile && (
                <p className="text-xs text-gray-500 mt-1">Current Image URL: <a href={form.image} target="_blank" className="text-blue-500 hover:underline">{form.image}</a></p>
            )}
            {imageFile && (
                <p className="text-xs text-green-600 mt-1">New file selected: {imageFile.name}</p>
            )}
            {editSlug && !imageFile && !form.image && (
                <p className="text-xs text-red-500 mt-1">No image associated. Select a file to add one.</p>
            )}
        </div>
        {/* END IMAGE UPLOAD SECTION */}

        {/* Other fields */}
        <input
          value={form.tag}
          onChange={(e) => setForm({ ...form, tag: e.target.value })}
          placeholder="Tag"
          className="border p-2 w-full rounded"
        />
        <input
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          placeholder="Time"
          className="border p-2 w-full rounded"
        />
        <input
          value={form.readTime}
          onChange={(e) => setForm({ ...form, readTime: e.target.value })}
          placeholder="Read Time"
          className="border p-2 w-full rounded"
        />
        {/* Full Content */}
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Full Content (HTML allowed) *"
          rows={6}
          className="border p-2 w-full rounded"
        />

        {/* Actions */}
        {editSlug ? (
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              disabled={isUploading}
              className={`text-white px-4 py-2 rounded ${isUploading ? 'bg-green-300 cursor-not-allowed' : 'bg-green-600'}`}
            >
              {isUploading ? 'Uploading & Updating...' : '✅ Update News'}
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              ❌ Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            disabled={isUploading}
            className={`px-4 py-2 rounded w-fit ${isUploading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
          >
            {isUploading ? 'Uploading & Adding...' : '➕ Add News'}
          </button>
        )}
      </div>

      {/* LIST (Kept unchanged) */}
      <div className="max-h-64 overflow-y-auto border rounded p-2 bg-white">
        <ul className="space-y-3">
          {news.map((n) => (
            <li
              key={n.slug || Math.random()}
              className="flex justify-between items-start border p-3 rounded bg-gray-50 shadow-sm"
            >
              <div>
                <strong className="block">{n.title}</strong>
                <p className="text-sm text-gray-600">{n.summary}</p>
                <p className="text-xs text-gray-400">
                  {n.tag} • {n.time} • {n.readTime}
                </p>
                {n.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={n.image} alt="News thumbnail" className="h-10 w-10 object-cover mt-1 rounded"/>
                )}
                {n.content && (
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {n.content.replace(/<[^>]+>/g, "").slice(0, 100)}...
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(n)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(n.slug)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  🗑 Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}