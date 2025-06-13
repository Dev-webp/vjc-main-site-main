"use client";
import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const MigrationProcess = () => {
  const countries = useMemo(() => [
    { name: "Invest", path: "/invest" },
    { name: "Cyprus", path: "/cyprus" },
    { name: "Greece", path: "/greece" },
    { name: "Ireland", path: "/irelandinvestorvisa" },
    { name: "Malta", path: "/malta" },
    { name: "Portugal", path: "/portugal" },
  ], []);

  const bgImages = useMemo(() => [
    "/study-abroad-vjc.jpg",
    "/study-abroad.jpg",
    "/studying-abroad-1.webp",
    "/texus-vjc.jpg",
    "/turckey-tour.jpg",
  ], []);

  const [migrantsPlaced, setMigrantsPlaced] = useState(1);
  const [countriesCount, setCountriesCount] = useState(1);
  const [partnersCount, setPartnersCount] = useState(1);
  const [currentBg, setCurrentBg] = useState(0);

  const maxMigrants = 40000;
  const maxCountries = countries.length;
  const maxPartners = 200;

  useEffect(() => {
    let m = 1, c = 1, p = 1;

    const migrantInterval = setInterval(() => {
      m += 100;
      setMigrantsPlaced(m > maxMigrants ? maxMigrants : m);
      if (m >= maxMigrants) clearInterval(migrantInterval);
    }, 20);

    const countryInterval = setInterval(() => {
      c += 1;
      setCountriesCount(c > maxCountries ? maxCountries : c);
      if (c >= maxCountries) clearInterval(countryInterval);
    }, 100);

    const partnerInterval = setInterval(() => {
      p += 3;
      setPartnersCount(p > maxPartners ? maxPartners : p);
      if (p >= maxPartners) clearInterval(partnerInterval);
    }, 30);

    return () => {
      clearInterval(migrantInterval);
      clearInterval(countryInterval);
      clearInterval(partnerInterval);
    };
  }, [maxCountries]); // ✅ Added dependency

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]); // ✅ Added dependency

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 text-center">
        Invest Abroad with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      {/* Country Buttons */}
      <div
        className="rounded-xl p-4 mb-8 transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h2 className="text-xl text-white font-bold text-center mb-4">
          Select Your Invest Destination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {countries.map((c, i) => (
            <Link key={i} href={c.path}>
              <div className="px-4 py-3 bg-white/70 text-black border border-white rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white hover:underline underline-offset-4 transition-all duration-300 shadow cursor-pointer text-center">
                {c.name} Investor Visa
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-700 text-justify">
        <p>
          Ready to grow your global footprint? With <span className="text-orange-500">VJC Overseas</span>, your Investor Visa journey is seamless and strategically guided...
        </p>
        {/* (rest of your paragraphs unchanged) */}
        <div className="max-w-5xl mx-auto mt-4 bg-white rounded-xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/invest-in-dream-country.png"
              alt="Invest in Abroad Process"
              width={256}
              height={256}
              unoptimized
            />
          </div>
          <div className="space-y-2 text-gray-800 text-sm">
            {/* Business Points */}
            {/* ... same as your original code ... */}
          </div>
        </div>
      </div>

      {/* YouTube Video */}
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto mt-6">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/cLNpEry1oPQ?autoplay=1&mute=1&loop=1&playlist=cLNpEry1oPQ&controls=0&showinfo=0&rel=0"
          title="VJC Overseas Migration Services"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Stats CTA */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl shadow-lg px-6 py-6 max-w-4xl mx-auto flex flex-col sm:flex-row justify-around text-center gap-6 sm:gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white">{migrantsPlaced.toLocaleString()}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Global Investor Clients Guided</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{countriesCount}</h2>
          <p className="mt-1 text-white text-sm font-medium">Investment Destinations Supported</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{partnersCount}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Business & Legal Network Partners</p>
        </div>
      </div>
    </div>
  );
};

export default MigrationProcess;
