"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Import components for the 4 options
import PnpSkilledWorker from "./PnpSkilledWorker";
import PnpBusiness from "./PnpBusiness";
import PnpStudentStream from "./PnpStudentStream";
import PnpFamilySupport from "./PnpFamilySupport";

const pnpOptions = [
  { name: "Skilled Worker Stream", component: PnpSkilledWorker },
  { name: "Business Stream", component: PnpBusiness },
  { name: "International Student Stream", component: PnpStudentStream },
  { name: "Family Support Stream", component: PnpFamilySupport },
];

export default function CanadaPNPPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const SelectedComponent = pnpOptions[selectedIndex].component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Canada Provincial Nominee Program
      </h1>

      {/* Button group */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {pnpOptions.map((option, index) => (
          <button
            key={option.name}
            onClick={() => setSelectedIndex(index)}
            className={`px-6 py-3 rounded-xl text-lg font-medium border border-orange-500 flex items-center gap-2 transition 
              ${
                selectedIndex === index
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black hover:bg-orange-500 hover:text-white"
              }`}
          >
            {option.name}
            <ArrowRight className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Dynamic content */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
        <SelectedComponent />
      </div>
    </div>
  );
}
