import CountryClient from "./CountryClient";

export async function generateMetadata({ params }) {
  const { country } = await params;

  switch (country) {
    case "australia-work-permit":
      return {
        title: "Australia Work Permit Visa | VJC Overseas",
      };

    case "canada-work-permit":
      return {
        title: "Canada Work Permit Process & Requirements | VJC",
      };

    case "dubai-work-permit":
      return {
        title: "Dubai Work Permit Process & Requirements | VJC",
      };
    case "denmark-work-permit":
  return {
    title: "Denmark Work Permit Visa | VJC Overseas",
    description: "Explore Denmark Work Permit eligibility, required documents, visa process, and job opportunities with VJC Overseas for professionals planning to work abroad.",
  };
  case "dubai-work-permit":
  return {
    title: "Dubai Work Permit Process & Requirements | VJC",
    description: "Get complete details about Dubai Work Permit eligibility, required documents, application process, and visa requirements with VJC Overseas for working in UAE.",
  };
  case "germany-work-permit":
  return {
    title: "Germany Work Permit Visa Process & Requirements",
    description: "Learn about Germany Work Permit Visa eligibility, requirements, documents, and application process for skilled professionals. Get expert guidance from VJC Overseas for your Germany career opportunities.",
  };
case "united-kingdom-work-permit":
  return {
    title: "UK Work Permit Visa Process & Requirements",
    description: "Explore UK Work Permit eligibility, visa requirements, required documents, and application steps for skilled professionals. Get professional guidance from VJC Overseas for UK work opportunities.",
  };
  case "usa-h1b-visa":
  return {
    title: "USA H1B Work Visa Process & Requirements",
    description: "Understand USA H1B Visa eligibility, application process, required documents, and opportunities for skilled professionals. Get expert assistance from VJC Overseas for your US career goals.",
  };
case "canada-work-permit":
  return {
    title: "Canada Work Permit Visa Requirements & Process Guide",
    description: "Learn about Canada Work Permit eligibility, requirements, documents, and application process for foreign workers. Get expert assistance from VJC Overseas for your Canada work opportunities.",
  };
  case "australia-work-permit":
  return {
    title: "Australia Work Permit Visa for Skilled Professionals",
    description: "Explore Australia Work Permit eligibility, requirements, documents, and application steps for skilled professionals. Get trusted visa assistance from VJC Overseas for working in Australia.",
  };
  case "dubai-work-permit":
  return {
    title: "Dubai Work Visa Process for Skilled Professionals",
    description: "Discover Dubai Work Permit eligibility, requirements, documents, and application process for foreign workers. Get professional visa assistance from VJC Overseas for Dubai jobs.",
  };
  case "usa-h1b-visa":
  return {
    title: "USA H1B Work Visa Process & Requirements Guide",
    description: "Learn about USA H1B Work Visa eligibility, requirements, documents, and application process for skilled professionals. Get trusted visa assistance from VJC Overseas.",
  };
  case "united-kingdom-work-permit":
  return {
    title: "UK Work Permit Visa Process for Skilled Workers",
    description: "Learn about UK Work Permit Visa eligibility, requirements, documents, and application process for skilled professionals. Get expert guidance from VJC Overseas for UK employment opportunities.",
  };
    default:
      return {};
  }
}

export default function Page() {
  return <CountryClient />;
}