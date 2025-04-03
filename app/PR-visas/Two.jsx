"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";
import Content from "./Content";

const visaData = [
  { name: "Canada Permanent Residency Visa", path: "/pr-visas/canadapr", image: "/1.jpg" },
  { name: "Australia Permanent Residency Visa", path: "/pr-visas/australiapr", image: "/airplane.png" },
  { name: "UK Permanent Residency Visa", path: "/pr-visas/ukpr", image: "/dmbusi.jpg" },
  { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/newzealandpr", image: "nzpr.jpg" },
  { name: "Germany Blue Card Visa", path: "/pr-visas/germanybluecard", image: "/germanypr.jpg" },
  { name: "USA Green Card", path: "/pr-visas/usagreencard", image: "/usapr.jpg" },
];

const defaultVisa = { name: "Permanent Residency Visa", path: "/PR-visas", image: "/pr1.jpg" };

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-serif">
      {/* ===== TOP SECTION ===== */}
      <div
  className="w-full h-[300px] bg-cover bg-center flex flex-col items-center justify-center text-white text-3xl font-bold p-6 text-center"
  style={{ backgroundImage: `url(${selectedVisa.image})` }}
>
  <p className="text-base sm:text-lg lg:text-xl max-w-xl">
    Start your migration journey with the right Permanent Residency Visa option. Choose your destination and let us guide you.
  </p>
  <h1 className="mt-4">{selectedVisa.name}</h1>
</div>


      {/* ===== MIDDLE SECTION (Form & Buttons) ===== */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* Form Section (Left 40%) */}
        <div className="w-full lg:w-[40%] bg-white flex flex-col items-center p-6 shadow-lg">
          <Form />
        </div>
        {/* Visa Buttons (Right 60%) */}
        <div className="w-full lg:w-[60%] flex flex-wrap p-6 gap-4 bg-white">
          {visaData.map((visa) => (
            <button
              key={visa.path}
              className={`w-[48%] flex items-center justify-between text-base font-semibold px-5 py-3  transition duration-300 shadow-lg ${
                selectedVisa.path === visa.path
                  ? "bg-orange-500 text-white  shadow-orange-400"
                  : "bg-transparent text-black  hover:bg-orange-500 hover:text-white"
              } transform hover:scale-105`}
              onClick={() => handleVisaClick(visa)}
            >
              <img src={visa.image} alt={visa.name} className="w-10 h-10 rounded-full mr-3" />
              {visa.name}
              <ArrowRight className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>

      {/* ===== BOTTOM SECTION (Content Full Width) ===== */}
      <div className="w-full p-6 bg-white shadow-md h-[700px] overflow-y-auto">
        <Content selectedVisa={selectedVisa} />
      </div>
    </div>
  );
};

export default Migrate;