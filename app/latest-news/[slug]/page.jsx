'use client';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Form from '../Form';

// Helper to slugify headings for URLs
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

// --- Your news/blog data ---
const allNews = [
  {
    title: '2025 Work Visa Trends: Opportunities & Challenges for Global Professionals',
    summary: 'Explore how new policies in top destinations are reshaping opportunities for skilled workers worldwide.',
    image: '/12.webp',
    published: 'Thursday, 21 February 2019',
    content: `Shop a color printer with <b>Hp coupons code</b> to get many discounts and savings by $200 off for the hp laser jet pro 200 color printer m251nw and save $100 instantly with Hp coupon $200 off $100. This offer applicable through 2014 march 31st`,
    labels: [
      'coupon code 20%', 'coupons', 'home office store', 'hp coupon', 'hp coupon code', 'hp coupon code $10 off $60', 'hp coupon code 20% off', 'hp coupon code 20% off hp home & home', 'hp home', 'laserjet', 'office store', 'printer', 'pro'
    ]
  },
  {
    title: 'Australia Opens New Pathways for Skilled Work Visas in 2025',
    image: '/12.webp',
    summary: 'Australia is expanding its skilled work visa program for 2025.',
    published: 'Monday, 1 July 2024',
    content: 'Australia is introducing new pathways for skilled work visas in 2025, making it easier for professionals to immigrate.',
    labels: ['australia', 'skilled visa', 'work visa', 'immigration']
  },
  {
    title: 'UK Tightens Visit Visa Rules: What Travelers Need to Know',
    image: '/12.webp',
    summary: 'The UK has introduced stricter regulations for visit visas.',
    published: 'Friday, 28 June 2024',
    content: 'Travelers to the UK should note new visit visa requirements introduced in 2024.',
    labels: ['uk', 'visit visa', 'travel', 'regulations']
  },
  {
    title: 'Canada Study Permit: New Financial Requirements for 2025',
    image: '/12.webp',
    summary: 'Canada has updated the financial requirements for study permit applicants.',
    published: 'Wednesday, 26 June 2024',
    content: 'International students applying for a Canadian study permit must now show higher financial resources in 2025.',
    labels: ['canada', 'study permit', 'student visa', 'education']
  },
  {
    title: 'USA Announces H-1B Reforms: Simplifying the Work Visa Process',
    image: '/12.webp',
    summary: 'US H-1B reforms are aimed at making the process smoother.',
    published: 'Monday, 24 June 2024',
    content: 'The US has announced major reforms to the H-1B work visa process to simplify and expedite applications.',
    labels: ['usa', 'h-1b', 'work visa', 'immigration']
  },
];

const visibleCards = 3;
const cardWidth = 320;

export default function LatestNewsDetailPage() {
  const params = useParams();
  const { slug } = params;

  // Find news/blog by slug
  const mainNews = allNews.find(story => slugify(story.title) === slug);
  const otherNews = allNews.filter(story => slugify(story.title) !== slug);

  // Carousel state for "other blogs/news"
  const [carouselIndex, setCarouselIndex] = useState(0);
  const autoScrollRef = useRef();

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % otherNews.length);
    }, 3000);
    return () => clearInterval(autoScrollRef.current);
  }, [otherNews.length]);

  // For infinite carousel
  const extendedNews = [...otherNews, ...otherNews.slice(0, visibleCards)];
  const x = -(carouselIndex * (cardWidth + 32));

  // Responsive popup form state
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setShowForm(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showForm) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [showForm]);

  if (!mainNews) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="font-bold text-2xl mb-4">Not found</h1>
        <Link href="/latest-news" className="px-4 py-2 bg-blue-600 text-white rounded">
          Go to Latest News
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full max-w-7xl mt-20 mx-auto pt-8 px-2 md:px-8 flex flex-col md:flex-row gap-8">
      {/* LEFT: Article */}
      <section className="w-full md:w-[65%]">
        <div className="bg-orange-500 rounded-lg shadow-lg p-6 mb-8">
          <div className="text-gray-200 mb-2 text-sm">{mainNews.published}</div>
          <h1 className="text-white text-2xl md:text-3xl font-extrabold mb-4">{mainNews.title}</h1>
          <div className="flex justify-center mb-6">
            <img
              src={mainNews.image}
              alt={mainNews.title}
              className="rounded-lg border-8 border-orange-600 max-w-full h-72 object-contain bg-black"
            />
          </div>
          <div className="text-white text-lg mb-3" dangerouslySetInnerHTML={{ __html: mainNews.content || mainNews.summary }} />
          <h2 className="text-2xl text-white font-bold mt-8 mb-2">{mainNews.title}</h2>
          <div className="text-orange-100 text-sm mb-2">
            Posted by <span className="font-semibold">Unknown</span>{' '}
            <span className="text-orange-200 ml-2">22:05</span>
          </div>
          <div className="text-orange-50 text-xs">
            <span className="font-bold">Labels:</span>{' '}
            {mainNews.labels && mainNews.labels.map((label, i) => (
              <span key={label}>
                {label}{i < mainNews.labels.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Carousel of other news/blogs */}
        <h2 className="font-bold text-xl mb-4 text-orange-500">Other Latest News</h2>
        <div className="overflow-hidden w-full mb-16">
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
                className="bg-orange-500 rounded-xl shadow group hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col cursor-pointer min-w-0"
                style={{ flex: `0 0 ${cardWidth}px`, width: `${cardWidth}px` }}
              >
                <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4 flex-1 flex flex-col">
                  <div className="font-bold text-base mb-1 group-hover:text-white text-white transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-orange-100 flex-1 line-clamp-2">{item.summary}</div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
      {/* RIGHT: Sticky Form on desktop */}
      <aside className="hidden md:block w-full md:w-[35%] flex-shrink-0 md:pt-8">
        <div className="sticky top-24">
          <div className="bg-white rounded-xl shadow-xl p-4">
            <Form />
          </div>
        </div>
      </aside>

      {/* Mobile popup Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 md:hidden">
          <div className="relative w-full max-w-md rounded-2xl shadow-xl p-0 m-2 bg-white">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl focus:outline-none"
              onClick={() => setShowForm(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="rounded-2xl shadow-xl p-4">
              <Form />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}