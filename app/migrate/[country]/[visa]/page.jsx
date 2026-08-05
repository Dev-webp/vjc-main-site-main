import { visaMetaData } from "../../visaMetaData";
import Two from "./Two";


export async function generateMetadata({ params }) {
  const { country, visa } = await params;

  const visaData = visaMetaData[country?.toLowerCase()]?.[visa?.toLowerCase()];
  return {
    title: visaData?.title || "Explore Visa Options | VJC Overseas",
    description: visaData?.description || "Start your immigration journey with VJC Overseas.",
    keywords: visaData?.keywords || "visa, immigration, study abroad, work visa, VJC Overseas",
  };
}

const VisaPage = () => {
  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        {/* Optional Nav */}
      </div>
      <Two />

    </>
  );
};

export default VisaPage;