import Two from "./Two";
import { headers } from "next/headers";

// Fetch visa data from your API or file
async function fetchVisa(slug, parentSlug, host, protocol) {
  const res = await fetch(`${protocol}://${host}/api/migrate`, { cache: "no-store" });
  const visas = await res.json();
  return visas.find(v => v.slug === slug && v.parentSlug === parentSlug);
}

// Next.js Metadata API for SSR meta tags
export async function generateMetadata({ params }) {
  const { country, visa } = params; // Get parent and child slug

  const host = headers().get("host");
  const protocol = host.includes("localhost") ? "http" : "https";

  const visaData = await fetchVisa(visa, country, host, protocol);

  return {
    title: visaData?.metaTitle || visaData?.name || "Visa Not Found",
    description: visaData?.metaDescription || visaData?.description || "No visa found for this visa",
  };
}

export default async function Page({ params }) {
  // You can pass params or fetch data inside Two if needed
  // For now, Two can use client side hooks to retrieve data based on route
  return (
    <>
      <Two />
    </>
  );
}
