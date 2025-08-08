'use client';

import React, { useEffect, useState } from 'react';
import JobSubNavbar from './JobSubNavbar';
import JobSteps from './JobSteps';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { User } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

const ClientLayout = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [resumeDetails, setResumeDetails] = useState(null);
  const [user, setUser] = useState(null);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const storedResumeStatus = localStorage.getItem('resumeUploaded');
    const storedProfileImage = localStorage.getItem('profileImage');
    const storedResumeDetails = localStorage.getItem('resumeDetails');
    const storedUser = localStorage.getItem('user');

    if (storedResumeStatus) setResumeUploaded(JSON.parse(storedResumeStatus));
    if (storedProfileImage) setProfileImage(storedProfileImage);
    if (storedResumeDetails) setResumeDetails(JSON.parse(storedResumeDetails));
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <div className="relative w-full bg-white">
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

      {/* ✅ Background section with overlay */}
      <div
        className="relative w-full bg-cover bg-center py-20 px-3"
        style={{
          backgroundImage: "url('/job2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Content over the overlay */}
        <div className="relative z-10">
          <JobSubNavbar
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
          <JobSteps />
        </div>
      </div>

      {/* ✅ Profile Toggle Box */}
      <div className="fixed top-5 right-5 z-50">
        <div className="relative inline-block text-left">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => setShowBox(!showBox)}
          >
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <User className="w-8 h-8 text-gray-600" />
            )}
          </div>
          <AnimatePresence>
            {showBox && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50"
              >
                <div className="p-4">
                  {user && (
                    <div className="mb-2">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  )}
                  <hr className="my-2" />
                  <div className="flex flex-col gap-2">
                    <Link href="/profile" className="text-sm text-blue-600 hover:underline">
                      View Profile
                    </Link>
                    {resumeUploaded && resumeDetails && (
                      <Link href="/resume" className="text-sm text-blue-600 hover:underline">
                        View Resume
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ Children */}
      <div className="pt-4">{children}</div>
    </div>
  );
};

export default ClientLayout;
