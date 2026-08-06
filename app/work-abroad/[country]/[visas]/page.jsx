



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
      title: "Australia 189 Work Visa Process & Requirements | VJC",
    };

case "dubai-work-permit-dubai-standard-work-visa":
  return {
    title: "Dubai Work Visa Process & Requirements | VJC",
  };
  case "united-kingdom-work-permit-uk-long-term-work-visa":
  return {
    title: "UK Long Term Work Visa Process & Requirements | VJC",
  };
  case "united-kingdom-work-permit-uk-skilled-worker-visa":
  return {
    title: "UK Skilled Worker Visa Process & Requirements | VJC",
  };
  case "australia-work-permit-employer-186-visa":
  return {
    title: "Australia 186 Employer Visa Process & Requirements | VJC",
  };
case "germany-work-permit-blue-visa":
  return {
    title: "Germany Blue Card Work Visa Process & Requirements | VJC",
  };
  case "australia-work-permit-482-visa":
  return {
    title: "Australia 482 Work Visa Process & Requirements | VJC",
  };
case "denmark-work-permit":
  return {
    title: "Denmark Work Permit Process & Requirements | VJC",
  };
  case "denmark-work-permit-denmark-pay-limit-scheme-visa":
  return {
    title: "Denmark Pay Limit Scheme Visa Process | VJC",
  };
case "united-kingdom-work-permit-uk-health-and-care-worker-visa":
  return {
    title: "UK Health & Care Worker Visa Process | VJC",
  };
  case "united-kingdom-work-permit-uk-tire-4-visa":
  return {
    title: "UK Tier 4 Student Visa Process & Requirements | VJC",
  };
  case "germany-work-permit-employment-visa":
  return {
    title: "Germany Employment Visa Process & Requirements | VJC",
  };

  case "canada-work-permit-open-work-permit":
  return {
    title: "Canada Open Work Permit Process & Requirements | VJC",
  };
  case "dubai-work-permit-dubai-golden-visa":
  return {
    title: "Dubai Golden Visa Process & Requirements | VJC",
  };
  case "denmark-work-permit-denmark-employment-visa":
  return {
    title: "Denmark Employment Visa Process & Requirements | VJC",
  };
  case "canada-work-permit-w1-visa":
  return {
    title: "Canada W1 Work Visa Process & Requirements | VJC",
  };
  case "germany-work-permit-freelance-visa":
  return {
    title: "Germany Freelance Visa Process & Requirements | VJC",
  };
case "australia-work-permit-working-holiday-417-visa":
  return {
    title: "Australia 417 Working Holiday Visa Process | VJC",
  };
  case "germany-work-permit-work-permit-visa":
  return {
    title: "Germany Work Visa Process & Requirements | VJC",
  };
  case "denmark-work-permit-denmark-positive-list-visa":
  return {
    title: "Denmark Positive List Visa Process & Requirements | VJC",
  };
case "germany-work-permit-job-seeker-visa":
  return {
    title: "Germany Job Seeker Visa Process & Requirements | VJC",
  };
  case "australia-work-permit-nomited-visa-subclass-190":
  return {
    title: "Australia 190 Visa Process & Requirements | VJC",
  };
  case "dubai-work-permit-dubai-green-visa":
  return {
    title: "Dubai Green Visa Process & Requirements | VJC",
  };
  case "united-kingdom-work-permit-uk-short-term-work-visa":
  return {
    title: "UK Short Term Work Visa Process & Requirements | VJC",
  };
  case "denmark-work-permit-denmark-trainee-visa":
  return {
    title: "Denmark Trainee Visa Process & Requirements | VJC",
  };
case "germany-work-permit-opportunity-card":
  return {
    title: "Germany Opportunity Card Visa Process | VJC",
  };
  case "united-kingdom-work-permit-uk-tire-2-visa":
  return {
    title: "UK Tier 2 Work Visa Process & Requirements | VJC",
  };
case "canada-work-permit-w1-visa":
  return {
    title: "Canada W1 Work Visa Process & Requirements | VJC",
  };
case "canada-work-permit-lmia":
  return {
    title: "Canada LMIA Work Permit Process & Requirements | VJC",
  };
case "australia-work-permit-work-visa-subclass-189":
  return {
    title: "Australia 189 Work Visa Process & Requirements | VJC",
  };
  case "germany-work-permit-job-seeker-visa":
  return {
    title: "Germany Job Seeker Visa Process & Requirements | VJC",
  };
  case "dubai-work-permit-dubai-standard-work-visa":
  return {
    title: "Dubai Work Visa Process & Requirements | VJC",
  };
  case "germany-work-permit-work-permit-visa":
  return {
    title: "Germany Work Visa Process & Requirements | VJC",
  };
  case "united-kingdom-work-permit-uk-skilled-worker-visa":
  return {
    title: "UK Skilled Worker Visa Process & Requirements | VJC",
  };
  case "united-kingdom-work-permit-uk-long-term-work-visa":
  return {
    title: "UK Long Term Work Visa Process & Requirements | VJC",
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
