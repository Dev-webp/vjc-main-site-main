"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CanadaResumeMarketingPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are Canada Resume Marketing Services?",
      answer: (
        <>
          <Link href="/resume-marketing/canada" className="text-orange-500 font-bold">
            Canada Resume Marketing Services
          </Link>{" "}
          help job seekers present their qualifications, professional
          experience, and skills to potential employers in Canada. VJC Overseas
          provides resume marketing support to help candidates prepare their
          profiles for the Canadian job market.
        </>
      ),
    },
    {
      question: "Where can I find Canada Resume Marketing Consultants in Hyderabad?",
      answer: (
        <>
          If you are planning to explore employment opportunities in Canada,{" "}
          <Link href="/resume-marketing/canada" className="text-orange-500 font-bold">
            Canada Resume Marketing Consultants in Hyderabad
          </Link>{" "}
          can help you improve your CV, highlight relevant skills, and prepare
          professional application documents. VJC Overseas provides guidance
          for candidates interested in international career opportunities.
        </>
      ),
    },
    {
      question: "Are there Canada Resume Marketing Consultants in Bangalore?",
      answer: (
        <>
          Candidates searching for{" "}
          <Link href="/resume-marketing/canada" className="text-orange-500 font-bold">
            Canada Resume Marketing Consultants in Bangalore
          </Link>{" "}
          can explore resume marketing services to improve their professional
          profiles and prepare for their overseas job search. VJC Overseas
          helps applicants present their experience and qualifications in a
          clear, professional format.
        </>
      ),
    },
    {
      question: "How can VJC Overseas help with Canada Resume Marketing?",
      answer:
        "VJC Overseas provides resume marketing support, including CV improvement, professional profile presentation, and guidance on preparing application documents for potential Canadian employment opportunities. The service depends on the candidate's profile and selected package.",
    },
    {
      question: "Who can benefit from Canada Resume Marketing Services?",
      answer:
        "Fresh graduates and experienced professionals seeking to explore career opportunities in Canada may benefit from resume marketing support. VJC Overseas helps candidates highlight their education, work experience, achievements, and relevant skills to prepare a professional resume.",
    },
    {
      question: "How do I prepare a resume for Canadian employers?",
      answer: (
        <>
          A{" "}
          <Link href="/resume-marketing/canada" className="text-orange-500 font-bold">
            Canadian-style resume
          </Link>{" "}
          should be concise, easy to read, and tailored to the job description.
          It should highlight relevant experience, achievements, skills, and
          qualifications. VJC Overseas can guide candidates on presenting their
          profiles according to common Canadian recruitment practices.
        </>
      ),
    },
    {
      question: "Does Canada Resume Marketing guarantee a job offer?",
      answer: (
        <>
          No.{" "}
          <Link href="/resume-marketing/canada" className="text-orange-500 font-bold">
            Resume marketing
          </Link>{" "}
          does not guarantee an interview, job offer, or work permit. VJC
          Overseas helps candidates present their professional profiles
          effectively, while hiring decisions remain with employers and
          immigration decisions with the relevant Canadian authorities.
        </>
      ),
    },
    {
      question: "Do I need a work permit to work in Canada after receiving a job offer?",
      answer:
        "Most foreign nationals need an appropriate work permit or other valid work authorisation to work legally in Canada. Requirements depend on the job, employer, and applicable immigration category. VJC Overseas can provide general guidance on understanding relevant immigration pathways.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-8">
        Canada Resume Marketing Services –{" "}
        <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <p className="mb-4">
        Welcome to  <strong className="text-black font-bold"> VJC Overseas </strong>, your
        trusted global partner in career building and overseas opportunities. As
        one of the{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="text-orange-500 font-bold"
        >
          Best Visa Immigration Consultants
        </Link>
        , we not only guide you through complex immigration processes but also
        prepare you for long-term career success in countries like Canada.
      </p>

      {/* 🔽 SMALL IMAGE INSERTED HERE */}
      <div className="relative lg:p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/resume/resume1.png"
          alt="Canada Resume Marketing Services - Vjc Overseas"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <p className="mb-4">
        A resume is often the first impression you make on a Canadian employer.
        With growing competition in the international job market, a simple CV is
        not enough. That’s why our{" "}
        <Link
          href="https://www.vjcoverseas.com/resume-marketing/canada"
          className="text-orange-500 font-bold"
        >
          Canada Resume Marketing Services
        </Link>{" "}
        are specially designed to give you a strong advantage. By aligning your
        professional documents with Canadian industry standards, we help you
        stand out and increase your chances of securing interviews.
      </p>

      <p className="mb-4">
        Our <strong className="text-black font-bold">Canada Resume Marketing Services</strong> are designed to align your
        professional profile with Canadian industry standards, improving your
        chances of securing interviews and employment in your target field.
      </p>

      <p className="mb-4">
        From recent graduates to experienced professionals and executives
        seeking career transitions, we provide end-to-end support tailored to
        your goals in the Canadian job market.
      </p>

      <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
        Why Resume Marketing is Crucial for Canada
      </h2>
      <p className="mb-4">
        Canadian employers receive hundreds of applications for a single role.
        To be shortlisted, your resume must be structured to meet the
        expectations of local recruiters and optimized for Applicant Tracking
        Systems (ATS). With{" "}
        <strong className="text-black font-bold">VJC Overseas</strong>, you receive:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Tailor-made resumes customized for the Canadian job market</li>
        <li>
          Professional cover letters that strengthen your applications
        </li>
        <li>
          LinkedIn profile optimization for better recruiter visibility
        </li>
        <li>
          Strategic job application support with targeted approaches
        </li>
      </ul>

      <p className="mb-4">
        Our{" "}
        <Link
          href="https://www.vjcoverseas.com/resume-marketing"
          className="text-orange-500 font-bold"
        >
          Resume Marketing Services
        </Link>{" "}
        go beyond simple formatting—we market you as a professional brand.
        Whether you are a fresh graduate or an experienced professional, our
        services make you employment-ready from day one.
      </p>

      <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
        The Power of Professional CV Marketing
      </h2>
      <p className="mb-4">
        A professionally presented CV can be the difference between being
        overlooked and being invited for an interview. With{" "}
        <Link
          href="https://www.vjcoverseas.com/resume-marketing"
          className="text-orange-500 font-bold"
        >
          Professional CV Marketing
        </Link>
        , <strong className="text-black font-bold">VJC Overseas</strong> ensures your profile highlights achievements, key
        skills, and career growth in a way that resonates with Canadian
        recruiters. We translate your work history into powerful career stories
        that position you as the right fit for your chosen role.
      </p>

      <h2 className="text-xl font-semibold text-black mt-6 mb-2">
        Canada PR Visa and Job Market Insights
      </h2>
      <p className="mb-4">
        Securing a{" "}
        <Link
          href="https://www.vjcoverseas.com/pr-visas/canada-pr"
          className="text-orange-500 font-bold"
        >
          Canada PR Visa
        </Link>{" "}
        opens doors to not just permanent residency but also a wide range of
        career opportunities. Once you enter the Canadian workforce, you can
        enjoy excellent salary packages, career development, and quality of
        life.
      </p>

      <h3 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Canadian Salary Expectations
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Entry-Level Roles: CAD $35,000 – $50,000 annually</li>
        <li>Mid-Level Professionals: CAD $50,000 – $80,000 annually</li>
        <li>Senior Positions: CAD $80,000 – $120,000+ annually</li>
        <li>IT & Tech Sector: CAD $70,000 – $150,000 depending on experience</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Top Industries Hiring in Canada
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Information Technology and Software Development</li>
        <li>Engineering and Architecture</li>
        <li>Healthcare and Medical Services</li>
        <li>Finance and Accounting</li>
        <li>Education and Training</li>
        <li>Hospitality and Tourism</li>
        <li>Skilled Trades (Carpentry, Plumbing, etc.)</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Canadian Lifestyle and Work Culture
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Access to universal healthcare as a permanent resident</li>
        <li>Safe and inclusive society with diverse communities</li>
        <li>Excellent work-life balance and employee rights</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Benefits of Working in Canada
      </h3>
      <ol className="list-decimal ml-6 mb-6">
        <li>Competitive salary packages and employee benefits</li>
        <li>Free or subsidized healthcare services</li>
        <li>Pension and retirement plans for long-term security</li>
        <li>Paid vacation, sick leave, and statutory holidays</li>
        <li>Career advancement and skill development opportunities</li>
      </ol>

      <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
        Why Choose <span className="text-orange-500">VJC Overseas</span> for
        Canada Resume Marketing?
      </h2>
      <p className="mb-4">
        At <strong className="text-black font-bold">VJC Overseas</strong>, we are more than just consultants. We understand
        employer expectations, recruitment trends, and market requirements. Our{" "}
        <strong className="text-black font-bold">Canada Resume Marketing Services</strong> help you position yourself
        strategically for success in the Canadian job market. By combining
        document preparation,{" "}
        <strong className="text-black font-bold">Professional CV Marketing</strong>, and guided job search support, we
        ensure that your profile gains the visibility it deserves.
      </p>

      {/* Canada Resume Marketing FAQs */}
      <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
        Canada Resume Marketing Services – Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto mb-6">
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
                  transform:
                    openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
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

      <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
        Begin Your Canadian Career Journey Today
      </h2>
      <p className="mb-4">
  If you’re ready to take the first step towards your dream job, contact{" "}
  <Link href="https://www.vjcoverseas.com/" className="text-orange-600 font-bold">
    VJC Overseas
  </Link>{" "}
  today. Our experts will help you create a winning resume, optimize your profile, and prepare you for interviews that
  matter. With a combination of personalized{" "}
  <strong className="text-black font-bold">Resume Marketing Services</strong> and immigration guidance,{" "}
  <strong className="text-black font-bold">VJC Overseas</strong> is your ultimate partner in building a rewarding
  career abroad.
</p>


      <h2 className="text-xl font-semibold text-blue-400 mb-4">
        <span className="text-orange-500">VJC Overseas</span> – Shaping Global
        Careers, One Success Story at a Time
      </h2>
    </div>
  );
}
