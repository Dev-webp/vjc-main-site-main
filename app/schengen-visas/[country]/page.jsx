import CountryClient from "./CountryClient";
 
// Metadata map
const metaData = {
  austria: {
    title: "Austria Schengen Visa Tourist Business Visit Multiple Entry Requirements Documents",
    description: "Apply for Austria Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Austria visa journey.",
    keywords:" Austria Schengen visa, Schengen visa, Schengen visa consultants, Europe visa experts, Austria visa for Indians, Austria visa application, Austria tourist visa, Austria business visa, Austria family visit visa, Austria visa requirements, Austria visa documents, Austria visa, Austria visa processing time, Austria visa appointment, Austria visa application form, Austria visa VFS, Austria tourist visa, Austria business visa, Austria short-stay visa, Austria embassy visa, Austria travel visa, Best Visa Immigration Consultants, VJC Overseas",
  },
  belgium: {
    title: "Belgium Schengen Visa Process & Requirements",
    description: "Apply for Belgium Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Belgium visa experience.",
    keywords: " Belgium Schengen visa, Schengen visa, Schengen visa, Schengen visa consultants, Europe visa experts, Belgium visa for Indians, Belgium tourist visa, Belgium business visa, Belgium family visit visa, Belgium visa requirements, Belgium visa documents, Belgium visa processing time, Belgium visa appointment, Belgium visa application form, Belgium visa, Belgium short-stay visa, Belgium embassy visa, Belgium travel visa, Belgium visa fees, Belgium visa approval rate, Belgium visa interview, Belgium visa appointment booking, Belgium visa appointment slots, Belgium visa biometric requirements, Best Visa Immigration Consultants, VJC Overseas",
  },
  bulgaria: {
    title: "Bulgaria Schengen Visa Requirements | VJC Overseas",
    description: "Apply for Bulgaria Schengen Visa with VJC Overseas. Check eligibility, required documents, fees, application process, and travel requirements for a hassle-free Bulgaria visa experience.",
    keywords: "Bulgaria Schengen visa, Bulgaria visa, Schengen visa, Bulgaria tourist visa, Bulgaria business visa, Bulgaria family visit visa, Bulgaria short-stay visa, Bulgaria visa requirements, Bulgaria visa documents, Bulgaria visa application process, Bulgaria visa processing time, Bulgaria visa appointment, Bulgaria visa application form, Bulgaria embassy visa, Bulgaria travel visa, Bulgaria visa fees, Bulgaria visa approval rate, Bulgaria visa interview, Bulgaria visa biometric requirements, Bulgaria visa appointment slots, Bulgaria visa VFS, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  croatia: {
    title: "Croatia Schengen Visa Requirements & Process Guide",
    description: "Apply for Croatia Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Croatia visa experience.",
    keywords: "Croatia Schengen visa, Croatia visa, Schengen visa, Croatia tourist visa, Croatia business visa, Croatia family visit visa, Croatia short-stay visa, Croatia visa requirements, Croatia visa documents, Croatia visa application process, Croatia visa processing time, Croatia visa appointment, Croatia visa application form, Croatia embassy visa, Croatia travel visa, Croatia visa fees, Croatia visa approval rate, Croatia visa interview, Croatia visa biometric requirements, Croatia visa appointment slots, Croatia visa VFS, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  "czech-republic": {
    title: "Czech Republic Schengen Visa Requirements",
    description: "Apply for Czech Republic Schengen Visa with VJC Overseas. Check eligibility, required documents, fees, application process, and travel requirements for a hassle-free Czech visa experience.",
    keywords:"Czech Republic Schengen visa, Czech visa, Schengen visa, Czech tourist visa, Czech business visa, Czech family visit visa, Czech short-stay visa, Czech visa requirements, Czech visa documents, Czech visa application process, Czech visa processing time, Czech visa appointment, Czech visa application form, Czech embassy visa, Czech travel visa, Czech visa fees, Czech visa approval rate, Czech visa interview, Czech visa biometric requirements, Czech visa appointment slots, Czech visa VFS, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
    
  },
  denmark: {
    title: "Denmark Schengen Visa Guide | VJC Overseas",
    description: "Apply for Denmark Schengen Visa with VJC Overseas. Check eligibility, documents, fees, application process, and travel requirements for a smooth Denmark visa experience.",
    keywords:"Denmark Schengen visa, Denmark visa for Indians, Denmark tourist visa, Denmark business visa, Denmark family visit visa, Denmark short-stay visa, Denmark visa requirements, Denmark visa documents, Denmark visa fees, Denmark visa appointment, Denmark visa processing time, Denmark visa application form, Denmark embassy visa, Denmark travel visa, Denmark visa approval rate, Denmark visa interview, Denmark visa biometric requirements, Denmark visa, Denmark visa appointment booking, Denmark visa appointment slots, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  estonia: {
    title: "Estonia Schengen Visa Requirements | VJC Overseas",
   description: "Apply for Estonia Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Estonia visa experience.",
    keywords: "Estonia Schengen visa, Schengen visa, Estonia visa for Indians, Estonia tourist visa, Estonia business visa, Estonia family visit visa, Estonia short-stay visa, Estonia visa requirements, Estonia visa documents, Estonia visa processing time, Estonia visa appointment, Estonia visa application form, Estonia visa, Estonia embassy visa, Estonia travel visa, Estonia visa fees, Estonia visa approval rate, Estonia visa interview, Estonia visa biometric requirements, Estonia visa appointment slots, Estonia visa appointment booking, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  finland: {
    title: "Finland Schengen Visa Process & Travel Guide",
    description: "Apply for Finland Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Finland visa experience.",
    keywords: "Finland Schengen visa, Schengen visa, Finland visa for Indians, Finland tourist visa, Finland business visa, Finland family visit visa, Finland short-stay visa, Finland visa requirements, Finland visa documents, Finland visa application process, Finland visa processing time, Finland visa appointment, Finland visa application form, Finland embassy visa, Finland travel visa, Finland visa fees, Finland visa approval rate, Finland visa interview, Finland visa biometric requirements, Finland visa appointment slots, Finland visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  france: {
    title: "France Schengen Visa Process & Requirements",
    description: "Apply for France Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth France visa experience.",
    keywords: "France Schengen visa, Schengen visa, France visa for Indians, France tourist visa, France business visa, France family visit visa, France short-stay visa, France visa requirements, France visa documents, France visa processing time, France visa appointment, France visa application form, France embassy visa, France travel visa, France visa fees, France visa approval rate, France visa interview, France visa biometric requirements, France visa appointment slots, France visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  germany: {
    title: "Germany Schengen Visa Process & Requirements",
    description: "Apply for Germany Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Germany visa experience.",
    keywords: "Germany Schengen visa, Schengen visa, Germany visa for Indians, Germany tourist visa, Germany business visa, Germany family visit visa, Germany short-stay visa, Germany visa requirements, Germany visa documents, Germany visa processing time, Germany visa appointment, Germany visa application form, Germany embassy visa, Germany travel visa, Germany visa fees, Germany visa approval rate, Germany visa interview, Germany visa biometric requirements, Germany visa appointment slots, Germany visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  greece: {
    title: "Greece Schengen Visa Requirements | VJC Overseas",
    description: "Apply for Greece Schengen Visa with VJC Overseas. Check eligibility, required documents, fees, application process, and travel requirements for a hassle-free Greece visa experience.",
    keywords: "Greece Schengen visa, Schengen visa, Greece visa for Indians, Greece tourist visa, Greece business visa, Greece family visit visa, Greece short-stay visa, Greece visa requirements, Greece visa documents, Greece visa processing time, Greece visa appointment, Greece visa application form, Greece embassy visa, Greece travel visa, Greece visa fees, Greece visa approval rate, Greece visa interview, Greece visa biometric requirements, Greece visa appointment slots, Greece visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  hungary: {
    title: "Hungary Schengen Visa Guide | VJC Overseas",
    description: "Apply for Hungary Schengen Visa with VJC Overseas. Check eligibility, required documents, fees, application process, and travel requirements for a hassle-free Hungary visa experience.",
    keywords: "Hungary Schengen visa, Schengen visa, Hungary visa for Indians, Hungary tourist visa, Hungary business visa, Hungary family visit visa, Hungary short-stay visa, Hungary visa requirements, Hungary visa documents, Hungary visa processing time, Hungary visa appointment, Hungary visa application form, Hungary embassy visa, Hungary travel visa, Hungary visa fees, Hungary visa approval rate, Hungary visa interview, Hungary visa biometric requirements, Hungary visa appointment slots, Hungary visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  iceland: {
    title: "Iceland Schengen Visa Requirements & Process",
    description: "Apply for Iceland Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Icelandd visa experience.",
    keywords: "Iceland Schengen visa, Schengen visa, Iceland visa for Indians, Iceland tourist visa, Iceland business visa, Iceland family visit visa, Iceland short-stay visa, Iceland visa requirements, Iceland visa documents, Iceland visa processing time, Iceland visa appointment, Iceland visa application form, Iceland embassy visa, Iceland travel visa, Iceland visa fees, Iceland visa approval rate, Iceland visa interview, Iceland visa biometric requirements, Iceland visa appointment slots, Iceland visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  italy: {
    title: "Italy Schengen Visa Process & Requirements",
    description: "Apply for Italy Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Italy visa experience.",
    keywords: "Italy Schengen visa, Schengen visa, Italy visa for Indians, Italy tourist visa, Italy business visa, Italy family visit visa, Italy short-stay visa, Italy visa requirements, Italy visa documents, Italy visa processing time, Italy visa appointment, Italy visa application form, Italy embassy visa, Italy travel visa, Italy visa fees, Italy visa approval rate, Italy visa interview, Italy visa biometric requirements, Italy visa appointment slots, Italy visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  latvia: {
    title: "Latvia Schengen Visa Requirements & Application",
    description: "Apply for Latvia Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Latvia",
    keywords: "Latvia Schengen visa, Schengen visa, Latvia visa for Indians, Latvia tourist visa, Latvia business visa, Latvia family visit visa, Latvia short-stay visa, Latvia visa requirements, Latvia visa documents, Latvia visa processing time, Latvia visa appointment, Latvia visa application form, Latvia embassy visa, Latvia travel visa, Latvia visa fees, Latvia visa approval rate, Latvia visa interview, Latvia visa biometric requirements, Latvia visa appointment slots, Latvia visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  liechtenstein: {
    title: "Liechtenstein Schengen Visa Process & Requirements",
    description: "Apply for Liechtenstein Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Liechtenstein visa experience.",
    keywords: "Liechtenstein Schengen visa, Schengen visa, Liechtenstein visa, Liechtenstein tourist visa, Liechtenstein business visa, Liechtenstein family visit visa, Liechtenstein short-stay visa, Liechtenstein visa requirements, Liechtenstein visa documents, Liechtenstein visa processing time, Liechtenstein visa appointment, Liechtenstein visa application form, Liechtenstein embassy visa, Liechtenstein travel visa, Liechtenstein visa fees, Liechtenstein visa approval rate, Liechtenstein visa interview, Liechtenstein visa biometric requirements, Liechtenstein visa appointment slots, Liechtenstein visa VFS, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  lithuania: {
    title: "Lithuania Schengen Visa Process & Requirements",
    description: "Apply for Lithuania Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Lithuania visa experience.",
    keywords: "Lithuania Schengen visa, Lithuania visa for Indians, Lithuania tourist visa, Lithuania business visa, Lithuania family visit visa, Lithuania short-stay visa, Lithuania visa requirements, Lithuania visa documents, Lithuania visa processing time, Lithuania visa appointment, Lithuania visa application form, Lithuania embassy visa, Lithuania travel visa, Lithuania visa fees, Lithuania visa approval rate, Lithuania visa interview, Lithuania visa biometric requirements, Lithuania visa appointment slots, Lithuania visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  luxembourg: {
    title: "Luxembourg Schengen Visa Process & Requirements",
    description: "Apply for Luxembourg Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Luxembourg visa experience.",
    keywords: "Luxembourg Schengen visa, Luxembourg visa application, Luxembourg tourist visa for Indians, Luxembourg business visa process, Luxembourg family visit visa, Luxembourg short-stay visa requirements, Luxembourg visa documents checklist, Luxembourg visa fees, Luxembourg visa appointment booking, Luxembourg embassy requirements, Luxembourg visa processing time, Luxembourg travel visa guide, Luxembourg multiple entry visa, Luxembourg visa approval tips, Luxembourg visa interview questions, Luxembourg visa biometric info, Luxembourg visa VFS services, Europe visa consultancy, Schengen visa guidance, Luxembourg visa rules, Best Visa Immigration Consultants, VJC Overseas, Luxembourg travel permits, Luxembourg visa for students, Luxembourg short stay travel visa",
  },
  malta: {
    title: "Malta Schengen Visa Guide | VJC Overseas",
    description: "Apply for Malta Schengen Visa with VJC Overseas. Check eligibility, required documents, fees, application process, and travel requirements for a hassle-free Malta visa experience.",
    keywords: "Malta Schengen visa, Malta visa application process, Malta tourist visa requirements, Malta business visa for Indians, Malta family visit visa documents, Malta short-stay visa application, Malta visa appointment online, Malta embassy visa guidelines, Malta travel visa checklist, Malta multiple entry visa, Malta visa fees and charges, Malta visa processing time, Malta visa interview tips, Malta biometric requirements for Malta visa, Malta visa approval rate, Malta visa for students, Malta visa for professionals, Malta visa documents checklist, Malta visa VFS services, Malta visa rules and regulations, Malta Schengen visa guide, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  netherlands: {
    title: "Netherlands Schengen Visa Process & Requirements",
    description: "Apply for Netherlands Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Netherlands visa experience.",
    keywords: "Netherlands Schengen visa, Netherlands visa, Netherlands tourist visa process, Netherlands business visa application, Netherlands family visit visa requirements, Netherlands short-stay visa documents, Netherlands visa appointment online, Netherlands visa embassy guidelines, Netherlands travel visa checklist, Netherlands multiple entry visa, Netherlands visa processing time, Netherlands visa fees and charges, Netherlands visa interview tips, Netherlands biometric requirements, Netherlands visa approval rate, Netherlands student visa, Netherlands professional visa, Netherlands visa application steps, Netherlands visa VFS services, Netherlands visa rules, Schengen visa consultants, Europe visa experts, Best Visa Immigration Consultants, VJC Overseas, Netherlands travel permits",
  },
  norway: {
    title: "Norway Schengen Visa Guide & Application Process",
    description: "Apply for Norway Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Norway visa experience.",
    keywords: "Norway Schengen visa, Norway visa for Indians, Norway tourist visa, Norway business visa, Norway family visit visa, Norway short-stay visa, Norway visa requirements, Norway visa documents, Norway visa processing time, Norway visa appointment, Norway visa application form, Norway embassy visa, Norway travel visa, Norway visa fees, Norway visa approval rate, Norway visa interview, Norway visa biometric requirements, Norway visa appointment slots, Norway visa, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  poland: {
    title: "Poland Schengen Visa Process & Document Guide",
    description: "Apply for poland Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth poland visa experience.",
    keywords: "Poland Schengen visa, Poland visa, Poland tourist visa, Poland business visa, Poland family visit visa, Poland short-stay visa, Poland visa requirements, Poland visa documents, Poland visa processing time, Poland visa appointment, Poland visa application form, Poland embassy visa, Poland travel visa, Poland visa fees, Poland visa approval rate, Poland visa interview, Poland visa biometric requirements, Poland visa appointment slots, Poland visa VFS, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas, Poland travel permits",
  },
  portugal: {
    title: "Portugal Schengen Visa Process & Requirements",
    description: "Apply for Portugal Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Portugal visa experience.",
    keywords: "Portugal Schengen visa, Portugal visa application process, Portugal tourist visa requirements, Portugal business visa application, Portugal family visit visa checklist, Portugal short-stay visa guide, Portugal visa appointment online, Portugal embassy visa instructions, Portugal travel visa tips, Portugal multiple entry visa, Portugal visa fees and charges, Portugal visa processing duration, Portugal visa interview guide, Portugal biometric requirements for Portugal visa, Portugal visa approval rate, Portugal student visa, Portugal professional visa, Portugal visa application steps, Portugal visa VFS services, Portugal visa regulations, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas, Portugal travel permits",
  },
  romania: {
    title: "Romania Schengen Visa Requirements & Process Guide",
    description: "Apply for Romania Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Romania visa experience.",
    keywords: "Romania Schengen visa, Romania visa for Indians, Romania tourist visa process, Romania business visa application, Romania family visit visa documents, Romania short-stay visa guide, Romania visa appointment online, Romania embassy visa instructions, Romania travel visa checklist, Romania multiple entry visa, Romania visa fees and charges, Romania visa processing duration, Romania visa interview tips, Romania biometric requirements for Romania visa, Romania visa approval rate, Romania student visa, Romania professional visa, Romania visa application steps, Romania visa VFS services, Romania visa regulations, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas, Romania travel permits",
  },
  slovakia: {
    title: "Slovakia Schengen Visa Process & Requirements",
    description: "Apply for Slovakia Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Slovakia visexperience.",
    keywords: "Slovakia Schengen visa, Slovakia visa, Slovakia tourist visa process, Slovakia business visa application, Slovakia family visit visa documents, Slovakia short-stay visa requirements, Slovakia visa appointment online, Slovakia embassy visa guidelines, Slovakia travel visa checklist, Slovakia multiple entry visa, Slovakia visa fees and charges, Slovakia visa processing time, Slovakia visa interview tips, Slovakia biometric requirements, Slovakia visa approval rate, Slovakia student visa, Slovakia professional visa, Slovakia visa application steps, Slovakia visa VFS services, Slovakia visa rules, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas, Slovakia travel permits",
  },
  slovenia: {
    title: "Slovenia Schengen Visa Process & Requirements",
    description: "Apply for Slovenia Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Slovenia visa experience.",
    keywords: "Slovenia Schengen visa, Slovenia visa, Slovenia tourist visa process, Slovenia business visa application, Slovenia family visit visa checklist, Slovenia short-stay visa guide, Slovenia visa appointment online, Slovenia embassy visa instructions, Slovenia travel visa tips, Slovenia multiple entry visa, Slovenia visa processing time, Slovenia visa fees and charges, Slovenia visa interview guide, Slovenia biometric requirements for Slovenia visa, Slovenia visa approval rate, Slovenia student visa, Slovenia professional visa, Slovenia visa application steps, Slovenia visa VFS services, Slovenia visa rules, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas, Slovenia travel permits",
  },
  spain: {
    title: "Spain Schengen Visa Requirements & Application Process",
    description: "Apply for Spain Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Spain visa experience.",
    keywords: "Spain Schengen visa, Spain visa, Spain tourist visa process, Spain business visa application, Spain family visit visa requirements, Spain short-stay visa documents, Spain visa appointment online, Spain visa embassy guidelines, Spain travel visa checklist, Spain multiple entry visa, Spain visa processing time, Spain visa fees and charges, Spain visa interview tips, Spain biometric requirements, Spain visa approval rate, Spain student visa, Spain professional visa, Spain visa application steps, Spain visa VFS services, Spain visa rules, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas, Spain travel permits",
  },
  sweden: {
    title: "Sweden Schengen Visa Process & Requirements",
    description: "Apply for Sweden Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Sweden visa experience.",
    keywords: "Sweden Schengen visa, Sweden visa, Sweden tourist visa, Sweden business visa, Sweden family visit visa, Sweden short-stay visa, Sweden visa requirements, Sweden visa documents, Sweden visa processing time, Sweden visa appointment, Sweden visa application form, Sweden embassy visa, Sweden travel visa, Sweden visa fees, Sweden visa approval rate, Sweden visa interview, Sweden visa biometric requirements, Sweden visa appointment slots, Sweden visa VFS, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas",
  },
  switzerland: {
    title: "Switzerland Schengen Visa Process & Requirements",
    description: "Apply for Switzerland Schengen Visa with VJC Overseas. Learn about eligibility, required documents, fees, application process, and travel requirements for a smooth Switzerland visa experience.",
    keywords: "Switzerland Schengen visa, Switzerland visa, Switzerland tourist visa, Switzerland business visa, Switzerland family visit visa, Switzerland short-stay visa, Switzerland visa requirements, Switzerland visa documents, Switzerland visa processing time, Switzerland visa appointment, Switzerland visa application form, Switzerland embassy visa, Switzerland travel visa, Switzerland visa fees, Switzerland visa approval rate, Switzerland visa interview, Switzerland visa biometric requirements, Switzerland visa appointment slots, Switzerland visa VFS, Europe visa experts, Schengen visa consultants, Best Visa Immigration Consultants, VJC Overseas, Switzerland travel permits",
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const country = resolvedParams.country?.toLowerCase();
  const data = metaData[country];

  return {
      title: data?.title || "Schengen Visa – Travel Across Europe with Ease | VJC Travel Services",
description: data?.description || "Apply for your Schengen Visa effortlessly with VJC Travel Services. We assist with documentation, appointment booking, and guidance for smooth travel across 27 European countries.",
keywords: data?.keywords || "Schengen visa, Europe visa, tourist visa, business visa, visa consultancy, Schengen visa assistance, travel to Europe, visa application, visa services, VJC Travel Services"

  };
}

export default async function CountryPage({ params }) {
  const resolvedParams = await params;
  const country = resolvedParams.country;

  return <CountryClient country={country} />;
}
