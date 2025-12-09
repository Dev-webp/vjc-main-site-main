"use client";

import { useEffect, useState } from "react";


import Two from "./Two";

import { notFound } from "next/navigation";

const metaData = {
    austria:{ },
    belgium:{ },
    bulgaria:{ },
    croatia:{ },
    "czech-republic":{ },
    denmark:{ },
    estonia:{ },
    finland:{ },
    france:{ },
    germany:{ },
    greece:{ },
    hungary:{ },
    iceland:{ },
    italy:{ },
    latvia:{ },
    liechtenstein:{ },
    lithuania:{ },
    luxembourg:{ },
    malta:{ },
    netherlands:{ },
    norway:{ },
    poland:{ },
    portugal:{ },
    romania:{ },
    slovakia:{ },
    slovenia:{ },
    spain:{ },
    sweden:{ },
    switzerland:{ },
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