import CountryClient from "./CountryClient";

export async function generateMetadata({ params }) {
  const { country } = await params;

  switch (country) {
    case "australia-work-permit":
      return {
        title: "Australia Work Permit Process & Requirements | VJC",
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
    title: "Denmark Work Permit Process & Requirements | VJC",
  };
  case "dubai-work-permit":
  return {
    title: "Dubai Work Permit Process & Requirements | VJC",
  };
  case "germany-work-permit":
  return {
    title: "Germany Work Permit Process & Requirements | VJC",
  };
case "united-kingdom-work-permit":
  return {
    title: "UK Work Permit Process & Requirements | VJC",
  };
  case "usa-h1b-visa":
  return {
    title: "USA H1B Visa Process & Requirements | VJC",
  };
case "canada-work-permit":
  return {
    title: "Canada Work Permit Process & Requirements | VJC",
  };
  case "australia-work-permit":
  return {
    title: "Australia Work Permit Process & Requirements | VJC",
  };
  case "dubai-work-permit":
  return {
    title: "Dubai Work Permit Process & Requirements | VJC",
  };
  case "usa-h1b-visa":
  return {
    title: "USA H1B Work Visa Process & Requirements | VJC",
  };
  case "united-kingdom-work-permit":
  return {
    title: "UK Work Permit Visa Process & Requirements | VJC",
  };
    default:
      return {};
  }
}

export default function Page() {
  return <CountryClient />;
}