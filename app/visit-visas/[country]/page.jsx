import CountryClient from "./CountryClient";
 
// Metadata map
const metaData = {
  usa: {
    title: "USA Visit Visa USA Canada Australia UK Dubai Denmark and Europe Tourist and Business Visa Process and Requirements",
    
    keywords:" USA visit visa, Visit visa, B1/B2 visa application, Tourist visa USA, Business visit USA, Apply USA visitor visa, DS-160 visa form USA, Proof of funds USA visa, Passport validity USA travel visa, Interview US embassy, USA visa processing time, Stay duration USA visitor visa, Intent to return visa USA, Travel insurance USA visa, USA visa documents checklist, USA visitor visa requirements, VJC Overseas, Best Visa Immigration Consultants",
  },
  "usab1/b2": {
    title: "USA Visit Visa B1 B2 Tourist and Business Visa Application Process and Requirements",
    
    keywords: " USA visit visa, B1/B2 visa application, Tourist visa USA, Business visit USA, Apply USA visitor visa, DS-160 visa form USA, Proof of funds USA visa, Passport validity USA travel visa, Interview US embassy, USA visa processing time, USA visitor visa Stay duration, Travel insurance USA visa, USA visa documents checklist, USA visitor visa requirements, VJC Overseas, Best Visa Immigration Consultants",
  },
  canada: {
    title: "Canada Visitor Visa Apply Tourist Business and Family Temporary Resident Visa TRV Canada",
    
    keywords: "Canada visitor visa, visa visa, Apply Canada Visa, Tourist visa Canada, Business visa Canada, Family visitor visa Canada, Canada visa requirements, Canada visa process, Canada visitor visa fees, Canada visitor visa documents, Canada visitor visa eligibility, Canada temporary resident application, Canada short stay visa, Visit Canada for tourism, Canada temporary resident visa, Canada visa appointment, VJC Overseas, Best Visa Immigration Consultants, Canada embassy visa application, Canada multiple entry visitor visa, Canada visitor visa consultants",
  },
  australia: {
    title: "Australia Visitor Visa Tourist Business or Family Visit Without Sponsor",
    
    keywords: "Australia visit visa, Visit visa, Australia visitor visa, Tourist visa Australia, Business visit Australia, Family visit visa Australia, Subclass 600 visitor visa, Australia visitor visa application, Australia tourist visa documents, How to apply visit visa Australia, Proof of funds Australia visa, Australia visa for visitors, Passport validity Australia, Visit visa duration Australia, Visitor Stream Australia, Australia visa process, Australia Immigration Consultants, VJC Overseas, Best Visa Immigration Consultants",
  },
  uk: {
    title: "UK Visitor Visa Apply for Tourist Business and Family Visit Visa Without Sponsor",
    
    keywords:"UK visitor visa, Visit visa , UK Tourist visa, UK Business visit visa, UK Family visit visa, Apply UK visitor visa, UK Standard Visitor visa, UK visa application process, UK Visitor visa requirements, UK visa documents checklist, UK visa eligibility, UK visa appointment, UK visa processing time, UK visa fees, UK visa for tourism, UK visa for business, UK visa for family visits, VJC Overseas, Best Visa Immigration Consultants",
    
  },
  dubai: {
    title: "Dubai Visit Visa for Tourist Business and Family Visitors Easily Without Sponsor ",
    keywords:"Dubai visit visa, Visit visa, Dubai Tourist visa, Dubai Business visit visa, Dubai Family visit visa, Apply Dubai visitor visa, Dubai visa application process, Dubai visa requirements, Dubai visa documents, Dubai visa eligibility, Dubai visa fees, Dubai visa processing time, Dubai visa for tourism, Dubai visa for business, Dubai visa for family visits, Dubai visa consultants, VJC Overseas, Best Visa Immigration Consultants",
  },
  denmark: {
    title: "Denmark Visit Visa Tourist Business and Family Schengen Short Stay Without Sponsor",
   
    keywords: "Denmark visit visa, Visit visa, Denmark Schengen visa, Denmark tourist visa, Denmark business visit visa, Denmark family visit, Denmark short stay visa, Apply Denmark visit visa, Denmark visa documents, Denmark Proof of funds, Travel insurance Denmark Schengen, Denmark Passport validity visa, Denmark visa processing, Denmark visa, Denmark invitation letter, Denmark visa requirements, Denmark visa eligibility, VJC Overseas, Best Visa Immigration Consultants",
  },
  austria: {
    title: "Austria Visitor Visa Tourist Business Family Schengen Short Stay Travel Visa Austria",
    
    keywords: "Austria visit visa, Visit visa, Austria Schengen visa, Austria tourist visa, Austria business visit, Austria family visit, Apply Austria visitor visa, Austria visa documents, proof of funds Austria visa, Travel insurance Austria Schengen, Passport requirements Austria visa, Flight reservations Austria visa, Austria accommodation proof, Austria visa processing, Austria visitor visa eligibility, Austria visa fees, Austria visa application, VJC Overseas, Best Visa Immigration Consultants",
  },
  italy: {
    title: "Italy Visit Visa Tourist Business and Family Stay Schengen Tourist Entry without Sponsor",
    
    keywords: "TItaly visit visa, Visit visa, Italy Schengen visa, Italy visa, Italy tourist visa, Italy business visit, Italy family visit, Apply Italy visitor visa, Italy visa documents, Proof of funds Italy visa, travel insurance Schengen, Italy passport validity, Italy accommodation proof, Italy tourist, Italy visa processing, Italy visitor visa requirements, Italy visa eligibility, VJC Overseas, Best Visa Immigration Consultants",
  },
  schengen: {
    title: "Schengen Tourist Business Family Visa Europe Without Sponsor Short Stay",
    
    keywords: "Schengen visit visa, Visit visa, Schengen tourist visa, Europe business visit visa, Schengen family visit visa, Apply Schengen visa, Stay 90 days Europe visa, Travel insurance Schengen visa, Schengen visa documents, Flight reservation Europe, Schengen Proof of accommodation, Valid passport Schengen visa, Funds proof Schengen visa, visa interview Schengen, Europe visa processing time, Multiple entry Schengen visa, VJC Overseas, Best Visa Immigration Consultants",
  },
  
};
 
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
  const country = params.country.toLowerCase();
  const data = metaData[country];
 
  return {
    title: data?.title || "Visit Visa – Travel Abroad with Ease | VJC Immigration Services",
description: data?.description || "Apply for your visit visa with VJC Immigration Services and explore the world without hassle. Get expert guidance for visa documentation, application processing, and travel planning.",
keywords: data?.keywords || "visit visa, tourist visa, travel visa, short-term visa, family visit visa, business visit visa, visa application, travel abroad, visa consultancy, VJC Immigration Services, international travel"

  };
}

 
 
export default function CountryPage({ params }) {
  return <CountryClient country={params.country} />;
}