'use client';
import Image from 'next/image';
import Link from 'next/link';
import Form from './Form';

const blogs = [
  
    {
      id: 1,
      title: 'Top Countries to Migrate in 2025 with VJC Overseas',
      description: 'Discover the best immigration opportunities and how VJC Overseas can guide your journey to a better future.',
      image: '/airtecket.png',
    },
    {
      id: 2,
      title: 'Simplifying Your Visa Process with VJC Experts',
      description: 'Get hassle-free visa services and personalized support for your migration dreams with VJC Overseas.',
      image: '/b2.webp',
    },
    {
      id: 3,
      title: 'Work Visa Opportunities: Build Your Career Abroad',
      description: 'Explore the latest global work visa options and start your international career with VJC Overseas.',
      image: '/women2.avif',
    },
    {
      id: 4,
      title: 'Student Visas Made Easy with VJC Overseas',
      description: 'Turn your study abroad dream into reality with expert student visa guidance and support from VJC.',
      image: '/greeceimg.png',
    },
  
  
];

const LatestBlog = () => {
  return (
    <div className="px-4 sm:px-10 py-10 -mt-20 bg-white">
      <h2 className="text-4xl mb-8 bg-gradient-to-r from-black via-orange-500 to-orange-500 bg-clip-text text-transparent">
        Latest Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {blogs.map((blog) => (
    <div
      key={blog.id}
      className="flex items-center bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition duration-300 cursor-pointer"
    >
      {/* Image on left */}
      <div className="relative w-28 h-28 flex-shrink-0">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content on right */}
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
      </div>
    </div>
  ))}
</div>

      <div className="bg-gray-800 flex flex-col md:flex-row justify-between items-center px-8 py-6 mt-12 shadow-lg max-w-4xl mx-auto">
  {/* Left Text */}
  <div className="text-center md:text-left mb-4 md:mb-0">
    <h3 className="text-2xl font-bold text-white">Need help choosing a country or course?</h3>
    <p className="text-white mt-2">Get free consultation</p>
  </div>

  {/* Right Button */}
  <Link href='/assessment'>
  <button className="bg-white text-black font-semibold px-6 py-3  hover:bg-orange-500 transition">
    Take Free Assessment
  </button>
  </Link>
</div>
<div className="flex flex-col md:flex-row items-center justify-between mt-12 max-w-6xl mx-auto overflow-hidden bg-white">
  {/* Left Side - Form */}
  <div className="w-full md:w-2/4 p-8">
  <h2 className='text-xl text-orange-500 mb-2'>WANT TO MOVE FORWARD</h2>
  <h1 className='text-3xl text-black font-bold mb-3' style={{fontFamily:'cursive'}}>Request A call Back</h1>
    <Form />
  </div>

  {/* Right Side - Image */}
  <div className="w-full md:w-3/4">
    <img 
      src="/blogimg.png" 
      alt="Consultation" 
      className="w-full h-full object-cover"
    />
  </div>
</div>


    </div>
  );
};

export default LatestBlog;
