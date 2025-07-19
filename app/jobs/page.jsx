'use client';

import { useState } from 'react';
import JobCard from './components/JobCard';

const availableJobs = [
  {
    id: 1,
    title: "Student Counselor",
    type: "Full-time",
    location: "Bangalore",
    description: "Provide guidance to students for overseas education opportunities",
    skills: ["Counseling", "Education", "Communication"],
    salary: "₹35,000 - ₹45,000"
  },
  {
    id: 2,
    title: "Immigration Counselor",
    type: "Full-time",
    location: "Bangalore",
    description: "Assist clients with visa and immigration processes",
    skills: ["Visa Processing", "Documentation", "Legal Knowledge"],
    salary: "₹40,000 - ₹50,000"
  },
  {
    id: 3,
    title: "Branch Manager",
    type: "Full-time",
    location: "Bangalore",
    description: "Oversee operations of our Bangalore branch",
    skills: ["Management", "Leadership", "Sales"],
    salary: "₹60,000 - ₹75,000"
  }
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const filteredJobs = availableJobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = location === '' || job.location.toLowerCase() === location.toLowerCase();
    return titleMatch && locationMatch;
  });

  return (
    <div className="min-h-screen mt-12 bg-gray-50">
      {/* 🔵 Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center px-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Career Opportunity</h1>
          <p className="text-lg md:text-xl mb-8">Explore exciting roles and grow with us</p>

          {/* 🔍 Search Bar (Fully responsive, stacked layout) */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4 bg-gray-100 p-4 md:p-6 rounded-xl shadow-md max-w-4xl mx-auto">
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full md:flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="w-full md:flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-black"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="USA">USA</option>
              </select>
              <button
                className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-orange-500"
                onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
              >
                Find Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🧑‍💼 Job Listings */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Current Openings</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {availableJobs.map(job => (
              <span key={job.id} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {job.title}
              </span>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        {filteredJobs.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-20">
            <h3 className="text-xl font-semibold mb-2">😔 No jobs found</h3>
            <p>Try a different keyword or location.</p>
          </div>
        )}
      </div>
    </div>
  );
}
