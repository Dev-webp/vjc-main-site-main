'use client';

import React, { useState } from 'react';
import Form from './Form';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ModalFormWithPopup from "../Popup/Popup";
import MaltaImageContent from "../Popup/MaltaImageContent"; // adjust path if needed

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/malta-viedo.mp4"
        autoPlay
        loop
        muted
        unoptimized
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 md:px-12 pt-16 pb-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 mt-4 md:pl-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Image */}
            <div className="mx-auto md:mx-0 w-[560px]">
              <Image
                src="/1.gif"
                alt="Work in Germany"
                width={560}
                height={350}
                className="rounded-lg"
                priority
                unoptimized
              />

              {/* Award Image */}
              <div className="flex flex-col items-center mt-4 space-y-2">
                <Image
                  src="/award-vjc.png"
                  alt="Award VJC"
                  width={500}
                  height={250}
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-bold text-white max-w-[560px] pl-7 leading-tight">
              Study Abroad in Malta with - <span className="text-5xl font-semibold text-orange-500 typing-animation">VJC Overseas</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-200 max-w-[560px] pl-6 mt-4">
              Explore your academic journey in the heart of the Mediterranean – quality education, rich culture, and an affordable lifestyle.
            </p>

            {/* Apply Button */}
            <div className="flex justify-center mt-6">
              <button
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow-lg transition duration-300 max-w-[560px] w-full md:w-auto"
                onClick={() => setIsOpen(true)}
              >
                Apply Now
              </button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Form />
          </motion.div>
        </div>

      
      </div>
  {/* Modal popup component */}
        <ModalFormWithPopup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          customContent={<MaltaImageContent />}
        />
      {/* Typing animation style */}
      <style jsx>{`
        .typing-animation {
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid orange;
          width: 0;
          animation:
            typing 3.5s steps(12) forwards,
            blink 0.75s step-end infinite;
        }

        @keyframes typing {
          to {
            width: 12ch; /* length of "VJC Overseas" */
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}
