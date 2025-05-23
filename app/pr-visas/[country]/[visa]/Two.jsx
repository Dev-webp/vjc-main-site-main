"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Canadanova from './Canadapages/Canadanova';
import Canadamanitoba from './Canadapages/Canadamanitoba';
import Canadapredward from './Canadapages/Canadapredward';
import Canadaimmigration from './Canadapages/Canadaimmigration';
import Canadainvestor from './Canadapages/Canadainvestor';
import Canadafswp from './Canadapages/Canadafswp';
import Canadafstp from './Canadapages/Canadafstp';
import Canadafamily from "./Canadapages/Canadafamily";
import Canadaquebic from "./Canadapages/Canadaquebic";
import Canadapr from "./Canadapages/Canadapr";
import Canadaexpress from "./Canadapages/Canadaexpress";
import Canadaict from "./Canadapages/Canadaict";
import Canadaontario from "./Canadapages/Canadaontario";
import Canadasaskatchewan from "./Canadapages/Canadasaskatchewan";
import Canadaalberta from "./Canadapages/Canadaalberta";
import Aus189 from "./Australia-visa/Aus189";
import Aus190 from "./Australia-visa/Aus190";
import Aus191 from "./Australia-visa/Aus191";
import Aus491 from "./Australia-visa/Aus491";
import Aus494 from "./Australia-visa/Aus494";

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
   { name: "Canada Family Sponsorship", path: "/pr-visas/canadapr/canada-family-sponsorship" },
  { name: "Canada Investor Program", path: "/pr-visas/canadapr/canada-investor-program" },
  
  { name: "Canada Atlantic Immigration Pilot Program", path: "/pr-visas/canadapr/canada-atlantic-immigration-pilot-program" },
  
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
  "canadapr-canada-ict-program": Canadaict,
  "canadapr-canada-fstp": Canadafstp,
  "canadapr-canada-atlantic-immigration-pilot-program": Canadaimmigration,
  "canadapr-canada-investor-program": Canadainvestor,
  "canadapr-canada-fswp": Canadafswp,
  "canadapr-canada-quebec-selected-workers-program": Canadaquebic,
  "canadapr-canada-family-sponsorship": Canadafamily, 
  "canada-pr-visa": Canadapr,
  "canadapr-canada-express-entry": Canadaexpress,
 "canadapr-provincial-nominee-program-canada-prince-edward-island": Canadapredward,
 "canadapr-provincial-nominee-program-canada-ontario": Canadaontario, 
 "canadapr-provincial-nominee-program-canada-saskatchewan": Canadasaskatchewan,
 "canadapr-provincial-nominee-program-canada-alberta": Canadaalberta,
 "canadapr-provincial-nominee-program-canada-manitoba": Canadamanitoba,
 "canadapr-provincial-nominee-program-canada-nova-scotia": Canadanova,
 "australiapr-189-skilled-independent-visa": Aus189,
 "australiapr-190-skilled-nominated-visa": Aus190,
 "australiapr-191-permanent-residence-visa": Aus191,
 "australiapr-491-skilled-work-regional-visa": Aus491,
 "australiapr-494-skilled-employer-sponsered-regional-visa": Aus494,
};

// Background image per visa
const visaBackgroundImages = {
  "/pr-visas/canadapr/canada-express-entry": "/canada-pr-express-entry.jpg",
  "/pr-visas/canadapr-provincial-nominee-program/canada-prince-edward-island": "/candapr-price-edward-island.jpg",
  "/pr-visas/canadapr-provincial-nominee-program/canada-ontario": "/canadapr-ornito.jpg",
  "/pr-visas/canadapr-provincial-nominee-program/canada-saskatchewan": "/canadapr-saskethen.jpg",
   "/pr-visas/canadapr-provincial-nominee-program/canada-manitoba": "/manitoba-canadapr.jpg",
   "/pr-visas/canadapr-provincial-nominee-program/canada-nova-scotia": "/canadapr-nova.avif",
  "/pr-visas/canadapr-provincial-nominee-program/canada-alberta": "/canada-alberta.webp",
  "/pr-visas/canadapr/canada-quebec-selected-workers-program": "/canadapr-Quebec.jpg",
  "/pr-visas/canadapr/canada-ict-program": "/candapr-ict.jpg",
  "/pr-visas/canadapr/canada-fswp": "/canadapr-fswp.jpg",
  "/pr-visas/canadapr/canada-fstp": "/canada-fstp.jpg",
  "/pr-visas/canadapr/canada-family-sponsorship": "/canadapr-family-sponsership-visa1.webp",
  "/pr-visas/canadapr/canada-investor-program": "/vjc-gsevisa.jpg",
  "/pr-visas/canadapr/canada-starup-visa": "/",
  "/pr-visas/canadapr/canada-atlantic-immigration-pilot-program":"/canada-aipp.png",
  "/pr-visas/canadapr/canada-business-visa":"/",
  "/pr-visas/australiapr/189-skilled-independent-visa":"/skilledindependent.png",
  "/pr-visas/australiapr/190-skilled-nominated-visa":"/skilledwork.png",
  "/pr-visas/australiapr/191-permanent-residence-visa":"/Australia-s-General-Skilled-Migration-Program.webp",
  "/pr-visas/australiapr/491-skilled-work-regional-visa":"/subclass-491-visa-pathways.jpg",
  "/pr-visas/australiapr/494-skilled-employer-sponsered-regional-visa":"/suclass-494-australiapr.jpg",
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

  const selectedVisaPath = `/pr-visas/${country}/${visa}`;
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
          <h1 className="font-semibold uppercase bg-white inset-0 bg-black/60 bg-clip-text text-transparent text-4xl lg:text-6xl lg:mb-4 lg:mt-4">
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
      <div className="flex flex-col lg:flex-row bg-white px-8 lg:ml-10 py-10">
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
        <div className="w-full lg:flex-1 overflow-y-auto max-h-[1030px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0 lg:ml-9">
          {VisaComponent ? <VisaComponent /> : <p>Select a visa option to view details.</p>}
        </div>
      </div>
    </div>
  );
}