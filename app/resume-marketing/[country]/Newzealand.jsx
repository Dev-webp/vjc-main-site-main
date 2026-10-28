"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewZealandResumeServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are New Zealand Resume Marketing Services?",
      answer: (
        <>
          <Link href="/resume-marketing/new-zealand" className="text-orange-500 font-bold">
            New Zealand Resume Marketing Services
          </Link>{" "}
          help job seekers present their qualifications, skills, and
          professional experience to potential employers in New Zealand. VJC
          Overseas provides resume marketing support to help candidates prepare
          their profiles for international job opportunities.
        </>
      ),
    },
    {
      question: "Where can I find New Zealand Resume Marketing Consultants in Hyderabad?",
      answer: (
        <>
          If you are planning to explore job opportunities in New Zealand,{" "}
          <Link href="/resume-marketing/new-zealand" className="text-orange-500 font-bold">
            New Zealand Resume Marketing Consultants in Hyderabad
          </Link>{" "}
          can help you improve your CV, highlight relevant experience, and
          understand resume marketing strategies. VJC Overseas provides
          guidance to candidates seeking international career opportunities.
        </>
      ),
    },
    {
      question: "Are there New Zealand Resume Marketing Consultants in Bangalore?",
      answer: (
        <>
          Yes, candidates looking for{" "}
          <Link href="/resume-marketing/new-zealand" className="text-orange-500 font-bold">
            New Zealand Resume Marketing Consultants in Bangalore
          </Link>{" "}
          can explore professional resume marketing services to improve their
          CV presentation and prepare for the overseas job search. VJC Overseas
          helps candidates understand how to present their skills and
          experience effectively.
        </>
      ),
    },
    {
      question: "How can VJC Overseas help with New Zealand resume marketing?",
      answer:
        "VJC Overseas provides resume marketing support, including CV improvement, professional profile presentation, and guidance on preparing application documents for potential opportunities in New Zealand. Services depend on the candidate's profile and selected package.",
    },
    {
      question: "Who can benefit from New Zealand Resume Marketing Services?",
      answer:
        "Fresh graduates and experienced professionals who want to explore career opportunities in New Zealand may benefit from resume marketing support. VJC Overseas helps candidates present their qualifications, skills, and work experience in a professional format.",
    },
    {
      question: "How do I prepare a CV for New Zealand employers?",
      answer: (
        <>
          A{" "}
          <Link href="/resume-marketing/new-zealand" className="text-orange-500 font-bold">
            New Zealand CV
          </Link>{" "}
          should be clear, concise, and tailored to the role. Include relevant
          qualifications, professional experience, key achievements, and
          skills. VJC Overseas can guide candidates on presenting their
          profiles according to common recruitment practices.
        </>
      ),
    },
    {
      question: "Does New Zealand resume marketing guarantee a job?",
      answer: (
        <>
          No.{" "}
          <Link href="/resume-marketing/new-zealand" className="text-orange-500 font-bold">
            Resume marketing
          </Link>{" "}
          does not guarantee interviews, job offers, or work visas. VJC
          Overseas helps candidates present their professional profiles
          effectively, while employers make their own recruitment decisions.
        </>
      ),
    },
    {
      question: "Do I need a work visa to work in New Zealand?",
      answer:
        "Most overseas applicants need an appropriate visa or work authorisation to work legally in New Zealand. Requirements depend on the job, employer, and visa category. Candidates should check the latest guidance from Immigration New Zealand before applying.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        New-Zealand Resume Marketing Services - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p>
        Welcome to <strong className="text-black">VJC Overseas</strong>, your trusted partner in navigating career opportunities and marketing your resume for a successful job search in New Zealand. Our specialized <Link href="https://www.vjcoverseas.com/resume-marketing/new-zealand" className="text-orange-500">New-Zealand Resume Marketing Services</Link> are designed to help you stand out and unlock the doors to your dream job in one of the most sought-after work destinations worldwide.
      </p>

      <div className="relative lg:p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/resume/resume11.png"
          alt="New-Zealand Resume Marketing Services"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <h2 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">Why Choose <strong className="text-black">VJC Overseas</strong> for New Zealand Resume Marketing?</h2>
      <p>
        As experts in career services for New Zealand, we understand the nuances of the local job market. From crafting a tailored resume that aligns with New Zealand's job requirements to offering valuable insights into salary structures, living standards, work opportunities, and more, we are here to ensure your success. Our guidance comes from <Link href="https://www.vjcoverseas.com" className="text-orange-500">Best Visa Immigration Consultants</Link> experience.
      </p>

      <h2 className="text-xl mt-4 mb-2 text-black font-semibold">Key Features of Our New Zealand Resume Marketing Services:</h2>

      <div>
        <h3 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">Custom Resume Writing and Optimization for New Zealand</h3>
        <p>
          Our team of expert resume writers is experienced in creating compelling resumes and cover letters that meet New Zealand’s hiring standards. We use the latest SEO techniques to ensure your resume ranks high in Applicant Tracking Systems (ATS), giving you a better chance of getting noticed by employers.
        </p>
      </div>

      <div>
        <h3 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">In-depth Knowledge of New Zealand’s Salary Structures</h3>
        <p>
          Understanding salary expectations is crucial for a successful job search. At <strong className="text-black">VJC Overseas</strong>, we provide accurate and up-to-date insights into the salary structure in New Zealand across various industries. Whether you're in healthcare, engineering, IT, or hospitality, we guide you in setting realistic salary expectations and negotiating your pay package effectively. Explore our <Link href="https://www.vjcoverseas.com/resume-marketing" className="text-orange-500">Resume Marketing Services</Link> to maximize results.
        </p>
      </div>

      <div>
        <h3 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">Living Standards in New Zealand</h3>
        <p>
          New Zealand offers a great quality of life, with a balance between work and leisure that attracts professionals worldwide. We provide valuable information about living standards in New Zealand, covering:
        </p>
        <ul className="list-disc pl-6">
          <li>Cost of living in major cities like Auckland, Wellington, and Christchurch.</li>
          <li>Affordable housing options and areas to consider based on your lifestyle preferences.</li>
          <li>Healthcare, education, and public transport systems in New Zealand.</li>
        </ul>
        <p>
          Our goal is to help you transition smoothly into the New Zealand lifestyle and understand how far your salary can stretch in this beautiful country. Our team also specializes in <Link href="https://www.vjcoverseas.com/resume-marketing" className="text-orange-500">Professional CV Marketing</Link>.
        </p>
      </div>

      <div>
        <h3 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">Work Opportunities in New Zealand</h3>
        <p>
          New Zealand boasts a thriving job market with numerous opportunities in sectors such as:
        </p>
        <ul className="list-disc pl-6">
          <li>IT and Technology</li>
          <li>Healthcare and Nursing</li>
          <li>Engineering and Skilled Trades</li>
          <li>Hospitality and Tourism</li>
          <li>Finance and Accounting</li>
        </ul>
        <p>
          We provide job market insights, listing the top in-demand skills in New Zealand, helping you target roles that align with your career aspirations.
        </p>
      </div>

      <div>
        <h3 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">Attractive Benefits of Working in New Zealand</h3>
        <ul className="list-disc pl-6">
          <li>Work-life balance: New Zealand is renowned for its relaxed lifestyle, offering ample opportunities to enjoy outdoor activities and family time.</li>
          <li>Healthcare: Access to high-quality healthcare services, with options for public and private health coverage.</li>
          <li>Visa Support: We help you understand the work visa process for New Zealand, ensuring you have the right documentation to live and work legally.</li>
          <li>Superannuation: Get familiar with New Zealand’s pension system and how it benefits your retirement planning.</li>
          <li>Social security: Enjoy a strong social safety net with support for sickness, disability, and unemployment. Learn more about <strong className="text-black">New-Zealand Resume Marketing Services</strong> benefits.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">Post-Job Search Support</h3>
        <p>
          Even after your job search is over, our commitment to your success doesn’t stop. We provide continued support with career counseling, interview preparation, and negotiation strategies, ensuring that you start your new role with confidence.
        </p>
      </div>

      {/* New Zealand Resume Marketing FAQs */}
      <h2 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">
        New Zealand Resume Marketing Services – Frequently Asked Questions
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

      <div>
        <h2 className="text-xl mt-4 mb-2 text-blue-400 font-semibold">Get Started Today!</h2>
        <p>
          If you’re ready to take the next step in your career journey and explore the exciting opportunities waiting for you in New Zealand, <Link href="https://www.vjcoverseas.com" className="text-orange-500">VJC Overseas</Link> is here to help. Let our resume marketing services for New Zealand open the doors to your ideal job.
        </p>
        <p>
          Contact us now to get started with your tailored resume strategy and take advantage of our professional guidance to land your dream job in New Zealand.
        </p>
      </div>
    </div>
  );
}
