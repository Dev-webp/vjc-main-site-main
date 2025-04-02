"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about-us" },
    { name: "Migrate To", path: "/migrate" },
    { name: "Study Abroad", path: "/studyabroad" },
    { name: "PR Visas", path: "/PR-visas" },
    { name: "Work Abroad", path: "/Workabroad" },
    { name: "Job Seeker Visas", path: "/Jobseeker" },
    
    { name: "Visit Visas", path: "/visitvisas" },
    { name: "Investor Visas", path: "/Investorvisas" },
    { name: "Schengen Visas", path: "/schengen" },
    { name: "Resume Marketing", path: "/resume-marketing" },
    { name: "Coaching/Training", path: "/coaching" },
   
  ];
  const fixedItems = [
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];
  
 

  const migrateSubPages = [
    { name: "Germany", path: "/migrate/germany" },
    { name: "Canada", path: "/migrate/canada" },
    { name: "United States", path: "/migrate/united-states" },
    { name: "Australia", path: "/migrate/australia" },
    { name: "United Kingdom", path: "/migrate/united-kingdom" },
    { name: "New Zealand", path: "/migrate/new-zealand" },
    { name: "South Africa", path: "/migrate/south-africa" },
    { name: "Hong Kong", path: "/migrate/hong-kong" },
    { name: "Denmark", path: "/migrate/denmark" },
    { name: "UAE", path: "/migrate/uae" },
  ];
  
  const WorkabroadSubPages = [
    { name: "Germany Work Permit", path: "/Workabroad/germany-work-permit" },
    { name: "Canada Work Permit", path: "/Workabroad/canada-work-permit" },
    { name: "USA H1b Visa", path: "/Workabroad/usa-h1b-visa" },
    { name: "Australia Work Permit", path: "/Workabroad/australia-work-permit" },
    { name: "UK Work Permit", path: "/Workabroad/united-kingdom-work-permit" },
    { name: "Denmark Work Permit", path: "/Workabroad/denmark-work-permit" },
    { name: "Dubai Work Permit", path: "/Workabroad/dubai-work-permit" },
  ];

  const studyabroadSubPages = [
    { name: "USA", path: "/studyabroad/usa" },
    { name: "United Kingdom", path: "/studyabroad/uk" },
    { name: "Canada", path: "/studyabroad/canada" },
    { name: "Australia", path: "/studyabroad/australia" },
    { name: "Germany", path: "/studyabroad/germany" },
    { name: "Italy", path: "/studyabroad/italy" },
    { name: "France", path: "/studyabroad/france" },
    { name: "Singapore", path: "/studyabroad/singapore" },
    { name: "Malaysia", path: "/studyabroad/malaysia" },
    { name: "South Africa", path: "/studyabroad/southafrica" },
    { name: "New Zealand", path: "/studyabroad/newzealand" },
    { name: "Philippines", path: "/studyabroad/philippiness" },
    { name: "Poland", path: "/studyabroad/poland" },
    { name: "Ireland", path: "/studyabroad/ireland" },
    { name: "Spain", path: "/studyabroad/spain" },
    { name: "Netherlands", path: "/studyabroad/netherlands" },
    { name: "Switzerland", path: "/studyabroad/switerland" },
    { name: "Denmark", path: "/studyabroad/denmark" },
    { name: "Dubai", path: "/studyabroad/Dubai" },
    { name: "Luxembourg", path: "/studyabroad/luxembourg" },
    { name: "Hongkong", path: "/studyabroad/hongkong" },
    { name: "UAE", path: "/studyabroad/uae" },
    { name: " Norway", path: "/studyabroad/norway" },
    { name: "Sweden", path: "/studyabroad/sweden" },
  ];

  const prVisaSubPages = [
    { name: "Canada Permanent Residency Visa", path: "/PR-visas/canadapr" },
    { name: "Australia Permanent Residency Visa", path: "/PR-visas/australiapr" },
    { name: "UK Permanent Residency Visa", path: "/PR-visas/ukpr" },
    { name: "New Zealand Permanent Residency Visa", path: "/PR-visas/newzealandpr" },
    { name: "Germany Blue Card Visa", path: "/PR-visas/germanybluecard" },
    { name: "USA Green Card", path: "/PR-visas/usagreencard" },
  ];
  const resumemarketingSubPages = [
  
      { name: "Canada", path: "/resume-marketing/canada-resume-marketing" },
      { name: "Germany", path: "/resume-marketing/germany-resume-marketing" },
      { name: "USA", path: "/resume-marketing/usa-resume-marketing" },
      { name: "Australia", path: "/resume-marketing/australia-resume-marketing" },
      { name: "UK", path: "/resume-marketing/uk-resume-marketing" },
      { name: "Denmark", path: "/resume-marketing/denmark-resume-marketing" },
      { name: "Ireland", path: "/resume-marketing/ireland-resume-marketing" },
      { name: "Dubai", path: "/resume-marketing/dubai-resume-marketing" },
      { name: "Austria", path: "/resume-marketing/austria-resume-marketing" },
      { name: "Singapore", path: "/resume-marketing/singapore-resume-marketing" },
      { name: "New Zealand", path: "/resume-marketing/new-zealand-resume-marketing" },
      { name: "Malaysia", path: "/resume-marketing/malaysia-resume-marketing" },
      {name: "Poland",path: "/resume-marketing/poland-resume-marketing" },
      { name: "Malta", path: "/resume-marketing/malta-resume-marketing" },
    
  ];
  const Jobseeker = [
    { name: "Germany Jobseeker Visa", path: "/Jobseeker/germany-jobseeker-visa" },
    { name: "Austria Jobseeker Visa", path: "/Jobseeker/canada-jobseeker-visa" },
    { name: "Portugal Jobseeker Visa", path: "/Jobseeker/portugal-jobseeker-visa" },
    { name: "Sweden Jobseeker Visa", path: "/Jobseeker/sweden-jobseeker-visa" },
    { name: "Norway Jobseeker Visa", path: "/Jobseeker/norway-jobseeker-visa" },
    { name: "UAE Jobseeker Visa", path: "/Jobseeker/uae-jobseeker-visa" },
   
  ];
  const servicesSubPages = [
    { name: "Profile Evaluation", path: "/services/profile-evaluation" },
    { name: "Visa Assistance", path: "/services/visa-assistance" },
    { name: "Immigration Consultation", path: "/services/immigration-consultation" },
    { name: "Career Counseling", path: "/services/career-counseling" },
    { name: "IELTS Coaching", path: "/services/ielts-coaching" },
    { name: "Resume Writing", path: "/services/resume-writing" },
    { name: "Job Search Assistance", path: "/services/job-search-assistance" },
    { name: "Interview Preparation", path: "/services/interview-preparation" },
    { name: "Post-Landing Services", path: "/services/post-landing-services" },
    { name: "Legal & Documentation", path: "/services/legal-documentation" },
  ];
  
  const InvestorvisasSubPages = [
    { name: "USA Investor Visa", path: "/Investorvisas/usa-investor-visa"},
    { name: "Canada Investor Visa", path: "/Investorvisas/canada-investor-visa"},
    { name: "Germany Investor Visa", path: "/Investorvisas/germany-investor-visa" },
    { name: "Australia Investor Visa", path: "/Investorvisas/australia-investor-visa"},
    { name: "UK Investor Visa", path: "/Investorvisas/uk-investor-visa" },
    { name: "UAE Investor Visa", path: "/Investorvisas/uae-investor-visa"},
    { name: "Portugal Investor Visa", path: "/Investorvisas/portugal-investor-visa" },
    { name: "Austria Investor Visa", path: "/Investorvisas/austria-investor-visa" },
   
  ];
  const visitvisasSubPages = [
    { name: "USA Visit Visa", path: "/visitvisas/usa-visit-visa" },
  { name: "USA B1 Visa", path: "/visitvisas/usa-b1-visa" },
  { name: "USA B2 Visa", path: "/visitvisas/usa-b2-visa" },
  { name: "USA B1/B2 Visa", path: "/visitvisas/usa-b1-b2-visa" },
  { name: "Canada Visit Visa", path: "/visitvisas/canada-visit-visa" },
  { name: "Australia Visit Visa", path: "/visitvisas/australia-visit-visa" },
  { name: "UK Visit Visa", path: "/visitvisas/uk-visit-visa" },
  { name: "Dubai Visit Visa", path: "/visitvisas/dubai-visit-visa" },
  { name: "Denmark Visit Visa", path: "/visitvisas/denmark-visit-visa" },
  { name: "Austria Visit Visa", path: "/visitvisas/austria-visit-visa" },
  { name: "Italy Visit Visa", path: "/visitvisas/italy-visit-visa" },
  { name: "Schengen Visit Visa", path: "/visitvisas/schengen-visit-visa" },
   
  ];
  

  return (
    
    <header>
       
      
      {/* {/ Top Section /} */}
      <div className="bg-white py-0 px-2 shadow-md z-50 fixed top-0 w-screen">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* {/ Logo /} */}
          <div className="flex items-center -ml-5">
            <Link href="/" className="text-lg font-bold">
              <div className="relative h-14 w-24">
                <Image src="/logo-1.webp" alt="Logo" fill className="object-contain" />
              </div>
            </Link>
            <Link href="/" className="text-lg font-bold">
              <div className="relative h-14 w-28 -ml-6">
                <Image src="/logo-2.webp" alt="Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center ml-4">
            <div className="relative h-8 w-8">
              <Image src="/message.gif" alt="News" fill className="object-contain" />
            </div>
          </div>

          {/* {/ Marquee /} */}
          <div className="marquee-container flex-1 mx-4 hidden md:block">
            <p className="whitespace-nowrap animate-marquee uppercase text-sm text-gray-800">
              Your Study and Work Abroad Opportunities Await! Explore the world with us. Learn more about visa programs and opportunities today!
            </p>
          </div>

          {/* {/ Contact Info /} */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 text-sm text-black uppercase font-semibold italic">
              {["Bangalore", "Hyderabad", "USA"].map((location) => (
                <div key={location} className="flex items-center animate-pulse text-custom-blue">
                  <div className="relative w-5 h-5 mr-1">
                    <Image src="/loc.png" alt={location} fill className="object-contain" />
                  </div>
                  <p>{location}</p>
                </div>
              ))}
            </div>
             
            <div className="hidden md:flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
              <div className="flex items-center animate-pulse text-custom-blue">
                <a href="mailto:info@vjcoverseas.com" className="flex items-center">
                  <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
                  <p>info@vjcoverseas.com</p>
                </a>
              </div>
            </div>

            <div>
              <a href="tel:+919160449000" className="flex items-center text-white py-1 px-0 rounded-lg text-xs lg:text-sm whitespace-nowrap font-bold uppercase mr-3">
                <div className="relative w-6 h-6 mr-1">
                  <Image src="/phone.gif" alt="Phone" fill className="object-contain" />
                </div>
                <span className="text-custom-blue">+91 9160449000</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      

{/* {/ Desktop Navbar /} */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 hidden md:block">
  <nav className="flex justify-between items-center px-2 max-w-7xl py-1.5">
    <div className="flex flex-row -space-x-2 whitespace-nowrap">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          {item.name === "Study Abroad" ? (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
              >
                {item.name}
              </Link>
               
              {/* {/ Study Abroad Submenu /} */}
              <div className="absolute left-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-5 grid-rows-4 gap-2 bg-black bg-opacity-50 p-3 w-[700px] min-h-[200px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                {studyabroadSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : item.name === "Resume Marketing" ? (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
              >
                {item.name}
              </Link>

              {/* {/ Resume Marketing Submenu - OPEN TO LEFT /} */}
              <div className="absolute right-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-3 gap-2 bg-black bg-opacity-50 p-3 w-[500px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                {resumemarketingSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : item.name === "Visit Visas" ? (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
              >
                {item.name}
              </Link>

              {/* {/ Visit Visas Submenu - OPEN TO LEFT /} */}
              <div className="absolute right-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-4 gap-2 bg-black bg-opacity-50 p-3 w-[600px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                {visitvisasSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5  uppercase mt-1"
              >
                {item.name}
              </Link>

              {["Migrate To", "PR Visas", "Job Seeker Visas","Work Abroad","Investor Visas","Services"].includes(item.name) && (
  <div className="absolute left-0 top-full mt-3 invisible bg-gradient-to-br from-orange-500/60 to-black opacity-0 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 flex flex-col space-y-2 bg-black bg-opacity-50 p-3 shadow-xl z-50 transition-all duration-300 ease-in-out">
    {(
      item.name === "Migrate To"
        ? migrateSubPages
        :item.name === "Work Abroad"
        ? WorkabroadSubPages
        : item.name === "PR Visas"
        ? prVisaSubPages
        : item.name === "Services"
        ? servicesSubPages
        : item.name === "Investor Visas"
        ? InvestorvisasSubPages
        : item.name === "Job Seeker Visas"
        ? Jobseeker
        : [] // Fallback
    ).map((subItem) => (
      <Link
        href={subItem.path}
        key={subItem.name}
        className="text-white text-sm font-semibold text-center  px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-nowrap"
      >
        {subItem.name}
      </Link>
    ))}
  </div>
)}

  
            </div>
          )}

          {index < menuItems.length - 1 && (
            <span className="text-white hidden lg:inline-block">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </nav>
</div>


     
<div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col max-w-fit gap-0">
  <Link href="/services">
    <button className="text-white font-bold text-sm bg-[#A67C52] px-3 py-6 shadow-lg rotate-180 [writing-mode:vertical-lr] transition-transform hover:scale-105 hover:bg-[#8D6E4C]">
      Services
    </button>
  </Link>

  <Link href="/assessment">
    <button className="text-white font-bold text-sm bg-orange-500 px-3 py-6 shadow-lg rotate-180 [writing-mode:vertical-lr] transition-transform hover:scale-105 hover:bg-orange-600">
      Assessment
    </button>
  </Link>

  <Link href="/contact-us">
    <button className="text-white font-bold text-sm bg-[#A67C52] px-3 py-6 shadow-lg rotate-180 [writing-mode:vertical-lr] transition-transform hover:scale-105 hover:bg-[#8D6E4C]">
      Contact Us
    </button>
  </Link>
</div>


<div className="bg-orange-500 fixed top-12 w-screen z-50 md:hidden">
  <nav className="flex justify-between items-center py-2 px-4">
    <div className="flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
      <div className="flex items-center animate-pulse text-black">
        <a href="mailto:info@vjcoverseas.com" className="flex items-center">
          <FaEnvelope className="mr-1 w-4 h-8 text-white" />
          <p>info@vjcoverseas.com</p>
        </a>
      </div>
    </div>
     {/* {/ Social Media Icons /} */}
     <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-black text-xl" />
            </a>
            <a href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-black text-xl" />
            </a>
            <a href="https://www.instagram.com/vjcoverseas_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-black text-xl" />
            </a>
          </div>
           {/* {/ Hamburger Menu /} */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>       
  </nav>
  {/* {/ Dropdown Menu for Small Screens /} */}
  <div
        className={`absolute left-0 w-full bg-orange-600 shadow-md transition-all duration-300 ${
          isMenuOpen ? "top-full opacity-100 visible" : "top-[-300px] opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col text-center py-4 space-y-3">
          {menuItems.map((item, index) => (
            <li key={item.name}>
              <Link href={item.path} className="text-white text-lg font-semibold hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              {index < menuItems.length - 1 && <hr className="w-1/2 mx-auto border-white opacity-50" />}
            </li>
          ))}
        </ul>
      </div>
</div>




      <style>
        {`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
          75% { transform: translateX(-3px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.5s infinite;
        }
        `}
      </style>
    </header>
    
 
  );
};

export default Navbar;