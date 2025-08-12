"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("./LoginModal"), { ssr: false });

const JobCard = ({ job, styles, showSuccess }) => {
  const router = useRouter();
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const jobKey = `${job.title}_${job.company}`.replace(/\s+/g, "_");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("vjcUser"));
    setUser(storedUser);

    const returningJobKey = sessionStorage.getItem("resume_submitted_for");
    if (returningJobKey === jobKey) {
      applyForJob();
      sessionStorage.removeItem("resume_submitted_for");
    }
  }, []);

  const applyForJob = async () => {
    const user = JSON.parse(localStorage.getItem("vjcUser"));
    const resume = localStorage.getItem(`resume_uploaded_${user?.email}`);
    const profile = JSON.parse(localStorage.getItem(`resume_data_${user?.email}`));

    if (!resume || !profile) {
      alert("Please complete your profile first.");
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
      portalUrl: `https://vjcoverseas.com/abroad-jobs-work-permit.com/${profile.country.toLowerCase()}`,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    });

    if (res.ok) {
      setAlreadyApplied(true);
      showSuccess?.();
    } else {
      alert("Failed to apply for job.");
    }
  };

  const handleApply = () => {
    const storedUser = JSON.parse(localStorage.getItem("vjcUser"));
    const resume = localStorage.getItem(`resume_uploaded_${storedUser?.email}`);

    if (!storedUser) {
      setShowLoginModal(true);
      return;
    }

    if (!resume) {
      sessionStorage.setItem("resume_submitted_for", jobKey);
      router.push("/abroad-jobs-work-permit.com/profile");
    } else {
      applyForJob();
    }
  };

  const fullDescription = `
Join **${job.company}** as a **${job.title}** in **${job.location}**, **${job.country}**. We’re looking for someone with at least **${job.minExperience}+ years** of experience in **${job.domain}**.
Your responsibilities will include managing inventory, optimizing freight logistics, collaborating with procurement teams, and ensuring seamless operations.

**Key Responsibilities:**
- Oversee daily supply chain operations to meet company goals.
- Optimize distribution and delivery schedules to improve efficiency.
- Maintain accurate inventory records and manage stock levels.
- Liaise with vendors, suppliers, and customers to ensure timely deliveries.
- Implement and monitor KPIs to evaluate performance.
- Manage budgets, costs, and resource allocation.
- Ensure compliance with all import/export regulations and company policies.
- Lead cross-functional teams to deliver supply chain improvements.
- Work with technology teams to improve ERP & supply chain tools.
- Identify and mitigate supply chain risks.

**Required Skills:**
- Strong problem-solving and analytical skills.
- Proficiency in supply chain software (SAP, Oracle, etc.).
- Excellent communication and negotiation abilities.
- Ability to manage multiple priorities in a fast-paced environment.
- Leadership skills with experience managing teams.

**Preferred Qualifications:**
- Bachelor's degree in Supply Chain Management or related field.
- Certification in logistics or operations management (APICS, CSCP, etc.).
- Experience in international logistics and customs clearance.

**Additional Perks:**
- Competitive salary and performance-based bonuses.
- Health insurance and retirement benefits.
- Opportunities for career growth and professional development.
- A collaborative, dynamic, and diverse work culture.

If you are ready to take on this challenging yet rewarding role, apply today via **[vjcoverseas.com](https://vjcoverseas.com)** and become part of a forward-thinking organization driving change in the industry.
`;

  const formatDescription = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold headings & keywords
      .replace(/\b(\d+\+?\s?years?)\b/gi, "<strong>$1</strong>") // bold years of experience
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        `<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-orange-500">$1</a>`
      );
  };

  const descriptionToShow = expanded
    ? fullDescription
    : fullDescription.split("\n").slice(0, 3).join("\n");

  return (
    <>
      {showLoginModal && (
        <LoginModal
          setUser={(userData) => {
            setUser(userData);
            setShowLoginModal(false);
          }}
          setShowLoginModal={setShowLoginModal}
          onSuccess={() => {
            setShowLoginModal(false);
            setTimeout(() => handleApply(), 300);
          }}
        />
      )}

      <div
        className={`p-4 rounded-xl shadow-sm mb-4 border transition-all duration-300 hover:shadow-md ${styles.cardBg}`}
      >
        <div className="flex justify-between items-center flex-wrap">
          <h3
            onClick={handleApply}
            className={`${styles.titleColor} font-semibold text-lg mb-1 cursor-pointer text-orange-600 hover:underline hover:text-blue-500 transition-colors`}
            title="Click to apply"
          >
            <strong>{job.title}</strong>
          </h3>

          <button
            onClick={handleApply}
            className="px-4 py-1 bg-blue-600 hover:bg-orange-500 text-white text-xs font-semibold rounded-lg mt-2 md:mt-0"
            disabled={alreadyApplied}
          >
            {alreadyApplied ? "Applied ✅" : "Apply Now"}
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-1">
          <strong>{job.company}</strong> - <strong>{job.location}</strong>
        </p>

        <p className="text-xs text-gray-600 italic mb-2">
          Domain: <strong>{job.domain}</strong>
        </p>

        <span className="text-xs text-green-600 font-medium">{job.time}</span>

        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {Array.isArray(job.tags) &&
            job.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full border text-orange-500 border-orange-500 hover:text-blue-400 hover:border-blue-400 transition-colors"
              >
                {tag}
              </span>
            ))}
        </div>

        <div
          className="mt-4 text-sm text-gray-800 leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: formatDescription(descriptionToShow) }}
        />

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-blue-600 hover:text-orange-500 text-xs underline"
        >
          {expanded ? "Show Less" : "Know More"}
        </button>
      </div>
    </>
  );
};

export default JobCard;
