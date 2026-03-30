"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Globe, DollarSign, ClipboardCheck, Users, ArrowRight, CheckCircle } from "lucide-react";
import PassportServices  from "./PassportServices";
import AirTicketing      from "./AirTicketing";
import ForexServices     from "./ForexServices";
import FreeAssessment    from "./FreeAssessment";
import FreeCounselling   from "./FreeCounselling";
import Form              from "./Form";
import Link              from "next/link";

/* ─── data ────────────────────────────────────────────────── */
const services = [
  {
    key:   "passport-services",
    title: "Passport Services",
    image: "/passport.webp",
    icon:  <Globe size={18} />,
    tagline: "Fast-track your travel document",
    color:  "from-orange-400 to-orange-600",
  },
  {
    key:   "air-ticketing",
    title: "Air Ticketing",
    image: "/airtecket.png",
    icon:  <Plane size={18} />,
    tagline: "Best fares, zero hassle",
    color:  "from-sky-400 to-sky-600",
  },
  {
    key:   "forex-services",
    title: "Forex Services",
    image: "/forex.png",
    icon:  <DollarSign size={18} />,
    tagline: "Competitive exchange rates",
    color:  "from-emerald-400 to-emerald-600",
  },
  {
    key:   "free-assessment",
    title: "Free Assessment",
    image: "/freeassignment.webp",
    icon:  <ClipboardCheck size={18} />,
    tagline: "Know your visa eligibility",
    color:  "from-violet-400 to-violet-600",
  },
  {
    key:   "free-counselling",
    title: "Free Counselling",
    image: "/freeass.jpg",
    icon:  <Users size={18} />,
    tagline: "Personalised expert guidance",
    color:  "from-rose-400 to-rose-600",
  },
];

const serviceComponents = {
  "passport-services": <PassportServices />,
  "air-ticketing":     <AirTicketing />,
  "forex-services":    <ForexServices />,
  "free-assessment":   <FreeAssessment />,
  "free-counselling":  <FreeCounselling />,
};

const highlights = [
  "98% Visa Success Rate",
  "15+ Years of Experience",
  "50,000+ Students Placed",
  "Free Expert Consultation",
];

