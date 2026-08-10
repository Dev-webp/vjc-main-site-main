import CountryClient from "./CountryClient";

// Metadata map
const metaData = {
  usa: {
    title: "USA EB5 Investor Visa & Green Card Guide",
    description: "Explore USA EB5 Investor Visa with VJC Overseas. Learn about investment requirements, eligibility criteria, Green Card process, documents, and pathways to US residency.",
    keywords:
      "USA investor visa, EB5 USA visa, US Green Card by investment, EB5 investment program, USA residency by investment, EB5 visa minimum investment, EB5 visa requirements USA, lawful source of funds EB5, EB5 regional center USA, USA investor green card, permanent residency EB5 USA, EB5 visa process steps, USA immigration by investment, conditional green card EB5, EB5 job creation requirement, USA investor visa consultants, EB5 documents checklist USA, EB5 processing time, VJC Overseas, Best Visa Immigration Consultants",
  },
  canada: {
    title:
      "Canada Investor Visa Programs | VJC Overseas",
      description: "Explore Canada Investor Visa Programs with VJC Overseas. Learn about investment options, eligibility criteria, required documents, application process, and business opportunities in Canada.",
    keywords:
      "Canada Investor visa, Start-Up Visa Canada, Entrepreneur visa Canada, Business investment visa Canada, Investor PR program Canada, Canada residency by investment, Provincial nominee investor streams, Quebec Investor visa, Canadian Investor visa requirements, proof of funds Canada Investment, Startup business support Canada, Investor visa for dependents Canada, Business plan requirement Canada, Canada investor visa documents, Investor visa processing time Canada, Canada PR investor route, Canada immigration by investment, VJC Overseas, Best Visa Immigration Consultants",
  },
  germany: {
    title:
      "Germany Investor Visa & Business Residency Guide",
      description: "Explore Germany Investor Visa and business residency with VJC Overseas. Learn eligibility, investment options, documents, application process, and opportunities for entrepreneurs in Germany.",
    keywords:
      "Germany investor visa, Germany Residency by investment, Germany Business startup visa, Germany Investor residency permit, Germany investor visa job creation , Proof of funds Germany residence visa, Legal business plan Germany investor, German Investor visa EUR 250000, Germany investment program, Documents required Investor visa Germany, Germany Investor visa eligibility, Germany Investor visa family, Germany Immigration by investment, Germany visa consultants, VJC Overseas, Best Visa Immigration Consultants",
  },
  australia: {
    title:
      "Australia Investor Visa Requirements & PR Process Guide",
      description: "Explore Australia Investor Visa and Business Migration with VJC Overseas. Learn about eligibility, investment options, documents, application process, and business opportunities in Australia.",
    keywords:
      "Australia Investor visa, Business Investment visa Australia, Investor visa, Australia residency by investment, Entrepreneur visa Australia, Subclass 188 Australia, Subclass 888 Australia, AUD 1.5 million investor stream, AUD 5 million investor stream, Investment visa documents Australia, Prove funds Australia investor, Business plan Australia visa, Investor visa eligibility Australia, Australia Investor visa requirements, Australia Investor processing time, Australia Immigration by Investment, VJC Overseas, Best Visa Immigration Consultants",
  },
  uk: {
    title:
      "UK Investor Visa | VJC Overseas",
      description: "Explore UK Investor Visa options with VJC Overseas. Learn about eligibility criteria, investment pathways, required documents, application process, and opportunities for investors in the UK.",
    keywords:
      "UK Investor visa, Tier 1 Investor UK, £2 million Investment visa UK, Permanent Residency UK Investment, UK ILR for investors, UK settlement through Investment, Funds proof UK investor visa, Investment UK visa, UK visa documents Investor, Existing Tier 1 investor extension, UK Investor visa benefits, Business investment UK, Immigration by investment UK, UK residence permit by Investor, UK Investor visa eligibility, VJC Overseas, Best Visa Immigration Consultants",
  },
  uae: {
    title:
      "UAE Investor Visa & Golden Residency Guide",
      description: "Explore UAE Investor Visa and Golden Residency with VJC Overseas. Learn eligibility, investment options, documents, application process, and benefits of living and investing in UAE.",
    keywords:
      "UAE Investor visa, Golden Visa UAE Investment, AED 2 million Investment UAE, real estate Investor visa UAE, business Investor UAE Golden Visa, UAE Residency by Investment, Investor visa family sponsorship UAE, Investor visa without sponsor UAE, Golden Visa requirements UAE, UAE Investor visa process, Proof of funds Golden Visa, UAE Investor visa documents checklist, UAE Golden Investor visa eligibility, UAE Investor visa benefits, UAE Investor visa cost, Dubai Investor visa, real estate Golden Visa UAE, VJC Overseas, Best Visa Immigration Consultants",
  },
  portugal: {
    title:
      "Portugal Golden Visa & Investor Residency Guide",
      description: "Explore Portugal Golden Visa with VJC Overseas. Learn about investment options, eligibility criteria, residency requirements, documents, application process, and benefits in Portugal.",
    keywords:
      "Portugal Investor visa, Portugal Golden Visa, Portugal Investment visa, Portugal Residency by investment, Portugal Business Investment visa, Portugal Investor fund, Portugal visa, Portugal Heritage donation visa, Job creation Investment visa, Portugal Investor eligibility, 5 years Portugal, visa documents Portugal investor, Investor visa family Portugal, Portugal Investor visa process, Investor visa cost Portugal, Portugal Investor residency permit, VJC Overseas, Best Visa Immigration Consultants",
  },
  austria: {
    title:
      "Austria Investor Visa Requirements & Residency Guide",
      description: "Explore Austria Investor Visa and residency options with VJC Overseas. Learn eligibility, investment requirements, documents, application process, and benefits of living in Austria.",
    keywords:
      "Austria Investor visa, Austria residence by investment, Austria golden visa, Investor visa €50 000 Austria, German language A1 Austria visa, Austria private residence program, Austria visa accommodation requirement, Austria visa health insurance, Austria Business investment visa, Austria residence permit for Investors, apply Austria Investor visa, Austria visa Documents, Austria Investor eligibility, Austrian residence Investment, Austria visa process, Austria Immigration by Investment, VJC Overseas, Best Visa Immigration Consultants",
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const country = resolvedParams.country?.toLowerCase();
  const data = metaData[country];

  return {
    title:
      data?.title ||
      "Investor Visa – Invest and Settle Abroad | VJC Immigration Services",
    description:
      data?.description ||
      "Secure your future with the Investor Visa program through VJC Immigration Services. Get expert assistance to invest, migrate, and establish your business overseas with professional visa guidance.",
    keywords:
      data?.keywords ||
      "investor visa, business visa, investment immigration, residency by investment, golden visa, entrepreneur visa, business migration, international investment, permanent residency, global business opportunities, VJC Immigration Services",
  };
}

export default async function CountryPage({ params }) {
  const resolvedParams = await params;
  const country = resolvedParams.country;

  return <CountryClient country={country} />;
}
