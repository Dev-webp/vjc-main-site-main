'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRegPaperPlane, FaTimes } from 'react-icons/fa';
import Form from './Form';

// Helper to slugify headings for URLs
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '')     // Remove leading/trailing hyphens
    .replace(/-+/g, '-');        // Collapse multiple hyphens
}

const mainStory = {
  title: '2025 Work Visa Trends: Opportunities & Challenges for Global Professionals',
  summary: 'Explore how new policies in top destinations are reshaping opportunities for skilled workers worldwide.',
  image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=700&q=80',
};

const nextStories = [
  {
    title: 'Australia Opens New Pathways for Skilled Work Visas in 2025',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'UK Tightens Visit Visa Rules: What Travelers Need to Know',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Canada Study Permit: New Financial Requirements for 2025',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'USA Announces H-1B Reforms: Simplifying the Work Visa Process',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=400&q=80',
  },
];

const visaNews = [
  {
    title: 'Germany to Launch Special Work Visa for IT Professionals',
    summary: 'A new tech talent program will allow easier access for skilled IT workers to enter Germany.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Canada’s Post-Graduation Work Permit: What International Students Must Know',
    summary: 'Recent changes make it even more attractive for students to stay and work after graduation.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Singapore Simplifies Visit Visa for Business Travelers',
    summary: 'Short-term visit visa process now faster for business visitors from 2025.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'France Increases Quota for Student Visas in 2025',
    summary: 'More international students can now pursue higher education in France with new streamlined processes.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
];

const visibleCards = 3;
const cardWidth = 340; // px

function VisaNewsCarousel({ visaNews }) {
  const [index, setIndex] = useState(0);
  const timeout = useRef(null);

  const extendedNews = [...visaNews, ...visaNews.slice(0, visibleCards)];

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % visaNews.length);
    }, 3000);
    return () => clearTimeout(timeout.current);
  }, [index, visaNews.length]);

  const x = -(index * (cardWidth + 32));

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-8"
        animate={{ x }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        style={{ width: `${cardWidth * extendedNews.length + 32 * (extendedNews.length - 1)}px` }}
      >
        {extendedNews.map((item, i) => (
          <Link
            key={i}
            href={`/latest-news/${slugify(item.title)}`}
            className="bg-white rounded-xl shadow group hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col cursor-pointer min-w-0"
            style={{ flex: `0 0 ${cardWidth}px`, width: `${cardWidth}px` }}
          >
            <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300" />
            <div className="p-4 flex-1 flex flex-col">
              <div className="font-bold text-base mb-1 group-hover:text-blue-700 transition-colors">
                {item.title}
              </div>
              <div className="text-sm text-gray-600 flex-1">{item.summary}</div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default function LatestNewsMagazine() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) {
        setShowForm(true);
      }
    }
  }, []);

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showForm) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [showForm]);

  return (
    <main className="min-h-screen w-full mt-20 p-0 m-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 w-full pt-8">
        <section className="w-full lg:w-[65%]">
          <h2 className="font-bold text-2xl mb-4 mt-4">LATEST ON WORK VISAS, VISIT VISAS & STUDY ABROAD</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Big Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.8, type: "spring" }}
              className="flex-1 group cursor-pointer flex flex-col"
            >
              <Link href={`/latest-news/${slugify(mainStory.title)}`}>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={mainStory.image}
                    alt={mainStory.title}
                    className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h1 className="mt-4 text-2xl font-extrabold leading-tight group-hover:text-blue-700 transition-colors">
                  {mainStory.title}
                </h1>
                <p className="text-gray-600 mt-2">{mainStory.summary}</p>
              </Link>
            </motion.div>
            {/* 3 Small Cards: stacked vertically and centered on mobile */}
            <div className="flex flex-col gap-4 w-full md:w-[300px] max-w-[320px] items-center md:items-stretch">
              {nextStories.slice(0, 3).map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.7, type: "spring" }}
                  className="group flex flex-col rounded-lg hover:bg-blue-50 transition-colors shadow w-[90%] md:w-full mx-auto"
                >
                  <Link href={`/latest-news/${slugify(story.title)}`}>
                    <img src={story.image} alt={story.title} className="h-20 w-full object-cover rounded-t-lg shadow group-hover:scale-105 transition-transform duration-300" />
                    <div className="p-2">
                      <div className="font-semibold text-sm group-hover:text-blue-700 transition-colors text-center md:text-left">
                        {story.title}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Visa/Study Abroad News Section */}
          <div className="mt-16">
            <h2 className="font-bold text-xl mb-6 text-blue-800">🌍 Latest Visa & Study Abroad News</h2>
            <VisaNewsCarousel visaNews={visaNews} />
          </div>
        </section>
        {/* RIGHT: Sticky Form, 35% width (desktop only), no bg/heading */}
        <aside className="hidden lg:block w-full lg:w-[35%] flex-shrink-0 pt-8">
          <div className="sticky top-24">
            <div className="p-0">
              <Form />
            </div>
          </div>
        </aside>
      </div>
      {/* Mobile Popup Form (no heading, no bg, default open) */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md rounded-2xl shadow-xl p-0 m-2"
            style={{ background: 'none' }}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl focus:outline-none"
              onClick={() => setShowForm(false)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="bg-white rounded-2xl shadow-xl p-4">
              <Form />
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* FAB Icon for Mobile (shows only if form is closed) */}
      {!showForm && (
        <button
          aria-label="Apply / Get Help"
          onClick={() => setShowForm(true)}
          className="fixed z-40 lg:hidden bottom-24 right-4 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors outline-none"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.20)' }}
        >
          <motion.span
            animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center text-2xl"
          >
            <FaRegPaperPlane />
          </motion.span>
        </button>
      )}
    </main>
  );
}