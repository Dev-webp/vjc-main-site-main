import { metaData } from "../metaData"; // Adjust path if needed
import Two from "./Two";


export async function generateMetadata({ params }) {
  const { country } = await params;

  console.log("Country Param:", country);

  const data = metaData[country.toLowerCase()];

  return {
    title: data?.title || "Migrate Abroad – Explore Global Opportunities | VJC Overseas",
    description:
      data?.description || "Expert migration services to work, study, or settle abroad.",
    keywords:
      data?.keywords || "study abroad, work visa, PR, VJC Overseas, global education",
  };
}

const ContactPage = () => {
  return (
    <>
    
      <Two />
     
    </>
  );
};

export default ContactPage;
