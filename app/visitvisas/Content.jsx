"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Form from "./Form";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const VisitVisas = () => {
  return (
    <>
      <Head>
        <title>Visit Visas – Explore the World with VJC Overseas</title>
        <meta
          name="description"
          content="Explore the world with VJC Overseas – Your trusted partner for Visit Visa services from India."
        />
        <link rel="canonical" href="https://www.vjcoverseas.com/visitvisas" />
      </Head>

      <div className="bg-white text-black px-4 sm:px-6 md:px-12 py-8">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-orange-500 to-black bg-clip-text text-transparent">
  Explore the World with VJC Overseas
</h1>

          <p className="text-lg text-gray-600 mt-4">
            Your Gateway to Global Adventures Starts Here
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Dreaming of exploring the world? Whether it’s the Eiffel Tower in Paris, the cherry blossoms in Japan, or the skyscrapers of Dubai, VJC Overseas is your trusted partner for seamless Visit Visa services from India.
          </p>
        </motion.section>

        {/* What is a Visit Visa? */}
<motion.section
  className="mb-16"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.4 }}
  variants={fadeUp}
>
  {/* Top Intro Text */}
  <div className="mb-10">
    <h2 className="text-3xl font-semibold mb-4">What is a Visit Visa?</h2>
    <p className="text-lg text-gray-700">
      A Visit Visa is a temporary travel document that allows you to enter and stay in a foreign country for leisure, tourism, family visits, or short business trips.
    </p>
    <p className="text-lg text-gray-700 mt-4 text-xl">
      We specialize in providing Visit Visa assistance for over 15+ countries, including:
    </p>
  </div>

  {/* List + Image Side by Side */}
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <ul className="list-disc list-inside text-lg text-gray-700 text-xl">
      <li> USA Visit Visa (B2)</li>
      <li> UK Standard Visitor Visa</li>
      <li>Canada Visitor Visa (TRV)</li>
      <li>Schengen Tourist Visa</li>
      <li>Australia Visitor Visa (Subclass 600)</li>
      <li>Dubai Visit Visa</li>
      <li>Singapore Tourist Visa</li>
      <li>Japan,  South Korea,Thailand,Malaysia & more</li>
    </ul>
    <div className="">
      <Image
        src="/visit-visa-image.png"
        alt="Visit Visa Travel"
        width={400}
        height={200}
        className=" object-cover"
      />
    </div>
  </div>
</motion.section>

        {/* Why Choose */}
        <motion.section
          className="bg-gradient-to-r from-blue-400 to-orange-500 p-10 sm:p-12 rounded-lg shadow-lg mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Why Choose VJC Overseas for Your Visit Visa?</h2>
          <ul className="list-disc list-inside text-lg text-white max-w-3xl mx-auto">
            <li>✅ Personalized documentation support</li>
            <li>✅ High visa approval success rate</li>
            <li>✅ Expert consultants with real-time embassy updates</li>
            <li>✅ Fast-tracked processing for urgent travel needs</li>
            <li>✅ End-to-end assistance: From application to travel tips</li>
          </ul>
        </motion.section>

        {/* Cost of Living + Form */}
        <motion.section
          className="px-2 sm:px-4 lg:px-16 xl:px-24 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Cost of Living in Top Destinations & Free Visa Assessment
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Know how much you need and get a free consultation before you fly!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <div className="overflow-x-auto flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Average Cost of Living per Day (for Indian Tourists)
                </h3>
                <table className="table-auto w-full text-base border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-100 to-blue-100 text-gray-800">
                      <th className="px-6 py-3 border font-semibold">🌍 Country</th>
                      <th className="px-6 py-3 border font-semibold">💰 Daily Budget (INR)</th>
                      <th className="px-6 py-3 border font-semibold">📋 Includes</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
  {[
    ["USA", "₹8,000 – ₹12,000", "🍔 Food, 🚗 Transport, 🏨 Lodging"],
    ["UK", "₹7,000 – ₹10,000", "🍽️ Meals, 🚇 Commute, 🎟️ Tickets"],
    ["Canada", "₹6,000 – ₹9,000", "🚌 Transport, 🍲 Meals, 🛏️ Hostel"],
    ["Australia", "₹7,500 – ₹11,000", "🍷 Dining, 🏄‍♂️ Activities, 🚘 Travel"],
    ["Dubai", "₹5,000 – ₹9,000", "🏨 Hotels, 🚇 Metro, 🍢 Cuisine"],
    ["Singapore", "₹4,500 – ₹7,000", "🍜 Food, 🎡 Attractions, 🚈 MRT"],
    ["Schengen", "₹6,500 – ₹10,000", "🚆 Travel, 🧀 Food, 🖼️ Museums"],
    ["Thailand", "₹3,000 – ₹5,000", "🌮 Food, 🛍️ Shopping, 🛏️ Stay"],
    ["Japan", "₹6,000 – ₹9,500", "🚅 Rail pass, 🍣 Sushi, 🏨 Hostel"]
  ].map(([country, budget, includes], index) => (
    <tr
      key={index}
      className={`hover:bg-orange-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
    >
      <td className="px-6 py-3 border">{country}</td>
      <td className="px-6 py-3 border text-orange-600 font-medium">{budget}</td>
      <td className="px-6 py-3 border">{includes}</td>
    </tr>
  ))}
</tbody>

                </table>
                <p className="mt-4 text-sm text-gray-500">
                  *Note: These are approximate values and can vary depending on city, time of year, and personal choices.
                </p>
              </div>
              <div className="mt-6 bg-orange-50 text-orange-800 p-4 rounded-lg shadow">
                <strong>💡 Pro Tip:</strong> Booking in advance can save up to 25% of your daily expenses!
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Get Your Free Tourist Visa Assessment
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and our team will get back to you within 24 hours with the best visa guidance.
                </p>
                <Form />
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-orange-200 via-yellow-100 to-white rounded-xl shadow-lg">
                <h4 className="text-lg font-medium text-orange-700 mb-2">
                  🌍 Travel Tip of the Day
                </h4>
                <p className="text-gray-700 text-sm">
                  🧳 Always scan and upload your passport and visa docs to a secure cloud folder. It helps in emergencies!
                </p>
                <p className="text-gray-700 text-sm">
                💼 Pack an extra set of clothes in your carry-on bag. You never know if your luggage will be delayed or lost!
                </p>
                <p className="text-gray-700 text-sm">
                🔌 Carry a portable power bank. It’s always helpful for long flights or layovers, so you never run out of battery!
                </p>
                <p className="text-gray-700 text-sm">
                💳 Notify your bank about your travel plans. This way, your credit cards won’t get flagged for suspicious activity when you use them abroad.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="bg-gradient-to-br from-orange-500 via-blue-200 to-black text-white py-8 text-center rounded-lg shadow-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold text-black mb-4">Ready to Travel the World?</h2>
          <p className="text-lg text-black mb-4">
            With VJC Overseas, your dream of international travel is just a step away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400"
            >📞 Call Now</a>
            <a
              href="/contact-us"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-400"
            >📍 Visit Our Office</a>
            <a
              href="/assessment"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-300"
            >📩 Quick Visa Form</a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center mt-14 text-gray-600 font-bold text-2xl">
          <p>
            VJC Overseas – Turning Travel Dreams Into Reality.
            <br />
            🛫 Trusted by Thousands | 🌐 Global Reach | 📄 100% Visa Assistance
          </p>
        </footer>
      </div>
    </>
  );
};

export default VisitVisas;
