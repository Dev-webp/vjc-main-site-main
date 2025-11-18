"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Edit3, Trash2 } from 'lucide-react';

export default function VisaDashboard() {
  const [visas, setVisas] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    slug: "",
    description: "",
    descriptionImage: "",
    descriptionImageWidth: "120",
    descriptionImageHeight: "80",
    descriptionImagePosition: "left",
    info: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    image: "",
    addonHeading: "",
    addonDescription: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetch("/api/visas")
      .then((res) => res.json())
      .then(setVisas);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInfoHtmlFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    setForm({ ...form, info: text });
  };

  const uploadImage = async (file, targetField) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/uploadImage", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        setForm((prev) => ({ ...prev, [targetField]: data.url }));
      } else {
        alert("Image upload failed");
      }
    } catch {
      alert("Image upload error");
    }
  };

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) uploadImage(file, "image");
  };

  const handleDescriptionImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) uploadImage(file, "descriptionImage");
  };

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      slug: "",
      description: "",
      descriptionImage: "",
      descriptionImageWidth: "120",
      descriptionImageHeight: "80",
      descriptionImagePosition: "left",
      info: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      image: "",
      addonHeading: "",
      addonDescription: "",
    });
    setEditingIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingIndex !== null ? "PUT" : "POST";
    await fetch("/api/visas", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const updated = await fetch("/api/visas").then((r) => r.json());
    setVisas(updated);
    resetForm();
  };

  const handleEdit = (index) => {
    const v = visas[index];
    setForm({ ...v });
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const idToDelete = visas[index].id;
    await fetch("/api/visas", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: idToDelete }),
    });
    const updated = await fetch("/api/visas").then((r) => r.json());
    setVisas(updated);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Visa Dashboard</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">Visa Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Visa Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="slug">Slug / Path*</label>
            <input
              type="text"
              name="slug"
              id="slug"
              placeholder="Unique path slug"
              value={form.slug}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-1" htmlFor="metaTitle">Meta Title</label>
            <input
              type="text"
              name="metaTitle"
              id="metaTitle"
              placeholder="Meta Title"
              value={form.metaTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="metaDescription">Meta Description</label>
            <input
              type="text"
              name="metaDescription"
              id="metaDescription"
              placeholder="Meta Description"
              value={form.metaDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="metaKeywords">Meta Keywords</label>
            <input
              type="text"
              name="metaKeywords"
              id="metaKeywords"
              placeholder="e.g. visa, job seeker, work"
              value={form.metaKeywords}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Main Image Upload</label>
          <input type="file" accept="image/*" onChange={handleMainImageUpload} />
          {form.image && (
            <div className="mt-2 w-32 h-20 relative rounded overflow-hidden shadow">
              <Image src={form.image} alt="Main Image" fill style={{ objectFit: "cover" }} unoptimized />
            </div>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Main Heading Description</label>
          <textarea
            name="description"
            placeholder="Short main heading description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Description Image Upload</label>
          <input type="file" accept="image/*" onChange={handleDescriptionImageUpload} />
          {form.descriptionImage && (
            <div className="mt-2 w-32 h-20 relative rounded overflow-hidden shadow">
              <Image src={form.descriptionImage} alt="Description Image" fill style={{ objectFit: "cover" }} unoptimized />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold">Image Width</label>
            <input
              type="number"
              name="descriptionImageWidth"
              value={form.descriptionImageWidth}
              onChange={handleChange}
              className="p-1 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold">Image Height</label>
            <input
              type="number"
              name="descriptionImageHeight"
              value={form.descriptionImageHeight}
              onChange={handleChange}
              className="p-1 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold">Position</label>
            <select
              name="descriptionImagePosition"
              value={form.descriptionImagePosition}
              onChange={handleChange}
              className="p-1 border rounded w-full"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="info">Bottom Info Box Content (HTML allowed)</label>
          <textarea
            id="info"
            name="info"
            placeholder="Additional information"
            value={form.info}
            onChange={handleChange}
            className="w-full p-3 border rounded h-28"
          />
          <input
            type="file"
            accept=".html,.htm,.txt"
            onChange={handleInfoHtmlFileChange}
            className="w-full p-2 border rounded mt-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="addonHeading">Addon Heading (bold)</label>
          <input
            type="text"
            name="addonHeading"
            id="addonHeading"
            placeholder="Addon Heading"
            value={form.addonHeading}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="addonDescription">Addon Description</label>
          <textarea
            id="addonDescription"
            name="addonDescription"
            placeholder="Addon Description Text"
            value={form.addonDescription}
            onChange={handleChange}
            className="w-full p-3 border rounded h-20"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold w-full"
        >
          {editingIndex !== null ? "Update Visa" : "+ Add Visa"}
        </button>
      </form>

      <h2 className="text-xl font-semibold my-6 text-center text-gray-800">All Visas</h2>
      {visas.length === 0 ? (
        <p className="text-center text-gray-500">No visas added yet.</p>
      ) : (
        <div className="overflow-x-auto max-w-8xl mx-auto">
          <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Slug</th>
                <th className="border p-2">Meta Title</th>
                <th className="border p-2">Meta Description</th>
                <th className="border p-2">Meta Keywords</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visas.map((visa, index) => (
                <tr key={visa.id} className="hover:bg-gray-50">
                  <td className="border p-2">{visa.name}</td>
                  <td className="border p-2">/{visa.slug}</td>
                  <td className="border p-2">{visa.metaTitle}</td>
                  <td className="border p-2 max-w-xs truncate">{visa.metaDescription}</td>
                  <td className="border p-2 max-w-xs truncate">{visa.metaKeywords}</td>
                  <td className="border p-2">
                    {visa.image && (
                      <Image
                        src={visa.image}
                        alt={visa.name}
                        width={60}
                        height={40}
                        className="rounded"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    )}
                  </td>
                  <td className="p-2 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="flex items-center justify-center gap-1 w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <Edit3 className="w-4 h-4" />
                        <span className="hidden sm:inline">Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="flex items-center justify-center gap-1 w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
