"use client";
import { useEffect, useState } from "react";
import slugify from "@/app/latest-news/slugify";
import Image from "next/image";

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    image: "", // Base64 Data URI
    tag: "",
    time: "",
    readTime: "",
    content: "",
  });
  const [editSlug, setEditSlug] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    // Revoke imageFile URL when imageFile changes or component unmounts
    return () => {
      if (imageFile) URL.revokeObjectURL(imageFile.preview);
    };
  }, [imageFile]);

  // Load news list
  const loadNews = async () => {
    try {
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error("Failed to fetch news");
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
      setStatusMessage("❌ Failed to load news.");
    }
  };

  // Upload image and return Base64 URI
  const handleImageUpload = async (file) => {
    if (!file) return form.image;

    setIsUploading(true);
    setStatusMessage("Uploading image...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        // Try reading error message or fallback
        const text = await res.text();
        // If server returns HTML error page, text starts with '<'
        const errorMessage =
          text.startsWith("<")
            ? "Image upload server error."
            : JSON.parse(text).error || "Image upload failed.";
        throw new Error(errorMessage);
      }

      const data = await res.json();
      setIsUploading(false);
      setStatusMessage("");
      return data.url; // Base64 Data URI string
    } catch (err) {
      console.error("Image upload error:", err);
      setIsUploading(false);
      setStatusMessage(`❌ Image upload failed: ${err.message}`);
      return null;
    }
  };

  // Validate required fields in form
  const isValid = (obj) => obj.title?.trim() && obj.content?.trim();

  // Show messages inline for 5 seconds
  const showMessage = (message) => {
    setStatusMessage(message);
    setTimeout(() => setStatusMessage(""), 5000);
  };

  // Add news article handler
  const handleAdd = async () => {
    if (!isValid(form)) {
      showMessage("⚠️ Title and Full Content are required.");
      return;
    }

    const imageUrl = await handleImageUpload(imageFile);
    if (imageFile && !imageUrl) return; // Abort if upload failed

    const newNews = {
      ...form,
      image: imageUrl || form.image,
      slug: slugify(form.title),
    };

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNews),
      });
      if (!res.ok) throw new Error("Failed to add news");

      resetForm();
      loadNews();
      showMessage("✅ News added successfully!");
    } catch (err) {
      console.error("Add failed:", err);
      showMessage("❌ Failed to add news.");
    }
  };

  // Update existing news article
  const handleUpdate = async () => {
    if (!isValid(form)) {
      showMessage("⚠️ Title and Full Content are required.");
      return;
    }

    const imageUrl = await handleImageUpload(imageFile);
    if (imageFile && !imageUrl) return; 

    const updatedNews = {
      ...form,
      image: imageUrl || form.image,
      slug: editSlug,
    };

    try {
      const res = await fetch("/api/news", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedNews),
      });
      if (!res.ok) throw new Error("Failed to update news");

      resetForm();
      loadNews();
      showMessage("✅ News updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      showMessage("❌ Failed to update news.");
    }
  };

  // Delete by slug with prompt confirmation
  const handleDelete = async (slug) => {
    const isConfirmed = window.prompt(`Type 'DELETE' to confirm deletion of news item with slug: ${slug}`);
    if (isConfirmed !== "DELETE") return;

    try {
      const res = await fetch("/api/news", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      if (!res.ok) throw new Error("Failed to delete news");

      loadNews();
      showMessage("🗑 News deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err);
      showMessage("❌ Failed to delete news.");
    }
  };

  // Edit news: fills form
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
    setImageFile(null);
  };

  // Reset form
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
    <div className="p-4 border rounded mb-8 bg-gray-50 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">📰 News Management Dashboard</h1>

      {/* Status message */}
      <div className="text-center font-medium my-3 h-6 text-red-600">{statusMessage}</div>

      {/* Form container */}
      <div className="p-6 bg-white rounded-xl shadow-lg mb-6 grid gap-4 border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-600">{editSlug ? `Editing: ${editSlug}` : "Add New News Article"}</h2>

        {/* Title */}
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title *"
          className="border border-gray-300 p-3 w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
        />
        {/* Summary */}
        <textarea
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          placeholder="Summary"
          rows={2}
          className="border border-gray-300 p-3 w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
        />

        {/* Image upload */}
        <div className="border border-dashed border-gray-400 p-4 w-full rounded-lg bg-gray-50 flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Image File Upload:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                // Create a preview URL for revoking later
                file.preview = URL.createObjectURL(file);
                setImageFile(file);
              }
            }}
            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            disabled={isUploading}
          />

          <div className="flex items-center gap-4 mt-2">
            {isUploading && <p className="text-blue-500 text-sm font-medium animate-pulse">Processing image into database...</p>}

            {(form.image || imageFile) && (
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src={imageFile ? imageFile.preview : form.image}
                  alt="News Preview"
                  fill
                  className="object-cover rounded-md shadow-md border border-gray-300"
                  unoptimized
                  onLoad={() => {
                    if (imageFile) URL.revokeObjectURL(imageFile.preview);
                  }}
                />
              </div>
            )}
            {imageFile && <p className="text-xs text-green-600">New file selected: {imageFile.name}</p>}
          </div>
        </div>

        {/* Metadata fields */}
        <div className="grid grid-cols-3 gap-3">
          <input
            value={form.tag}
            onChange={(e) => setForm({ ...form, tag: e.target.value })}
            placeholder="Tag (e.g., Visa)"
            className="border p-3 rounded-lg"
          />
          <input
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            placeholder="Time (e.g., 5 min ago)"
            className="border p-3 rounded-lg"
          />
          <input
            value={form.readTime}
            onChange={(e) => setForm({ ...form, readTime: e.target.value })}
            placeholder="Read Time (e.g., 3 min read)"
            className="border p-3 rounded-lg"
          />
        </div>

        {/* Full Content */}
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Full Content (HTML allowed) *"
          rows={8}
          className="border border-gray-300 p-3 w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 transition font-mono text-sm"
        />

        {/* Actions */}
        {editSlug ? (
          <div className="flex gap-3 justify-end">
            <button
              onClick={handleUpdate}
              disabled={isUploading}
              className={`font-semibold px-6 py-3 rounded-full shadow-md transition ${
                isUploading ? "bg-green-300 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              {isUploading ? "Uploading & Updating..." : "✅ Update News"}
            </button>
            <button
              onClick={resetForm}
              className="font-semibold bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-full shadow-md transition"
            >
              ❌ Cancel Edit
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            disabled={isUploading}
            className={`font-semibold px-6 py-3 rounded-full w-fit ml-auto shadow-md transition ${
              isUploading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isUploading ? "Processing & Adding..." : "➕ Add News Article"}
          </button>
        )}
      </div>

      {/* List of articles */}
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2 mt-8">
        Existing Articles ({news.length})
      </h2>
      <div className="max-h-96 overflow-y-auto border rounded-xl p-4 bg-white shadow-inner">
        <ul className="space-y-4">
          {news.map((n) => (
            <li
              key={n.slug || Math.random()}
              className="flex justify-between items-center border border-gray-200 p-4 rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {n.image && (
                  <div className="relative h-12 w-16 flex-shrink-0">
                    <Image
                      src={n.image}
                      alt="News thumbnail"
                      fill
                      className="object-cover rounded border border-gray-300"
                      unoptimized
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <strong className="block text-blue-700 truncate">{n.title}</strong>
                  <p className="text-xs text-gray-500 truncate">{n.summary}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {n.tag} • {n.time} • {n.readTime}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => handleEdit(n)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full text-sm transition shadow"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(n.slug)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm transition shadow"
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