/* ─── component ───────────────────────────────────────────── */
export default function ServicePage() {
  const pathname   = usePathname();
  const currentKey = pathname.split("/").pop();

  const [selected, setSelected] = useState(services[0]);

  useEffect(() => {
    const found = services.find((s) => s.key === currentKey);
    if (found) setSelected(found);
  }, [currentKey]);

  return (
    <main className="w-full bg-white mt-20 lg:mt-14 min-h-screen" style={{ fontFamily: "'Times New Roman', Times, serif" }}>

      {/* ── orange top stripe ── */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />

      {/* ════════════════════════════════════════
          MARQUEE TICKER
      ════════════════════════════════════════ */}
      <div className="w-full bg-orange-500 py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 text-white text-sm font-semibold">
          {/* duplicated for seamless loop */}
          {[...services, ...services].map((s, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="opacity-70">{s.icon}</span>
              {s.title}
              <span className="opacity-40 mx-2">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          HERO HEADER
      ════════════════════════════════════════ */}
      <section className="w-full bg-white border-b border-gray-100 px-4 sm:px-8 lg:px-16 pt-10 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              VJC Overseas Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Everything You Need,<br />
              <span className="text-orange-500">One Roof.</span>
            </h1>
            <p className="text-gray-400 mt-3 text-base max-w-lg">
              From passport assistance to air tickets, forex, free assessments and expert counselling — we handle it all.
            </p>
          </div>

          {/* highlights row */}
          <div className="flex flex-wrap gap-3 sm:justify-end">
            {highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                <CheckCircle size={12} className="text-orange-500 shrink-0" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICE TAB CARDS
      ════════════════════════════════════════ */}
      <section className="w-full bg-gray-50 px-4 sm:px-8 lg:px-16 py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {services.map((service) => {
              const isActive = selected.key === service.key;
              return (
                <Link href={`/services/${service.key}`} scroll={false} key={service.key}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm ${
                      isActive
                        ? "ring-2 ring-orange-500 shadow-lg shadow-orange-100"
                        : "hover:shadow-md"
                    }`}
                    style={{ paddingBottom: "100%" }}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 47vw, 20vw"
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                        quality={80}
                      />
                      {/* gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        isActive
                          ? "from-orange-600/90 via-orange-500/40 to-transparent"
                          : "from-black/70 via-black/20 to-transparent"
                      }`} />

                      {/* active top bar */}
                      {isActive && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <div className={`inline-flex items-center justify-center w-7 h-7 rounded-full mb-1.5 ${
                          isActive ? "bg-white text-orange-500" : "bg-white/20 text-white"
                        }`}>
                          {service.icon}
                        </div>
                        <p className="text-white font-bold text-xs sm:text-sm leading-tight drop-shadow">
                          {service.title}
                        </p>
                        <p className="text-white/70 text-[10px] leading-tight mt-0.5 hidden sm:block">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MAIN CONTENT + FORM
      ════════════════════════════════════════ */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

          {/* ── LEFT: service content ── */}
          <div className="w-full ">

            {/* selected service header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${selected.color} text-white shadow-lg`}>
                {selected.icon}
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">{selected.title}</h2>
                <p className="text-gray-400 text-sm">{selected.tagline}</p>
              </div>
            </div>

            {/* service banner image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md mb-8" style={{ height: "240px" }}>
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover object-center"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className={`inline-block bg-gradient-to-r ${selected.color} text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full`}>
                  {selected.title}
                </span>
              </div>
            </div>

            {/* scrollable service body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8 max-h-[560px] overflow-y-auto"
              >
                <div className="prose prose-sm sm:prose max-w-none text-gray-600">
                  {serviceComponents[selected.key]}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* quick nav to other services */}
            <div className="mt-6">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3">
                Other Services
              </p>
              <div className="flex flex-wrap gap-2">
                {services
                  .filter((s) => s.key !== selected.key)
                  .map((s) => (
                    <Link
                      key={s.key}
                      href={`/services/${s.key}`}
                      scroll={false}
                      className="inline-flex items-center gap-1.5 border border-gray-200 hover:border-orange-400 hover:text-orange-500 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
                    >
                      {s.icon}
                      {s.title}
                      <ArrowRight size={11} />
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form — sticky ── */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-20">

            {/* CTA card */}
            <div className="relative rounded-2xl overflow-hidden mb-5 shadow-md" style={{ height: "160px" }}>
              <Image
                src="/bar.jpeg"
                alt="Get Started with VJC Overseas"
                fill
                sizes="38vw"
                className="object-cover object-center"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-center px-7">
                <h3 className="text-white text-xl font-black leading-tight mb-1">
                  Get Started Today!
                </h3>
                <p className="text-white/70 text-sm mb-3">
                  Unlock hassle-free services with VJC Overseas.
                </p>
                <span className="inline-block self-start bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  🎁 Free Consultation
                </span>
              </div>
            </div>

            {/* form card */}
          
              
              <div className="bg-white ">
                <Form />
              </div>
    

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA FOOTER STRIP
      ════════════════════════════════════════ */}
      <section className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 py-12 px-4 text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-black mb-2">
          Ready to Take the Next Step?
        </h2>
        <p className="text-orange-100 text-base max-w-lg mx-auto mb-6">
          Talk to a VJC Overseas expert today — completely free, no obligation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919160449000"
            className="inline-block bg-white text-orange-600 font-extrabold px-7 py-3 rounded-full text-sm hover:bg-orange-50 transition-colors shadow-lg"
          >
            📞 +91 9160449000
          </a>
          <a
            href="https://wa.me/919160449000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-extrabold px-7 py-3 rounded-full text-sm hover:bg-green-600 transition-colors shadow-lg"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>

      {/* ── marquee keyframe ── */}
      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 28s linear infinite;
        }
      `}</style>

    </main>
  );
}