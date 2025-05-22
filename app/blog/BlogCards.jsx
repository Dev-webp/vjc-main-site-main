'use client';

import './global.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'How to Apply for Canada Student Visa in 2025',
    slug: 'how-to-apply-for-canada-student-visa-2025',
    description: 'A complete checklist for Indian students planning to study in Canada',
    image: '/canada1.jpg',
    category: 'Study Tips',
  },
  {
    id: 2,
    title: 'Germany Opportunity Card - Everything You Need to Know in 2025',
    slug: 'germany-opportunity-card-2025',
    description: 'An overview of the new work visa for tech professionals migrating to Germany',
    image: '/germany.jpg',
    category: 'Visa Guide',
  },
  {
    id: 3,
    title: 'Working While Studying: Pros & Cons',
    slug: 'working-while-studying-pros-cons',
    description: 'Find the balance between academics and income.',
    image: '/WorkingHoliday417Visa.jpg',
    category: 'Work Abroad',
  },
  {
    id: 4,
    title: 'Study Abroad Scholarships You Must Know',
    slug: 'study-abroad-scholarships',
    description: 'Unlock your education journey with scholarships.',
    image: '/studyabroad.png',
    category: 'Study Tips',
  },
  {
    id: 5,
    title: 'Countries Offering Tourist Visas',
    slug: 'countries-tourist-visas',
    description: 'Top destinations with easy tourist visa options.',
    image: '/balgeriatour.jpg',
    category: 'Visa Guide',
  },
  {
    id: 6,
    title: 'Search for Your Dream Country',
    slug: 'search-dream-country',
    description: 'Plan your journey to study, work, or migrate abroad.',
    image: '/vjc-gdvisa.jpg',
    category: 'Work Abroad',
  },
];

const BlogCards = ({ search = '', category = 'All' }) => {
  const filtered = blogs.filter((blog) => {
    const matchesCategory = category === 'All' || blog.category === category;
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='bg-gradient-to-br from-white via-orange-50 to-white py-12'>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-black via-orange-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md">
          Featured Blogs
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10">
        {filtered.length > 0 ? (
          filtered.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="relative group rounded-2xl bg-white border border-orange-100 shadow-xl hover:shadow-2xl hover:shadow-orange-300/30 overflow-hidden transition duration-500"
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                </div>

                <div className="relative z-20 p-6">
                  <span className="inline-block mb-1 text-[10px] font-semibold uppercase tracking-wider text-orange-600">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Unique read more button */}
                  <div className="mt-6">
                    <div className="relative inline-block group">
                      <span className="absolute inset-0 bg-orange-500 rounded-full blur-sm opacity-70 group-hover:scale-105 transition-transform duration-300"></span>
                      <span className="relative px-4 py-2 bg-white border border-orange-500 text-orange-600 rounded-full font-semibold text-sm transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogCards;
