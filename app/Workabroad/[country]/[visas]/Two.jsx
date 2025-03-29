"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Goppcardvisa from './Germany-visa/Goppcardvisa';
import Jobseeker from './Germany-visa/Jobseeker';
import Gfreelance from './Germany-visa/Gfreelance';

import Gblue from './Germany-visa/Gblue';
import Gselfempvisa from './Germany-visa/Gselfempvisa';

import Canadastudent from "./Canadapages/Canadastudent";
import Canadatourist from "./Canadapages/Canadatourist";
import Canadapr from "./Canadapages/Canadapr";
import Canadafs from "./Canadapages/Canadafs";
import Form from '../../Form';

import USAstud from "./USA-visa/USA-stud";
import USAbusiness from "./USA-visa/USA-business"
import USAh1b from "./USA-visa/USA-h1b"
import USAinvestor from "./USA-visa/USA-investor"
import USAtourist from "./USA-visa/USA-tourist"

import Aus482 from "./Australia-visa/Aus482"
import Aus186 from "./Australia-visa/Aus186"
import Aus189 from "./Australia-visa/Aus189"
import Aus417 from "./Australia-visa/Aus417"
import Aus190 from "./Australia-visa/Aus190"


import UKBvisa from "./UK-visa/UKBvisa";
import UKTvisa from "./UK-visa/UKTvisa";
import UKinnovatorvisa from "./UK-visa/UKinnovatorvisa";
import UKsponvisa from "./UK-visa/UKsponvisa";
import UKstudvisa from "./UK-visa/UKstudvisa";

import HKtourist from "./HongKongpages/HKtourist";
import HKemployee from "./HongKongpages/HKemployee";
import HKstudentvisa from "./HongKongpages/HKstudentvisa";
import HKbusiness from "./HongKongpages/HKbusiness";
import HKdependent from "./HongKongpages/HKdependent";
import HKwork from "./HongKongpages/HKwork";

import Denbusiness from "./Denmark-visa/Den-business"
import Denstud from "./Denmark-visa/Den-stud"
import Denwork from "./Denmark-visa/Den-work"
import Dentourist from "./Denmark-visa/Den-tourist"

import Newzepr from "./Newzealand-visa/Newze-pr"
import Newzedepen from "./Newzealand-visa/Newze-Depen"
import Newzeskillwork from "./Newzealand-visa/Newze-skillwork"
import Newzestud from "./Newzealand-visa/Newze-stud"
import Newzetourist from "./Newzealand-visa/Newze-tourist"
import Newzebusiness from "./Newzealand-visa/Newze-business"
import Newzework from "./Newzealand-visa/Newze-work"

