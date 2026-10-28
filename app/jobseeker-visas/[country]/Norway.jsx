"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NorwayJobseekerVisa = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Norway Job Seeker Visa?",
      answer:
        "The Norway Job Seeker Visa refers to specific immigration options that may allow eligible individuals to search for employment in Norway. VJC Overseas provides immigration guidance to help applicants understand potential pathways and the applicable eligibility requirements.",
    },
    {
      question: "Can I apply for a Norway Job Seeker Visa from India?",
      answer: (
        <>
          Eligible Indian applicants may qualify for certain job-seeking
          residence permit options, depending on their qualifications and
          circumstances. If you are exploring a{" "}
          <Link href="/jobseeker-visas/norway" className="text-orange-500 font-bold">
            Norway Job Seeker Visa from India
          </Link>
          , VJC Overseas can guide you in understanding the relevant
          requirements and application process.
        </>
      ),
    },
    {
      question: "What are the eligibility requirements for a Norway Job Seeker Visa?",
      answer: (
        <>
          Eligibility depends on the applicable Norwegian residence permit
          category. Applicants may need relevant qualifications, professional
          experience, sufficient funds, and supporting documents. VJC Overseas
          can help you understand the{" "}
          <Link href="/jobseeker-visas/norway" className="text-orange-500 font-bold">
            eligibility criteria
          </Link>{" "}
          based on your profile.
        </>
      ),
    },
    {
      question: "Can I apply for a Norway Job Seeker Visa without a job offer?",
      answer: (
        <>
          Some applicants may qualify for specific{" "}
          <Link href="/jobseeker-visas/norway" className="text-orange-500 font-bold">
            job-seeking residence permits without a job offer
          </Link>
          , but eligibility is limited to certain categories. VJC Overseas can
          help you understand the available immigration pathways and identify
          the requirements you need to verify before applying.
        </>
      ),
    },
    {
      question: "What documents are required for a Norway Job Seeker Visa?",
      answer: (
        <>
          Depending on the permit category, applicants may need a valid
          passport, educational certificates, professional experience
          documents, proof of funds, and other supporting documents. VJC
          Overseas can provide guidance on{" "}
          <Link href="/jobseeker-visas/norway" className="text-orange-500 font-bold">
            preparing the required documentation
          </Link>{" "}
          for your application.
        </>
      ),
    },
    {
      question: "How long does it take to process a Norway Job Seeker Visa?",
      answer: (
        <>
          Processing times depend on the permit category, application
          completeness, and the immigration authority&apos;s workload.
          Applicants planning a{" "}
          <strong className="text-black font-bold">
            Norway Job Seeker Visa from India
          </strong>{" "}
          should check the latest processing-time estimates on the official
          Norwegian Directorate of Immigration (UDI) website. VJC Overseas can
          help explain the general application process.
        </>
      ),
    },
    {
      question: "How can Norway Job Seeker Visa Consultants in India help me?",
      answer: (
        <>
          <strong className="text-black font-bold">
            Norway Job Seeker Visa Consultants in India
          </strong>
          , such as VJC Overseas, can help applicants understand potential
          immigration pathways, review their educational and professional
          profiles, and prepare supporting documents. The appropriate pathway
          depends on individual eligibility and current Norwegian immigration
          regulations.
        </>
      ),
    },
    {
      question: "Can I get a work permit in Norway after finding a job?",
      answer: (
        <>
          If you secure employment in Norway, you may be eligible to apply for
          a suitable{" "}
          <Link href="/jobseeker-visas/norway" className="text-orange-500 font-bold">
            work residence permit
          </Link>
          , provided you meet the relevant requirements. VJC Overseas can guide
          you on understanding the application process, but securing employment
          does not guarantee work permit approval.
        </>
      ),
    },
  ];

    return (
      <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
          <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
            Norway Jobseeker Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
          </h1> {/* Image and Intro Text Side by Side */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                      {/* Image */}
                      <div className="md:w-1/2 w-full">
                        <Image
                          src="/norway-jobseeker.jpg"
                          alt=" germany jobseeker Guidance by VJC Overseas"
                          width={700}
                          height={400}
                          className="w-full object-cover "
                          priority
                          unoptimized
                        />
                      </div>
              
                      {/* Text */}
                      <div className="md:w-1/2 text-justify">
                        <p className="mb-4 ">
          Are you looking to start a new career in one of Europe’s most vibrant and prosperous countries? With its stunning landscapes, high standard of living, and robust economy, Norway offers fantastic opportunities for skilled professionals seeking employment. The Norway Jobseeker Visa allows you to travel to Norway and search for a job, providing you the chance to explore the country while pursuing your career goals.
        </p>
        </div>
        </div>
        <p>
          At <span className="text-orange-500">VJC Overseas</span>, we help you navigate the application process for the Norway Jobseeker Visa, ensuring that you have all the necessary documentation and information to maximize your chances of success.
        </p>
  
        <h2 className="text-xl font-bold mt-4 mb-2">What is the Norway Jobseeker Visa?</h2>
        <p>
          The Norway Jobseeker Visa is a residence permit that allows non-EU/EEA nationals to enter Norway for up to 6 months to look for a job. This visa is a great option for skilled professionals, researchers, and those looking to explore the job market in Norway before applying for a long-term work permit.
        </p>
        <p>
          During your stay, you can search for work, attend interviews, and network with potential employers. Once you secure a job offer, you can transition to a regular work visa.
        </p>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Key Requirements for the Jobseeker Visa</h2>
        <ul className="list-disc pl-6">
          <li><strong>Educational Qualifications:</strong> You must have a higher education degree or relevant work experience.</li>
          <li><strong>Proof of Funds:</strong> You need to show that you can financially support yourself during your stay in Norway.</li>
          <li><strong>Health Insurance:</strong> Applicants must show proof of comprehensive health insurance.</li>
          <li><strong>Accommodation:</strong> You must show proof of your accommodation arrangements in Norway.</li>
        </ul>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Living in Norway: Lifestyle and Expenses</h2>
        <p>
          Norway is famous for its high quality of life, incredible natural beauty, and excellent public services. While living costs can be higher than in many other countries, the wages are also competitive, and social welfare systems provide extensive support.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Cost of Living</h3>
        <ul className="list-disc pl-6">
          <li><strong>Accommodation:</strong> Renting an apartment in Oslo costs NOK 10,000–15,000 per month.</li>
          <li><strong>Groceries and Food:</strong> Monthly expenses range between NOK 3,000 to NOK 4,500.</li>
          <li><strong>Transportation:</strong> Public transport passes cost between NOK 600 to NOK 1,000 per month.</li>
        </ul>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Processing Time for the Norway Jobseeker Visa</h2>
        <p>The processing time typically ranges from 6 to 8 weeks.</p>
        <h3 className="text-xl font-semibold mt-4">Tips to Speed Up Processing:</h3>
        <ul className="list-disc pl-6">
          <li>Ensure all documentation is complete and accurate.</li>
          <li>Provide clear proof of financial support and insurance.</li>
          <li>Submit additional supporting documents like letters of recommendation.</li>
        </ul>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Norway Jobseeker Visa Fees</h2>
        <p>The visa application fee is approximately NOK 6,300 (around USD 600).</p>
  
        <h2 className="text-xl font-bold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
        <p>
          At <span className="text-orange-500">VJC Overseas</span>, we specialize in providing professional assistance with visa applications for Norway and other countries in Europe. Our team ensures your documents are in order and guides you every step of the way.
        </p>
  
        {/* Norway Job Seeker Visa FAQs */}
        <h2 className="text-xl font-bold mt-4 mb-2">
          Norway Job Seeker Visa – Frequently Asked Questions
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

        <h2 className="text-xl font-bold mt-4 mb-2">Contact Us</h2>
        <p>For more details, get in touch with our experienced visa consultants at <span className="text-orange-500">VJC Overseas</span>.</p>
        <p><strong>Phone:</strong> +91-9160449000</p>
        <p><strong>Email:</strong> info@vjcoverseas.com</p>
        <p><strong>Website:</strong> <a href="https://www.vjcoverseas.com" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>www.vjcoverseas.com</a></p>
        <p className="mt-4 font-bold">Let’s make your dream of working in Norway a reality!</p>
      </div>
    );
  };
  
  export default NorwayJobseekerVisa;
  