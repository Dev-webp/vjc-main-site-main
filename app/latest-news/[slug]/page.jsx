'use client';
import { useMemo, useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const mainStory = {
  title: "Trump's Bold New Announcement On US Visas Shocks Everyone",
  summary:
    "Latest updates from the White House: sweeping changes expected for work and student visas. See how this affects you.",
  image:
    '/donald-trump.jpeg',
  tag: 'Breaking News',
  time: '16m ago',
  readTime: '2 min read',
  content: `
  <p>The US government has announced sweeping changes to its visa policies, affecting millions of students and workers. The reforms, described as the most significant in decades, aim to streamline the process for skilled professionals and students while tightening security checks.</p>
  <h2>Key Changes</h2>
  <ul>
    <li>Faster H-1B processing for tech workers</li>
    <li>More student visa slots for STEM graduates</li>
    <li>New digital portal for application status tracking</li>
  </ul>
  <p>Industry experts say this could boost the US economy and make it a top destination for global talent. However, some advocacy groups have raised concerns about potential bottlenecks and fairness of the new digital lottery system.</p>
  <blockquote>
    "This is a game changer for international mobility." – <strong>VJC Overseas Analyst</strong>
  </blockquote>
  <p>Stay tuned for more updates as details emerge from the White House.</p>
  `,
};

const news = [
  mainStory,
  {
    title: 'Australia Makes Surprising Move On Skilled Visas',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=900&q=80',
    tag: 'Australia',
    time: '30m ago',
    readTime: '1 min read',
    summary: 'Australia unveils new points-based system. Experts say it could change migration forever.',
    content: `<p>Australia just revamped its skilled migration program, announcing a new points-based system that prioritizes younger, tech-savvy professionals. The government also revealed a fast-track process for regional employers.</p><ul><li>Extra points for STEM and health workers</li><li>Priority for remote region sponsorships</li></ul><p>Applicants worldwide are racing to update their profiles in anticipation.</p>`,
  },
  {
    title: 'UK Visit Visa: New Rules Anger Travelers',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    tag: 'UK',
    time: '1h ago',
    readTime: '2 min read',
    summary: 'UK tightens tourism rules and shortens stay duration. Travelers are upset.',
    content: `<p>The UK government introduced stricter documentation and reduced the standard tourist visa duration from 6 months to 3 months. Many travelers and travel agents have expressed frustration at the sudden change.</p>`,
  },
  {
    title: 'Canada Study Permit: What Just Changed?',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
    tag: 'Canada',
    time: '1h ago',
    readTime: '2 min read',
    summary: 'Canada updates study permit eligibility and work rules. Students rejoice!',
    content: `<p>Canada now allows international students to work more hours off-campus and has expanded eligibility for post-graduation work permits. The changes are expected to attract more global talent to Canadian universities.</p>`,
  },
  {
    title: 'USA H-1B: Shocking Simplification Announced',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=900&q=80',
    tag: 'USA',
    time: '2h ago',
    readTime: '2 min read',
    summary: 'H-1B process gets simpler, digital, and fairer. Here’s how it impacts you.',
    content: `<p>The US will implement a digital-first H-1B system, with transparent lotteries and instant status updates. Early reactions from tech companies are overwhelmingly positive.</p>`,
  },
];

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

export default function NewsArticlePage({ params }) {
  const { slug } = params;
  const story = useMemo(
    () => news.find((n) => slugify(n.title) === slug) || news[0],
    [slug]
  );
  const otherStories = news.filter((n) => slugify(n.title) !== slug);

  // Auto-scroll logic for infinite loop
  const scrollRef = useRef(null);
  // To force React to re-render after duplication
  const [_, setRerender] = useState(0);

  // Duplicate cards to create seamless infinite scrolling
  // We'll double the cards so when it reaches the end, it looks seamless
  const cards = [...otherStories, ...otherStories];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Set initial scroll position to 0
    el.scrollLeft = 0;

    let animationFrame;
    let running = true;
    const speed = 0.7;

    function step() {
      if (!running) return;
      // If scrolled past the first set, reset seamlessly
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += speed;
      }
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);

    // Pause on hover
    const onMouseEnter = () => { running = false; };
    const onMouseLeave = () => { running = true; animationFrame = requestAnimationFrame(step); };
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    // On resize, re-render to ensure seamless scroll
    const onResize = () => setRerender(v => v + 1);
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [otherStories.length]);

  // Modal logic for full image view
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0e7ff] via-[#F7F7F9] to-white pt-24 pb-16">
      {/* Main Card: Image Top, Text Down */}
      <div className="max-w-4xl mx-auto bg-white/95 rounded-3xl shadow-2xl mt-4 mb-8 overflow-hidden border-2 border-[#1681c4] magazine-effect w-full relative">
        <div
          className="relative w-full h-[210px] md:h-[370px] group cursor-pointer overflow-hidden flex items-center justify-center shadow-xl"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover object-center scale-105 transition-all duration-500 group-hover:scale-110"
            style={{
              minHeight: 210,
              maxHeight: 370,
              boxShadow: '0 16px 48px 0 #e0f4ff, 0 0px 10px 0 #ffdfbd'
            }}
          />
          <span className="absolute top-5 left-5 bg-gradient-to-r from-[#77bc1f] to-[#ff9000] text-white px-6 py-2 rounded-full text-base font-bold shadow-xl z-10">
            {story.tag}
          </span>
          <span className="absolute bottom-4 right-4 bg-[#ffffffcc] px-3 py-1 rounded-full text-xs font-extrabold text-[#1681c4] shadow z-10">
            Click to enlarge
          </span>
        </div>
        <div className="px-6 py-7 flex flex-col justify-center gap-2">
          <div className="flex items-center gap-4 mb-1">
            <span className="uppercase tracking-wide font-bold text-[#1681c4] text-xs">{story.time}</span>
            <span className="text-gray-400">•</span>
            <span className="text-xs text-[#ff9000] font-black">{story.readTime}</span>
          </div>
          <h1 className="text-[1.65rem] md:text-2xl font-extrabold leading-tight mb-2 magazine-title text-[#1681c4]">{story.title}</h1>
          <p className="text-[#444] text-base font-medium mb-2">{story.summary}</p>
          <div className="prose max-w-none text-[#222] text-base" dangerouslySetInnerHTML={{ __html: story.content }} />
        </div>
      </div>

      {/* Modal for full image view */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#000a] flex items-center justify-center transition-all"
          style={{ backdropFilter: 'blur(2px)' }}
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute top-0 right-0 m-4 z-60">
            <button
              aria-label="Close"
              className="bg-white text-[#ff9000] hover:bg-[#ff9000] hover:text-white rounded-full p-2 shadow-lg text-2xl font-black transition-colors"
              onClick={e => { e.stopPropagation(); setModalOpen(false)}}
            >×</button>
          </div>
          <img
            src={story.image}
            alt={story.title}
            className="max-w-[96vw] max-h-[80vh] rounded-2xl border-4 border-[#1681c4] shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* Horizontal infinite auto-scroll of other blogs */}
      <div className="max-w-6xl mx-auto px-1 mb-10">
        <h2 className="font-black text-xl mb-4 text-[#1681c4] magazine-title flex items-center gap-2">
          <span className="animate-bounce text-[#ff9000]">🔥</span>
          More Latest Blogs
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-2 magazine-scroll scroll-smooth relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {cards.map((item, i) => (
            <Link
              key={i}
              href={`/latest-news/${slugify(item.title)}`}
              className="flex-shrink-0 w-[310px] bg-white/90 rounded-2xl shadow-xl transition-all cursor-pointer group overflow-hidden border border-[#1681c4] hover:-translate-y-1 hover:shadow-2xl relative magazine-card"
              style={{
                boxShadow: i % 2 === 0 ? '0 2px 18px 0 #ffe0e0' : '0 2px 18px 0 #e0f4ff'
              }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-3 bg-gradient-to-r from-[#1681c4] to-[#ff9000] text-white px-2 py-0.5 rounded-full text-xs font-bold shadow">
                  {item.tag}
                </span>
                <span className="absolute top-2 right-3 text-xs text-gray-300 bg-black/40 px-2 py-0.5 rounded-full font-black">{item.time}</span>
              </div>
              <div className="flex-1 flex flex-col px-4 py-2">
                <div className="font-extrabold text-base mb-1 group-hover:text-[#ff9000] transition-colors magazine-title">
                  {item.title}
                </div>
                <div className="text-xs text-[#666] mb-2">{item.summary}</div>
                <div className="flex gap-2 text-xs text-gray-500 mt-auto font-black">
                  <span>{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Magazine accent */}
      <div className="fixed -z-10 top-0 right-0 w-[60vw] h-[100vh] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at right top, #ffe0e0 0%, #e0e7ff 60%, transparent 100%)'
        }}
      />
      <style jsx global>{`
        .magazine-title {
          font-family: 'Oswald', 'Montserrat', 'Arial Black', sans-serif;
          letter-spacing: -0.5px;
        }
        .magazine-scroll::-webkit-scrollbar {
          display: none;
        }
        .magazine-scroll {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}