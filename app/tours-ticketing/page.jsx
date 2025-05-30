'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../public/models/travel.json';
import AirTicketingDetails from './AirTicketingDetails';
import Tour from './Tour';
import ExploreDestination from './ExploreDestination';

export default function ExploreDestinations() {
  return (
    <div
      className="relative min-h-screen bg-white text-gray-800 overflow-hidden px-6 md:px-20 pt-12 pb-16 font-serif"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Hero Section - Tour & Air Ticketing with background and rounded corners */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 p-8"
        style={{
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #fff8f0, #ffd7a0)',
          boxShadow: '0 10px 40px rgba(255, 165, 0, 0.25)',
        }}
      >
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-lg mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-black to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine leading-tight">
            Tour & Air Ticketing Services
          </h1>

          <p className="text-lg text-gray-600">
            Book the best flights and unforgettable tours—globally trusted, beautifully managed.
          </p>

          <button className="relative inline-block px-10 py-3 font-bold text-white bg-gradient-to-r from-orange-500 via-black to-orange-500 rounded-xl overflow-hidden group shadow-xl animate-pulse-glow">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-black to-orange-600 transition-transform duration-500 ease-in-out group-hover:blur-md blur-sm rounded-xl animate-shimmer"></span>
            <span className="relative z-10">Book Now</span>
          </button>

          <p className="text-sm text-gray-500 pt-2">
            24/7 booking support. Instant e-ticket delivery. 10,000+ happy flyers.
          </p>
        </motion.div>

        {/* Right: Lottie Animation */}
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

      {/* Details Section - Services & Requirements */}
      <div>
        <AirTicketingDetails />
        <Tour />
        <ExploreDestination />
      </div>
    </div>
  );
}
