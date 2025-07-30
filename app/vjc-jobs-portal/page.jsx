"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoginModal from "./LoginModal";
import Image from "next/image";
import { useRouter } from "next/navigation";

const companyLogos = [
  "/hp.png",
  "/ibm.png",
  "/tcs.png",
  "/infosys.png",
  "/google.webp",
  "/amazon.jpg",
  "/hcl.png",
  "/accenture.png",
  "/apple.webp",
  "/Microsoft.webp",
  "/Kalven-logo.png",
  "/LOGO-VJC.png",
  "/Deloitte-Logo.png",
  "/intel.png",
];

const countries = [
  "UAE", "Luxembourg", "UK", "Ireland", "Singapore",
  "Malaysia", "Germany", "Canada", "Australia", "South Africa", "Denmark",
];

const newsTickerMessages = [
  "Visa sponsorship available for skilled tech professionals 🌍",
  "Explore high-paying jobs in Germany, Canada, and Australia 🚀",
  "Resume feedback and visa consultation now available 💼",
  "Upload your resume and fast-track your overseas career 📤",
  "Jobs open for React, Node.js, DevOps, and AWS specialists 💻",
];

const JobPortalPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("vjcUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setShowLoginModal(false);

      const storedImage = localStorage.getItem(`profile_image_${parsedUser.email}`);
      if (storedImage) {
        setProfileImage(storedImage);
      }
    }
  }, []);

  const handleCardClick = (e, link) => {
    e.preventDefault();
    if (!user) {
      setShowLoginModal(true);
    } else {
      router.push(link);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("vjcUser");
    setUser(null);
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {showLoginModal && (
        <LoginModal setUser={setUser} setShowLoginModal={setShowLoginModal} />
      )}

      <div className="px-4 pt-6 pb-12 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-blue-900">
          Explore Global Job Opportunities with <span className="text-orange-500">VJC Overseas</span>
        </h1>

        {user && (
          <div className="flex items-center justify-center gap-4 mb-6">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-300" />
            )}
            <div className="text-center sm:text-left text-sm">
              <p className="font-semibold text-blue-800">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
              <button
                onClick={handleLogout}
                className="text-xs mt-1 underline text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {/* 📰 News Ticker */}
        <div className="overflow-hidden bg-orange-200 border border-orange-500 rounded px-4 py-2 mb-8">
          <div className="whitespace-nowrap hover:[animation-play-state:paused] animate-marquee text-blue-900 font-medium">
            {newsTickerMessages.map((msg, idx) => (
              <span key={idx} className="inline-block mr-16">🚀 {msg}</span>
            ))}
          </div>
        </div>

        {/* 🏢 Company Logos Section */}
        <h2 className="text-xl sm:text-3xl font-semibold text-center text-blue-900 mb-6">Companies We’re Tied Up With</h2>
        
        {/* Forward Scroll */}
        <div className="overflow-hidden whitespace-nowrap mb-2 relative">
          <div className="animate-marquee inline-flex gap-3 sm:gap-5 md:gap-7 py-1">
            {companyLogos.concat(companyLogos).map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt="Company Logo"
                width={80}
                height={40}
                className="object-contain rounded shadow w-[60px] sm:w-[80px] md:w-[90px]"
              />
            ))}
          </div>
        </div>

        {/* Reverse Scroll */}
        <div className="overflow-hidden whitespace-nowrap mb-8 relative">
          <div className="animate-marquee-reverse inline-flex gap-3 sm:gap-5 md:gap-7 py-1">
            {companyLogos.concat(companyLogos).map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt="Company Logo"
                width={80}
                height={40}
                className="object-contain rounded shadow w-[60px] sm:w-[80px] md:w-[90px]"
              />
            ))}
          </div>
        </div>

        {/* 🌍 Country Cards Section */}
        <h2 className="text-xl sm:text-3xl font-semibold text-center text-blue-900 mb-8">Countries We Assist With</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => {
            const link = `/vjc-jobs-portal/${country.toLowerCase().replace(/\s+/g, "-")}`;
            const bgImg = `/job-images/${country.toLowerCase().replace(/\s+/g, "-")}.webp`;
            return (
              <div
                key={index}
                className="flip-card cursor-pointer"
                onClick={(e) => handleCardClick(e, link)}
              >
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front"
                    style={{
                      backgroundImage: `url(${bgImg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl">
                      <div className="absolute bottom-0 w-full h-[30%] bg-black/60 flex items-center justify-center rounded-b-2xl">
                        <h2 className="text-white text-lg font-semibold">{country}</h2>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flip-card-back"
                    style={{
                      backgroundImage: `url(${bgImg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center p-4 rounded-2xl">
                      <h2 className="text-white text-xl font-bold mb-3">{country}</h2>
                      <button className="bg-white text-black rounded-full px-5 py-2 text-sm font-semibold hover:bg-yellow-300 transition">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flip Card & Marquee Animations */}
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 260px;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          border-radius: 1rem;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .flip-card-front {
          background-color: #fff;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default JobPortalPage;
