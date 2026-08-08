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
  };
  case "dubai-work-permit":
  return {
    title: "Dubai Work Permit Process & Requirements | VJC",
  };
  case "germany-work-permit":
  return {
    title: "Germany Work Permit Visa Process & Requirements",
  };
case "united-kingdom-work-permit":
  return {
    title: "UK Work Permit Visa Process & Requirements",
  };
  case "usa-h1b-visa":
  return {
    title: "USA H1B Work Visa Process & Requirements",
  };
case "canada-work-permit":
  return {
    title: "Canada Work Permit Visa Requirements & Process Guide",
  };
  case "australia-work-permit":
  return {
    title: "Australia Work Permit Visa for Skilled Professionals",
  };
  case "dubai-work-permit":
  return {
    title: "Dubai Work Visa Process for Skilled Professionals",
  };
  case "usa-h1b-visa":
  return {
    title: "USA H1B Work Visa Process & Requirements Guide",
  };
  case "united-kingdom-work-permit":
  return {
    title: "UK Work Permit Visa Process for Skilled Workers",
  };
    default:
      return {};
  }
}

export default function Page() {
  return <CountryClient />;
}