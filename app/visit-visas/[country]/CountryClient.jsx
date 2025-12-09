"use client";

import { useEffect, useState } from "react";


import Two from "./Two";

import { notFound } from "next/navigation";

const metaData = {
   
    usa: { },
    "usab1/b2":{ },
    canada: { },
    australia: { },
    uk:{ },
    dubai: { },
    denmark:{ },
    austria:{ },
    italy:{ },
    schengen:{ },
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
      <div style={{ marginTop: "2%", zIndex: 20, position: "relative" }}>
        
      </div>

     
        {/* Additional Sections */}
      
        <Two />
      
     
    </>
  );
}