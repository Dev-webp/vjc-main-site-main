import CountryClient from "./CountryClient";

// Metadata map
const metaData = {
  usa: {
    title: "Study in USA – Top Universities & Visa Support | VJC Overseas",
    description: "Get expert guidance to study in the USA. Explore top universities, scholarships, courses & student visa options with VJC Overseas. Start today!",
    keywords:" study abroad, usa visa, abroad education consultants, visa for united states, golden visa, study abroad consultants, usa visa application, overseas study consultants, foreign study consultancy, abroad for studies, best immigration consultants in hyderabad, best immigration consultants in bangalore, foreign study consultancy, foreign education consultants, study in usa",
  },
  canada: {
    title: "Study in Canada – Top Universities & Visa Support | VJC",
    description: "Explore studying in Canada with VJC Overseas. Get expert support on top universities, scholarships, visa process & PR pathways. Start your journey now!",
    keywords: " abroad education consultants, foreign education consultants, study in canada, canada student visa, study abroad, best immigration consultants in bangalore, best immigration consultants in hyderabad, canada visa application, canada immigration, express entry canada, study abroad consultants, overseas education consultants, canada education visa, study abroad consultants near me,canada visa",
  },
  uk: {
    title: "Study in UK – Top Universities & Visa Guidance | VJC Overseas",
    description: "Study in the UK with VJC Overseas. Explore top universities, scholarships, visa process & post-study work options. Get expert guidance and support today.",
    keywords: "study in uk, uk student visa, uk study visa, uk study visa fees, requirements for uk study visa, best universities in uk, top universities in uk, uk student visa fees, study abroad, study abroad consultants, abroad education consultants, overseas education consultants, study abroad consultants near me, foreign education consultants, foreign study consultancy",
  },
  australia: {
    title: "Study in Australia – Top Universities & Visa Support | VJC",
    description: "Study in Australia with VJC Overseas. Get expert guidance on top universities, scholarships, visa process & post-study work opportunities. Start now!",
    keywords: "student visa australia, study abroad australia, apply for student visa australia, australia study, student visas australia, immigration consultants, australia immigration, australia permanent residency, australia pr visa, australia work visa, australia job visa, australia work permit, australia visit visa, australia visa work permit, immigration australia",
  },
  germany: {
    title: "Study in Germany – Top Universities & Visa Help | VJC Overseas",
    keywords:"study in germany, immigration consultants, germany study visa, germany study abroad, top universities in germany, top universities in germany, best universities in germany, masters in germany, student visa in germany, top rated universities in germany, germany visa for students, best immigration consultants in Hyderabad, best immigration consultants in Bangalore, germany visa, germany opportunity card, germany study visa",
    description: "Start your study journey in Germany with VJC Overseas. Get expert help with top universities, study visa process, scholarships & PR opportunities.",
  },
  italy: {
    title: "Study in Italy | Best Italy Education Consultant in India	",
    keywords:"best universities in Europe,Italy university,university Italy,top universities in Europe,study in Europe,university of Europe,university in Italy,europe university ,study in Italy,best universities in italy,abroad education consultants,study abroad consultants,best immigration consultants in Hyderabad,best immigration consultants in Bangalore,immigration consultants",
    description: "Study in Italy with VJC Overseas – trusted consultants in India for 2025 admissions, scholarships, top universities, and complete visa support.",
  },
  philippines: {
    title: "Study Abroad in the Philippines | VJC Overseas – Expert Guidance",
    keywords:"study abroad philippines, study in philippines, study abroad consultants, abroad consultants near me, philippines visa, philippines university, best abroad education consultants, best immigration consultants in hyderabad, best immigration consultants in bangalore, immigration consultants, philippines education system, mbbs in philippines,philippnes entry visa,Philippines study visa,Philippines",
    description: "Start your study abroad journey in the Philippines with VJC Overseas. Get expert help on top universities, student visas, admissions, and scholarships.",
  },
  netherlands: {
    title: "Netherlands Study Visa & Universities – Apply Now with VJC",
    keywords:"universities in netherlands, study abroad consultants, netherlands student visa, study in netherlands, netherlands study visa, netherlands universities, holland university, best universities in holland, schengen visa, schengen visa application, europe visa, abroad education consultants, foreign education consultants, best immigration consultants in bangalore, best immigration consultants in hyderabad",
    description: "Explore study opportunities in the Netherlands with VJC Overseas. Get expert help on top universities, student visa process, scholarships & more.",
  },
  newzealand: {
    title: "Study in New Zealand | VJC Overseas - Your Trusted Study Abroad",
    keywords:"best immigration consultants in hyderabad, immigration consultants, best immigration consultants in bangalore, new zealand study visa, study abroad new zealand, study in new zealand, new zealand pr, study abroad consultants,newzealand visa ,immigration new zealand, new zealand entry visa, new zealand university,best university in new zealand, abroad education consultants,study abroad consultants near me",
    description: "Begin your study abroad journey in New Zealand with VJC Overseas. Expert guidance on top universities, visas, scholarships, and admission support.",
  },

};

export function generateMetadata({ params }) {
  const country = params.country.toLowerCase();
  const data = metaData[country];

  return {
    title: data?.title || "Study Abroad – Explore Global Education Paths | VJC Overseas",
    description: data?.description || "Get expert guidance to study abroad with VJC Overseas. Explore top universities, countries, scholarships & student visa options. Begin your journey now!",
    keywords: data?.keywords || " study abroad consultants, overseas education consultants, study abroad with scholarship, study abroad, abroad education consultants, foreign study consultancy, overseas study consultants, abroad for studies, study in UK, study in Canada, study in Australia, study in Germany",
  };
}

export default function CountryPage({ params }) {
  return <CountryClient country={params.country} />;
}