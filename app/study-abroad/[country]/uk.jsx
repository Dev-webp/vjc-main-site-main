import React, { useState } from "react";
import Image from 'next/image';

const UKStudyGuide = () => {
  // State to track which FAQ is open (null means none are open)
  const [openIndex, setOpenIndex] = useState(null);

  // Function to open/close FAQ boxes
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // All FAQ questions and answers
  const faqs = [
    {
      question: "What are the requirements to study in the UK for Indian students?",
      answer: <>Indian students planning to study in the UK generally need an offer from a licensed UK university or education provider, a valid Confirmation of Acceptance for Studies (CAS), proof of required funds, and evidence of English-language ability. Additional documents may be required depending on the course and individual circumstances. For more details, visit <a href="https://www.vjcoverseas.com/study-abroad/uk" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>UK Study Abroad</a>.</>
    },
    {
      question: "How can I apply for a UK Student Visa from India?",
      answer: <>To apply for a UK Student Visa from India, students first need admission to an eligible UK institution and a CAS. The visa application is completed online, followed by the required identity and biometric process. Students should also prepare financial and other supporting documents according to their circumstances. For more details, visit <a href="https://www.vjcoverseas.com/study-abroad/uk" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>UK Study Abroad</a>.</>
    },
    {
      question: "How much does it cost to study in the UK for Indian students?",
      answer: <>The cost of studying in the UK for Indian students depends on the university, course, city, and duration of study. Students should budget for tuition fees, accommodation, living expenses, visa costs, healthcare-related charges and travel. The exact financial requirement for a Student Visa depends on the student's circumstances. For more details, visit <a href="https://www.vjcoverseas.com/study-abroad/uk" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>UK Study Abroad</a>.</>
    },
    {
      question: "What are the English language requirements for a UK Student Visa?",
      answer: "Students applying for a UK Student Visa generally need to demonstrate their English-language ability. The exact requirement can depend on the level and type of course and the student's circumstances. Your university will also specify the English-language requirements for admission."
    },
    {
      question: "Can I study a Master's degree in the UK as an international student?",
      answer: "Yes. International students can apply for eligible Master's courses in the UK through a licensed student sponsor. After receiving an unconditional offer and CAS, eligible students can apply for a UK Student Visa. Some postgraduate courses may also require an ATAS certificate depending on the course and nationality."
    },
    {
      question: "Can international students work while studying in the UK?",
      answer: <>Eligible international students on a UK Student Visa may be allowed to work, but the permitted hours and type of work depend on the course and visa conditions. Students should check their specific visa conditions before starting employment. The Student Visa also has restrictions on certain types of work. For more details, visit <a href="https://www.vjcoverseas.com/study-abroad/uk" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>UK Study Abroad</a>.</>
    },
    {
      question: "Can I stay in the UK after completing my studies?",
      answer: <>Eligible international graduates may be able to apply for a UK Graduate Visa after successfully completing their course. Current GOV.UK guidance states that applications made on or before 31 December 2026 can receive a 2-year Graduate Visa, while applications made on or after 1 January 2027 receive 18 months; PhD graduates can receive 3 years. For more details, visit <a href="https://www.vjcoverseas.com/study-abroad/uk" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>UK Study Abroad</a>.</>
    },
    {
      question: "Why should I choose VJC Overseas for studying in the UK?",
      answer: "VJC Overseas provides UK study abroad guidance, including course and university selection, admission assistance, Student Visa guidance and support throughout the application process. Students can use the Free Eligibility Check and counselling options available on the VJC Overseas website to understand their study-abroad opportunities."
    }
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
        Study in the UK - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[45%]  mt-8 h-full">
          <div className="relative w-full h-full min-h-[300px] md:min-h-[200px]">
            <Image
              src="/study-in-uk.jpg"
              alt="Study in UK"
              fill
              className=" object-cover"
              sizes="(max-width: 698px) 100vw, 45vw"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full">
          <p className="mb-2">
            The UK has long been a favourite destination for international students seeking world-class education, cultural diversity, and outstanding career opportunities. With its rich history, vibrant cities, and renowned institutions, it’s no wonder that the UK remains one of the top choices for students worldwide. If you’re considering studying in the UK, this guide provides an overview of the UK study visa process, some top universities, their fee structures, and the admission process to help you navigate your journey from application to graduation. As one of the <a href="https://www.vjcoverseas.com/" style={{ color: "orange", textDecoration: "none" }}>Best Visa Immigration Consultants</a>, we offer complete guidance for students planning their UK education, ensuring a smooth transition from application to arrival.
          </p>
        </div>
      </div>

      {/* Visa Section */}
      <h2 className="text-xl font-bold text-black mt-4 mb-2">UK Study Visa: An Overview</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Choose Your Course and University: You must be accepted into a recognized UK institution and obtain a Confirmation of Acceptance for Studies (CAS).</li>
        <li>
          Check Visa Requirements:
          <ul className="list-disc pl-6">
            <li>Unconditional offer from a UK institution</li>
            <li>Sufficient financial support for tuition and living costs</li>
            <li>Meet English language requirements (IELTS/TOEFL)</li>
          </ul>
        </li>
        <li>
          Complete Visa Application:
          <ul className="list-disc pl-6">
            <li>Valid passport</li>
            <li>Proof of CAS</li>
            <li>Proof of funds (~£1,023/month in London or £850 outside)</li>
            <li>English language test results</li>
            <li>Visa fee (~£348 for Tier 4 student visa)</li>
          </ul>
        </li>
        <li>Attend Biometrics Appointment</li>
        <li>Wait for Visa Decision (typically up to 3 weeks)</li>
        <li>Arrival in the UK: Visa is valid for the course duration plus extra time. For students who wish to work after their studies, we also provide assistance with the <a href="https://www.vjcoverseas.com/work-abroad/united-kingdom-work-permit" style={{ color: "orange", textDecoration: "none" }}>UK Skilled Worker Visa</a>, ensuring you understand the eligibility requirements and pathways to long-term employment in the UK.</li>
      </ol>

      {/* Universities */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Top UK Universities and Their Fee Structure</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li><strong>University of Oxford</strong><br />Undergraduate: £26,770 – £38,010/year<br />Postgraduate: £24,000 – £45,000/year</li>
        <li><strong>University of Cambridge</strong><br />Undergraduate: £22,227 – £58,038/year<br />Postgraduate: £22,000 – £45,000/year</li>
        <li><strong>London School of Economics (LSE)</strong><br />Undergraduate: £22,000 – £31,000/year<br />Postgraduate: £24,000 – £45,000/year</li>
        <li><strong>University College London (UCL)</strong><br />Undergraduate: £20,000 – £35,000/year<br />Postgraduate: £20,000 – £50,000/year</li>
        <li><strong>University of Edinburgh</strong><br />Undergraduate: £19,000 – £34,000/year<br />Postgraduate: £21,000 – £40,000/year</li>
        <li><strong>University of Manchester</strong><br />Undergraduate: £20,000 – £33,000/year<br />Postgraduate: £22,000 – £40,000/year</li>
      </ul>

      {/* Admission Process */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Admission Process for UK Universities</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Research and Choose a Course</li>
        <li>
          Meet Entry Requirements:
          <ul className="list-disc pl-6">
            <li>Academic qualifications (A-Levels, IB, etc.)</li>
            <li>English proficiency test</li>
            <li>Portfolio (for arts)</li>
            <li>Letters of recommendation (for PG)</li>
          </ul>
        </li>
        <li>
          Application Submission:
          <ul className="list-disc pl-6">
            <li>UG: Apply via UCAS (max 5 choices)</li>
            <li>PG: Direct university application</li>
          </ul>
        </li>
        <li>Attend Interview (if required)</li>
        <li>Receive and Accept Offer Letter</li>
        <li>Apply for Student Visa (with CAS). When it comes to student visa applications, our <a href="https://www.vjcoverseas.com/study-abroad/uk" style={{ color: "orange", textDecoration: "none" }}>UK Student Visa Consultants</a> ensure you meet all the criteria and avoid any delays in processing.</li>
      </ol>

      {/* Cost of Living */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Cost of Living in the UK</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>London: £1,200 – £1,800/month</li>
        <li>Outside London: £900 – £1,300/month</li>
        <li>Cost includes housing, food, transport, leisure</li>
        <li>Students can work part-time (up to 20 hrs/week)</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Conclusion</h2>
      <p className="mb-4">
        Studying in the UK offers not just an academic challenge but also an opportunity to immerse yourself in a rich cultural experience. With a well-structured visa process, world-renowned universities, and a diverse student community, the UK is an excellent choice for international students. If you’re unsure about which university is right for you, our team of experienced <a href="https://www.vjcoverseas.com/study-abroad" style={{ color: "orange", textDecoration: "none" }}>Study Visa Consultants</a> can help you compare courses, locations, and budgets to make an informed decision.
      </p>

      <p className="mb-4" style={{ color: "black" }}>
  At <a href="https://www.vjcoverseas.com/" style={{ color: "orange", textDecoration: "none" }}>VJC Overseas</a>, we specialize in helping students navigate every step of the study abroad process—from selecting the right university to obtaining your visa and arriving in the UK. Contact us today to get started on your path to studying in the UK!
</p>

      {/* Frequently Asked Questions Section */}
      <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">
        Frequently Asked <span style={{ color: "rgb(238, 91, 43)" }}>Questions</span> – UK Study Abroad
      </h2>

      {/* FAQ Boxes - Each question has its own separate box */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              marginBottom: "12px",
              backgroundColor: "white",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            {/* Question Button - Click to open/close */}
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                padding: "16px 20px",
                textAlign: "left",
                backgroundColor: openIndex === index ? "#f0f7ff" : "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: "600",
                color: "#1a1a1a",
                borderRadius: "8px",
              }}
            >
              <span>{faq.question}</span>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#6b7280",
                  transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                +
              </span>
            </button>

            {/* Answer Box - Shows when question is clicked */}
            <div
              style={{
                maxHeight: openIndex === index ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                backgroundColor: "white",
              }}
            >
              <p
                style={{
                  padding: "0 20px 16px 20px",
                  margin: 0,
                  color: "#333333",
                  lineHeight: "1.6",
                  fontSize: "14px",
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default UKStudyGuide;