import UAEstud from "./UAE-visa/UAE-stud";
import UAEgolden from "./UAE-visa/UAE-golden";
import UAEwork from "./UAE-visa/UAE-work";
import UAEgreen from "./UAE-visa/UAE-green";
import UAEtourist from "./UAE-visa/UAE-tourist";
const countryVisaData = {
  "germany-work-permit": [
    { name: "Opportunity Card", path: "/Workabroad/germany-work-permit/opportunity-card" },
    { name: "Job Seeker Visa", path: "/Workabroad/germany-work-permit/job-seeker-visa" },
    { name: "Blue Card", path: "/Workabroad/germany-work-permit/blue-visa" },
    { name: "Skilled Work Permit Visa", path: "/Workabroad/germany-work-permit/work-permit-visa" },
    { name: "Employment Visa", path: "/Workabroad/germany-work-permit/employment-visa" },
    { name: "Freelance Visa", path: "/Workabroad/germany-work-permit/freelance-visa" },
  ],
  "canada-work-permit": [
    { name: "Open Work Permit Visa", path: "/Workabroad/canada-work-permit/open-work-permit" },
    { name: "W1 Visa", path: "/Workabroad/canada-work-permit/w1-visa" },
    { name: "LMIA Visa", path: "/Workabroad/canada-work-permit/lmia" },
  ],
  "usa-h1b-visa": [{ name: "USA H1b Visa", path: "/Workabroad/usa-h1b-visa" }],
  "australia-work-permit": [
    { name: "Temporary Skills 482 Visa", path: "/Workabroad/australia-work-permit/482-visa" },
    { name: "Employer 186 Visa", path: "/Workabroad/australia-work-permit/employer-186-visa" },
    { name: "Skilled Independent Work Visa Subclass 189", path: "/Workabroad/australia-work-permit/work-visa-subclass-189" },
    { name: "Skilled Nominated Visa Subclass 190", path: "/Workabroad/australia-work-permit/nomited-visa-subclass-190" },
    { name: "Working Holiday 417 Visa", path: "/Workabroad/australia-work-permit/working-holiday-417-visa" },
  ],
  "united-kingdom-work-permit": [
    { name: "Short Term Work Visa", path: "/Workabroad/united-kingdom-work-permit/uk-short-term-work-visa" },
    { name: "Long Term Work Visa", path: "/Workabroad/united-kingdom-work-permit/uk-long-term-work-visa" },
    { name: "Health and Care Worker Visa", path: "/Workabroad/united-kingdom-work-permit/uk-health-and-care-worker-visa" },
    { name: "Skilled Worker Visa", path: "/Workabroad/united-kingdom-work-permit/uk-skilled-worker-visa" },
    { name: "Tier 2 Visa", path: "/Workabroad/united-kingdom-work-permit/uk-tire-2-visa" },
    { name: "Tier 4 Visa", path: "/Workabroad/united-kingdom-work-permit/uk-tire-4-visa" },
    { name: "Work Permit Visa", path: "/Workabroad/united-kingdom-work-permit/uk-work-permit-visa" },
  ],
  "denmark-work-permit": [
    { name: "Pay Limit Scheme Visa", path: "/Workabroad/denmark-work-permit/denmark-pay-limit-scheme-visa" },
    { name: "Positive List Visa", path: "/Workabroad/denmark-work-permit/denmark-positive-list-visa" },
    { name: "Trainee Visa", path: "/Workabroad/denmark-work-permit/denmark-trainee-visa" },
    { name: "Employment Visa", path: "/Workabroad/denmark-work-permit/denmark-employment-visa" },
  ],
 "dubai-work-permit": [
    { name: "Standard Work Visa", path: "/Workabroad/dubai-work-permit/dubai-standard-work-visa" },
    { name: "Green Visa", path: "/Workabroad/dubai-work-permit/dubai-green-visa" },
    { name: "Golden Visa", path: "/Workabroad/dubai-work-permit/dubai-golden-visa" },
    { name: "Work Permit Visa", path: "/Workabroad/dubai-work-permit/dubai-work-permit-visa" },
  ],

};



const visaComponents = {
  'germany-work-permit-opportunity-card': Goppcardvisa,
  'germany-work-permit-job-seeker-visa': Jobseeker,
  'germany-work-permit-freelance-visa': Gfreelance,
  
  'germany-work-permit-blue-visa': Gblue,
  'germany-work-permit-employment-visa': Gselfempvisa,

  'canada-pr-visa': Canadapr,
  'canada-work-permit': Canadapr,
  'canada-student-visa':Canadastudent,
  'canada-tourist-visa': Canadatourist,
  'canada-family-sponsorship-visa': Canadafs,

  'united-states-student-visa':USAstud,
  'united-states-tourist-visa':USAtourist,
  'united-states-business-visa':USAbusiness,
 'united-states-H1B-visa':USAh1b,
 'united-states-investor-visa':USAinvestor,

 'australia-work-permit-482-visa':Aus482,
 'australia-work-permit-working-holiday-417-visa':Aus417,
 'australia-work-permit-nomited-visa-subclass-190':Aus190,
 'australia-work-permit-employer-186-visa':Aus186,
 'australia-work-permit-work-visa-subclass-189':Aus189,


 'united-kingdom-student-visa':UKstudvisa,
 'united-kingdom-tourist-visa':UKTvisa,
 'united-kingdom-business-visa':UKBvisa,
 'united-kingdom-innovator-visa':UKinnovatorvisa,
 'united-kingdom-sponsorship-visa':UKsponvisa,

 'new-zealand-permanent-resident-visa':Newzepr,
 'new-zealand-work-visa':Newzework,
 'new-zealand-student-work-visa':Newzestud,
 'new-zealand-skilled-work-visa':Newzeskillwork,
 'new-zealand-business-visa':Newzebusiness,
 'new-zealand-tourist-visa':Newzetourist,
 'new-zealand-dependent-visa':Newzedepen,

 'hong-kong-student-visa':HKstudentvisa,
 'hong-kong-employment-visa':HKemployee,
 'hong-kong-business-visa':HKbusiness,
 'hong-kong-tourist-visa':HKtourist,
 'hong-kong-dependent-visa':HKdependent,
 'hong-kong-work-visa':HKwork,

 'denmark-student-visa':Denstud,
 'denmark-work-permit-visa':Denwork,
 'denmark-tourist-visa':Dentourist,
 'denmark-business-visa':Denbusiness,

 'uae-student-visa':UAEstud,
 'uae-golden-visa':UAEgolden,
 'uae-work-visa':UAEwork,
 'uae-green-visa':UAEgreen,
 'uae-tourist-visa':UAEtourist,

};

