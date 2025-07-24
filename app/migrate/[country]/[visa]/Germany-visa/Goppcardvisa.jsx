import React from "react";
import Image from "next/image";
import Link from "next/link";
 
const Content = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
      }}
    >
      {/* Main Heading */}
      <div style={{ marginBottom: "40px" }}>
        <h1 className="text-2xl font-bold text-black text-center">
          Germany Opportunity Card – Your Gateway to a Bright Future -{" "}
          <span className="text-orange-600">VJC Overseas</span>
        </h1>
      </div>
 
      {/* Paragraph 1 – VJC Overseas + Germany Opportunity Card */}
      <p className="mb-5">
        At{" "}
        <Link
          href="https://vjcoverseas.com/"
          className="hover:underline font-semibold"
        >
          VJC Overseas
        </Link>
        , we take immense pride in offering one of the most promising immigration
        solutions to secure your future in Germany — the{" "}
        <Link
          href="https://vjcoverseas.com/germany-opportunity-card"
          className="hover:underline font-semibold"
        >
          Germany Opportunity Card
        </Link>
        . This innovative, points-based initiative has opened exciting doors for
        skilled professionals, helping them migrate to Germany and build
        successful careers in one of Europe’s most thriving economies.
      </p>
 
      {/* Image + What is the Germany Opportunity Card */}
      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0 mb-6">
        {/* Image column */}
        <div className="flex-shrink-0 mx-auto lg:mx-0" style={{ lineHeight: 0 }}>
          <Image
            src="/gocimg.png"
            alt="Germany Opportunity Card"
            width={500}
            height={300}
            style={{ display: "block", marginBottom: 0 }}
            className="block w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
            priority
            unoptimized
          />
          {/* Quick Facts: shown only on lg+ to fill vertical gap under image */}
          <ul className="hidden lg:block mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>No job offer needed to enter Germany and search locally.</li>
            <li>Points-based pathway for skilled professionals.</li>
            <li>Faster processing & potential path to residency.</li>
            <li>In-demand fields: IT, Engineering, Healthcare.</li>
          </ul>
        </div>
 
        <div className="px-4 lg:px-0">
          <h2 className="text-black font-bold mb-3 text-lg sm:text-xl">
            What is the{" "}
            <Link
              href="https://vjcoverseas.com/germany-opportunity-card"
              className="hover:underline"
            >
              Germany Opportunity Card
            </Link>
            ?
          </h2>
          {/* Paragraph 2 – migrate to Germany */}
          <p className="mb-4 text-sm sm:text-base">
            The Germany Opportunity Card is a strategic immigration pathway
            designed for highly skilled professionals from outside the European
            Union to live and work in Germany. Introduced as part of Germany’s
            new points-based immigration system, it offers a flexible and faster
            route to residency — especially in fields experiencing critical skill
            shortages like IT, engineering, and healthcare. Whether you're aiming
            to expand your professional journey or looking to settle in one of
            the world’s most developed countries, this card provides the ideal
            path to{" "}
            <Link
              href="https://vjcoverseas.com/migrate/germany"
              className="hover:underline font-semibold"
            >
              migrate to Germany
            </Link>{" "}
            and explore abundant opportunities.
          </p>
        </div>
      </div>
 
      {/* Why Choose VJC Overseas */}
      <h2 className="text-xl font-bold text-black mt-5 mb-3">
        Why Choose VJC Overseas?
      </h2>
      {/* Paragraph 3 – Best Visa Immigration Consultants */}
      <p className="mb-5">
        At VJC Overseas, we understand that applying for an international visa
        can feel overwhelming. Our mission is to simplify the process for skilled
        professionals and ensure that each stage of the application is completed
        with precision, clarity, and speed. As one of the{" "}
        <Link
          href="https://vjcoverseas.com/"
          className="hover:underline font-semibold"
        >
          Best Visa Immigration Consultants
        </Link>{" "}
        in India with offices in Hyderabad and Bangalore, we bring unmatched
        experience in guiding applicants through the Germany Opportunity Card
        process.
      </p>
 
      {/* Why is the Germany Opportunity Card a Game Changer */}
      <h2 className="text-xl font-bold text-black mt-5 mb-3">
        Why is the Germany Opportunity Card a Game Changer?
      </h2>
      <ul className="list-disc pl-6 mb-5">
        <li className="mb-2">
          <strong>Faster Processing Times</strong>
          <br />
          The card offers quicker visa approvals, helping you enter the German
          job market with minimal delays.
        </li>
        <li className="mb-2">
          <strong>Job Flexibility Without an Offer Letter</strong>
          <br />
          One major advantage of the Germany Opportunity Card is that it allows
          you to enter Germany without a job offer and search for relevant
          employment while you're there.
        </li>
        <li className="mb-2">
          <strong>Pathway to Permanent Residency</strong>
          <br />
          With continued employment and successful integration, you may become
          eligible for permanent residency in Germany — a key benefit of this
          program.
        </li>
        <li className="mb-2">
          <strong>Optimized Application Support</strong>
          <br />
          Through our expertise and proven methods, we ensure each application
          has a high chance of approval — reducing delays and increasing
          confidence.
        </li>
      </ul>
 
      {/* VJC Overseas – Your Trusted Partner for Success */}
      <h2 className="text-xl font-bold text-black mt-5 mb-3">
        VJC Overseas – Your Trusted Partner for Success
      </h2>
      <p className="mb-5">
        As leading Germany visa consultants, we take pride in offering
        full-spectrum guidance from consultation to visa approval. With a success
        rate that includes approvals every alternate day, our process speaks for
        itself.
      </p>
 
      {/* The VJC Overseas Advantage */}
      <h2 className="text-xl font-bold text-black mt-5 mb-3">
        The VJC Overseas Advantage:
      </h2>
      <ul className="list-disc pl-6 mb-5">
        {/* Paragraph 4 – eligibility for the Germany Opportunity Card */}
        <li className="mb-2">
          <strong>Expert Consultation:</strong> We conduct an in-depth assessment
          to determine your{" "}
          <Link
            href="https://vjcoverseas.com/assessment"
            className="hover:underline"
          >
            eligibility for the Germany Opportunity Card
          </Link>{" "}
          and create a roadmap tailored to your goals.
        </li>
        <li className="mb-2">
          <strong>Customized Job Search Assistance:</strong> Our network of
          recruiters and employers in Germany helps you connect with relevant job
          opportunities in your domain.
        </li>
        <li className="mb-2">
          <strong>End-to-End Visa Support:</strong> From document verification to
          embassy submission, we offer complete assistance in ensuring your
          application is flawless.
        </li>
        <li className="mb-2">
          <strong>Proven Results:</strong> We consistently deliver successful
          outcomes, which has positioned VJC Overseas as the best visa consultant
          for Germany opportunities.
        </li>
      </ul>
 
      {/* Success Stories */}
      <h2 className="text-xl font-bold text-black mt-5 mb-3">Success Stories</h2>
      <p className="mb-5 text-sm italic">
        We are proud to have helped hundreds of professionals and families
        successfully relocate to Germany. Hear from our satisfied clients who are
        now thriving in their new careers:
      </p>
      <p className="mb-5 text-sm italic">
        ``I never thought that applying for the Germany Opportunity Card would be
        this easy. Thanks to VJC Overseas, my visa was approved quickly, and I
        found a great job within just a few months.`` — Anjali S., Software
        Developer
      </p>
 
      {/* Start Your Journey Today */}
      <h2 className="text-xl font-bold text-black mt-5 mb-3">
        Start Your Journey Today
      </h2>
      <p className="mb-3 text-sm">Are you ready to build your future in Germany?</p>
      <p className="mb-5 text-sm">
        The{" "}
        <Link
          href="https://vjcoverseas.com/germany-opportunity-card"
          className="hover:underline font-semibold"
        >
          Germany Opportunity Card
        </Link>{" "}
        offers the ideal opportunity for you to live, work, and settle in Germany,
        backed by a streamlined process and professional guidance. Check your{" "}
        <Link
          href="https://vjcoverseas.com/assessment"
          className="hover:underline font-semibold"
        >
          eligibility for the Germany Opportunity Card
        </Link>{" "}
        today to take the first step. Whether you're looking for migration, career
        advancement, or long-term residency,{" "}
        <Link
          href="https://vjcoverseas.com/"
          className="hover:underline font-semibold"
        >
          VJC Overseas
        </Link>{" "}
        is here to make your dream a reality.
      </p>
      <p className="mb-5 font-bold">
        Book a Free Consultation today and let our experts guide you through
        every step of your Germany Opportunity Card journey.
      </p>
    </div>
  );
};
 
export default Content;