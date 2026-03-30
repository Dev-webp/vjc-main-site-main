import CountryClient from "./CountryClient";

// Metadata map
const metaData = {
  "passport-services": {
    title: "Passport Services Complete Guide for First-Time Applications Renewals Corrections Assistance",
    keywords:
      "Passport Services, Passport Application, Passport Renewal, Travel Document Assistance, Document Verification for Passport, Visa Services, Study Visa, Work Visa, Job Seeker visa, Tourist visa, Dependent visa, Investor visa, Immigration services, Visa Application help, Visa Guidance, PR visa, Visa Consultancy, Visa Processing, Visa Support, Immigration Consultant, Best Visa Immigration Consultants, VJC Overseas",
  },
  "air-ticketing": {
    title: "Affordable Air Ticketing Services Domestic and International Flights Group Bookings",
    keywords:
      "Air ticketing, Domestic flights, International flights, Group bookings, Fight reservations, Travel agency, Flight deals, Budget travel, Airline Partnerships, Flight itinerary, Travel planning, Flight booking Assistance, Travel Consultants, Flight discounts, Last-minute flights, Round-trip tickets, One-way tickets, Travel packages, VJC Overseas, Best Visa Immigration Consultants",
  },
  "forex-services": {
    title: "Forex Services Competitive Exchange Rates and Efficient Currency Exchange Solutions",
    keywords:
      "Forex services, Currency Exchange, Competitive Exchange rates, International travel, Financial transactions, Travel money solutions, Foreign Exchange Assistance, Forex Guidance, Money Transfer services, Travel Currency Exchange, Forex Consultancy, Currency Conversion Services, International Money Transfers, Forex support, Travel Finance Solutions, Currency Exchange Consultants, Forex Assistance, Travel Money Planning, Foreign Currency Exchange, International Currency Services, VJC Overseas, Best Visa Immigration Consultants",
  },
  "free-assessment": {
    title:
      "Free Visa Assessment and Study Abroad Eligibility Check Personalized Online Evaluation",
    keywords:
      "Free assessment, Free Immigration Assessment, Free Eligibility check, visa Assessment Online, Study Abroad Evaluation, Personalized visa guidance, Free counseling, Immigration Eligibility check, Free Study visa Assessment, Quick visa Assessment, Online Eligibility test, Free visa consultation, Study abroad eligibility, Immigration check, Work visa assessment, PR eligibility check, Free visa review, Personalized assessment, Visa Eligibility Check, Study Abroad Assessment, Job Seeker Visa Evaluation, PR visa Eligibility, Immigration Consultancy, visa Guidance, Free Eligibility Check, Immigration Support, Visa Assessment Service, VJC Overseas, Best Visa Immigration Consultants",
  },
  "free-counselling": {
    title:
      "Free Counselling for Study Abroad Visa Immigration Career Guidance Personalized Support",
    description:
      "Free counselling, Study Abroad Guidance, visa Immigration Advice, Career Counselling, Personalized support, Overseas Education, Job Seeker Assistance, University Selection, Scholarship guidance, visa process support, Educational planning, Career path advice, International Opportunities, Document review, Interview Preparation, Resume Assistance, Cultural Adaptation, Overseas Career Counseling, VJC Overseas, Best Visa Immigration Consultants",
  },
};

// ── generateMetadata: await params (Next.js 15 requirement) ──
export async function generateMetadata({ params }) {
  const { country } = await params;
  const data = metaData[country.toLowerCase()];

  return {
    title:
      data?.title ||
      "Services – Passport Services, Air Ticketing, Forex & More | VJC Overseas",
    description:
      data?.description ||
      "Explore professional services by VJC Overseas including passport services, air ticketing, forex support, free assessment, free counselling and complete travel assistance. Reliable, fast and customer-friendly service for your travel and immigration needs.",
    keywords:
      data?.keywords ||
      "passport services, air ticketing, forex services, free assessment, free counselling, visa services, travel assistance, document services, VJC Overseas services, immigration support",
  };
}

// ── Page component: await params (Next.js 15 requirement) ──
export default async function CountryPage({ params }) {
  const { country } = await params;
  return <CountryClient country={country} />;
}