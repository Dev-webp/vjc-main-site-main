"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Edit3, Trash2, ChevronDown, ChevronRight } from 'lucide-react';

export default function VisaDashboard() {
  const [visas, setVisas] = useState([]);
  const [parentSlugs, setParentSlugs] = useState([]);
  const [form, setForm] = useState({
    id: null,
    parentSlug: "",
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
  const [expandedParents, setExpandedParents] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchVisas();
    fetchParentSlugs();
  }, []);

  const fetchVisas = async () => {
    try {
      const res = await fetch("/api/migrate");
      const data = await res.json();
      setVisas(data);
    } catch (err) {
      console.error('Fetch visas error:', err);
    }
  };

  const fetchParentSlugs = async () => {
    try {
      const res = await fetch("/api/migrate/parents");
      const data = await res.json();
      setParentSlugs(data);
    } catch (err) {
      console.error('Fetch parents error:', err);
    }
  };

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
      parentSlug: "",
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
    setLoading(true);
    
    console.log('📤 SENDING FORM:', JSON.stringify(form, null, 2));
    
    const method = editingIndex !== null ? "PUT" : "POST";
    
    try {
      const response = await fetch("/api/migrate", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: form.id,
          parentSlug: form.parentSlug || null,
          name: form.name,
          slug: form.slug,
          description: form.description,
          descriptionImage: form.descriptionImage,
          descriptionImageWidth: form.descriptionImageWidth,
          descriptionImageHeight: form.descriptionImageHeight,
          descriptionImagePosition: form.descriptionImagePosition,
          info: form.info,
          metaTitle: form.metaTitle,
          metaDescription: form.metaDescription,
          metaKeywords: form.metaKeywords,
          image: form.image,
          addonHeading: form.addonHeading || "",
          addonDescription: form.addonDescription || ""
        })
      });
      
      const text = await response.text();
      console.log('📥 RESPONSE:', response.status, text);
      
      if (response.ok) {
        await fetchVisas();
        await fetchParentSlugs();
        resetForm();
        alert('✅ Success! ' + (method === 'POST' ? 'Added' : 'Updated'));
      } else {
        alert(`❌ Error ${response.status}: ${text}`);
      }
    } catch (err) {
      console.error('❌ FETCH ERROR:', err);
      alert('❌ Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (visaId) => {
    const visa = visas.find(v => v.id === visaId);
    if (visa) {
      setForm({ ...visa });
      setEditingIndex(visas.findIndex(v => v.id === visaId));
    }
  };

  const handleDelete = async (visaId) => {
    if (!confirm('Delete this visa?')) return;
    
    try {
      const response = await fetch("/api/migrate", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: visaId }),
      });
      
      if (response.ok) {
        await fetchVisas();
        await fetchParentSlugs();
      } else {
        alert('Delete failed');
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const toggleParent = (parentSlug) => {
    setExpandedParents(prev => ({
      ...prev,
      [parentSlug]: !prev[parentSlug]
    }));
  };

  const getChildVisas = (parentSlug) => {
    return visas.filter(visa => visa.parentSlug === parentSlug);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1" htmlFor="parentSlug">Parent Slug*</label>
            <select
              name="parentSlug"
              id="parentSlug"
              value={form.parentSlug}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              disabled={loading}
            >
              <option value="">Select Parent (migrate/*)</option>
              {parentSlugs.map((parent) => (
                <option key={parent.id} value={parent.slug}>
                  /{parent.slug}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">Child Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Child Visa Name (e.g. Germany OPP)"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1" htmlFor="slug">Child Slug*</label>
            <input
              type="text"
              name="slug"
              id="slug"
              placeholder="Child slug (e.g. germany-opp)"
              value={form.slug}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="fullPath">Full Path (Preview)</label>
            <input
              type="text"
              value={form.parentSlug ? `/migrate/${form.parentSlug}/${form.slug}` : ''}
              className="w-full p-2 border rounded bg-gray-100"
              readOnly
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Main Image Upload</label>
          <input type="file" accept="image/*" onChange={handleMainImageUpload} disabled={loading} />
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
            disabled={loading}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Description Image Upload</label>
          <input type="file" accept="image/*" onChange={handleDescriptionImageUpload} disabled={loading} />
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold">Position</label>
            <select
              name="descriptionImagePosition"
              value={form.descriptionImagePosition}
              onChange={handleChange}
              className="p-1 border rounded w-full"
              disabled={loading}
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
            disabled={loading}
          />
          <input
            type="file"
            accept=".html,.htm,.txt"
            onChange={handleInfoHtmlFileChange}
            className="w-full p-2 border rounded mt-2"
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading || !form.name || !form.slug}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded font-semibold w-full disabled:cursor-not-allowed"
        >
          {loading ? "⏳ Saving..." : (editingIndex !== null ? "Update Child Visa" : "+ Add Child Visa")}
        </button>
      </form>

      <h2 className="text-xl font-semibold my-6 text-center text-gray-800">Visa Hierarchy</h2>
      {visas.length === 0 ? (
        <p className="text-center text-gray-500">No visas added yet.</p>
      ) : (
        <div className="space-y-4">
          {parentSlugs.map((parent) => {
            const children = getChildVisas(parent.slug);
            return (
              <div key={parent.id} className="bg-gray-50 rounded-lg p-4 border">
                <div
                  className="flex items-center justify-between cursor-pointer mb-3"
                  onClick={() => toggleParent(parent.slug)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    /{parent.slug} ({children.length} children)
                  </h3>
                  {expandedParents[parent.slug] ? (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                
                {expandedParents[parent.slug] && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border p-2">Child Name</th>
                          <th className="border p-2">Full Path</th>
                          <th className="border p-2">Meta Title</th>
                          <th className="border p-2">Image</th>
                          <th className="border p-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {children.map((visa) => (
                          <tr key={visa.id} className="hover:bg-gray-50">
                            <td className="border p-2 font-medium">{visa.name}</td>
                            <td className="border p-2">/migrate/{visa.parentSlug}/{visa.slug}</td>
                            <td className="border p-2 max-w-xs truncate">{visa.metaTitle}</td>
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
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleEdit(visa.id)}
                                  className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                  <Edit3 className="w-4 h-4" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => handleDelete(visa.id)}
                                  className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  <span>Delete</span>
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
          })}
        </div>
      )}
    </div>
  );
}
