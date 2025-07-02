'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Helper to slugify headings for URLs
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '')     // Remove leading/trailing hyphens
    .replace(/-+/g, '-');        // Collapse multiple hyphens
}

// MAIN STORY DATA
const mainStory = {
  title: "Trump's Bold New Announcement On US Visas Shocks Everyone",
  summary: "Latest updates from the White House: sweeping changes expected for work and student visas. See how this affects you.",
  image: '/donald-trump.jpeg',
  tag: 'Breaking News',
  time: '16m ago',
  readTime: '2 min read',
};

const nextStories = [
  {
    title: 'Australia Makes Surprising Move On Skilled Visas',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=400&q=80',
    tag: 'Australia',
    time: '30m ago',
    readTime: '1 min read',
  },
  {
    title: 'UK Visit Visa: New Rules Anger Travelers',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    tag: 'UK',
    time: '1h ago',
    readTime: '2 min read',
  },
  {
    title: 'Canada Study Permit: What Just Changed?',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    tag: 'Canada',
    time: '1h ago',
    readTime: '2 min read',
  },
  {
    title: 'USA H-1B: Shocking Simplification Announced',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=400&q=80',
    tag: 'USA',
    time: '2h ago',
    readTime: '2 min read',
  },
];

const visaNews = [
  {
    title: 'Germany: New Work Visa for IT Pros',
    summary: 'Easier access for tech talent! Find out if you qualify.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    tag: 'Germany',
    time: '2h ago',
    readTime: '1 min read',
  },
  {
    title: 'Canada’s Post-Grad Work: New Perks Revealed',
    summary: 'Stay longer and work more easily. Here’s what’s new...',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tag: 'Canada',
    time: '3h ago',
    readTime: '1 min read',
  },
  {
    title: 'Singapore: Fast-Track Business Visit Visas',
    summary: 'Business travelers rejoice! Instant approvals are here.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    tag: 'Singapore',
    time: '2h ago',
    readTime: '1 min read',
  },
  {
    title: 'France: More Student Visas In 2025!',
    summary: 'Quota up, process easier. Here’s how to apply.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    tag: 'France',
    time: '1h ago',
    readTime: '1 min read',
  },
];

