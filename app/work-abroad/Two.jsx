"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const countriesData = [
  {
    name: "Germany Work Permit",
    path: "/work-abroad/germany-work-permit",
    image: "/germany.jpg",
  },
  {
    name: "Canada Work Permit",
    path: "/work-abroad/canada-work-permit",
    image: "/canada.webp",
  },
  {
    name: "USA H1b Visa",
    path: "/work-abroad/usa-h1b-visa",
    image: "/usa1.jpg",
  },
  {
    name: "Australia Work Permit",
    path: "/work-abroad/australia-work-permit",
    image: "/australia.jpg",
  },
  {
    name: "UK Work Permit",
    path: "/work-abroad/united-kingdom-work-permit",
    image: "/uk1.webp",
  },
  {
    name: "Denmark Work Permit",
    path: "/work-abroad/denmark-work-permit",
    image: "/de.jpg",
  },
  {
    name: "Dubai Work Permit",
    path: "/work-abroad/dubai-work-permit",
    image: "/du.webp",
  },
];

const Migrate = () => {
  const router = useRouter();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Scroll right by 300px
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });

        // Loop back to start if at end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full bg-white pt-16 pb-0 px-4 lg:px-20">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-4">
        Select Your Work Permit Destination
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="scroll-wrapper flex overflow-x-auto space-x-4 sm:space-x-6 scroll-smooth"
        >
          {countriesData.map((country, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[240px] sm:min-w-[280px] max-w-[300px] h-[220px] sm:h-[260px] rounded-lg bg-white border border-gray-200 cursor-pointer relative overflow-hidden"
              onClick={() => router.push(country.path)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform scale-100 hover:scale-105"
                style={{ backgroundImage: `url(${country.image})` }}
              />
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end text-white bg-black/30">
                <h3 className="text-lg sm:text-xl text-center font-bold">
                  {country.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-20 bg-blue-700 text-white p-2 rounded-full hover:bg-blue-900 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-20 bg-blue-700 text-white p-2 rounded-full hover:bg-blue-900 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Inline CSS for scrollbar hiding */}
      <style jsx>{`
        .scroll-wrapper {
          scrollbar-width: none; /* Firefox */
        }

        .scroll-wrapper::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </main>
  );
};

export default Migrate;
