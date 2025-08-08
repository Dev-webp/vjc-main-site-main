"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import LoginModal to avoid server-side issues
const LoginModal = dynamic(() => import("./LoginModal"), { ssr: false });

const JobCard = ({ job, styles, showSuccess }) => {
  const router = useRouter();
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);

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
          {/* 🔹 Job Title - now clickable */}
          <h3
            onClick={handleApply}
            className={`${styles.titleColor} font-semibold text-lg mb-1 cursor-pointer text-orange-500 hover:underline hover:text-blue-400 transition-colors`}
            title="Click to apply"
          >
            {job.title}
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
          {job.company} - {job.location}
        </p>

        <p className="text-xs text-gray-600 italic mb-2">
          Domain: {job.domain}
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

        {/* 🔽 Job Description (6-8 lines) */}
        <div className="mt-4 text-sm text-gray-800 leading-relaxed">
          <p>
            Join <strong>{job.company}</strong> as a <strong>{job.title}</strong> in{" "}
            <strong>{job.location}, {job.country}</strong>. We’re looking for someone with at least{" "}
            <strong>{job.minExperience}+ years</strong> of experience in{" "}
            <strong>{job.domain}</strong>.
          </p>
          <p>
            Your responsibilities will include managing inventory, optimizing freight logistics,
            and collaborating with distribution and procurement teams to ensure seamless operations.
          </p>
          <p>
            You’ll work closely with cross-functional stakeholders and report directly to senior
            leadership to drive results in a fast-paced environment.
          </p>
          <p>
            Ideal candidates have strong analytical skills, a proactive mindset, and hands-on
            experience with supply chain software tools.
          </p>
        </div>
      </div>
    </>
  );
};

export default JobCard;
