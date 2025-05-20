"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

// Germany visa components
import Goppcardvisa from './Germany-visa/Goppcardvisa';
import Gworkvisa from './Germany-visa/Gworkvisa';
import Gstudentvisa from './Germany-visa/Gstudentvisa';
import Gtouristvisa from './Germany-visa/Gtouristvisa';
import Gdependentvisa from './Germany-visa/Gdependentvisa';
import Gselfempvisa from './Germany-visa/Gselfempvisa';

// Canada visa components
import Canadastudent from "./Canadapages/Canadastudent";
import Canadatourist from "./Canadapages/Canadatourist";
import Canadapr from "./Canadapages/Canadapr";
import Canadaexpress from "./Canadapages/Canadaexpress";
import Canadawork from "./Canadapages/Canadawork";


// Form component
import Form from '../../Form';

// Country visa options
const countryVisaData = {
   germanybluecard: [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canadapr", image: "/1.jpg" },
    { name: "Australia Permanent Residency Visa", path: "/pr-visas/australiapr", image: "/airplane.png" },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/ukpr", image: "/dmbusi.jpg" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germanybluecard", image: "/images/germany.jpg" },
    { name: "USA Green Card", path: "/pr-visas/usagreencard", image: "/images/usa.jpg" },
  ],
 canadapr: [
    { name: "Canada Express Entry", path: "/pr-visas/canadapr/canada-express-entry" },
  { name: "Canada Provincial Nominee Program", path: "/pr-visas/canadapr-provincial-nominee-program" },
  { name: "Canada Quebec Selected Workers Program", path: "/pr-visas/canadapr/canada-quebec-selected-workers-program" },
   { name: "Canada ICT Program", path: "/pr-visas/canadapr/canada-ict-program" },
  { name: "Canada FSTP", path: "/pr-visas/canadapr/canada-fstp" },
  { name: "Canada FSWP", path: "/pr-visas/canadapr/canada-fswp" },
   { name: "Canada Family Sponsorship", path: "/pr-visas/canadapr/canada-family-sponsership" },
  { name: "Canada Investor Program", path: "/pr-visas/canadapr/canada-investor-program" },
  { name: "Canada Start-Up Visa", path: "/pr-visas/canadapr/canada-starup-visa" },
  { name: "Canada Atlantic Immigration Pilot Program", path: "/pr-visas/canadapr/canada-atlantic-immigration-pilot-program" },
  { name: "Canada Business Visa", path: "/pr-visas/canadapr/canada-business-visa" },
  ],
  "canadapr-provincial-nominee-program":[
    { name: "Canada Provincial Nominee Program", path: "/pr-visas/canadapr-provincial-nominee-program" },
    { name: "Canada Prince Edward Island", path: "/pr-visas/canadapr-provincial-nominee-program/canada-prince-edward-island" },
  { name: "Canada Ontario", path: "/pr-visas/canadapr-provincial-nominee-program/canada-ontario" },
  { name: "Canada Saskatchewan", path: "/pr-visas/canadapr-provincial-nominee-program/canada-saskatchewan" },
  { name: "Canada Manitoba", path: "/pr-visas/canadapr-provincial-nominee-program/canada-manitoba" },
  { name: "Canada Nova Scotia", path: "/pr-visas/canadapr-provincial-nominee-program/canada-nova-scotia" },
  { name: "Canada Alberta", path: "/pr-visas/canadapr-provincial-nominee-program/canada-alberta" },
 
  ],
  australiapr: [
    { name: "189 Skilled Independent Visa", path: "/pr-visas/australiapr/189-skilled-independent-visa" },
    { name: "190 Skilled Nominated Visa", path: "/pr-visas/australiapr/190-skilled-nominated-visa" },
    { name: "191	Permanent Residence (Skilled Regional) Visa", path: "/pr-visas/australiapr/191-permanent-residence-visa" },
    { name: "491	Skilled Work Regional (Provisional) Visa", path: "/pr-visas/australiapr/491-skilled-work-regional-visa" },
    { name: "494	Skilled Employer Sponsored Regional (Provisional) Visa", path: "/pr-visas/australiapr/494-skilled-employer-sponsered-regional-visa" },
   
  ],
  ukpr: [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canadapr", image: "/1.jpg" },
    { name: "Australia Permanent Residency Visa", path: "/pr-visas/australiapr", image: "/airplane.png" },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/ukpr", image: "/dmbusi.jpg" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germanybluecard", image: "/images/germany.jpg" },
    { name: "USA Green Card", path: "/pr-visas/usagreencard", image: "/images/usa.jpg" },
  ],
  "new-zealand-pr": [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canadapr", image: "/1.jpg" },
    { name: "Australia Permanent Residency Visa", path: "/pr-visas/australiapr", image: "/airplane.png" },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/ukpr", image: "/dmbusi.jpg" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germanybluecard", image: "/images/germany.jpg" },
    { name: "USA Green Card", path: "/pr-visas/usagreencard", image: "/images/usa.jpg" },
  ],
  usagreencard: [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canadapr", image: "/1.jpg" },
    { name: "Australia Permanent Residency Visa", path: "/pr-visas/australiapr", image: "/airplane.png" },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/ukpr", image: "/dmbusi.jpg" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germanybluecard", image: "/images/germany.jpg" },
    { name: "USA Green Card", path: "/pr-visas/usagreencard", image: "/images/usa.jpg" },
  ],
  // Add similar arrays for other countries as needed
};

