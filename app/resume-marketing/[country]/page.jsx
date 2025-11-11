import CountryClient from "./CountryClient";
 
// Metadata map
const metaData = {
  canada: {
    title: "Canada Resume Marketing Services ATS-Optimized Resumes for Canadian Job Market",
    
    keywords:" Canada resume marketing, Canadian job market, ATS-compliant resumes, resume optimization, Canadian immigration, IT resume services, LinkedIn profile optimization, Canadian employers, job application support, professional resume writing, Canada work permit, Canada PR visa, Canada Express Entry, Canadian job seekers, resume distribution, job search assistance, resume branding, career advancement, Best Visa Immigration Consultants, VJC Overseas",
  },
  germany: {
    title: "Germany Resume Marketing Services for Jobs IT Careers and Work Visa Opportunities",
    
    keywords: " Germany resume marketing, German job market, IT resume Germany, professional resumes Germany, Germany LinkedIn optimization, job application support Germany, ATS resume Germany, career growth Germany, German employers, Germany work permit, Germany Blue Card, Germany PR visa, Germany resume distribution, Germany job search, Germany executive resume, Germany skill-based resumes, Germany resume branding, Germany application assistance, Best Visa Immigration Consultants, VJC Overseas",
  },
  usa: {
    title: " USA Resume Marketing Services ATS Optimized Resumes for US Job Market",
    
    keywords: "USA resume marketing, Resume marketing Services, US job market, ATS compliant resumes, resume optimization, USA IT resume services, USA LinkedIn optimization, USA professional resume writing, USA job application support, USA career growth, US employers, USA work permit, H1B visa USA, USA PR visa, USA resume distribution, USA job search, USA executive resume, USA skill based resumes, USA resume branding, Best Visa Immigration Consultants, VJC Overseas",
  },
  australia: {
    title: "Australia Resume Marketing Services ATS Optimized Resumes for Australian Job Market",
    
    keywords: "Australia resume services, Australia resume marketing, ATS resumes Australia, Australia IT resume writing, Australia LinkedIn profile, Australia professional CV, Australia job application support, Australia career services, Australian job opportunities, Australia work visa, Australia PR visa, Australia skilled migration, Australia resume distribution, Australia job search, Australia executive CV, Australia skill based resume, Australia resume branding, Australia career growth, Best Visa Immigration Consultants, VJC Overseas",
  },
  uk: {
    title: "UK Resume Marketing Services Professional Resume Writing and Job Application Support",
    keywords:"UK resume services, UK resume marketing, ATS UK resumes, UK IT resume writing, UK LinkedIn optimization, UK professional CV, UK job application, UK career services, UK job opportunities, UK work visa, UK PR visa, UK skilled migration, UK resume distribution, UK job search, UK executive CV, UK skill based resumes, UK resume branding, UK career growth, Best Visa Immigration Consultants, VJC Overseas",
    
  },
  denmark: {
    title: "Denmark Resume Marketing Services ATS Optimized Resumes for Danish Job Market ",
    keywords:"Denmark resume marketing, Danish job market, ATS compliant resumes, Resume optimization, Denmark immigration, IT resume services Denmark, LinkedIn profile optimization, Danish employers, Job application support, Professional resume writing, Denmark work permit, Denmark PR visa, Denmark job seekers, Resume distribution, Job search assistance, Resume branding, Career advancement, Executive resume services, Best Visa Immigration Consultants, VJC Overseas",
  },
  ireland: {
    title: "Ireland Resume Marketing Services Professional CV Writing and Job Application Support",
   
    keywords: "Ireland resume marketing, Ireland resume services, ATS resumes Ireland, Ireland resume writing, Ireland LinkedIn optimization, Ireland job application support, Irish employers, Ireland career services, Ireland work visa, Ireland PR visa, Ireland skilled migration, Ireland resume distribution, Irish job opportunities, Ireland executive resume, Ireland skill based resumes, Ireland resume branding, Ireland career growth, Ireland professional CV, Best Visa Immigration Consultants, VJC Overseas",
  },
  dubai: {
    title: "Dubai Resume Marketing Services Professional CV Writing for UAE Job Market",
    
    keywords: "Dubai resume marketing, Dubai resume services, ATS Dubai resumes, Dubai resume writing, Dubai LinkedIn optimization, Dubai Job application, Dubai professional CV, Dubai career services, Dubai job opportunities, Dubai work visa, UAE resume marketing, Dubai skilled migration, Dubai resume distribution, Dubai job search, Dubai executive resume, Dubai skill based resumes, Dubai resume branding, Dubai career growth, Best Visa Immigration Consultants, VJC Overseas",
  },
  austria: {
    title: "Austria Resume Marketing Services Professional CV Writing for Career Growth",
    
    keywords: "SAustria resume marketing, Austria resume services, ATS Austria resumes, Austria resume writing, Austria LinkedIn optimization, Austria job application, Austria career services, Austrian job market, Austria work visa, Austria skilled migration, Austria resume distribution, Austria executive CV, Austria skill based resumes, Austria resume branding, Austria job search, Austrian employers, Austria professional CV, Austria career growth, Best Visa Immigration Consultants, VJC Overseas",
  },
  singapore: {
    title: "Singapore Resume Marketing Services Professional CV Writing and Job Market Advantage",
    
    keywords: "Singapore resume marketing, Singapore resume services, ATS resumes Singapore, Singapore resume writing, Singapore LinkedIn optimization, Singapore career services, Singapore job opportunities, Singapore work visa, Singapore skilled migration, Singapore resume distribution, Singapore executive resume, Singapore skill based resumes, Singapore resume branding, Singapore employers, Singapore job search, Singapore professional CV, Singapore career growth, Singapore professional resume, Best Visa Immigration Consultants, VJC Overseas",
  },
  newzealand: {
    title: "New Zealand Resume Marketing Services Professional CV Writing for Job and Visa Growth",
    
    keywords: "New Zealand resume marketing, New Zealand resume services, ATS New Zealand resumes, New Zealand resume writing, New Zealand LinkedIn optimization, New Zealand job opportunities, New Zealand career services, New Zealand work visa, New Zealand skilled migration, New Zealand resume distribution, New Zealand executive CV, New Zealand skill based resumes, New Zealand resume branding, New Zealand employers, New Zealand professional CV, New Zealand career growth, NZ work visa jobs, NZ job market, Best Visa Immigration Consultants, VJC Overseas",
  },
  malaysia: {
    title: "Malaysia Resume Marketing Services Professional CV Writing for Career Success",
    
    keywords: "Malaysia resume marketing, Malaysia resume services, ATS Malaysia resumes, Malaysia resume writing, Malaysia LinkedIn profile, Malaysia job search, Malaysia career services, Malaysia work visa, Malaysia skilled migration, Malaysia resume distribution, Malaysian job opportunities, Malaysia executive resume, Malaysia skill based resumes, Malaysia resume branding, Malaysian employers, Malaysia professional CV, Malaysia career growth, Malaysia employment opportunities, Best Visa Immigration Consultants, VJC Overseas",
  },
  poland: {
    title: "Poland Resume Marketing Services Professional CV Writing for Career Opportunities",
    
    keywords: "Poland resume marketing, Poland CV services, ATS Poland resumes, Poland professional resume writing, Poland LinkedIn profile, Poland job search, Poland career services, Poland work visa, Poland skilled migration, Poland resume distribution, Poland job opportunities, Polish employers, Poland executive CV, Poland skill based resumes, Poland resume branding, Polandcareer growth, employment in Poland, Poland professional CV, Best Visa Immigration Consultants, VJC Overseas",
  },
  malta: {
    title: "Malta Resume Marketing Services Professional CV Writing and Career Opportunities",
    
    keywords: "Malta resume marketing, Malta resume services, ATS Malta resumes, Malta resume writing, Malta LinkedIn optimization, Malta job opportunities, Malta career services, Malta work visa, Malta skilled migration, Malta resume distribution, Malta executive CV, Malta skill based resumes, Malta resume branding, Malta employers, Malta job search, Malta professional CV, Malta career growth, Malta employment, Malta international resume, Best Visa Immigration Consultants, VJC Overseas",
  },
  
};
 
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
  const country = params.country.toLowerCase();
  const data = metaData[country];
 
  return {
    title: data?.title || "Resume Marketing – Boost Your Career Opportunities | VJC Career Services",
description: data?.description || "Get expert guidance to market your resume effectively with VJC Career Services. Improve your visibility, attract top employers, and land your dream job with a professionally crafted resume.",
keywords: data?.keywords || "resume marketing, professional resume services, CV writing, LinkedIn optimization, career growth, job application assistance, resume tips, professional branding, interview preparation, career consultancy, job search services"

  };
}

 
 
export default function CountryPage({ params }) {
  return <CountryClient country={params.country} />;
}