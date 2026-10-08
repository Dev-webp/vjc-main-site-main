"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function ItalyVisitVisa() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I apply for an Italy Visit Visa from India?",
      answer: (
        <>
          To apply for an Italy Visit Visa from India, prepare your passport,
          visa application form, travel itinerary, accommodation details,
          financial proof, and travel insurance. Following the correct{" "}
          <Link href="/visit-visas/italy" className="text-orange-500 font-bold">
            Italy Tourist Visa application process
          </Link>{" "}
          can help you submit a complete application.
        </>
      ),
    },
    {
      question: "What are the eligibility requirements for an Italy Tourist Visa?",
      answer: (
        <>
          To meet the{" "}
          <Link href="/visit-visas/italy" className="text-orange-500 font-bold">
            Italy Tourist Visa eligibility requirements
          </Link>
          , applicants generally need a valid passport, a genuine travel
          purpose, sufficient financial resources, accommodation details, and
          evidence of plans to leave the Schengen Area before the authorized
          stay expires.
        </>
      ),
    },
    {
      question: "What documents are required for an Italy Tourist Visa from India?",
      answer: (
        <>
          The{" "}
          <Link href="/visit-visas/italy" className="text-orange-500 font-bold">
            Italy Tourist Visa documents
          </Link>{" "}
          generally include a valid passport, completed application form,
          photographs, flight itinerary, hotel booking or invitation, bank
          statements, employment proof where applicable, a cover letter, and
          travel medical insurance. Additional documents may be required
          depending on your circumstances.
        </>
      ),
    },
    {
      question: "How much does an Italy Visit Visa cost from India?",
      answer: (
        <>
          The{" "}
          <Link href="/visit-visas/italy" className="text-orange-500 font-bold">
            Italy Visit Visa fee from India
          </Link>{" "}
          depends on the applicable consular visa fee, applicant category, and
          service charges. Applicants should check the latest official fee
          information and account for any additional Italy visa application
          costs before applying.
        </>
      ),
    },
    {
      question: "How long does Italy Schengen Visa processing take?",
      answer: (
        <>
          The{" "}
          <Link href="/visit-visas/italy" className="text-orange-500 font-bold">
            Italy Schengen Visa processing time
          </Link>{" "}
          can vary depending on the application, season, and consular
          assessment. Apply well before your intended departure and check the
          latest processing guidance when planning your Italy Tourist Visa
          application.
        </>
      ),
    },
    {
      question: "Can I travel to other European countries with an Italy Schengen Visa?",
      answer:
        "An approved Italy Schengen Visa may allow you to visit other Schengen countries during its validity, subject to the visa's entry conditions and permitted duration of stay. If you plan to visit several countries, provide a clear itinerary with your Italy visa application.",
    },
    {
      question: "Do I need travel insurance for an Italy Tourist Visa?",
      answer:
        "Yes, Schengen travel insurance for an Italy Tourist Visa is generally required for short-stay visa applications. The policy must meet the applicable Schengen requirements for medical emergencies and repatriation throughout the intended travel period.",
    },
    {
      question: "Can VJC Overseas help me apply for an Italy Visit Visa?",
      answer:
        "VJC Overseas provides Italy Visit Visa assistance from India, including document guidance, application support, and travel-plan preparation. Contact our team for personalized Italy Tourist Visa consultancy based on your travel purpose and individual circumstances.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Italy Visit Visa for Indians | <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <Image src="/itlayvisitvisa.png" alt="Italy Visit Visa" width={300} height={250} className="" unoptimized />
        <p>
          Experience La Dolce Vita! Discover the enchanting charm of Italy with the Italy Visit Visa, your gateway to one of Europe’s most iconic destinations. Whether you're drawn by its timeless architecture, mouthwatering cuisine, or romantic landscapes, <a href="https://vjcoverseas.com" className="text-orange-500">VJC Overseas</a> is here to guide you through the Italy tourist visa process—step-by-step.
        </p>
      </div>

      <h2 className="text-xl mt-6 mb-2 font-semibold"> What is an Italy Visit Visa?</h2>
      <p>
        The <a href="https://www.vjcoverseas.com/visit-visas/italy" className="text-blue-900 font-bold">Italy Visit Visa ,</a> also known as a Short-Stay Schengen Visa (Type C), allows Indian nationals to travel to Italy for tourism, family visits, or business purposes for up to 90 days within a 180-day period.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Single-entry, double-entry, or multiple-entry options available</li>
        <li>Travel across 26 Schengen countries with one visa</li>
        <li>Perfect for tourists, family visitors, and short-term business travellers</li>
      </ul>

      <h2 className="text-xl mt-6 mb-2 font-semibold"> Required Documents for Italy Tourist Visa from India</h2>
      <p>
        To apply for an Italy Visit Visa, you’ll need to gather the following documents. Our <a href="https://www.vjcoverseas.com/visit-visas" className="text-blue-900 font-bold">Visit Visa Consultants</a> make sure every file is accurate and complete.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Valid Passport – At least 3 months validity beyond your intended stay + 2 blank pages</li>
        <li>Visa Application Form – Duly filled and signed</li>
        <li>Passport-Sized Photos – Recent and compliant with Schengen guidelines</li>
        <li>Cover Letter – Explaining purpose of visit and itinerary</li>
        <li>Flight Reservation – Confirmed round-trip travel booking</li>
        <li>Travel Insurance – Minimum coverage of €30,000 for medical emergencies</li>
        <li>Accommodation Proof – Hotel bookings or invitation letter from family/friends</li>
        <li>Proof of Funds – Bank statements for last 3–6 months, ITRs, salary slips</li>
        <li>Employment Proof or Business Registration – For working professionals or entrepreneurs</li>
        <li>Leave Letter or NOC – From employer or institution if applicable</li>
      </ul>
      <p className="mt-2">VJC Tip: Make sure all documents are translated to Italian or English if originally in a regional language.</p>

      <h2 className="text-xl mt-6 mb-2 font-semibold"> Why Choose <span className="text-orange-500">VJC Overseas</span> for Your Italy Visa Application?</h2>
      <p>
        Our team at <a className="text-orange-500 font-bold">VJC Overseas</a> ensures a smooth application process from start to finish. Every document is checked, and applicants receive personalized guidance for their Italy travel plans.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>100% Documentation Support</li>
        <li>Personalized Visa Guidance</li>
        <li>Mock Interview Assistance</li>
        <li>Fast & Transparent Processing</li>
        <li>High Success Rate for Schengen Visas</li>
      </ul>

      <h2 className="text-xl mt-6 mb-2 font-semibold"> Must-Visit Places in Italy on a Tourist Visa</h2>
      <p>
        Explore Italy with tips from our <a href="https://www.vjcoverseas.com/tours-ticketing" className="text-blue-900 font-bold">Visa & Travel Consultants</a>, who can help plan your itinerary efficiently.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Rome – The Eternal City:</strong> Walk through ancient history at the Colosseum, toss a coin in the Trevi Fountain, and marvel at Vatican City.</li>
        <li><strong>Venice – City of Canals:</strong> Glide on a romantic gondola, explore St. Mark’s Basilica, and enjoy the timeless beauty of Venice.</li>
        <li><strong>Florence – Art Capital of the World:</strong> Home to Michelangelo’s David, the Uffizi Gallery, and the birthplace of the Renaissance.</li>
        <li><strong>Milan – Fashion & Finance Hub:</strong> Discover the Duomo Cathedral, Leonardo da Vinci’s Last Supper, and Italy’s premier shopping streets.</li>
        <li><strong>Amalfi Coast & Capri – Dreamy Coastlines:</strong> Bask in the Mediterranean sun, savor fresh seafood, and explore colorful cliffside towns like Positano and Ravello.</li>
      </ul>

      <h2 className="text-xl mt-6 mb-2 font-semibold"> Useful Tips for Indian Travelers Visiting Italy</h2>
      <p>
        Consult the Italy Visit Visa page for complete guidance on applying from India.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Best Time to Visit: April to June & September to October</li>
        <li>SIM Card: Get a local or international SIM card for easy connectivity</li>
        <li>Try These Dishes: Pizza in Naples, Pasta Carbonara in Rome, and Gelato everywhere!</li>
        <li>Language Tip: Basic Italian phrases go a long way—“Grazie” (Thank you), “Per favore” (Please)</li>
        <li>Currency: Euro (€) – Carry some cash for small towns and local shops</li>
      </ul>

      {/* Italy Visit Visa FAQs */}
      <h2 className="text-xl mt-6 mb-2 font-semibold">
        Italy Visit Visa – Frequently Asked Questions
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

      <h2 className="text-xl mt-6 mb-2 font-semibold"> Ready to Explore Italy? Let’s Get Started!</h2>
      <p>
        Partner with the <a href="https://www.vjcoverseas.com" className="text-blue-900 font-bold">Best Visa Immigration Consultants</a> to make your Italy trip smooth and memorable.
      </p>
      <p className="mt-2">Contact us today for a free consultation or fill out the enquiry form to start your Italy Visa process now!</p>
    
    </div>
  );
}
