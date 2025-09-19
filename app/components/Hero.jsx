"use client";
import React from "react";
import Form from "@/app/components/Form";
import Slider from "@/app/components/HeroSlider";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="py-4 lg:py-0 mt-20 md:-mt-20 lg:mt-20 bg-gradient-to-bl from-white to-white relative">
        
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url(/airplane.webp)", backgroundPositionY: "0%" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </div>

        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10 relative z-10">

          {/* Left Section */}
          <div className="flex flex-col space-y-8 lg:space-y-6 items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">

            {/* Static Image replacing animated GIF */}
            <Image
              src="/assets/mosttrustedbrand.png"
              alt="Work in Germany"
              width={1120} // Adjust width based on actual image dimensions
              height={630}  // Adjust height based on actual image dimensions
              className="w-[24rem] lg:w-[70rem] h-auto mt-6 items-center"
              priority
              unoptimized
            />

            {/* Award Image */}
            <Image 
              src="/award.png" 
              alt="Award"
              width={432} 
              height={112} 
              priority
              unoptimized
              className="w-full max-w-xs lg:max-w-md h-auto mx-auto"
            />

            <Slider />

            <p className="text-gray-200 tracking-tight text-center text-xs lg:text-base md:font-medium max-w-xs mx-auto lg:max-w-xl">
              Being India&apos;s Most Trusted Brand (2022 & 2024) and the Global Icon Award (2023), we do not just walk on the success trails; we make them. Your international aspirations are guided and managed at VJC Overseas with our track record and absolute commitment.
            </p>

          </div>

          {/* Right Section (Form) */}
          <div className="z-20">
            <div className="flex justify-center items-center mt-10">
              <Form />
            </div>
          </div>

        </div>

      </section>
    </>
  );
}
