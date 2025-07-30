"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const JobSteps = () => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({ step1: false, step2: false });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("vjcUser"));
    if (storedUser) {
      setUser(storedUser);
      setProgress({
        step1: true,
        step2: localStorage.getItem(`resume_uploaded_${storedUser.email}`) === "true",
      });
    }
  }, []);

  const steps = [
    {
      label: "Sign In",
      icon: "🔐",
      active: progress.step1,
      link: "#",
    },
    {
      label: "Profile Update",
      icon: "📄",
      active: progress.step1,
      link: progress.step1 ? "/vjc-jobs-portal/profile" : "#",
    },
    {
      label: "Apply Jobs",
      icon: "🚀",
      active: progress.step2,
      link: progress.step2 ? "/vjc-jobs-portal" : "#",
    },
  ];

  return (
    <div className="w-full  lg:mt-28 mt-32 -mb-16 lg:-mb-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <Link
                href={step.link}
                className={`flex flex-col items-center min-w-[100px] transition-transform duration-300 ${
                  step.active ? "cursor-pointer text-blue-700" : "opacity-50 pointer-events-none"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl ${
                    step.active ? "bg-orange-500 text-white" : "bg-gray-300"
                  }`}
                >
                  {step.icon}
                </div>
                <p className="mt-2 text-sm font-medium text-center">{step.label}</p>
              </Link>

              {idx < steps.length - 1 && (
                <div className="hidden sm:flex flex-grow h-1 bg-gray-200 relative mx-2">
                  <div
                    className={`absolute top-0 left-0 h-1 transition-all duration-700 ${
                      steps[idx + 1].active ? "bg-orange-500 w-full" : "bg-gray-200 w-0"
                    }`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSteps;
