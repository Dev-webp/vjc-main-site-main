



import Nav from "./Nav";

import Two from "./Two";

export async function generateMetadata({ params }) {
  const { country, visas } = await params;

  const pageKey = `${country}-${visas}`;

  switch (pageKey) {
    case "canada-work-permit-lmia":
      return {
        title: "Canada LMIA Work Permit Process & Requirements | VJC",
      };
     case "australia-work-permit-work-visa-subclass-189":
    return {
      title: "International Work Permit Visa | VJC Overseas",
    };

case "dubai-work-permit-dubai-standard-work-visa":
  return {
    title: "Work Permit Visa for Nurses | VJC Overseas",
  };
  case "united-kingdom-work-permit-uk-long-term-work-visa":
  return {
    title: "Work Permit Visa Consultants | VJC Overseas",
  };
  case "united-kingdom-work-permit-uk-skilled-worker-visa":
  return {
    title: "Work Permit Visa for IT Professionals | VJC Overseas",
  };
  case "australia-work-permit-employer-186-visa":
  return {
    title: "Skilled Work Permit Visa | VJC Overseas",
    description: "Apply for Australia Employer Nomination Scheme Visa (Subclass 186) with VJC Overseas. Check eligibility, requirements, visa process, and expert guidance for permanent residency",
  };
case "germany-work-permit-blue-visa":
  return {
    title: "Germany Blue Card Work Visa | VJC Overseas",
    description: "Explore Germany Blue Card Work Visa with VJC Overseas. Check eligibility, salary requirements, documents and application process for skilled professionals.",
  };
  case "australia-work-permit-482-visa":
  return {
    title: "Work Permit Visa for IT Professionals | VJC Overseas",
    description: "Apply for Australia 482 Work Visa with VJC Overseas. Learn eligibility, visa requirements, documents, application process and employer sponsorship details.",
  };
case "denmark-work-permit":
  return {
    title: "Denmark Work Permit Visa Process & Guide",
  };
  case "denmark-work-permit-denmark-pay-limit-scheme-visa":
  return {
    title: "Denmark Pay Limit Scheme Visa | VJC Overseas",
    description: "Learn about Denmark Pay Limit Scheme Visa eligibility, salary requirements, application process, and required documents with VJC Overseas. Get expert guidance for your Denmark work visa journey.",
  };
case "united-kingdom-work-permit-uk-health-and-care-worker-visa":
  return {
    title: "UK Health and Care Worker Visa | VJC Overseas",
    description: "Explore UK Health & Care Worker Visa eligibility, requirements, documents, application process, and opportunities for healthcare professionals with VJC Overseas expert visa guidance.",
  };
  case "united-kingdom-work-permit-uk-tire-4-visa":
  return {
    title: "UK Student Visa (Tier 4) | VJC Overseas",
    description: "Learn about UK Tier 4 Student Visa eligibility, required documents, application steps, and study requirements. Get expert guidance from VJC Overseas for your UK education journey.",
  };
  case "germany-work-permit-employment-visa":
  return {
    title: "Germany Employment Visa | VJC Overseas",
    description: "Understand Germany Employment Visa eligibility, required documents, application process, and work opportunities for skilled professionals. Get expert visa assistance from VJC Overseas for your Germany career journey.",
  };

  case "canada-work-permit-open-work-permit":
  return {
    title: "Canada Open Work Permit Visa Guide",
    description: "Learn about Canada Open Work Permit eligibility, requirements, documents, and application process. Get expert guidance from VJC Overseas to explore work opportunities in Canada.",
  };
  case "dubai-work-permit-dubai-golden-visa":
  return {
    title: "Dubai Golden Visa Process & Eligibility Guide",
    description: "Explore Dubai Golden Visa eligibility, investment options, requirements, documents, and application process. Get expert assistance from VJC Overseas for your UAE residency journey.",
  };
  case "denmark-work-permit-denmark-employment-visa":
  return {
    title: "Denmark Employment Visa | VJC Overseas",
    description: "Learn about Denmark Employment Visa eligibility, required documents, application process, and work opportunities for skilled professionals. Get expert visa guidance from VJC Overseas for your Denmark career journey.",
  };
  case "canada-work-permit-w1-visa":
  return {
    title: "Canada W1 Work Permit Visa Requirements & Process",
    description: "Learn about Canada W1 Work Visa eligibility, required documents, application process, and work opportunities. Get expert visa assistance from VJC Overseas for your Canada career journey.",
  };
  case "germany-work-permit-freelance-visa":
  return {
    title: "Germany Freelance Visa Process & Requirements",
    description: "Learn about Germany Freelance Visa eligibility, requirements, documents, and application process for self-employed professionals. Get expert guidance from VJC Overseas for your Germany career journey.",
  };
case "australia-work-permit-working-holiday-417-visa":
  return {
    title: "Australia Working Holiday Visa 417 Process",
    description: "Explore Australia 417 Working Holiday Visa eligibility, requirements, application process, and work opportunities for young professionals. Get expert visa assistance from VJC Overseas.",
  };
  case "germany-work-permit-work-permit-visa":
  return {
    title: "Germany Work Permit Visa Process & Requirements",
    description: "Understand Germany Work Visa eligibility, required documents, application steps, and opportunities for skilled professionals. Get trusted visa support from VJC Overseas for your Germany employment journey.",
  };
  case "denmark-work-permit-denmark-positive-list-visa":
  return {
    title: "Denmark Positive List Visa Process & Requirements",
    description: "Learn about Denmark Positive List Visa eligibility, in-demand occupations, required documents, and application process. Get expert guidance from VJC Overseas to work in Denmark successfully.",
  };
case "germany-work-permit-job-seeker-visa":
  return {
    title: "Germany Job Seeker Visa Process & Requirements",
    description: "Explore Germany Job Seeker Visa eligibility, requirements, documents, and application process for skilled professionals. Get expert guidance from VJC Overseas to find jobs in Germany.",
  };
  case "australia-work-permit-nomited-visa-subclass-190":
  return {
    title: "Australia Subclass 190 Visa Requirements & Guide",
    description: "Learn about Australia 190 Visa eligibility, requirements, documents, and application process for skilled professionals. Get expert guidance from VJC Overseas for your Australian permanent residency journey.",
  };
  case "dubai-work-permit-dubai-green-visa":
  return {
    title: "Dubai Green Visa Requirements & Application Guide",
    description: "Explore Dubai Green Visa eligibility, requirements, documents, and application process for skilled professionals, freelancers, and investors. Get expert visa assistance from VJC Overseas.",
  };
  case "united-kingdom-work-permit-uk-short-term-work-visa":
  return {
    title: "UK Short Term Work Visa Process & Requirements",
    description: "Learn about UK Short Term Work Visa eligibility, requirements, documents, and application process for temporary employment opportunities. Get expert support from VJC Overseas.",
  };
  case "denmark-work-permit-denmark-trainee-visa":
  return {
    title: "Denmark Trainee Visa Process & Requirements",
    description: "Understand Denmark Trainee Visa eligibility, required documents, application process, and training opportunities. Get trusted visa guidance from VJC Overseas for Denmark.",
  };
case "germany-work-permit-opportunity-card":
  return {
    title: "Germany Opportunity Card Visa Requirements Guide",
    description: "Explore Germany Opportunity Card Visa eligibility, requirements, points system, and application process for skilled professionals. Get expert assistance from VJC Overseas.",
  };
  case "united-kingdom-work-permit-uk-tire-2-visa":
  return {
    title: "UK Tier 2 Work Visa Requirements & Process",
    description: "Learn about UK Tier 2 Work Visa eligibility, requirements, documents, and application process for skilled workers. Get professional visa assistance from VJC Overseas.",
  };
case "canada-work-permit-w1-visa":
  return {
    title: "Canada W1 Work Permit Visa Process & Requirements",
    description: "Learn about Canada W1 Work Visa eligibility, requirements, documents, and application process for skilled workers. Get expert guidance from VJC Overseas for your Canadian work opportunities.",
  };
case "canada-work-permit-lmia":
  return {
    title: "Canada LMIA Work Permit Visa Process | Apply Now",
    description: "Learn about Canada LMIA Work Permit eligibility, requirements, documents, and application process for foreign workers. Get expert guidance from VJC Overseas for Canadian employment opportunities.",
  };
case "australia-work-permit-work-visa-subclass-189":
  return {
    title: "Australia Subclass 189 Visa Requirements & Process",
    description: "Learn Australia Subclass 189 Work Visa process, eligibility criteria, points requirements, and application details for skilled professionals.",
  };
  case "germany-work-permit-job-seeker-visa":
  return {
    title: "Germany Job Seeker Visa Process & Requirements",
    description: "Learn about Germany Job Seeker Visa eligibility, required documents, application process, and opportunities for skilled professionals. Get expert guidance from VJC Overseas.",
  };
  case "dubai-work-permit-dubai-standard-work-visa":
  return {
    title: "Dubai Work Visa Process | VJC Overseas",
    description: "Apply for Dubai Work Visa with VJC Overseas. Get complete guidance on eligibility, visa requirements, application process, and expert support for working in Dubai.",
  };
  case "germany-work-permit-work-permit-visa":
  return {
    title: "Germany Work Permit Visa Process for Professionals",
    description: "Explore Germany Work Visa eligibility, requirements, documents, and application process for skilled workers. Get expert guidance from VJC Overseas for Germany employment opportunities.",
  };
  case "united-kingdom-work-permit-uk-skilled-worker-visa":
  return {
    title: "UK Skilled Worker Visa Requirements & Process",
    description: "Apply for UK Skilled Worker Visa with VJC Overseas. Check eligibility, required documents, application process, and expert assistance to work in the UK successfully.",
  };
  case "united-kingdom-work-permit-uk-long-term-work-visa":
  return {
    title: "UK Long Term Work Visa Requirements & Process",
    description: "Apply for UK Long Term Work Visa with VJC Overseas. Learn eligibility criteria, required documents, visa process, and expert guidance for working in the UK.",
  };
    default:
      return {};
  }
}
const textContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};




const ContactPage = () => {
  

  

  return (
    <>
      {/* Navbar */}
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>

      {/* Main Section */}
     

      {/* Other Sections */}
      <Two />
    </>
  );
};

export default ContactPage;