// NewsTicker Bar with VJC logo colors and extra masala
function NewsTickerBar({ news }) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % news.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [news.length]);

  // Colors from the logo: blue #1681c4, orange #ff9000, green #77bc1f, gray #666, white
  return (
    <div className="w-full flex justify-center px-2 sm:px-0 z-10 mt-20 relative">
      <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1681c4] bg-gradient-to-r from-[#fff] via-[#f6fbff] to-[#fff7e6] my-6">
        <div className="flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-[#1681c4] via-white to-[#ff9000] text-white font-bold text-base md:text-lg relative">
          <img src="/logo-vjc.png" alt="VJC Overseas Logo" className="h-12 w-auto mr-2 hidden md:block rounded-md shadow" style={{ background: 'white', borderRadius: 8, border: '2px solid #ff9000' }} />
          <span className="text-2xl md:text-3xl animate-pulse">🔥</span>
          <div className="relative w-full flex items-center">
            <span className="text-sm md:text-base font-black tracking-wide uppercase drop-shadow mr-2" style={{ color: '#ff9000', textShadow: '1px 1px 0 #fff' }}>Headline News</span>
            <div className="flex-1 overflow-hidden">
              <div className="marquee whitespace-nowrap animate-marquee font-bold text-black">
                <span>Visa Buzz • Trending Now • Breaking Updates • Immigration Gossips • Hot Topics • </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-28 md:h-24 bg-white">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 90, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -90, scale: 0.95 }}
              transition={{ duration: 0.65, type: 'spring', stiffness: 80 }}
              className="absolute top-0 left-0 w-full h-full flex items-center px-6"
              style={{
                background: 'rgba(255,255,255,0.95)',
                borderBottomLeftRadius: 26,
                borderBottomRightRadius: 26
              }}
            >
              <Link href={`/latest-news/${slugify(news[active].title)}`}>
                <div className="flex gap-4 items-center cursor-pointer w-full">
                  <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-xl shadow-lg border-2 border-[#ff9000] bg-white">
                    <img src={news[active].image} alt={news[active].title} className="object-cover w-16 h-16" />
                  </div>
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex gap-2 items-center mb-0.5 flex-wrap">
                      <span className="text-xs bg-[#1681c4] text-white px-2 py-0.5 rounded-full font-bold shadow">{news[active].tag}</span>
                      <span className="text-xs text-gray-500">{news[active].time}</span>
                      <span className="text-xs text-[#ff9000] font-black">{news[active].readTime}</span>
                    </div>
                    <div className="font-extrabold text-base md:text-lg text-[#1681c4] mb-1 leading-tight line-clamp-2">{news[active].title}</div>
                    <div className="text-xs text-[#666] line-clamp-2">{news[active].summary}</div>
                  </div>
                  <span className="ml-2 text-2xl" style={{ color: '#77bc1f' }}>⚡</span>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-1.5 py-2 bg-gradient-to-r from-[#e1f4fe] via-white to-[#fff7e6]">
          {news.map((_, idx) => (
            <button
              key={idx}
              className={`h-2.5 w-2.5 rounded-full ${active === idx ? 'bg-[#ff9000]' : 'bg-[#1681c4]/30'} transition-all`}
              onClick={() => setActive(idx)}
              aria-label={`Show news ${idx + 1}`}
            />
          ))}
        </div>
        {/* Masala at the end */}
        <div className="flex items-center justify-between gap-4 px-6 py-2 bg-gradient-to-r from-[#1681c4] via-[#ff9000] to-white text-white font-bold text-base rounded-b-3xl">
          <span className="flex items-center gap-2">
            <img src="/logo-vjc.png" alt="VJC Overseas Logo" className="h-7 w-auto rounded-full bg-white p-0.5 mr-2" />
            VJC Overseas - Where Your Dreams Take Flight!
          </span>
          <span className="italic font-black text-black drop-shadow animate-bounce">Masaledaar News, Only @ VJC! </span>
        </div>
      </div>
      <style jsx global>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee-scroll 10s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function LatestNewsMagazine() {
  // Magazine effect: Animated background and pop
  return (
    <main className="min-h-screen w-full p-0 m-0 bg-gradient-to-b from-[#e0e7ff] via-[#F7F7F9] to-white relative overflow-x-hidden">
      {/* NewsTickerBar with VJC logo colors and masala */}
      <NewsTickerBar news={visaNews} />

      <div className="max-w-6xl mx-auto flex flex-col gap-7 w-full pt-2 px-2 md:px-0 relative z-10">
        {/* Hero Section */}
        <section className="bg-white/90 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative border border-[#1681c4] magazine-effect">
          {/* Decorative magazine border */}
          <div className="absolute -left-3 top-0 h-full w-2 bg-gradient-to-b from-[#1681c4] via-[#77bc1f] to-[#ff9000] rounded-full shadow-lg opacity-70"></div>
          {/* Main Story Image */}
          <div className="md:w-[340px] flex-shrink-0 relative flex items-center justify-center overflow-hidden">
            <img
              src={mainStory.image}
              alt={mainStory.title}
              className="h-[220px] md:h-full w-full object-cover object-center scale-[1.09] rotate-[-2deg] shadow-xl"
              style={{ minHeight: 220, minWidth: 340, borderRadius: 18 }}
            />
            {/* Tag Pill */}
            <span className="absolute top-4 left-4 bg-gradient-to-r from-[#77bc1f] to-[#ff9000] text-white px-3 py-1 rounded-full text-xs font-bold shadow">
              {mainStory.tag}
            </span>
          
            
          </div>
          {/* Main Story Info */}
          <div className="flex-1 px-8 py-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-gray-500 text-xs mb-1">
              <span className="uppercase tracking-wide font-bold" style={{ color: '#1681c4' }}>{mainStory.time}</span>
              <span>•</span>
              <span>{mainStory.readTime}</span>
            </div>
            <Link href={`/latest-news/${slugify(mainStory.title)}`}>
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3 hover:text-[#ff9000] transition-colors cursor-pointer drop-shadow magazine-title">
                {mainStory.title}
              </h1>
            </Link>
            <p className="text-[#666] mb-2 text-base font-medium leading-snug">{mainStory.summary}</p>
          </div>
        </section>

        {/* Latest News Header */}
        <div className="flex items-center justify-between mt-2 mb-1">
          <h2 className="font-black text-xl md:text-2xl tracking-tight drop-shadow magazine-title flex items-center gap-2" style={{ color: '#1681c4' }}>
            <span className="animate-bounce text-[#ff9000]">🔥</span>Latest News & Gossips
          </h2>
          <Link href="/latest-news" className="text-[#ff9000] text-sm font-bold hover:underline">
            See all
          </Link>
        </div>

        {/* Latest News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {nextStories.slice(0, 4).map((story, i) => (
            <Link
              href={`/latest-news/${slugify(story.title)}`}
              key={i}
              className="flex flex-col bg-white/90 rounded-2xl shadow-xl transition-shadow cursor-pointer group overflow-hidden border border-[#1681c4] hover:-translate-y-1 hover:shadow-2xl relative magazine-card"
              style={{
                boxShadow: i % 2 === 0 ? '0 3px 36px 0 #ffe0e0' : '0 3px 36px 0 #e0f4ff'
              }}
            >
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-2 left-3 bg-gradient-to-r from-[#1681c4] to-[#ff9000] text-white px-2 py-0.5 rounded-full text-xs font-bold shadow`}>
                  {story.tag}
                </span>
                <span className="absolute top-2 right-3 text-xs text-gray-300 bg-black/40 px-2 py-0.5 rounded-full font-black">{story.time}</span>
              </div>
              <div className="flex-1 flex flex-col px-4 py-2">
                <div className="font-extrabold text-base mb-1 group-hover:text-[#ff9000] transition-colors magazine-title">
                  {story.title}
                </div>
                <div className="flex gap-2 text-xs text-gray-500 mt-auto font-black">
                  <span>{story.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Visa News */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {visaNews.map((item, i) => (
            <Link
              href={`/latest-news/${slugify(item.title)}`}
              key={i}
              className="flex flex-col bg-white/95 rounded-2xl shadow-xl transition-shadow cursor-pointer group overflow-hidden border border-[#1681c4] hover:-translate-y-1 hover:shadow-2xl relative magazine-card"
              style={{
                boxShadow: i % 2 === 0 ? '0 3px 36px 0 #ffe0e0' : '0 3px 36px 0 #e0f4ff'
              }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-3 bg-gradient-to-r from-[#77bc1f] to-[#1681c4] text-white px-2 py-0.5 rounded-full text-xs font-bold shadow">{item.tag}</span>
                <span className="absolute top-2 right-3 text-xs text-gray-300 bg-black/40 px-2 py-0.5 rounded-full font-black">{item.time}</span>
              </div>
              <div className="flex-1 flex flex-col px-4 py-2">
                <div className="font-extrabold text-base mb-1 group-hover:text-[#77bc1f] transition-colors magazine-title">
                  {item.title}
                </div>
                <div className="text-xs text-[#666] mb-1">{item.summary}</div>
                <div className="flex gap-2 text-xs text-gray-500 mt-auto font-black">
                  <span>{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Magazine background gradient accent */}
      <div className="fixed -z-10 top-0 right-0 w-[60vw] h-[100vh] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at right top, #ffe0e0 0%, #e0e7ff 60%, transparent 100%)'
        }}
      />
      {/* Magazine page edge */}
      <div className="fixed -z-10 left-0 top-0 w-6 h-full bg-gradient-to-br from-[#ff9000] via-white to-[#1681c4] pointer-events-none rounded-r-3xl shadow-2xl opacity-70" />
    </main>
  );
}