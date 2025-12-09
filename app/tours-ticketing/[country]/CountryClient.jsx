"use client";

import { useEffect, useState } from "react";


import Two from "./Two";

import { notFound } from "next/navigation";

const metaData = {
    europe: { }, 
    usa: { },
    australia: { },
    canada: { },
    france:{ },
    italy:{ },
    swizerland:{ },
    dubai: { },
    turkey: { },
    malaysia:{ },
    singapore: { },
    greece: { },
    bali:{ },
    andaman:{ },
    thailand:{ },
    philippines:{ },
    fijiisland:{ },
    azerbaijan:{ },
    austria: { },
    southafrica:{ },
    japan:{ },
    vietnam:{ },
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
      <div style={{ marginTop: "0%", zIndex: 20, position: "relative" }}>
        
      </div>

     
        {/* Additional Sections */}
      
        <Two />
      
     
    </>
  );
}