const defaultBackgroundImages = {
  germany: '/germanyimg.jpg',
  canada: '/canadabgimg.jpg',
  "united-states": '/usabgimg.jpg',
  australia: '/australiabgimg.jpg',
  // add other countries as needed
};


 const visaBackgroundImages = {
  "/migrate/germany/opportunity-card": "/vjc-gop.png",
  "/migrate/germany/work-visa": "/vjc-gwvisa.jpg",
  "/migrate/germany/student-visa":"/vjc-gsvisa.jpg",
  "/migrate/germany/tourist-visa":"/vjc-gtvisa.jpg",
  "/migrate/germany/dependent-visa":"/vjc-gdvisa.jpg",
  "/migrate/germany/self-employment-visa":"/vjc-gsevisa.jpg",
  "/migrate/canada/work-permit":"/vjc-cwpvisa.webp",
  "/migrate/canada/student-visa":"/vjc-csvisa.webp",
  "/migrate/canada/tourist-visa":"/vjc-ctvisa.jpeg",
  "/migrate/canada/pr-visa":"/vjc-cprvisa.webp",
  "/migrate/canada/family-sponsorship-visa":"/vjc-cfsvisa.webp", 
  "/migrate/united-states/student-visa":"/vjc-usasvisa.jpg",
  "/migrate/united-states/tourist-visa":"/vjc-usatvisa.jpg",
  "/migrate/united-states/business-visa":"/vjc-usabvisa.jpeg",
  "/migrate/united-states/H1B-visa":"/vjc-usahb1visa.jpg",
  "/migrate/united-states/investor-visa":"/vjc-usainvestorvisa.jpg",
  "/migrate/australia/student-visa":"/vjc-aussvisa.avif",
  "/migrate/australia/business-visa":"/vjc-ausbvisa.jpg",
  "/migrate/australia/work-visa":"/vjc-ausworkvisa.jpg",
  "/migrate/australia/family-visa":"/vjc-ausfvisa.jpg",
  "/migrate/australia/dependent-visa":"/vjc-ausdvisa.jpg",
  "/migrate/australia/sponsorship-visa":"/vjc-aussponvisa.jpg",
  "/migrate/united-kingdom/student-visa":"/vjc-uksvisa.jpg",
  "/migrate/united-kingdom/tourist-visa":"/vjc-uktvisa.jpg",
  "/migrate/australia/sponsorship-visa":"/vjc-aussponvisa.jpeg",
  "/migrate/united-kingdom/student-visa":"/vjc-studentvisa.jpg",
  "/migrate/united-kingdom/business-visa":"/UKBusinesVisa.webp",
  "/migrate/united-kingdom/innovator-visa":"/Ukinvestorvisa.webp",
  "/migrate/united-kingdom/sponsorship-visa":"/uksponser.jpg",
  "/migrate/new-zealand/permanent-resident-visa":"/nz.webp",
  "/migrate/new-zealand/work-visa":"/nzwork.jpg",
  "/migrate/new-zealand/student-work-visa":"/nzstudent.jpg",
  "/migrate/new-zealand/skilled-work-visa":"/nzskilled.jpg",
  "/migrate/new-zealand/business-visa":"/nzbusiness.avif",
  "/migrate/new-zealand/tourist-visa":"/nztour.avif",
  "/migrate/new-zealand/dependent-visa":"/nzdepend.jpg",
  "/migrate/south-africa/critical-skills-visa":"/sacritical.webp",
  "/migrate/south-africa/general-work-visa":"/sawork.avif",
  "/migrate/south-africa/business-visa":"/sabusines.webp",
  "/migrate/south-africa/tourist-visa":"/satour.avif",
  "/migrate/hong-kong/student-visa":"/hk-student.png",
  "/migrate/hong-kong/employment-visa":"/hkemp.jpg",
  "/migrate/hong-kong/business-visa":"/hkbusines.jpg",
  "/migrate/hong-kong/tourist-visa":"/hktour.avif",
  "/migrate/hong-kong/dependent-visa":"/hkwork.avif",
  "/migrate/hong-kong/work-visa":"/hkdepend.webp",
  "/migrate/denmark/student-visa":"/dmstudent.jpg",
  "/migrate/denmark/work-permit-visa":"/dmwork.jpg",
  "/migrate/denmark/tourist-visa":"/dmtour.jpg",
  "/migrate/denmark/business-visa":"/dmbusi.jpg",
  "/migrate/uae/student-visa":"/uaestudent.avif",
  "/migrate/uae/golden-visa":"/goldvisa.jpg",
  "/migrate/uae/work-visa":"/uaework.webp",
  "/migrate/uae/green-visa":"/greenvisa.png",
  "/migrate/uae/tourist-visa":"/uaetour.jpg",

  // If a visa path does not have a specific image, fallback to the country background.
};


