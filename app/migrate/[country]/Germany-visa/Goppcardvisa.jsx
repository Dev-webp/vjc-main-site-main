"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the different ways to migrate to Germany from India?",
      answer: (
        <>
          There are several ways to{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            migrate to Germany from India
          </Link>
          , including the Germany Opportunity Card, Germany Skilled Worker Visa,
          Student Visa, Job Seeker Visa, and Family Reunion Visa. The right
          Germany immigration pathway depends on your education, work
          experience, language skills, and career goals.
        </>
      ),
    },
    {
      question: "What is the Germany Opportunity Card?",
      answer:
        "The Germany Opportunity Card is a points-based immigration pathway that allows eligible skilled professionals to enter Germany and look for employment without having a prior job offer. It is a popular option for professionals planning to work in Germany.",
    },
    {
      question: "Can I move to Germany without a job offer?",
      answer: (
        <>
          Yes, eligible professionals may be able to{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            move to Germany
          </Link>{" "}
          without a job offer through the Germany Opportunity Card. This pathway
          allows qualified applicants to enter Germany and search for suitable
          employment based on their qualifications and professional experience.
        </>
      ),
    },
    {
      question: "What are the eligibility requirements for the Germany Opportunity Card?",
      answer: (
        <>
          The Germany Opportunity Card eligibility criteria can include your
          educational qualification, professional experience, language skills,
          age, and other applicable requirements. An individual assessment can
          help determine whether you meet the requirements for this{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            Germany visa
          </Link>
          .
        </>
      ),
    },
    {
      question: "What is the Germany Skilled Worker Visa?",
      answer: (
        <>
          The Germany Skilled Worker Visa is designed for qualified
          professionals who have recognized qualifications and a suitable
          employment opportunity in Germany. It is an important pathway for
          skilled professionals who want to{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            work in Germany
          </Link>{" "}
          and build their careers.
        </>
      ),
    },
    {
      question: "Can I apply for a Germany Job Seeker Visa from India?",
      answer:
        "Eligible professionals can explore the Germany Job Seeker Visa from India to enter Germany and search for employment. Applicants must meet the applicable qualification, professional experience, financial, and other requirements before applying for this Germany work visa.",
    },
    {
      question: "Is German language knowledge required to migrate to Germany?",
      answer: (
        <>
          German language requirements depend on the visa category, profession,
          and individual circumstances. Some pathways may accept English
          proficiency, while certain professions may require German. Checking
          your Germany visa eligibility is important before starting your{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            Germany immigration process
          </Link>
          .
        </>
      ),
    },
    {
      question: "What documents are required to migrate to Germany?",
      answer: (
        <>
          Documents depend on the selected visa category. Generally, applicants
          may need a valid passport, educational certificates, work experience
          documents, proof of funds, language certificates where applicable, and
          other supporting documents required for the{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            Germany visa process
          </Link>
          .
        </>
      ),
    },
    {
      question: "How much does it cost to migrate to Germany from India?",
      answer: (
        <>
          The cost to{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            migrate to Germany
          </Link>{" "}
          from India varies depending on the visa category, application fees,
          documentation, financial requirements, travel, and other expenses. The
          overall Germany immigration cost can therefore differ for each
          applicant.
        </>
      ),
    },
    {
      question: "How long does the Germany visa process take?",
      answer: (
        <>
          The Germany visa processing time can vary depending on the visa
          category, application volume, document completeness, and the relevant
          authorities. Providing complete and accurate documents can help avoid
          unnecessary delays during the{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            Germany visa process
          </Link>
          .
        </>
      ),
    },
    {
      question: "Can I bring my family to Germany after moving there?",
      answer: (
        <>
          Depending on your residence status and circumstances, you may be
          eligible to bring your family through family reunification. A{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            Germany Family Reunion Visa
          </Link>{" "}
          may allow eligible family members to join you, subject to the
          applicable immigration requirements.
        </>
      ),
    },
    {
      question: "Can I get Permanent Residency in Germany after working there?",
      answer: (
        <>
          Yes, eligible individuals may qualify for{" "}
          <Link href="https://vjcoverseas.com/migrate/germany" className="font-bold text-orange-500 hover:underline">
            Germany Permanent Residency
          </Link>{" "}
          after meeting the required residence, employment, financial, language,
          and other conditions. The pathway to Germany PR depends on your
          residence status and individual circumstances.
        </>
      ),
    },
  ];

  return (
    <div className="relative px-6 py-12 bg-white font-[Times_New_Roman] overflow-hidden">
      {/* Title */}
      <div className="mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-orange-600 text-center">
          Migrate to Germany – Your Gateway to a Brighter Future
        </h3>
      </div>

      {/* Intro Paragraph */}
      <p className="mb-6 text-gray-800 leading-relaxed">
        Dreaming of a fresh start in one of Europe’s strongest economies?{" "}
        <Link
          href="https://www.vjcoverseas.com/migrate/germany"
          className="font-bold text-orange-500 hover:underline"
        >
          Migrate to Germany
        </Link>{" "}
        with the right guidance and support. Germany offers a wealth of
        opportunities for skilled professionals, students, entrepreneurs, and
        families. Whether you're seeking world-class education, high-paying jobs,
        or a stable lifestyle — moving to Germany could be your smartest decision yet.
      </p>

      {/* Why Choose Germany */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">
        Why Choose Germany?
      </h3>
      <ul className="mb-6 list-disc pl-5 text-gray-800 space-y-2">
        <li>
          <strong className="text-sky-600">Thriving Job Market:</strong> Germany
          is actively seeking international talent in IT, engineering,
          healthcare, and more through options like the{" "}
          <Link
            href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/work-permit-visa"
            className="font-bold text-orange-500 hover:underline"
          >
            Germany Skilled Worker Visa
          </Link>
          .
        </li>
        <li>
          <strong className="text-sky-600">Free or Low-Cost Education:</strong>{" "}
          Study at prestigious public universities without heavy tuition fees.
        </li>
        <li>
          <strong className="text-sky-600">Stable Economy & High Living Standards:</strong>{" "}
          Enjoy a safe, efficient, and high-quality lifestyle.
        </li>
        <li>
          <strong className="text-sky-600">Path to Permanent Residency:</strong>{" "}
          Explore long-term career growth and security through the{" "}
          <Link
            href="https://www.vjcoverseas.com/pr-visas/germany-blue-card"
            className="font-bold text-orange-500 hover:underline"
          >
            Germany PR Visa
          </Link>
          .
        </li>
      </ul>

      {/* Opportunity Card */}
      <p className="mb-2 text-black font-bold">
        Explore the Germany Opportunity Card – A New Pathway to Work in Germany.
      </p>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Germany has recently introduced the{" "}
        <Link
          href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/opportunity-card"
          className="font-bold text-orange-500 hover:underline"
        >
          Germany Opportunity Card
        </Link>
        , a points-based immigration pathway designed to attract skilled foreign
        professionals. This initiative allows qualified individuals to enter
        Germany without a prior job offer, search for employment, and transition
        smoothly into the workforce. It’s an ideal route for those with
        education, experience, language skills, and adaptability.{" "}
        <strong className="text-black">Germany Opportunity Card</strong> could
        be the perfect alternative to traditional work visas.
      </p>

      {/* Popular Visa Options */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">
        Popular German Visa Options
      </h3>
      <ul className="mb-6 list-disc pl-5 text-gray-800 space-y-2">
        <li>
          <strong className="text-black">Germany Skilled Worker Visa</strong>:
          For professionals with recognized qualifications and work experience.
        </li>
        <li>
          <strong className="text-black">Germany Opportunity Card:</strong> A
          points-based pathway to live and work in Germany.
        </li>
        <li>
          <strong className="text-black">Student Visa:</strong> Study in
          top-ranked universities with global recognition.
        </li>
        <li>
          <strong className="text-black">Germany Job Seeker Visa:</strong> Stay
          in Germany for up to 6 months while finding employment.
        </li>
        <li>
          <strong className="text-black">Family Reunion Visa:</strong> Join your
          spouse or family already living in Germany.
        </li>
      </ul>

      {/* Migration Services */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">
        Your Migration Journey, Simplified
      </h3>
      <p className="mb-4">
        At{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="font-bold text-orange-500 hover:underline"
        >
          Best Visa Immigration Consultants
        </Link>
        , we turn your migration dream into a well-planned reality.
      </p>
      <p className="mb-2 font-semibold">We offer:</p>
      <ul className="mb-6 list-disc pl-5 text-gray-800 space-y-1">
        <li>Free Eligibility Assessment</li>
        <li>Document Verification & Application Guidance</li>
        <li>Visa Filing & Interview Preparation</li>
        <li>Pre-Departure and Settlement Support</li>
      </ul>
      <p className="mb-6 text-gray-800">
        Our dedicated team helps you at every step — from choosing the right visa
        to securing a smooth transition to your new life in Germany.
      </p>

      {/* Who Can Apply */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">
        Who Can Apply?
      </h3>
      <ul className="mb-10 list-disc pl-5 text-gray-800 space-y-1">
        <li>Professionals with degrees/diplomas</li>
        <li>Students looking for world-class education</li>
        <li>Entrepreneurs and freelancers</li>
        <li>Recent graduates aiming for global careers</li>
      </ul>

      {/* Image Section */}
      <div className="relative my-10 mx-auto w-fit p-2 lg:p-4 bg-gradient-to-r from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src="/migrate/migrate-germany.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] rounded-xl object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Germany Migration FAQs */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3 text-center">
        Germany Migration FAQs – Keyword-Optimized Answers
      </h3>
      <div className="max-w-4xl mx-auto mb-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg mb-3 bg-white"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 text-base font-semibold text-gray-800 rounded-lg"
              style={{
                backgroundColor: openIndex === index ? "#fff7ed" : "white",
                cursor: "pointer",
                border: "none",
              }}
            >
              <span>{faq.question}</span>
              <span
                className="text-orange-500 text-2xl font-bold shrink-0"
                style={{
                  transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: openIndex === index ? "600px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                backgroundColor: "white",
              }}
            >
              <p className="px-5 pb-4 m-0 text-gray-700 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing */}
      <p className="text-center font-medium leading-relaxed">
        Ready to Migrate to Germany? <br />
        Choose{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="font-bold text-orange-500 hover:underline"
        >
          VJC Overseas
        </Link>
        , your trusted partner in global migration. Whether it's the{" "}
        <strong className="text-black">Germany Skilled Worker Visa</strong>,{" "}
        <strong className="text-black">Germany Job Seeker Visa</strong> or{" "}
        <strong className="text-black">Germany PR Visa</strong> — we provide
        expert consultation and reliable visa processing support.
      </p>
    </div>
  );
};

export default Content;
