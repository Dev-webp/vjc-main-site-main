"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Malta Tourist Visa for Indian Nationals – Requirements, Fees & Top Attractions",
  description: "Planning a trip to Malta from India? Learn about Malta tourist visa requirements, fees, documentation, and must-see attractions like Valletta, Gozo, and St. John's Co-Cathedral.",
};

export default function MaltaTouristVisa() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I apply for a Netherlands Schengen Visa from India?",
      answer: (
        <>
          To{" "}
          <Link href="/schengen-visas/netherlands" className="text-orange-500 font-bold">
            apply for a Netherlands Schengen Visa from India
          </Link>
          , you generally need to complete the application, prepare the
          required documents, book an appointment at a VFS Global application
          centre, and submit your application in person.
        </>
      ),
    },
    {
      question: "What are the eligibility requirements for a Netherlands Schengen Visa?",
      answer: (
        <>
          <Link href="/schengen-visas/netherlands" className="text-orange-500 font-bold">
            Netherlands Schengen Visa eligibility
          </Link>{" "}
          depends on your travel purpose, financial situation, accommodation,
          travel plans, and ability to demonstrate your ties to your country of
          residence. Applicants must provide the documents required for their
          specific visa category.
        </>
      ),
    },
    {
      question: "What documents are required for a Netherlands Tourist Visa?",
      answer: (
        <>
          Documents for a{" "}
          <Link href="/schengen-visas/netherlands" className="text-orange-500 font-bold">
            Netherlands Tourist Visa
          </Link>{" "}
          generally include a valid passport, completed application form,
          travel reservations, accommodation proof, financial documents, travel
          medical insurance, and other supporting documents based on your
          circumstances.
        </>
      ),
    },
    {
      question: "How much does a Netherlands Schengen Visa cost?",
      answer: (
        <>
          The{" "}
          <Link href="/schengen-visas/netherlands" className="text-orange-500 font-bold">
            Netherlands Schengen Visa fee
          </Link>{" "}
          depends on the applicable consular fee category. Applicants in India
          also need to pay the applicable VFS Global service costs. The exact
          fee should be checked before submitting the application.
        </>
      ),
    },
    {
      question: "How long does the Netherlands Schengen Visa process take?",
      answer: (
        <>
          The{" "}
          <Link href="/schengen-visas/netherlands" className="text-orange-500 font-bold">
            Netherlands Schengen Visa processing time
          </Link>{" "}
          can vary depending on the application, documents submitted, and
          processing circumstances. It is advisable to apply well in advance;
          applications can generally be submitted up to six months before
          travel.
        </>
      ),
    },
    {
      question: "Do I need travel insurance for a Netherlands Schengen Visa?",
      answer:
        "Yes, applicants generally need Schengen travel insurance covering the entire Schengen Area for the duration of their stay. The insurance must provide at least €30,000 in medical coverage, including eligible emergency medical expenses and repatriation.",
    },
    {
      question: "Can I visit other Schengen countries with a Netherlands Schengen Visa?",
      answer:
        "A Netherlands Schengen Visa can allow travel within the Schengen Area, subject to the visa's validity and conditions. If you plan to visit multiple Schengen countries, you must apply to the appropriate country based on the applicable Schengen visa rules.",
    },
    {
      question: "Where can I apply for a Netherlands Schengen Visa in India?",
      answer:
        "Applicants can submit a Netherlands Visa application in India through designated VFS Global application centres, including locations such as Hyderabad, Bangalore, Chennai, Mumbai, New Delhi and other listed cities.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      
      {/* Heading */}
      <h1 className="flex flex-col items-center text-lg sm:text-2xl md:text-2xl font-bold mb-6 text-center">
        <span>Explore Malta with a Tourist Visa – <span className="text-orange-500 font-bold">VJC Overseas</span></span>
      </h1>

      {/* Introduction Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">Discover the Magic of Malta</h2>
          <p className="mb-6">
            Malta, an enchanting Mediterranean archipelago, beckons travellers
            with its rich history, stunning landscapes, and vibrant culture. As
            a member of the{" "}
            <Link
              href="https://www.vjcoverseas.com/schengen-visas"
              className="text-orange-500 font-bold"
            >
              Schengen Visit Visa
            </Link>{" "}
            area, Malta offers Indian nationals the opportunity to explore its treasures with a short-stay Schengen visa. Known for its warm climate, crystal-clear waters, and UNESCO World Heritage sites, Malta is a must-visit for travellers across the globe.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/maltatouristcontent.jpg"
            alt="Neatherland Tourist Attractions"
            width={500}
            height={700}
            className="object-cover shadow-lg"
            unoptimized
          />
        </div>
      </div>

      <p className="-mt-4">
        From the historic streets of Valletta to the serene landscapes of Gozo and the stunning interiors of St. John's Co-Cathedral, Malta is a top destination for travellers seeking a perfect blend of history, culture, and Mediterranean beauty.
      </p>

      {/* Visa Requirements */}
      <h2 className="text-xl font-semibold mt-8 mb-2"> Malta Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Valid Passport (at least two blank pages, valid three months beyond departure)</li>
        <li>Completed Visa Application Form</li>
        <li>Recent Passport-sized Photographs (as per Schengen specifications)</li>
        <li>Travel Itinerary (Flight and hotel bookings)</li>
        <li>Travel Insurance (Coverage of €30,000 for medical expenses)</li>
        <li>Proof of Financial Means (Bank statements, pay slips, income tax returns)</li>
        <li>Cover Letter (Purpose of visit and travel plans)</li>
        <li>Visa Fee Payment Proof</li>
      </ul>

      {/* Visa Fees */}
      <h2 className="text-xl font-semibold mt-8 mb-2"> Malta Tourist Visa Fees</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Standard Schengen Visa Fee: €80 (~₹7,200)</li>
      </ul>
      <p className="italic mb-6">
        Note: Additional service charges may apply when applying through a visa application centre.
      </p>

      {/* Visa Validity */}
      <h2 className="text-xl font-semibold mt-8 mb-2"> Visa Validity</h2>
      <p className="mb-6">
        Malta tourist visas are usually issued for short stays up to 90 days within a 180-day period. The final validity depends on your travel itinerary and supporting documents.
      </p>

      {/* Top Attractions */}
      <h2 className="text-xl font-semibold mt-8 mb-2"> Must-See Attractions in Malta</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Valletta:</strong> UNESCO World Heritage capital with Baroque architecture, Grand Master's Palace, and National Museum of Archaeology.</li>
        <li><strong>Gozo Island:</strong> Scenic countryside and Ġgantija Temples, older than the pyramids of Egypt.</li>
        <li><strong>St. John's Co-Cathedral:</strong> Stunning Baroque interior featuring works by Caravaggio.</li>
        <li><strong>Mdina:</strong> The medieval "Silent City" offering panoramic views and ancient architecture.</li>
        <li><strong>St. Paul's Catacombs:</strong> Early Christian underground burial site located in Rabat.</li>
      </ul>

      {/* Travel Tips */}
      <h2 className="text-xl font-semibold mt-8 mb-2"> Travel Tips for Indian Tourists</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Best Time to Visit:</strong> April to June and September to October</li>
        <li><strong>Currency:</strong> Euro (€)</li>
        <li><strong>Language:</strong> Maltese and English</li>
        <li><strong>Transportation:</strong> Public buses and taxis are widely available</li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-xl font-semibold mt-8 mb-2"> Why Choose VJC Overseas for Your Malta Visa?</h2>
      <ul className="list-disc list-inside mb-6">
        <li> Expert Guidance and Personalized Assistance</li>
        <li> Complete Documentation Support</li>
        <li> High Success Rate with Fast Processing</li>
        <li> Transparent Fees and No Hidden Charges</li>
      </ul>

      {/* Additional Keywords in content with internal linking */}
      <p className="mb-6">
        When it comes to international travel, working with{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="text-orange-500 font-bold"
        >
          Best Visa Immigration Consultants
        </Link>{" "}
        ensures a smooth visa application experience.
      </p>

      <p className="mb-6">
        Applying for a Malta Schengen Visa is easier with guidance from{" "}
        <Link
          href="https://www.vjcoverseas.com/schengen-visas/malta"
          className="text-orange-500 font-bold"
        >
          Malta Schengen Visa
        </Link>
        .
      </p>

      <p className="mb-6">
        Follow the{" "}
        <Link
          href="https://www.vjcoverseas.com/visit-visas"
          className="text-orange-500 font-bold"
        >
          Visit Visa Services
        </Link>{" "}
        process to ensure all documents are properly prepared.
      </p>

      {/* Netherlands Schengen Visa FAQs */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        Netherlands Schengen Visa – Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto mb-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg mb-3 bg-white"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 text-base font-semibold text-gray-800 rounded-lg"
              style={{
                backgroundColor: openIndex === index ? "#fff7ed" : "white",
                cursor: "pointer",
                border: "none",
              }}
            >
              <span>{faq.question}</span>
              <span
                className="text-orange-500 text-2xl font-bold shrink-0"
                style={{
                  transform:
                    openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: openIndex === index ? "600px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                backgroundColor: "white",
              }}
            >
              <p className="px-5 pb-4 m-0 text-gray-700 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <p className="text-lg font-semibold text-black mt-6">
         Contact Us Today!
      </p>
      <p className="mt-4">
  Start your Malta tourist visa application with <strong className="text-black font-bold">VJC Overseas</strong>. Let our experienced team make your dream Mediterranean trip a reality.
</p>


      {/* Summary CTA */}
      <p className="mt-6">
        With the right support, your dream of exploring Malta and Europe
        can become a reality. Begin your application today with{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="text-orange-500 font-bold"
        >
          VJC Overseas
        </Link>{" "}
        – your trusted partner for global travel.
      </p>

    </div>
  );
}
