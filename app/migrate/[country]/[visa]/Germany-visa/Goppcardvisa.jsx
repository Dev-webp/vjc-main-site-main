// app/components/Content.jsx or wherever you use it
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div
      className="overflow-x-hidden px-4 sm:px-6 lg:px-8 py-8 bg-white font-times-new-roman"
    >
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-black text-center leading-snug">
          <Link href="https://vjcoverseas.com/germany-opportunity-card" className="hover:underline font-semibold">
            <strong>Germany Opportunity Card</strong>
          </Link>{" "}
          – Your Gateway to a Bright Future -{" "}
          <Link href="https://vjcoverseas.com/" className="hover:underline font-semibold text-orange-600">
            <strong>VJC Overseas</strong>
          </Link>
        </h1>
      </div>

      {/* Intro Paragraph */}
      <p className="mb-6 text-base leading-relaxed">
        At{" "}
        <Link href="https://vjcoverseas.com/" className="hover:underline font-semibold text-orange-600">
          <strong>VJC Overseas</strong>
        </Link>
        , we take immense pride in offering one of the most promising immigration
        solutions to secure your future in Germany — the{" "}
        <Link href="https://vjcoverseas.com/germany-opportunity-card" className="hover:underline font-semibold">
          <strong>Germany Opportunity Card</strong>
        </Link>
        . This innovative, points-based initiative has opened exciting doors for
        skilled professionals to{" "}
        <Link href="https://vjcoverseas.com/migrate/germany" className="hover:underline font-semibold">
          <strong>Migrate To Germany</strong>
        </Link>{" "}
        and build successful careers in one of Europe’s most thriving economies.
      </p>

      {/* Image + Explanation Section */}
      <div className="flex flex-col lg:flex-row items-start lg:space-x-6 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mx-auto">
          <Image
            src="/gocimg.png"
            alt="Germany Opportunity Card"
            width={500}
            height={300}
            className="w-full max-w-md mx-auto object-contain rounded-lg shadow-md"
            priority
            unoptimized
          />
          <ul className="hidden lg:block mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>No job offer needed to enter Germany and search locally.</li>
            <li>Points-based pathway for skilled professionals.</li>
            <li>Faster processing & potential path to residency.</li>
            <li>In-demand fields: IT, Engineering, Healthcare.</li>
          </ul>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-black font-bold mb-3 text-lg sm:text-xl">
            What is the{" "}
            <Link href="https://vjcoverseas.com/germany-opportunity-card" className="hover:underline font-semibold">
              <strong>Germany Opportunity Card</strong>
            </Link>
            ?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            The{" "}
            <Link href="https://vjcoverseas.com/germany-opportunity-card" className="hover:underline font-semibold">
              <strong>Germany Opportunity Card</strong>
            </Link>{" "}
            is a strategic immigration pathway designed for highly skilled professionals from outside the EU. It offers a flexible and faster route to residency — especially in fields with skill shortages.
          </p>
        </div>
      </div>

      {/* Why Choose VJC */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">
        Why Choose{" "}
        <Link href="https://vjcoverseas.com/" className="hover:underline font-semibold text-orange-600">
          <strong>VJC Overseas</strong>
        </Link>
        ?
      </h2>
      <p className="mb-6 leading-relaxed">
        At{" "}
        <Link href="https://vjcoverseas.com/" className="hover:underline font-semibold text-orange-600">
          <strong>VJC Overseas</strong>
        </Link>
        , we simplify your international journey. As one of the{" "}
        <Link href="https://vjcoverseas.com/" className="hover:underline font-semibold">
          <strong>Best Visa Immigration Consultants</strong>
        </Link>{" "}
        in India, we support you every step of the way.
      </p>

      {/* Game Changer */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">
        Why is the{" "}
        <Link href="https://vjcoverseas.com/germany-opportunity-card" className="hover:underline font-semibold">
          <strong>Germany Opportunity Card</strong>
        </Link>{" "}
        a Game Changer?
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Faster Processing:</strong> Enter the job market with minimal delays.
        </li>
        <li>
          <strong>No Offer Letter Needed:</strong> Search for jobs directly in Germany.
        </li>
        <li>
          <strong>Residency Pathway:</strong> Continued employment can lead to permanent residency.
        </li>
        <li>
          <strong>Expert Application Support:</strong> Higher success rate with our guidance.
        </li>
      </ul>

      {/* VJC Partner */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">
        <Link href="https://vjcoverseas.com/" className="hover:underline font-semibold text-orange-600">
          <strong>VJC Overseas</strong>
        </Link>{" "}
        – Your Trusted Partner for Success
      </h2>
      <p className="mb-6">
        We offer full-spectrum migration services with proven results.
      </p>

      {/* VJC Advantage */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">The VJC Advantage:</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Expert Consultation:</strong> Personal roadmap based on your{" "}
          <Link href="https://vjcoverseas.com/assessment" className="hover:underline font-semibold">
            <strong>Eligibility</strong>
          </Link>
          .
        </li>
        <li>
          <strong>Job Search Assistance:</strong> Connect with openings in your domain.
        </li>
        <li>
          <strong>End-to-End Visa Support:</strong> From document check to embassy support.
        </li>
        <li>
          <strong>Proven Results:</strong> Our track record speaks for itself.
        </li>
      </ul>

      {/* Testimonial */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">Success Stories</h2>
      <p className="mb-6 italic text-sm">
        “I never thought the{" "}
        <Link href="https://vjcoverseas.com/germany-opportunity-card" className="hover:underline font-semibold">
          <strong>Germany Opportunity Card</strong>
        </Link>{" "}
        process could be so smooth. Thanks to{" "}
        <Link href="https://vjcoverseas.com/" className="hover:underline font-semibold text-orange-600">
          <strong>VJC Overseas</strong>
        </Link>
        , I found a job within months!”
      </p>

      {/* Final CTA */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">Start Your Journey Today</h2>
      <p className="mb-2 text-sm">Are you ready to build your future in Germany?</p>
      <p className="mb-2 text-sm">
        Check your{" "}
        <Link href="https://vjcoverseas.com/assessment" className="hover:underline font-semibold">
          <strong>Eligibility</strong>
        </Link>{" "}
        and take the first step today.
      </p>
      <p className="mb-6 font-bold text-sm">
        Book a Free Consultation now. Let{" "}
        <Link href="https://vjcoverseas.com/" className="hover:underline font-semibold text-orange-600">
          <strong>VJC Overseas</strong>
        </Link>{" "}
        guide your successful migration journey.
      </p>
    </div>
  );
};

export default Content;
