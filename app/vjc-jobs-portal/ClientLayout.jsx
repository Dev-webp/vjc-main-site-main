'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import JobSubNavbar from './JobSubNavbar';
import Link from 'next/link';
import { X, User } from 'lucide-react';
import JobSteps from './JobSteps';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ClientLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showProfileBox, setShowProfileBox] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [resumeDetails, setResumeDetails] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('vjcUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      const resumeStatus = localStorage.getItem(
        `resume_uploaded_${parsedUser.email}`
      );
      setResumeUploaded(resumeStatus === 'true');

      const storedImage = localStorage.getItem(
        `profile_image_${parsedUser.email}`
      );
      if (storedImage) {
        setProfileImage(storedImage);
      }

      const storedResumeData = localStorage.getItem(
        `resume_data_${parsedUser.email}`
      );
      if (storedResumeData) {
        setResumeDetails(JSON.parse(storedResumeData));
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* ✅ Google Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16767451796');
        `}
      </Script>

      {/* 🔍 Job Sub Navbar */}
      <JobSubNavbar
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />

      {/* 🧭 Job Steps */}
      <JobSteps />

      {user && (
  <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-end">
    <AnimatePresence
      onExitComplete={() => {
        // After animation finishes, show the button
        setTimeout(() => setShowProfileBox(false), 0); // This keeps timing clear
      }}
    >
      {showProfileBox && (
        <motion.div
          key="profile-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-72 max-w-[90vw] bg-white border-l-4 border-orange-500 shadow-2xl rounded-l-xl p-4 flex items-start gap-3 mb-2"
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
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
          </div>

          {/* User Info */}
          <div className="flex-1 pl-3 text-sm">
            <p className="font-semibold text-blue-800">{user.name}</p>
            <p className="text-xs text-gray-500 mb-1">{user.email}</p>

            {resumeDetails && (
              <>
                <p className="text-gray-700 text-xs">
                  <strong>Experience:</strong>{' '}
                  {resumeDetails.experience || 'N/A'} yrs
                </p>
                <p className="text-gray-700 text-xs">
                  <strong>Looking for:</strong>{' '}
                  {resumeDetails.selectedJob || 'N/A'}
                </p>
                <p className="text-gray-700 text-xs">
                  <strong>Skills:</strong>{' '}
                  {resumeDetails.skills?.length > 0
                    ? resumeDetails.skills.join(', ')
                    : 'N/A'}
                </p>
              </>
            )}

            {resumeUploaded ? (
              <Link
                href="/vjc-jobs-portal/profile"
                className="text-xs text-green-600 font-medium hover:underline mt-2 inline-block"
              >
                ✅ Resume Uploaded – View Profile
              </Link>
            ) : (
              <Link
                href="/vjc-jobs-portal/profile"
                className="text-xs text-red-500 font-medium hover:underline mt-2 inline-block"
              >
                ⚠️ Resume Missing – Update Profile
              </Link>
            )}
          </div>

          {/* Close Button */}
          <button
            className="text-gray-400 hover:text-red-500"
            onClick={() => setShowProfileBox(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Show the toggle button only if profile box is fully hidden */}
    {!showProfileBox && (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }} // wait till fade-out finishes
        onClick={() => setShowProfileBox(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-l-xl shadow-lg flex items-center gap-2"
        title="Open Profile"
      >
        <User className="w-4 h-4" />
        <span className="text-xs">Profile</span>
      </motion.button>
    )}
  </div>
)}


      {/* Main Content */}
      <main className="pt-28 px-4 pb-10">{children}</main>
    </div>
  );
};

export default ClientLayout;
