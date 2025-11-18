/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, useMemo } from "react";


export default function AdminJobs() {
  // ------------------ Job Manager -------------------
  const [jobs, setJobs] = useState({});
  const [form, setForm] = useState({
    id: null,
    title: "",
    company: "",
    location: "",
    country: "",
    city: "",
    domain: "",
    experience: "",
    minExperience: "",
    time: "",
    tags: "",
    salary: "",
    type: "",
    level: "",
  });
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState(null);

  const filterData = useMemo(() => ({
    // ... keep filterData identical from your original code ...
    UAE: {
      cities: ["Dubai"],
      domains: [
        "Semiconductor", "AI", "IT", "Finance", "Administration",
        "Front Office", "Healthcare", "Education", "Construction",
        "Retail", "Marketing", "Engineering", "Aviation", "Oil & Gas",
      ],
    },
    // ... rest of filterData ...
  }), []);

  const loadJobs = () => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        const grouped = {};
        Object.keys(filterData).forEach((c) => {
          grouped[c] = data.filter((job) => job.country === c);
        });
        setJobs(grouped);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const addJob = async () => {
    if (!form.country) {
      alert("Please select a country!");
      return;
    }

    const newJob = {
      ...form,
      id: Date.now(),
      minExperience: Number(form.minExperience),
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()) : [],
    };

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      console.error("Error saving job", await res.text());
      return;
    }

    await loadJobs();
    resetForm();
  };

  const updateJob = async () => {
    const updatedJob = {
      ...form,
      id: Number(editId),
      minExperience: Number(form.minExperience),
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()) : [],
    };

    const res = await fetch("/api/jobs", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    });

    if (!res.ok) {
      console.error("Error updating job", await res.text());
      return;
    }

    await loadJobs();
    resetForm();
  };

  const deleteJob = async (country, id) => {
    const idNum = Number(id);
    await fetch("/api/jobs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: idNum, country }),
    });
    setJobs((prev) => ({
      ...prev,
      [country]: (prev[country] || []).filter((job) => Number(job.id) !== idNum),
    }));
  };

  const deleteById = async () => {
    const idNum = Number(deleteId);
    if (!idNum) {
      alert("Please enter a valid Job ID");
      return;
    }

    let foundCountry = null;
    Object.keys(jobs).forEach((country) => {
      if ((jobs[country] || []).some((job) => Number(job.id) === idNum)) {
        foundCountry = country;
      }
    });

    if (!foundCountry) {
      alert("No job found with this ID!");
      return;
    }

    await deleteJob(foundCountry, idNum);
    setDeleteId("");
    alert(`Deleted job ${idNum} from ${foundCountry}`);
  };

  const startEdit = (job) => {
    setForm({
      ...job,
      tags: job.tags ? job.tags.join(", ") : "",
    });
    setEditId(job.id);
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      company: "",
      location: "",
      country: "",
      city: "",
      domain: "",
      experience: "",
      minExperience: "",
      time: "",
      tags: "",
      salary: "",
      type: "",
      level: "",
    });
    setEditId(null);
  };

  // Admin dashboard with News and Jobseeker components included
  return (
    <div className="p-4 ml-12 mr-8 sm:p-6">
     
    
      <h1 className="text-xl font-bold mb-4">Abroad Job Manager</h1>

      {/* Job Form */}
      <div className="mb-6 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select
          value={form.country}
          onChange={(e) =>
            setForm({ ...form, country: e.target.value, city: "", domain: "" })
          }
          className="border p-2 w-full rounded"
        >
          <option value="">Select Country</option>
          {Object.keys(filterData).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          disabled={!form.country}
          className="border p-2 w-full rounded"
        >
          <option value="">Select City</option>
          {form.country &&
            filterData[form.country]?.cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
        </select>

        <select
          value={form.domain}
          onChange={(e) => setForm({ ...form, domain: e.target.value })}
          disabled={!form.country}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Domain</option>
          {form.country &&
            filterData[form.country]?.domains.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
        </select>

        {[
          "title", "company", "location", "experience", "minExperience",
          "time", "tags", "salary", "type", "level"
        ].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="border p-2 w-full rounded"
          />
        ))}

        <button
          onClick={editId ? updateJob : addJob}
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-1 sm:col-span-2"
        >
          {editId ? "Update Job" : "Add Job"}
        </button>

        {editId && (
          <button
            onClick={resetForm}
            className="bg-gray-500 text-white px-4 py-2 rounded col-span-1 sm:col-span-2"
          >
            Cancel Edit
          </button>
        )}
      </div>

      <div className="mb-8 flex flex-col sm:flex-row gap-2 sm:items-center">
        <input
          type="text"
          placeholder="Enter Job ID to Delete"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <button
          onClick={deleteById}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete by ID
        </button>
      </div>

      {Object.keys(jobs).map((country) => (
        <div key={country} className="mb-6">
          <h2 className="text-lg font-bold mb-2">{country}</h2>
          <div className="max-h-[18rem] overflow-y-auto border rounded p-2 bg-white">
            <ul className="space-y-2">
              {(jobs[country] || []).map((job) => (
                <li
                  key={job.id}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center border p-3 rounded"
                >
                  <span className="truncate">
                    {job.title} - {job.company} ({job.id})
                  </span>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button
                      onClick={() => startEdit(job)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteJob(country, job.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
