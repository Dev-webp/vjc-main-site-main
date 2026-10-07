'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function USAB1B2Visa() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a USA B1/B2 Visa?",
      answer:
        "The USA B1/B2 Visa is a nonimmigrant visitor visa for eligible travelers visiting the United States temporarily for business or tourism. B-1 generally covers business activities, while B-2 is used for tourism and visits.",
    },
    {
      question: "How can I apply for a USA B1/B2 Visa from India?",
      answer: (
        <>
          To{" "}
          <Link href="/visit-visas/usa-b1-b2-visa" className="font-bold text-orange-500 hover:underline">
            apply for a USA B1/B2 Visa from India
          </Link>
          , applicants generally need to complete the DS-160, pay the applicable
          visa fee, schedule the required appointment, and attend a visa
          interview when required.
        </>
      ),
    },
    {
      question: "What are the eligibility requirements for a USA Tourist Visa?",
      answer: (
        <>
          <Link href="/visit-visas/usa-b1-b2-visa" className="font-bold text-orange-500 hover:underline">
            USA Tourist Visa eligibility
          </Link>{" "}
          depends on your individual circumstances and the purpose of your
          temporary visit. Applicants should be prepared to demonstrate their
          intended travel purpose and meet the applicable requirements for a B-2
          visitor visa.
        </>
      ),
    },
    {
      question: "What documents are required for a USA B1/B2 Visa?",
      answer: (
        <>
          For a{" "}
          <Link href="/visit-visas/usa-b1-b2-visa" className="font-bold text-orange-500 hover:underline">
            USA B1/B2 Visa application
          </Link>
          , applicants generally need a valid passport, DS-160 confirmation
          page, visa fee payment receipt where applicable, and other supporting
          documents relevant to their circumstances and travel purpose.
        </>
      ),
    },
    {
      question: "Is an interview required for a USA B1/B2 Visa?",
      answer:
        "In general, USA B1/B2 Visa interview requirements apply to nonimmigrant visa applicants, with limited exceptions. Even where an interview waiver may be available, a consular officer can require an in-person interview on a case-by-case basis.",
    },
    {
      question: "How much does a USA B1/B2 Visa cost?",
      answer: (
        <>
          The{" "}
          <Link href="/visit-visas/usa-b1-b2-visa" className="font-bold text-orange-500 hover:underline">
            USA B1/B2 Visa fee
          </Link>{" "}
          depends on the applicable U.S. visa fee rules and the applicant's
          circumstances. The U.S. Department of State currently lists the
          visitor visa application fee at $185, with additional issuance fees
          potentially applicable depending on nationality.
        </>
      ),
    },
    {
      question: "How long does the USA B1/B2 Visa process take?",
      answer: (
        <>
          The{" "}
          <Link href="/visit-visas/usa-b1-b2-visa" className="font-bold text-orange-500 hover:underline">
            USA B1/B2 Visa processing time
          </Link>{" "}
          can vary depending on the interview location, appointment
          availability, season, visa category, and individual case. Applicants
          are advised to apply early because interview wait times vary by
          location.
        </>
      ),
    },
    {
      question: "Can I travel to the USA for both business and tourism with a B1/B2 Visa?",
      answer:
        "Yes, a B1/B2 Visa for USA combines the B-1 business and B-2 visitor classifications. It may cover eligible temporary business activities and tourism/visit purposes, subject to the specific rules and conditions of the visa.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        USA B1/B2 Visa – Your Gateway to Explore America with VJC Overseas
      </h1>

      <h2 className="text-xl mt-4 font-semibold text-orange-500 mb-2">
        Discover the Land of Opportunities – Travel to the USA with a B1/B2 Visa
      </h2>

      <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
        <p>
          Are you an Indian citizen planning to travel to the United States for business meetings, conferences, tourism, or to visit family and friends? The USA B1/B2 Visa is your all-access pass to experience the American dream – temporarily. At <span className="text-orange-500">VJC Overseas</span>, we help you navigate the complexities of the B1/B2 visa process with unmatched expertise and personalized guidance.  
          <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900 ml-1">Best Visa Immigration Consultants</a>
        </p>
      </div>

      <div className="mt-8 md:mt-0">
        <Image src="/b1b2usa.webp" alt="USA B1/B2 Visa" width={550} height={250} className="ml-14 shadow-md" unoptimized />
      </div>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold"> What is a USA B1/B2 Visa?</h3>
        <p>
          The B1/B2 Visa is a non-immigrant, temporary visitor visa that combines:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>B1 Visa (Business):</strong> For attending conferences, meetings, negotiations, or settling estates.</li>
          <li><strong>B2 Visa (Tourism/Medical):</strong> For vacations, visiting relatives, or seeking medical treatment.</li>
        </ul>
        <p>It’s one of the most commonly issued visas for Indian travellers wanting short-term entry to the USA.  
          <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900 ml-1">VJC Overseas</a>
        </p>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold"> Validity & Duration</h3>
        <ul className="list-disc ml-6">
          <li>Validity: The USA B1/B2 visa for Indian citizens is typically issued for 10 years (Multiple Entry).</li>
          <li>Stay per visit: Up to 6 months per entry (subject to approval at the port of entry).</li>
          <li>The visa doesn’t guarantee entry – the final duration is decided by CBP (Customs and Border Protection) officials.</li>
        </ul>
        <p>
          Planning ahead helps avoid unnecessary travel disruptions.  
          <a href="https://www.vjcoverseas.com/visit-visas" className="font-bold text-blue-900 ml-1">Visit Visa Consultants</a>
        </p>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold"> Cost of Living in the USA – Plan Smartly</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Expense Category</th>
                <th className="border-b p-2">Approx. Monthly Cost (USD)</th>
                <th className="border-b p-2">INR Equivalent (Approx.)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">Accommodation</td><td className="p-2">$1,200 – $3,000</td><td className="p-2">₹1,00,000 – ₹2,50,000</td></tr>
              <tr><td className="p-2">Food & Dining</td><td className="p-2">$300 – $600</td><td className="p-2">₹25,000 – ₹50,000</td></tr>
              <tr><td className="p-2">Transportation</td><td className="p-2">$70 – $150</td><td className="p-2">₹6,000 – ₹12,000</td></tr>
              <tr><td className="p-2">Internet & Utilities</td><td className="p-2">$150 – $250</td><td className="p-2">₹12,000 – ₹20,000</td></tr>
              <tr><td className="p-2">Travel Insurance</td><td className="p-2">$50 – $100</td><td className="p-2">₹4,000 – ₹8,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mt-2">
          Tip: Cities like New York, San Francisco, and LA are costlier. Opt for suburbs or mid-sized cities for a budget-friendly stay.  
          <a href="https://www.vjcoverseas.com/tours-ticketing" className="font-bold text-blue-900 ml-1">Visa & Travel Consultants</a>
        </p>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold"> Why Apply for a B1/B2 Visa with VJC Overseas?</h3>
        <ul className="list-disc ml-6">
          <li>Expert Visa Consultation – 15+ years of success with USA visa applications</li>
          <li>Mock Interview Prep – Ace your visa interview with confidence</li>
          <li>Complete Documentation Support – Zero errors, higher approval rate</li>
          <li>Transparent Guidance – No false promises, only results</li>
          <li>Fast-Track Appointments (Subject to availability)</li>
        </ul>
        <p>
          Maximize your chances of approval with our experts.  
          <a href="https://www.vjcoverseas.com/visit-visas/usa-b1-b2-visa" className="font-bold text-blue-900 ml-1">USA B1/B2 Visa</a>
        </p>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold"> Who Should Apply?</h3>
        <ul className="list-disc ml-6">
          <li>Business Professionals attending events, client meetings, or investment summits</li>
          <li>Families visiting children or relatives</li>
          <li>Tourists exploring destinations like New York, California, Florida, or Grand Canyon</li>
          <li>Patients seeking advanced medical treatments in U.S. hospitals</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold"> Key USA B1/B2 Visa Requirements for Indians</h3>
        <ul className="list-disc ml-6">
          <li>Valid Indian passport</li>
          <li>DS-160 Confirmation</li>
          <li>Visa fee receipt</li>
          <li>Appointment confirmation (OFC + Interview)</li>
          <li>Strong financial and social ties to India</li>
          <li>Travel itinerary, if available</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold"> Common Questions Indians Ask About the USA B1/B2 Visa</h3>
        <ul className="list-disc ml-6">
          <li><strong>Q: Can I work in the USA on a B1/B2 visa?</strong> <br />No. This is a non-employment visa. Any paid activity in the U.S. is prohibited.</li>
          <li><strong>Q: Can I study on a B2 Visa?</strong> <br />Short-term recreational courses may be allowed, but full-time academic study is not.</li>
          <li><strong>Q: Can I convert my B1/B2 visa to another visa in the USA?</strong> <br />Change of status is possible but subject to strict USCIS guidelines.</li>
        </ul>
      </section>

      {/* USA B1/B2 Visa FAQs */}
      <section>
        <h3 className="text-xl mt-4 mb-2 font-bold">
          USA B1/B2 Visa – Frequently Asked Questions
        </h3>
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
      </section>

      <section className="text-center">
        <h3 className="text-xl mt-4 mb-2 font-bold"> Start Your Journey to the USA Today</h3>
        <p>At <span className="text-orange-500">VJC Overseas</span>, we’ve helped thousands of Indian travellers successfully obtain their USA B1/B2 Visas. Whether you're a business leader, globetrotter, or simply want to meet loved ones in the States – we’re here to help, every step of the way.</p>
  
        <p className="mt-2 font-semibold"> Walk into your nearest VJC Overseas office today!</p>
      </section>
    </div>
  );
}
