"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Head from "next/head";
import Form from "./Form";

const visaData = [
  { name: "Study in USA",          path: "/study-abroad/usa",          image: "/usa1.jpg" },
  { name: "Study in UK",           path: "/study-abroad/uk",           image: "/uk1.webp" },
  { name: "Study in Canada",       path: "/study-abroad/canada",       image: "/canada1.jpg" },
  { name: "Study in Australia",    path: "/study-abroad/australia",    image: "/study-in-australia-flag.jpg" },
  { name: "Study in Germany",      path: "/study-abroad/germany",      image: "/germany.jpg" },
  { name: "Study in Italy",        path: "/study-abroad/italy",        image: "/itlay.jpg" },
  { name: "Study in France",       path: "/study-abroad/france",       image: "/france.jpg" },
  { name: "Study in Singapore",    path: "/study-abroad/singapore",    image: "/singapore.jpg" },
  { name: "Study in Malaysia",     path: "/study-abroad/malaysia",     image: "/m.jpg" },
  { name: "Study in South Africa", path: "/study-abroad/southafrica",  image: "/sa.webp" },
  { name: "Study in New Zealand",  path: "/study-abroad/newzealand",   image: "/nz.webp" },
  { name: "Study in Philippines",  path: "/study-abroad/philippines",  image: "/p.jpg" },
  { name: "Study in Poland",       path: "/study-abroad/poland",       image: "/pol.webp" },
  { name: "Study in Ireland",      path: "/study-abroad/ireland",      image: "/ir.jpg" },
  { name: "Study in Spain",        path: "/study-abroad/spain",        image: "/spa.avif" },
  { name: "Study in Netherlands",  path: "/study-abroad/netherlands",  image: "/net.webp" },
  { name: "Study in Switzerland",  path: "/study-abroad/switzerland",  image: "/sw.webp" },
  { name: "Study in Denmark",      path: "/study-abroad/denmark",      image: "/de.jpg" },
  { name: "Study in Dubai",        path: "/study-abroad/dubai",        image: "/du.webp" },
  { name: "Study in Luxembourg",   path: "/study-abroad/luxembourg",   image: "/lux.jpg" },
  { name: "Study in Hongkong",     path: "/study-abroad/hongkong",     image: "/study-in-hongkong-flag.jpg" },
  { name: "Study in UAE",          path: "/study-abroad/uae",          image: "/ua.jpg" },
  { name: "Study in Norway",       path: "/study-abroad/norway",       image: "/norwaystudy.avif" },
  { name: "Study in Sweden",       path: "/study-abroad/sweden",       image: "/swedenstudy.jpg" },
];

const stats = [
  { num: "15+",  label: "Years Experience" },
  { num: "50K+", label: "Students Placed" },
  { num: "24+",  label: "Countries Covered" },
  { num: "98%",  label: "Visa Success Rate" },
];

const features = [
  { icon: "🎓", title: "Expert Counselling",      desc: "Personalised guidance tailored to your academic background, budget, and career aspirations from certified counsellors." },
  { icon: "📋", title: "End-to-End Visa Support", desc: "We handle the entire student visa process — documentation, mock interviews, financial proofs and submission — stress-free." },
  { icon: "🏛️", title: "University Partnerships", desc: "Direct tie-ups with 500+ universities globally, giving you access to exclusive scholarships and faster admissions." },
  { icon: "✈️", title: "Pre-Departure Support",   desc: "Accommodation help, local culture briefings, and student community introductions so you land confidently." },
  { icon: "💰", title: "Scholarship Guidance",    desc: "We identify the best scholarship and funding options matching your profile so education stays affordable." },
  { icon: "📞", title: "24-Hour Response",         desc: "Our counsellors respond within 24 hours of your inquiry. No waiting, no uncertainty — just clear answers fast." },
];

