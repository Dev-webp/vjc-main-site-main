import Two from "./Two";
import db from "../../lib/db"; // Adjust to your db path

const defaultMeta = {
  title: "Migrate With Canada Permanent Residence PR Visa Australia PR Visa Germany Opportunity Card Visa USA",
  description: "Explore your migration options to Canada, Australia, Germany, the UK, the USA, and more. Get expert visa guidance for PR, work permits, and job seeker programs.",
  keywords:
    "Migrate to Canada, Migrate to Australia, Migrate to Germany, Migrate to UK, Migrate to USA, New Zealand, South Africa, Hong Kong, Denmark, UAE, Canada PR Visa, Canada Permanent Residence Visa, Australia PR Visa, Germany Opportunity Card Visa, USA B1B2, Canada Work Permit Visa, Canada Work Permit, Australia Skilled Work Permit, Germany Job Seeker Visa, Best Visa Immigration Consultants in Hyderabad, Best Visa Immigration Consultants, Visa Immigration Consultants",
};

export async function generateMetadata() {
  const slug = "/migrate"; // use your page slug!
  let dbMeta;
  try {
    dbMeta = db.prepare("SELECT * FROM metas WHERE route = ?").get(slug);
  } catch {
    dbMeta = null;
  }
  return {
    title: dbMeta?.title || defaultMeta.title,
    description: dbMeta?.description || defaultMeta.description,
    keywords: dbMeta?.keywords || defaultMeta.keywords,
  };
}

const MigratePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        {/* <Nav /> */}
      </div>
      <main className="min-h-full h-full">
        <Two />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MigratePage;
