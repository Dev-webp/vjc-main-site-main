'use client';
 import React, { useState } from 'react';
import { useEffect, useRef } from "react";
 
export default function Hero({ setIsOpen }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset
          void sectionRef.current?.offsetWidth;
          setIsVisible(true); // Trigger animation
        }
      },
      { threshold: 0.5 }
    );
 
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
 
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
 
  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] overflow-hidden flex items-center justify-center"
    >
      {/* Background Video with Slide-in from Left */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-out transform ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <source src="uk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
 
      {/* Dark Overlay */}
      {/* Dark Overlay - always visible, not animated */}
<div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />
 
 
      {/* Text Content - Centered and animated from top */}
      <div
        className={`relative z-10 text-center px-6 w-full max-w-4xl flex flex-col items-center justify-center ${
          isVisible ? "animate-slideDownFade" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
          Study in the United Kingdom
        </h1>
        <p className="text-md sm:text-lg md:text-xl max-w-2xl mb-6 text-white bg-clip-text text-transparent">
          Join world-class universities and build a successful international career with a UK degree.
        </p>
        <button
              onClick={() => setIsOpen(true)}
              className="bg-saffron text-white text-center py-2 px-4 sm:px-6 rounded-lg hover:bg-sky-500 transition"
            >
              Apply Now
            </button>
      </div>
    </section>
  );
}