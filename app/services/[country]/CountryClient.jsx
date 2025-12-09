"use client";
 
import { useEffect, useState } from "react";

import Two from "./Two";

import { notFound } from "next/navigation";
 
const metaData = {
    "passport-services": { },
  "air-ticketing": { },
  "forex-services": { },
  "free-assessment":{ },
  "free-counselling":{ },
 
 
};
 
export default function CountryClient({ country }) {
  const [meta, setMeta] = useState(null);
 
  useEffect(() => {
    const data = metaData[country?.toLowerCase()];
    if (!data) {
      notFound(); // trigger 404
    } else {
      setMeta(data);
    }
  }, [country]);
 
  if (!meta) return null;
 
  return (
    <>
     
 
     
        {/* Additional Sections */}
     
        <Two />
  
    </>
  );
}