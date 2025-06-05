'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../public/models/travel.json';
import AirTicketingDetails from './AirTicketingDetails';
import Tour from './Tour';
import ExploreDestination from './ExploreDestination';
import Link from 'next/link';
import Destinations from './Destinations';

export default function ExploreDestinations() {
  return (
    <div
      className="relative min-h-screen bg-white text-gray-800 overflow-hidden px-6 md:px-20 pt-12 pb-16 font-serif"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Hero Section with Video BG */}
      <div className="relative  overflow-hidden ">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/jobseeker.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Foreground Content */}
        <div
          className="
            relative z-20 grid grid-cols-1 md:grid-cols-2 
            items-center gap-12 p-8 
            md:pt-16 md:pb-12 
            sm:min-h-[80vh] 
            text-center md:text-left
          "
        >
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-lg mx-auto space-y-6 flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl mt-14 font-extrabold bg-gradient-to-r from-orange-500 via-white to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine leading-tight">
              Tour & Air Ticketing Services
            </h1>

            <p className="text-lg text-gray-200">
              Book the best flights and unforgettable tours—globally trusted, beautifully managed.
            </p>

            <Link href="/assessment" passHref>
              <button className="relative inline-block px-10 py-3 font-bold text-white bg-gradient-to-r from-orange-500 via-black to-orange-500 rounded-xl overflow-hidden group shadow-xl animate-pulse-glow">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-black to-orange-600 transition-transform duration-500 ease-in-out group-hover:bg-blue-400 rounded-xl animate-shimmer"></span>
                <span className="relative z-10">Apply Now</span>
              </button>
            </Link>

            <p className="text-sm text-gray-300 pt-2">
              24/7 booking support. Instant e-ticket delivery. 10,000+ happy flyers.
            </p>
          </motion.div>

          {/* Right: Lottie */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-3xl">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other Sections */}
      <div>
        <Destinations />
        <div className="-mt-72 md:-mt-56">
          <AirTicketingDetails />
        </div>
        <Tour />
        <ExploreDestination />
      </div>
    </div>
  );
}
