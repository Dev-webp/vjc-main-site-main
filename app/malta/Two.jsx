"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

const Migrate = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [metaData, setMetaData] = useState({});
  const [htmlContent, setHtmlContent] = useState(
   
  );
  const backgroundImage = "/maltaimg.webp";

  // Country array
  const countries = ["Germany", "Canada", "Australia", "UAE", "Denmark", "New-Zealand"];

  // Background images for buttons
  const countryImages = {
    Germany: "/germanybtn.webp",
    Canada: "/canadabtn.avif",
    Australia: "/australiabtn.avif",
    "New-Zealand": "/nzbtn.jpg",
    UAE: "/uaebtn.jpg",
    Denmark: "/denmarkbtn.webp",
  };

  // Fetch meta data on mount
  useEffect(() => {
    const currentRoute = window.location.pathname;
    fetch(`/api/metas?slug=${currentRoute}`)
      .then(res => res.json())
      .then(data => {
        if (data.html_content) {
          // Overwrite placeholder content if actual data is fetched
          setHtmlContent(data.html_content);
        }
        setMetaData(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center text-white bg-white">
      

      {/* Background Image with Motion Text */}
      <div
        className="relative w-full h-[300px] sm:h-[500px] md:h-[200px] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 mt-5 bg-black/50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-black text-transparent bg-clip-text -mt-10 md:mt-0">
            Residency, Rewards, Mediterranean Lifestyle
          </h1>
        </motion.div>
      </div>

      {/* Country Selection Buttons */}
      <div className="relative z-10 -mt-20 sm:mt-4 md:mt-2 w-full max-w-6xl px-4 sm:px-6 mx-auto grid grid-cols-3 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-center">
        {countries.map((country, index) => (
          <Link key={index} href={`/migrate/${country.toLowerCase()}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center bg-cover bg-center text-black font-bold text-xs sm:text-sm md:text-lg border border-orange-600 bg-black/70 cursor-pointer transition-all p-4 sm:p-6 rounded-full shadow-lg"
              style={{
                backgroundImage: `url(${countryImages[country]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {country}
            </motion.div>
          </Link>
        ))}
      </div>

      {/* New Layout: Left Block (Image/Text) | Right Block (Form) */}
      <div className="relative z-10 mt-10 w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Image/Text Content */}
        <div className="flex flex-col w-full">
          {/* New Text Block (Content moved from the old layout) */}
          <div className="w-full text-gray-800 py-6 text-center md:text-left bg-white order-1 md:order-1">
            <h2 className="text-2xl sm:text-3xl text-orange-600 font-bold mb-4 flex justify-center md:justify-start">VJC Overseas</h2>
            <p className="text-lg mb-2">
              We specialize in turning migration dreams into reality. Whether you're planning to invest, work, or settle overseas, our expert team provides end-to-end support with visa assistance, country selection, and personalized migration strategies tailored to your profile.
            </p>
            <p className="text-lg">Global Visions. Trusted Guidance</p>
            <p className="text-lg">Your Bridge to a Brighter Future</p>
            <p className="text-lg">Seamless Migration Starts with VJC Overseas.</p>
           
          </div>
          
          {/* Image Block */}
          <div className="w-full flex justify-center md:justify-start order-2 md:order-2 -mt-6">
            <Image 
              src="/investimg.png" 
              alt="Migration Image" 
              width={600} 
              height={400} 
              className="w-[90%] sm:w-[80%] md:w-auto "
              unoptimized
            />
          </div>
        </div>

        {/* Right Column: Form Section */}
        <div className="w-full py-6 order-3 md:order-2">
          <Form />
        </div>
      </div>

      {/* Dynamic HTML Content from metas table */}
      {htmlContent && (
        <div 
          className="w-full max-w-6xl px-4 sm:px-6 py-12 text-gray-800" /* Text must be in black */
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      )}
    </div>
  );
};

export default Migrate;