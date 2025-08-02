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
      portalUrl: `https://vjcoverseas.com/vjc-jobs-portal/${profile.country.toLowerCase()}`,
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
      setShowLoginModal(true); // 🔑 Show login modal
      return;
    }

    if (!resume) {
      sessionStorage.setItem("resume_submitted_for", jobKey);
      router.push("/vjc-jobs-portal/profile");
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
            // After login, re-run handleApply
            setTimeout(() => handleApply(), 300);
          }}
        />
      )}

      <div
        className={`p-4 rounded-xl shadow-sm mb-4 border transition-all duration-300 hover:shadow-md ${styles.cardBg}`}
      >
        <div className="flex justify-between items-center flex-wrap">
          <h3 className={`${styles.titleColor} font-semibold text-lg mb-1`}>
            {job.title}
          </h3>
          <button
            onClick={handleApply}
            className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg mt-2 md:mt-0"
            disabled={alreadyApplied}
          >
            {alreadyApplied ? "Applied ✅" : "Apply Now"}
          </button>
        </div>
        <p className="text-sm text-gray-700 mb-1">
          {job.company} - {job.location}
        </p>
        <span className="text-xs text-green-600 font-medium">{job.time}</span>
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {Array.isArray(job.tags) &&
            job.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2 py-1 rounded-full border ${styles.tagColor}`}
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </>
  );
};

export default JobCard;