// Visa component map
const visaComponents = {
  "germany-opportunity-card": Goppcardvisa,
  "germany-work-visa": Gworkvisa,
  "germany-student-visa": Gstudentvisa,
  "germany-tourist-visa": Gtouristvisa,
  "germany-dependent-visa": Gdependentvisa,
  "germany-self-employment-visa": Gselfempvisa,

  "canada-pr-visa": Canadapr,
  "canadapr-canada-express-entry": Canadaexpress,
  "canada-pr-provincial-nominee-program": Canadastudent,
  "canada-tourist-visa": Canadatourist,
 
};

// Background image per visa
const visaBackgroundImages = {
  "/pr-visas/canadapr/canada-express-entry": "/vjc-gop.png",
  "/migrate/germany/work-visa": "/vjc-gwvisa.jpg",
  "/migrate/germany/student-visa": "/vjc-gsvisa.jpg",
  "/migrate/germany/tourist-visa": "/vjc-gtvisa.jpg",
  "/migrate/germany/dependent-visa": "/vjc-gdvisa.jpg",
  "/migrate/germany/self-employment-visa": "/vjc-gsevisa.jpg",
};

// Fallback background per country
const defaultBackgroundImages = {
  germany: "/germanyimg.jpg",
  canada: "/canadabgimg.jpg",
  "united-states": "/usabgimg.jpg",
  australia: "/australiabgimg.jpg",
};

export default function MigrateCountry() {
  const router = useRouter();
  const { country, visa } = useParams();

  const visasList = useMemo(() => countryVisaData[country] || [], [country]);
  const defaultVisaTitle = visasList.length ? visasList[0].name : "";

  const [selectedVisaTitle, setSelectedVisaTitle] = useState(defaultVisaTitle);

  const VisaComponent = visa ? visaComponents[`${country}-${visa}`] : null;

  useEffect(() => {
    if (visa && visasList.length) {
      const matchedVisa = visasList.find((v) => v.path.endsWith(visa));
      if (matchedVisa) {
        setSelectedVisaTitle(matchedVisa.name);
      }
    }
  }, [visa, visasList]);

  const handleButtonClick = (visaItem) => {
    setSelectedVisaTitle(visaItem.name);
    router.push(visaItem.path);
  };

  const selectedVisaPath = `/migrate/${country}/${visa}`;
  const currentBackgroundImage =
    visaBackgroundImages[selectedVisaPath] || defaultBackgroundImages[country];

  return (
    <div>
      {/* Top background section */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center lg:text-left text-center mt-12 lg:mt-8 lg:ml-16">
          <h1 className="font-semibold uppercase bg-gradient-to-r from-white to-gray-500 inset-0 bg-black/60 bg-clip-text text-transparent text-4xl lg:text-6xl lg:mb-4 lg:mt-4">
            {selectedVisaTitle}
          </h1>
          <p className="text-white mt-4 lg:mt-2 font-bold">
            Discover endless opportunities with our expert immigration services.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:mr-16">
          <Form />
        </div>
      </div>

      {/* Bottom visa section */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10">
        {/* Visa options */}
        <div className="w-full lg:w-[350px] flex-shrink-0 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for {country?.toUpperCase()}
          </h2>
          <div className="flex flex-col gap-4 items-center w-full">
            {visasList.map((visaItem) => {
              const isActive = visaItem.path.endsWith(visa);
              return (
                <button
                  key={visaItem.path}
                  onClick={() => handleButtonClick(visaItem)}
                  className={`w-full lg:w-[350px] flex items-center justify-between text-lg font-semibold border border-orange-500 px-6 py-4 rounded-xl shadow-lg transition hover:bg-orange-500 hover:text-white
                  ${isActive ? "bg-orange-500 text-white" : "bg-white text-black"}`}
                >
                  {visaItem.name}
                  <ArrowRight className="w-6 h-6" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Visa content */}
        <div className="w-full lg:flex-1 overflow-y-auto max-h-[800px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0 lg:ml-9">
          {VisaComponent ? <VisaComponent /> : <p>Select a visa option to view details.</p>}
        </div>
      </div>
    </div>
  );
}
