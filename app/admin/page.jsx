"use client";
import { useState, useEffect } from "react";
import News from "./News";
export default function AdminJobs() {
  // 🔑 Simple login state
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Change these values to your own credentials
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  // --------------------------------------
  // 🔽 Your original Job Manager code below
  // --------------------------------------

  const [jobs, setJobs] = useState({});
  const [form, setForm] = useState({
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

  const [deleteId, setDeleteId] = useState(""); // ✅ new state for manual deletion

  // ✅ Allowed countries, cities & domains
  const filterData = {
    UAE: {
      cities: ["Dubai"],
      domains: [
        "Semiconductor", "AI", "IT", "Finance", "Administration",
        "Front Office", "Healthcare", "Education", "Construction",
        "Retail", "Marketing", "Engineering", "Aviation", "Oil & Gas",
      ],
    },
    Germany: {
      cities: ["Berlin"],
      domains: [
        "Sales", "Supply Chain", "Healthcare", "Manufacturing",
        "Automobile", "IT", "Electrical", "HVAC", "Industrial Safety",
        "Business Development",
      ],
    },
    Canada: {
      cities: ["Toronto"],
      domains: [
        "Banking", "Food Services", "Retail", "Operations", "IT",
        "Administration", "Engineering", "Sales", "Marketing",
        "Healthcare", "Construction", "Airlines", "Insurance",
      ],
    },
    Australia: {
      cities: ["Melbourne"],
      domains: [
        "IT & Software Testing", "IT & Software Development",
        "Manufacturing & Engineering", "Automotive", "ICT Sales",
      ],
    },
    Luxembourg: {
      cities: ["Luxembourg City"],
      domains: [
        "IT & Software Development", "Mechanical Engineering",
        "Finance & Banking", "Healthcare", "Sales & Business Development",
        "Electrical Engineering", "Data & Analytics", "HVAC",
      ],
    },
    UK: {
      cities: ["London"],
      domains: [
        "Travel", "Media", "Marketing", "Finance", "Hospitality",
        "Sales", "Education", "E-commerce", "IT",
      ],
    },
    Ireland: {
      cities: ["Dublin"],
      domains: [
        "IT & Software Development", "Healthcare", "Mechanical Engineering",
        "Business & Consulting", "Sales & Marketing", "HVAC",
        "Data & Analytics", "Electrical Engineering", "Digital Marketing",
      ],
    },
    Singapore: {
      cities: ["Singapore"],
      domains: [
        "IT & Software Development", "Biomedical Engineering",
        "Finance & Banking", "Design & User Experience",
        "Logistics & Supply Chain", "Cybersecurity",
        "Urban Development & Planning", "Maritime & Port Management",
        "Artificial Intelligence",
      ],
    },
    Malaysia: {
      cities: ["Kuala Lumpur"],
      domains: [
        "Information Technology", "Finance & Accounting",
        "Marketing & Advertising", "Human Resources", "Data & Analytics",
        "Construction & Engineering", "Customer Service",
        "Creative Design", "Cybersecurity", "Logistics & Supply Chain",
      ],
    },
    "South Africa": {
      cities: ["Johannesburg"],
      domains: [
        "Information Technology", "Mining & Engineering",
        "Finance & Banking", "Healthcare & Nursing", "Energy & Utilities",
        "Marketing & Branding", "Customer Support",
        "Infrastructure & Construction", "Cybersecurity",
        "Logistics & Supply Chain",
      ],
    },
    Denmark: {
      cities: ["Copenhagen"],
      domains: [
        "Information Technology", "Renewable Energy", "Pharmaceuticals",
        "Product Design", "Robotics & Automation", "Shipping & Maritime",
        "Life Sciences", "Supply Chain & Logistics", "Cloud & DevOps",
        "Healthcare Technology",
      ],
    },
  };

  // ✅ Fetch jobs.json (flat array → regroup by country)
  useEffect(() => {
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
  }, []);

  // ✅ Add job
  const addJob = async () => {
    if (!form.country) {
      alert("Please select a country!");
      return;
    }

    const newJob = {
      ...form,
      id: Date.now(), // always number
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

    const saved = await res.json();

    setJobs((prev) => ({
      ...prev,
      [saved.country]: [...(prev[saved.country] || []), saved],
    }));

    setForm({
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
  };

  // ✅ Delete job (country + id)
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

  // ✅ Delete by ID (search job across countries)
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

  // 🚪 If not logged in → show login form
  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-80 space-y-4"
        >
          <h1 className="text-xl font-bold text-center">Admin Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // ✅ After login → show Admin Job Manager
  return (
    <div className="p-4 mt-24 ml-12 mr-8 sm:p-6">
       <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>

    {/* 🔹 NEWS SECTION */}
    <News />

      <h1 className="text-xl font-bold mb-4">Abroad Job Manager Adding-new-jobs</h1>

      {/* Job Form */}
      <div className="mb-6 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Country */}
        <select
          value={form.country}
          onChange={(e) =>
            setForm({ ...form, country: e.target.value, city: "", domain: "" })
          }
          className="border p-2 w-full rounded"
        >
          <option value="">Select Country</option>
          {Object.keys(filterData).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* City */}
        <select
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          disabled={!form.country}
          className="border p-2 w-full rounded"
        >
          <option value="">Select City</option>
          {form.country &&
            filterData[form.country]?.cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>

        {/* Domain */}
        <select
          value={form.domain}
          onChange={(e) => setForm({ ...form, domain: e.target.value })}
          disabled={!form.country}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Domain</option>
          {form.country &&
            filterData[form.country]?.domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
        </select>

        {/* Other fields */}
        {[
          "title",
          "company",
          "location",
          "experience",
          "minExperience",
          "time",
          "tags",
          "salary",
          "type",
          "level",
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
          onClick={addJob}
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-1 sm:col-span-2"
        >
          Add Job
        </button>
      </div>

      {/* ✅ Delete by ID */}
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

      {/* Jobs List grouped by country */}
      {Object.keys(jobs).map((country) => (
        <div key={country} className="mb-6">
          <h2 className="text-lg font-bold mb-2">{country}</h2>
          <ul className="space-y-2">
            {(jobs[country] || []).map((job) => (
              <li
                key={job.id}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center border p-3 rounded"
              >
                <span>
                  {job.title} - {job.company} ({job.id})
                </span>
                <button
                  onClick={() => deleteJob(country, job.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded mt-2 sm:mt-0"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
