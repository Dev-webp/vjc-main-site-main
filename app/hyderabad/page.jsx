'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Form from '../components/Form';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaPlane, FaUniversity, FaBriefcase, FaPassport, FaGlobeAmericas,
} from 'react-icons/fa';
import { useRef } from 'react';

export default function HyderabadPage() {
  const mapRef = useRef(null);

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>VJC Overseas - Hyderabad Office</title>
        <meta name="description" content="Visit VJC Overseas Hyderabad office for expert visa consultancy in study abroad, PR, job seeker, and IELTS coaching." />
        <meta name="keywords" content="Hyderabad study abroad, PR visa Hyderabad, IELTS coaching SR Nagar, VJC Overseas Hyderabad" />
      </Head>

      {/* Hero with Background Video */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/hyderabad-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to Hyderabad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg max-w-2xl"
          >
            The city of pearls and possibilities. VJC Overseas blends trust and technology in the heart of SR Nagar, Hyderabad.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">About VJC Overseas – Hyderabad</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-lg leading-relaxed text-justify">
            VJC Overseas is a premium consultancy in SR Nagar, Hyderabad.
            <ul className="list-disc ml-5 mt-3">
              <li>Student Visas</li>
              <li>PR & Work Visas</li>
              <li>Job Seeker Visas</li>
              <li>IELTS & PTE Coaching</li>
              <li>Post Landing Assistance</li>
            </ul>
            <p className="mt-4">Our visa success stories and transparent process make us a preferred choice in Telangana.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: '/office1.jpg', title: 'Our Office' },
              { src: '/office2.jpg', title: 'Our Team' },
              { src: '/office3.jpg', title: 'Happy Clients' },
              { src: '/office4.jpg', title: 'Counseling Rooms' },
            ].map(({ src, title }, idx) => (
              <div key={idx} className="relative group">
                <Image
                  src={src}
                  width={300}
                  height={200}
                  alt={title}
                  className="rounded-xl shadow-md group-hover:brightness-75 transition duration-300"
                />
                <span className="absolute bottom-2 left-2 text-sm bg-black/60 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services - Clickable */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Services</h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            { icon: FaPlane, title: "Study Abroad", link: "/study-abroad" },
            { icon: FaBriefcase, title: "Work Visa", link: "/work-visa" },
            { icon: FaPassport, title: "PR & Immigration", link: "/pr-visa" },
            { icon: FaUniversity, title: "IELTS / PTE ", link: "/ielts-training" },
            { icon: FaGlobeAmericas, title: "Post Landing ", link: "/post-landing" },
          ].map(({ icon: Icon, title, link }, index) => (
            <Link key={index} href={link}>
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition cursor-pointer hover:bg-orange-50">
                <Icon className="text-4xl text-orange-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold">{title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Form + Office Address Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-orange-500 to-blue-400 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="p-6 ">
            <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch with Us</h2>
            <Form />
          </div>

          {/* Address + Map */}
          <div>
            <div className=" p-6 mt-32  text-center">
              <h3 className="text-lg font-bold text-orange-500">VJC Overseas</h3>
              <p className="text-lg text-orange-600 font-bold">(HYDERABAD)</p>
              <p className="mt-2">62/A, Ground Floor, Sundari Reddy Bhavan, Fresh Mart,</p>
              <p>Vengalrao Nagar, SR Nagar, Hyderabad – 500038</p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30450.879492387034!2d78.43919859884804!3d17.44247831865735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917617299bc1%3A0xaeab178c8f988087!2sSundari%20Reddy%20Bhavan!5e0!3m2!1sen!2sin!4v1733222407168!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  className="rounded-lg border"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Street View */}
      <section ref={mapRef} className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Google Street View – VJC Overseas Hyderabad</h2>
        <p className="text-center mb-6 text-gray-700">Live view of our consultancy office at SR Nagar</p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1716721772582!6m8!1m7!1sWsZjikP3Za9cshRY5_CrGA!2m2!1d17.4424458!2d78.4391133!3f33.87!4f0!5f1.3969117851851444"
            width="100%"
            height="450"
            className="max-w-5xl w-full rounded-xl shadow-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Get Directions Button */}
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=17.4425969,78.4392221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition"
          >
            Get Directions on Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
