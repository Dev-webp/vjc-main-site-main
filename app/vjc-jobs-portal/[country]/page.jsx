"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Filter } from "lucide-react";
import dummyJobs from "./jobData"; // ✅ external job data

// 💡 Country-based card styles
const countryStyles = {
  UAE: { cardBg: "bg-white", titleColor: "text-blue-700", tagColor: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  Germany: { cardBg: "bg-blue-50", titleColor: "text-blue-900", tagColor: "bg-blue-100 text-blue-700 border-blue-300" },
  Canada: { cardBg: "bg-red-50", titleColor: "text-red-800", tagColor: "bg-red-100 text-red-700 border-red-300" },
  Australia: { cardBg: "bg-green-50", titleColor: "text-green-800", tagColor: "bg-green-100 text-green-700 border-green-300" },
  Luxembourg: { cardBg: "bg-purple-50", titleColor: "text-purple-800", tagColor: "bg-purple-100 text-purple-700 border-purple-300" },
  UK: { cardBg: "bg-gray-50", titleColor: "text-gray-800", tagColor: "bg-gray-100 text-gray-700 border-gray-300" },
  Ireland: { cardBg: "bg-pink-50", titleColor: "text-pink-800", tagColor: "bg-pink-100 text-pink-700 border-pink-300" },
  Singapore: { cardBg: "bg-emerald-50", titleColor: "text-emerald-800", tagColor: "bg-emerald-100 text-emerald-700 border-emerald-300" },
  Malaysia: { cardBg: "bg-orange-50", titleColor: "text-orange-800", tagColor: "bg-orange-100 text-orange-700 border-orange-300" },
  SouthAfrica: { cardBg: "bg-yellow-50", titleColor: "text-yellow-800", tagColor: "bg-yellow-100 text-yellow-700 border-yellow-300" },
  Denmark: { cardBg: "bg-indigo-50", titleColor: "text-indigo-800", tagColor: "bg-indigo-100 text-indigo-700 border-indigo-300" },
};

const filterData = {
  UAE: { cities: ["Dubai", "Abu Dhabi"], domains: ["CRM", "Education", "IT"] },
  Germany: { cities: ["Berlin", "Hamburg"], domains: ["IT", "Engineering"] },
  Canada: { cities: ["Toronto", "Vancouver"], domains: ["Marketing", "Finance"] },
  Australia: { cities: ["Sydney", "Melbourne"], domains: ["Design", "IT"] },
  Luxembourg: { cities: ["Luxembourg City"], domains: ["Banking", "IT"] },
  UK: { cities: ["London", "Manchester"], domains: ["Healthcare", "Education"] },
  Ireland: { cities: ["Dublin", "Cork"], domains: ["Tech", "Finance"] },
  Singapore: { cities: ["Singapore"], domains: ["Finance", "Education"] },
  Malaysia: { cities: ["Kuala Lumpur", "Penang"], domains: ["Manufacturing", "IT"] },
  SouthAfrica: { cities: ["Cape Town", "Johannesburg"], domains: ["Mining", "IT"] },
  Denmark: { cities: ["Copenhagen", "Aarhus"], domains: ["Pharma", "IT"] },
};

const experienceOptions = ["Fresher", "Experienced"];

const JobCard = ({ job, styles }) => {
  const handleApply = async () => {
    const user = JSON.parse(localStorage.getItem("vjcUser"));
    const resume = localStorage.getItem(`resume_uploaded_${user.email}`);
    const profile = JSON.parse(localStorage.getItem(`resume_data_${user.email}`));

    if (!resume || !profile) {
      alert("Please complete your profile.");
      return;
    }

    const applicationData = {
      type: "job-application",
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      selectedJob: profile.selectedJob,
      experience: profile.experience,
      country: profile.country,
      skills: profile.skills,
      message: profile.message,
     
      appliedJob: {
        title: job.title,
        company: job.company,
        location: job.location,
        domain: job.domain,
      },
      portalUrl: `https://vjcoverseas.com/vjc-jobs-portal/${profile.country.toLowerCase()}`,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Application submitted! Check your email.");
    } else {
      alert("Failed to send application email.");
      console.error(result);
    }
  };

  return (
    <div className={`w-full md:w-[95%] lg:w-[90%] mx-auto p-4 rounded-xl shadow-sm mb-4 border transition-all duration-300 hover:shadow-md ${styles.cardBg}`}>
      <div className="flex justify-between items-center flex-wrap">
        <h3 className={`${styles.titleColor} font-semibold text-lg mb-1`}>{job.title}</h3>
        <button
          onClick={handleApply}
          className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg mt-2 md:mt-0"
        >
          Apply Now
        </button>
      </div>
      <p className="text-sm text-gray-700 mb-1">
        {job.company} - {job.location}
      </p>
      <span className="text-xs text-green-600 font-medium">{job.time}</span>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        {job.tags.map((tag, i) => (
          <span key={i} className={`px-2 py-1 rounded-full border ${styles.tagColor}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const CountryJobsPage = () => {
  const { country } = useParams();
  const router = useRouter();

  const [selectedCountry, setSelectedCountry] = useState(country?.replace(/-/g, " ") || "");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (country) {
      const name = country.replace(/-/g, " ");
      const matchedCountry = Object.keys(filterData).find(
        (c) => c.toLowerCase() === name.toLowerCase().replace(/\s/g, "")
      );
      setSelectedCountry(matchedCountry || "");
    }
  }, [country]);

  const filteredJobs = dummyJobs.filter((job) => {
    return (
      job.country === selectedCountry &&
      (!selectedCity || job.city === selectedCity) &&
      (!selectedDomain || job.domain === selectedDomain) &&
      (!selectedExperience || job.experience === selectedExperience)
    );
  });

  const availableCities = filterData[selectedCountry]?.cities || [];
  const availableDomains = filterData[selectedCountry]?.domains || [];

  return (
    <div className="min-h-screen lg:ml-12  bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-800 capitalize">
          Jobs in {selectedCountry || "Select Country"}
        </h1>
        <button
          className="lg:hidden flex items-center gap-1 text-blue-700 text-sm"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} /> Filters
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className={`lg:col-span-1 bg-white rounded-xl shadow-md p-4 space-y-4 ${showFilters ? "block" : "hidden lg:block"}`}>
          <h2 className="text-lg font-semibold flex justify-between items-center">
            Filters
            <button
              className="lg:hidden text-blue-700"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
            </button>
          </h2>

          <div>
            <label className="block font-medium text-sm mb-1">Country</label>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {Object.keys(filterData).map((c) => (
                <div key={c} className="flex items-center">
                  <input
                    type="radio"
                    name="country"
                    id={`country-${c}`}
                    checked={selectedCountry === c}
                    onChange={() => setSelectedCountry(c)}
                    className="mr-2"
                  />
                  <label htmlFor={`country-${c}`} className="text-sm">
                    {c}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {availableCities.length > 0 && (
            <div>
              <label className="block font-medium text-sm mb-1">City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full border rounded px-2 py-1 text-sm"
              >
                <option value="">All Cities</option>
                {availableCities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          )}

          {availableDomains.length > 0 && (
            <div>
              <label className="block font-medium text-sm mb-1">Domain</label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full border rounded px-2 py-1 text-sm"
              >
                <option value="">All Domains</option>
                {availableDomains.map((domain) => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block font-medium text-sm mb-1">Experience</label>
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="w-full border rounded px-2 py-1 text-sm"
            >
              <option value="">All</option>
              {experienceOptions.map((exp) => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>
          </div>
        </aside>

        <section className="lg:col-span-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, i) => (
              <JobCard
                key={i}
                job={job}
                styles={countryStyles[job.country] || countryStyles["UAE"]}
              />
            ))
          ) : (
            <p className="text-gray-600 text-center">
              No jobs found with current filters.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default CountryJobsPage;