'use client';
import React from 'react';
import Image from 'next/image';

const JapanTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Japan Tourist Visa Process with Affordable Tour Packages – Discover Japan with <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Japan, the Land of the Rising Sun, is a fascinating blend of tradition and modernity. From ancient temples and cherry blossom gardens to futuristic cities and high-speed bullet trains, Japan offers travelers a once-in-a-lifetime experience. Whether you dream of exploring Tokyo’s vibrant nightlife, walking through Kyoto’s serene shrines, or enjoying the stunning view of Mount Fuji, <span className="text-orange-500">VJC Overseas</span> ensures a smooth Japan tourist visa process along with budget-friendly travel packages tailored just for you.
          </p>
          <p className="mt-0">
            As a trusted immigration consultancy, we simplify your Japan tourist visa application and provide end-to-end support, ensuring your trip is stress-free and unforgettable.
          </p>
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/japan-tour.jpg"
            alt="Japan Tour by VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">What is the Japan Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        A Japan Tourist Visa (Short-term Stay Visa) allows travelers to visit Japan for leisure, sightseeing, cultural experiences, or visiting friends and family. For Indian nationals, this visa is usually granted for 15 to 30 days, depending on the applicant’s travel plan. Although Japan does not provide a visa-on-arrival for Indians, the application process is straightforward when guided by experts like <span className="text-orange-500">VJC Overseas</span>.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Japan Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>A valid passport with at least six months validity</li>
        <li>Completed Japan visa application form</li>
        <li>Recent passport-size photographs (as per Japan visa specifications)</li>
        <li>Confirmed return flight tickets</li>
        <li>Proof of accommodation (hotel booking or invitation letter if staying with family/friends)</li>
        <li>Bank statements / financial proof to show sufficient funds</li>
        <li>Detailed travel itinerary for Japan</li>
        <li>Income Tax Returns (ITR) of the last 2–3 years</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, we ensure your documentation is accurate, complete, and submission-ready, minimizing the chances of rejection.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">How VJC Overseas Simplifies Your Japan Visa and Travel Process</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Step-by-step guidance on Japan tourist visa application</li>
        <li>Assistance in preparing accurate financial documents and travel itinerary</li>
        <li>Support with bookings – flights, hotels, and JR Rail Pass</li>
        <li>Travel insurance and forex exchange guidance</li>
        <li>Expert advice on Japan’s cultural etiquette and travel tips</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our experts make your visa process smooth and provide travel solutions for a hassle-free experience in Japan.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Affordable Japan Tourist Packages</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        Apart from visa services, <span className="text-orange-500">VJC Overseas</span> offers affordable Japan tour packages designed to let you explore the best of Japan at your own pace. From cherry blossom season tours to adventure-filled itineraries, we’ve got you covered.
      </p>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Customized itineraries for Tokyo, Kyoto, Osaka, Hiroshima, and more</li>
        <li>Guided city tours, temple visits, and cultural experiences</li>
        <li>Bullet train (Shinkansen) pass arrangements</li>
        <li>Seasonal tours – cherry blossoms, autumn leaves, and snow festivals</li>
        <li>Honeymoon packages and family-friendly travel plans</li>
        <li>Complete support from visa to return journey</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Whether you want an affordable trip or a luxury Japanese experience, our packages cater to all travelers.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Trusted visa and immigration consultants in India</li>
        <li>High success rate in Japan tourist visa approvals</li>
        <li>Affordable Japan tour packages customized to your needs</li>
        <li>Transparent process with no hidden charges</li>
        <li>End-to-end support from application to your return</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Start Your Japan Journey Today</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, your Japan tourist visa application becomes stress-free, and your travel dreams come true. Contact us today to begin your Japan visa process and explore our budget-friendly Japan tour packages.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Get in touch with us now and make your Japan travel dreams a reality!
      </p>
    </div>
  );
};

export default JapanTour;