export default function Migrate() {
  const pathname   = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  // kept for future use
  useEffect(() => {}, [pathname]);

  return (
    <>
      {/* ══ SEO HEAD ══════════════════════════════════════════════ */}
      <Head>
        <title>Study Abroad | VJC Overseas – Best Study Visa Consultants India</title>
        <meta
          name="description"
          content="VJC Overseas helps students study abroad in USA, UK, Canada, Australia, Germany and 20+ more countries. Expert student visa consultants with 98% success rate. Get free counselling today."
        />
        <meta
          name="keywords"
          content="study abroad, study visa consultants, overseas education consultants, student visa, study in USA, study in UK, study in Canada, study in Australia, VJC Overseas"
        />
        <meta property="og:title"       content="Study Abroad | VJC Overseas" />
        <meta property="og:description" content="Expert student visa consultants. Study in USA, UK, Canada, Australia & 20+ countries. 98% visa success rate." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://www.vjcoverseas.com/study-abroad" />
        <meta name="robots"             content="index, follow" />
        <link rel="canonical"           href="https://www.vjcoverseas.com/study-abroad" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "VJC Overseas",
              url: "https://www.vjcoverseas.com",
              description: "Best student visa and study abroad consultants in India.",
              areaServed: visaData.map((v) => v.name.replace("Study in ", "")),
              offers: { "@type": "Offer", description: "Free study abroad counselling and visa guidance" },
            }),
          }}
        />
      </Head>

      {/* ══ PAGE ══════════════════════════════════════════════════ */}
      <main className="w-full bg-white font-sans">

        {/* ── Orange top stripe ── */}
        <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />

        {/* ══════════════════════════════════════════
            HERO — white bg, form TOP RIGHT
        ══════════════════════════════════════════ */}
        <section className="w-full bg-white border-b border-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-14">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

              {/* LEFT: headline + stats + swiper */}
              <div className="w-full lg:w-[58%] flex flex-col gap-6">

                <span className="inline-flex items-center gap-2 self-start bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Trusted Consultants Since 2010
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.08] tracking-tight">
                  Study Abroad<br />
                  <span className="text-orange-500">with VJC Overseas</span>
                </h1>

                <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
                  Your dream university is one conversation away. Expert student visa consultants guiding you from shortlisting universities to landing on a foreign campus.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="text-3xl font-black text-orange-500">{s.num}</span>
                      <span className="text-gray-400 text-xs tracking-wide uppercase font-semibold">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* SWIPER */}
                <div className="w-full mt-2">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Explore Study Destinations</h2>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={12}
                    grabCursor={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                      0:    { slidesPerView: 1.2, centeredSlides: true },
                      480:  { slidesPerView: 1.6, centeredSlides: true },
                      768:  { slidesPerView: 2,   centeredSlides: false },
                      1024: { slidesPerView: 2.2, centeredSlides: true },
                    }}
                    className="!pb-10"
                  >
                    {visaData.map((visa, index) => {
                      const isActive = index === activeIndex;
                      return (
                        <SwiperSlide key={visa.path}>
                          <Link href={visa.path} aria-label={visa.name}>
                            {/*
                              KEY FIX: explicit height in px on the wrapper div.
                              Next/Image fill only works when parent has a defined
                              height — NOT just aspect-ratio or scale tricks.
                            */}
                            <div
                              className={`relative w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-md ${
                                isActive
                                  ? "ring-2 ring-orange-500 shadow-lg shadow-orange-100"
                                  : "opacity-80 hover:opacity-100"
                              }`}
                              style={{ height: "260px" }}
                            >
                              <Image
                                src={visa.image}
                                alt={`${visa.name} – VJC Overseas Study Abroad`}
                                fill
                                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 360px"
                                className="object-cover object-center"
                                quality={85}
                                priority={index < 4}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                              {isActive && (
                                <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />
                              )}
                              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                                <p className="text-white font-bold text-base drop-shadow">{visa.name}</p>
                                <span className="text-orange-300 text-xs font-semibold">View Details →</span>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>

              {/* RIGHT: FORM — sticky top */}
              <div className="w-full lg:w-[42%] lg:sticky lg:top-20">
                <div className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-orange-100 border border-orange-100">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-7 pt-6 pb-5">
                    <h2 className="text-white text-xl font-extrabold tracking-tight">
                      Get Free Counselling
                    </h2>
                    <p className="text-orange-100 text-sm mt-1">
                      Our experts will call you within 24 hours
                    </p>
                  </div>
                  <div className="bg-white px-7 py-6">
                    <Form />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            VIDEO SECTION — brand storytelling strip
            (not background — used as content)
        ══════════════════════════════════════════ */}
        <section
          className="relative w-full overflow-hidden"
          aria-label="VJC Overseas Study Abroad Story"
          style={{ height: "400px" }}
        >
          <video
            autoPlay loop muted playsInline aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/jobseeker.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">Our Story</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-3xl leading-tight mb-4">
              Turning Study Abroad Dreams into Reality
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mb-6">
              Over 50,000 students have trusted VJC Overseas to navigate their overseas education journey.
            </p>
            <a
              href="#destinations"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold px-7 py-3 rounded-full text-sm shadow-lg"
            >
              Explore Destinations ↓
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            DESTINATIONS GRID — IMAGES ALWAYS VISIBLE
        ══════════════════════════════════════════ */}
        <section
          id="destinations"
          className="w-full bg-gray-50 py-16 px-4 sm:px-8 lg:px-12"
          aria-label="Study Abroad Destinations"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">24+ Countries</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
                Choose Your <span className="text-orange-500">Destination</span>
              </h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto text-base">
                From Ivy League universities to European research hubs — find your perfect study destination.
              </p>
            </div>

            {/*
              GRID IMAGE FIX:
              paddingBottom trick creates a real height so Next/Image fill works.
              The wrapper must be position:relative and the inner absolute-positioned
              child must have inset-0. This reliably works on ALL screen sizes.
            */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {visaData.map((visa) => (
                <Link href={visa.path} key={visa.path} aria-label={visa.name} title={visa.name}>
                  <div
                    className="group relative w-full rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                    style={{ paddingBottom: "115%" }}   /* ← gives the cell a real height */
                  >
                    {/* inner absolutely-positioned layer */}
                    <div className="absolute inset-0">
                      <Image
                        src={visa.image}
                        alt={`${visa.name} – VJC Overseas`}
                        fill
                        sizes="(max-width: 640px) 47vw, (max-width: 768px) 30vw, (max-width: 1024px) 23vw, 16vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                        <p className="text-white text-[11px] sm:text-xs font-bold leading-tight drop-shadow">
                          {visa.name.replace("Study in ", "")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY VJC — feature cards
        ══════════════════════════════════════════ */}
        <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-12" aria-label="Why Choose VJC Overseas">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                Why Choose <span className="text-orange-500">VJC Overseas?</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SEO CONTENT — Google-crawlable keyword text
        ══════════════════════════════════════════ */}
        <section
          className="w-full bg-orange-50 py-16 px-4 sm:px-8 lg:px-12"
          aria-label="About VJC Overseas Study Abroad"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-2">
              Study Abroad with <span className="text-orange-500">VJC Overseas</span>
            </h2>
            <p className="text-center text-gray-400 text-sm font-semibold tracking-widest uppercase mb-10">
              Your Global Education Partner
            </p>

            <div className="grid sm:grid-cols-2 gap-5 text-gray-600 text-base leading-relaxed">
              {[
                {
                  link: { href: "https://www.vjcoverseas.com/", text: "VJC Overseas" },
                  before: "At ",
                  after: ", we believe education is a transformative journey that goes far beyond textbooks. It's about immersing yourself in a new culture, gaining global exposure, and building skills that prepare you for a competitive international career.",
                },
                {
                  link: { href: "https://www.vjcoverseas.com/study-abroad/canada", text: "Student Visa Consultants" },
                  before: "Our dedicated team works as experienced ",
                  after: ", guiding students from the moment they start researching options to the day they step onto a foreign campus — comprehensive, personalised support at every stage.",
                },
                {
                  link: { href: "https://www.vjcoverseas.com/", text: "Best Visa Immigration Consultants" },
                  before: "Recognised among the ",
                  after: ", our approach is built on a track record of success, transparent guidance, and strong partnerships with world-class institutions.",
                },
                {
                  link: { href: "https://www.vjcoverseas.com/study-abroad/usa", text: "Study Abroad Consultants" },
                  before: "As professional ",
                  after: ", we provide in-depth advice on admission requirements, scholarship opportunities, course selection, future career pathways, and help you plan finances effectively.",
                },
                {
                  link: { href: "https://www.vjcoverseas.com/study-abroad/italy", text: "Student Visa Process" },
                  before: "We understand the ",
                  after: " can seem daunting — multiple forms, interviews, and financial proofs. Our team ensures you meet all requirements and deadlines without stress, including mock interview prep.",
                },
                {
                  link: { href: "https://www.vjcoverseas.com/study-abroad/australia", text: "study abroad" },
                  before: "Your ",
                  after: " experience doesn't end with your visa. We assist with accommodation, local culture, and student communities so you adapt smoothly to your new environment.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
                  <p>
                    {item.before}
                    <Link href={item.link.href} className="text-orange-500 font-semibold hover:underline">
                      {item.link.text}
                    </Link>
                    {item.after}
                  </p>
                </div>
              ))}
            </div>

            {/* Country link list — crawlable by Google */}
            <div className="mt-8 bg-white rounded-2xl p-6 border border-orange-100 shadow-sm">
              <h3 className="text-gray-800 font-bold text-lg mb-4">
                Countries We Cover for Study Abroad
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-4 list-none p-0 m-0">
                {visaData.map((visa) => (
                  <li key={visa.path}>
                    <Link
                      href={visa.path}
                      className="text-orange-500 text-sm font-semibold hover:text-orange-700 hover:underline transition-colors"
                    >
                      {visa.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      

      </main>
    </>
  );
}