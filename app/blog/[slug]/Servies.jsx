"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const MigrationProcess = () => {
  const countries = [
    { name: "passport", path: "/passport" },
    { name: "Air-ticketing", path: "/air-ticketing" },
    { name: "Forex", path: "/forex" },
  ];

  const bgImages = [
    "/study-abroad-vjc.jpg",
    "/study-abroad.jpg",
    "/studying-abroad-1.webp",
    "/texus-vjc.jpg",
    "/turckey-tour.jpg",
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>VJC Overseas Global Services - Study, Invest & Migrate</title>
        <meta
          name="description"
          content="Explore VJC Overseas global services including student visas, investor visas, and migration support to countries like Cyprus, Greece, Malta, and more. Get expert assistance now!"
        />
        <meta
          name="keywords"
          content="VJC Overseas, Global Migration, Student Visa, Investor Visa, Immigration Consultants, Cyprus Visa, Malta Investment Visa, Ireland PR"
        />
        <meta name="author" content="VJC Overseas" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center">
          Our Global <span className="text-orange-500">Services</span> at VJC Overseas
        </h1>

        {/* Country Buttons */}
        <section
          className="rounded-xl p-6 mb-10 transition-all duration-1000 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImages[currentBg]})`,
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <h2 className="text-xl text-white font-bold text-center mb-5">
            Choose a Country to Explore Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {countries.map((c, i) => (
              <Link key={i} href={c.path}>
                <div className="px-4 py-3 bg-white/80 text-black border border-white rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white hover:underline hover:shadow-xl transition-all duration-300 shadow cursor-pointer text-center">
                  {c.name} Services
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Service Info */}
        <div className="max-w-4xl mx-auto  text-gray-800 space-y-4 text-1sm leading-relaxed">
  <p>
    <strong>VJC Overseas</strong> offers end-to-end solutions for students, investors, and skilled professionals looking to build a future abroad. Our consultants provide tailored strategies across study, business, and permanent relocation.
  </p>

  <p>
    From university admissions and business setup to visa filing and post-arrival support, we provide everything you need for a smooth and successful international journey.
  </p>

  <p>
    Our services include financial consulting, legal documentation, SOPs, and accommodation support—making your transition to a new country seamless and hassle-free.
  </p>

  <p>
    With <strong>40,000+ success stories</strong> and <strong>200+ global partners</strong>, VJC Overseas is your trusted migration and settlement partner.
  </p>

  {/* Enhanced Additional Points */}
  <ul className="list-disc pl-5 space-y-2 text-gray-700">
    <li><strong>One-to-One Guidance:</strong> Personalized counseling to understand your profile, aspirations, and build a winning migration roadmap.</li>
    <li><strong> Multi-Country Expertise:</strong> Dedicated teams for USA, UK, Canada, Germany, Australia, Europe, and more—ensuring expert country-specific guidance.</li>
   
    <li><strong> University & Employer Tie-ups:</strong> Direct partnerships with top universities and employers ensure faster admissions and placement options.</li>
    
    <li><strong> Decade of Experience:</strong> With 19+ years of operational excellence, our processes are streamlined, efficient, and globally trusted.</li>
  </ul>
</div>


        {/* Image & Steps */}
        <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg sm:p-10 flex flex-col sm:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/servies-what-we-offer.png"
              alt="VJC Overseas Migration Process"
              width={230}
              height={200}
              unoptimized
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2 text-gray-800 text-sm">
            <div>
              <h3 className="text-base font-semibold text-orange-500">1. Profile Evaluation</h3>
              <p className="text-[14px] leading-relaxed">
                We analyze your academic, business, or professional background to suggest the
                most suitable migration pathway.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">2. Country Selection & Planning</h3>
              <p className="text-[14px] leading-relaxed">
                Get expert advice on choosing the right country based on visa success rates, ROI,
                and long-term goals.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">3. Application & Documentation</h3>
              <p className="text-[14px] leading-relaxed">
                We handle all paperwork—from visa forms and SOPs to financial proofs—ensuring
                faster approvals.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">4. Relocation & Post-Visa Support</h3>
              <p className="text-[14px] leading-relaxed">
                Enjoy complete assistance for pre-departure, accommodation, and onboarding in
                your new country.
              </p>
            </div>
          </div>
        </section>

        {/* YouTube Video */}
        <section className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto mt-10">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/cLNpEry1oPQ?autoplay=1&mute=1&loop=1&playlist=cLNpEry1oPQ&controls=0&showinfo=0&rel=0"
            title="VJC Overseas Migration Services"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </section>
      </div>
    </>
  );
};

export default MigrationProcess;
