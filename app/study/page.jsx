import Two from "./Two";
import { headers } from "next/headers";

// Fetch meta data using YOUR API
async function fetchMetaFromAPI(route, host, protocol) {
  const res = await fetch(`${protocol}://${host}/api/metas?slug=${route}`, { 
    cache: "no-store" 
  });
  return await res.json();
}

// Next.js Metadata API - uses YOUR API
export async function generateMetadata() {
  const host = headers().get("host");
  const protocol = host.includes("localhost") ? "http" : "https";
  const route = "/study";
  
  const meta = await fetchMetaFromAPI(route, host, protocol);

  return {
    title: meta?.title || "",
    description: meta?.description || "",
    keywords: meta?.keywords || "",
  };
}

// Page Component - uses YOUR API
export default async function Page() {
  const host = headers().get("host");
  const protocol = host.includes("localhost") ? "http" : "https";
  const route = "/study";
  
  const meta = await fetchMetaFromAPI(route, host, protocol);

  return (
    <>
      <div style={{ marginTop: "3%", zIndex: 20, position: "relative" }}>
        <Two />
      </div>

     
     
    </>
  );
}