export default function WorkabroadCountry() {
  const router = useRouter();
  const { country, visas } = useParams();
  const visasList = countryVisaData[country] || [];
  
  const defaultVisaTitle = visasList.length ? visasList[0].name : '';
  const [selectedVisaPath, setSelectedVisaPath] = useState(null);
  const [selectedVisaTitle, setSelectedVisaTitle] = useState(defaultVisaTitle);
  
  const VisaComponent = visas ? visaComponents[`${country}-${visas}`] : (country === 'germany-work-permit' ? Goppcardvisa : null);

  useEffect(() => {
    // When the URL param changes, update the state accordingly.
    if (visas) {
      const matchedVisa = visasList.find(v => v.path === `/Workabroad/${country}/${visas}`);
      if (matchedVisa) {
        setSelectedVisaTitle(matchedVisa.name);
        setSelectedVisaPath(matchedVisa.path);
      }
    }
  }, [visas, country, visasList]);

  const handleButtonClick = (visa) => {
    console.log('Button clicked:', visa);
    setSelectedVisaPath(visa.path);
    setSelectedVisaTitle(visa.name);
    router.push(visa.path);
  };
  
  const currentBackgroundImage =
    (selectedVisaPath && visaBackgroundImages[selectedVisaPath]) ||
    defaultBackgroundImages[country];
  
    return (
      <div>
        {/* Dynamic Background Image with heading */}
        <div
  className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

          <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center lg:text-left text-center mt-8 lg:mt-8 lg:ml-16">
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
  
        <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10">
          <div className="w-full lg:w-[350px] flex-shrink-0 px-4 flex flex-col items-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
              Visa Options for {country?.toUpperCase()}
            </h2>
            <div className="flex flex-col gap-4 items-center w-full">
              {visasList.map((visa) => (
                <button
                  key={visa.path}
                  onClick={() => handleButtonClick(visa)}
                  className={`w-full lg:w-[350px] flex items-center justify-between text-lg font-semibold border border-orange-500 px-6 py-4 rounded-xl shadow-lg transition hover:bg-orange-500 hover:text-white
                    ${selectedVisaPath === visa.path ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
                >
                  {visa.name}
                  <ArrowRight className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
  
          <div className="w-full lg:flex-1 overflow-y-auto max-h-[800px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0 lg:ml-9">
            {VisaComponent ? <VisaComponent /> : <p>Select a visa option to view details.</p>}
          </div>
        </div>
      </div>
    );
  
}
