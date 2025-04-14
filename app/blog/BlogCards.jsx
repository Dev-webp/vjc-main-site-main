'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    title: 'Germany Opportunity Card - Everything. You Neird to Know in 2025',
    slug: 'how-to-apply-for-canada-student-visa-2026',
    description: 'An ovement of the new work visa for Bc. Tist professionals migrati. to Germany',
    image: '/germany.jpg',
    category: 'Visa Guide',
  },
  {
    id: 3,
    title: 'Working While Studying: Pros & Cons',
    slug: 'how-to-apply-for-canada-student-visa-2024',
    description: 'Find the balance between academics and income.',
    image: '/WorkingHoliday417Visa.jpg',
    category: 'Work Abroad',
  },
  {
    id: 4,
    title: 'Study Abroad Scholarships You Must Know',
    slug: 'how-to-apply-for-canada-student-visa-2023',
    description: 'Unlock your education journey with scholarships.',
    image: '/studyabroad.png',
    category: 'Study Tips',
  },
  {
    id: 5,
    title: 'Countries of Tourist Visas',
    slug: 'how-to-apply-for-canada-student-visa-2021',
    description: 'Earn while you learn: best part-time opportunities.',
    image: '/balgeriatour.jpg',
    category: 'Visa Guide',
  },
  {
    id: 6,
    title: 'Serach for your dream countries',
    slug: 'how-to-apply-for-canada-student-visa-2021',
    description: 'Earn while you learn: best part-time opportunities.',
    image: '/vjc-gdvisa.jpg',
    category: 'Work Abroad',
  },
  
];

const BlogCards = ({ search = '', category = 'All' }) => {
  const [showAll, setShowAll] = useState(false);

  const filtered = blogs.filter((blog) => {
    const matchesCategory = category === 'All' || blog.category === category;
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleBlogs = showAll ? filtered : filtered.slice(0, 3);

  return (
    <>
    <div className='bg-white'>
      <div className="-mt-12 mb-6 bg-white">
        <h2 className="text-4xl bg-gradient-to-r from-black via-orange-500 to-orange-500 bg-clip-text text-transparent">
          Featured Blogs
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 bg-white">
        {visibleBlogs.length > 0 ? (
          visibleBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>

              <div className="cursor-pointer bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col">
                
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform hover:scale-105 duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between h-64"> {/* <-- fixed height here */}
  <div>
    <span className="text-xs uppercase tracking-wide text-purple-500 font-semibold">
      {blog.category}
    </span>

    <h2 className="text-xl font-bold mt-2 text-gray-800 line-clamp-3"> {/* <-- limit title lines */}
      {blog.title}
    </h2>

    <p className="text-sm text-gray-600  "> {/* <-- limit description lines */}
      {blog.description}
    </p>
  </div>

  {/* Read More */}
  <div className="">
    <span className="text-orange-500 hover:text-purple-800 text-sm font-semibold flex items-center gap-1">
      Read More →
    </span>
  </div>
</div>


              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No blogs found.</p>
        )}
      </div>

      {/* Load More / Load Less Button */}
      {filtered.length > 3 && (
        <div className="flex justify-end mt-6 px-4 sm:px-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-500 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            {showAll ? 'Load Less' : 'Load More'}
          </button>
        </div>
      )}
      </div>
    </>
  );
};

export default BlogCards;
