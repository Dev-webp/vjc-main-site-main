import { metaData } from "../metaData";
import Two from "./Two";

// Dynamic metadata for each country
export async function generateMetadata({ params }) {
  const { country } = await params;

  const data = metaData[country.toLowerCase()];

  return {
    title: data?.title || "Migrate Abroad – Explore Global Opportunities | VJC Overseas",
    description: data?.description || "Expert migration services to work, study, or settle abroad.",
    keywords: data?.keywords || "study abroad, work visa, PR, VJC Overseas, global education",
  };
}

const ContactPage = () => {
  return <Two />;
};

export default ContactPage;