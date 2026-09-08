import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function GermanyResumeMarketing() {

  // State to track which FAQ is open (null means none are open)
  const [openIndex, setOpenIndex] = useState(null);

  // Function to open/close FAQ boxes
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // All FAQ questions and answers
  const faqs = [
    {
      question: "What is Germany Resume Marketing and how can it help me get a job in Germany?",
      answer: <>Germany Resume Marketing helps job seekers create a professional CV and application profile tailored to the German job market. A well-structured Germany job resume can highlight your skills, qualifications, experience, and relevant keywords to make your profile more suitable for German employers. For more details, visit <a href="https://www.vjcoverseas.com/resume-marketing/germany" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Resume Marketing</a>.</>
    },
    {
      question: "Do I need a German CV format to apply for jobs in Germany?",
      answer: <>Yes, using an appropriate German CV format can help present your professional experience and qualifications in a way that aligns with German recruitment practices. A professional German Lebenslauf generally follows a clear, structured and reverse-chronological format. For more details, visit <a href="https://www.vjcoverseas.com/resume-marketing/germany" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Resume Marketing</a>.</>
    },
    {
      question: "Can you create an ATS-friendly CV for Germany jobs?",
      answer: <>Yes. An ATS-friendly CV for Germany jobs can be structured with clear headings, relevant job-specific keywords, readable formatting, and professionally presented skills and experience. This can help your CV work effectively with Applicant Tracking Systems and remain easy for recruiters to review. For more details, visit <a href="https://www.vjcoverseas.com/resume-marketing/germany" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Resume Marketing</a>.</>
    },
    {
      question: "What should I include in a CV for Germany jobs?",
      answer: <>A CV for Germany jobs should generally include your contact details, professional experience, education, relevant certifications, skills, and language proficiency. Your work experience should normally be presented with the most recent position first and clearly describe your responsibilities and achievements. For more details, visit <a href="https://www.vjcoverseas.com/resume-marketing/germany" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Resume Marketing</a>.</>
    },
    {
      question: "Do you provide professional Germany CV writing services for Indian job seekers?",
      answer: "Yes. Germany CV writing services can help Indian professionals create a Germany-focused resume that presents their international experience, qualifications, technical skills, and career achievements professionally. The CV can be tailored to the type of job and industry they are targeting in Germany."
    },
    {
      question: "Can you optimize my CV for German employers and international companies?",
      answer: "Yes. Our Germany resume writing services can help optimize your CV according to the target role, industry, experience level, and job description. The content can be structured to clearly communicate your professional strengths and relevant keywords to German employers."
    },
    {
      question: "Is a cover letter required along with a Germany CV?",
      answer: "A cover letter can be an important part of a German job application, particularly when the employer requests one. A tailored cover letter should explain your interest in the position, relevant strengths, and why you are a suitable candidate for the role."
    },
    {
      question: "Can Germany Resume Marketing help me apply for jobs from India?",
      answer: <>Yes. Germany Resume Marketing from India can help job seekers prepare a professional Germany-focused CV and supporting application documents before applying to suitable vacancies. A properly prepared Germany job application can help present your qualifications and experience more effectively to potential employers. For more details, visit <a href="https://www.vjcoverseas.com/resume-marketing/germany" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Resume Marketing</a>.</>
    }
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Germany Resume Marketing Services -{" "}
        <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p className="mb-4">
        Are you planning to build your career in Germany?{" "}
        <span className="text-black font-bold">VJC Overseas</span>, as one of the{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="text-orange-600 font-bold"
        >
          Best Visa Immigration Consultants
        </Link>
        , not only guides you with immigration and career pathways but also helps
        you market yourself effectively in the competitive European job market.
        Our dedicated{" "}
        <strong className="text-black font-bold">
          Germany Resume Marketing Services
        </strong>{" "}
        are designed to showcase your skills, highlight your achievements, and
        align your professional profile with the expectations of German
        employers.
      </p>

      <div className="relative lg:p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/resume/resume2.png"
          alt="Germany Resume Marketing Services - Vjc Overseas"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <h2 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Why Choose <span className="text-orange-500">VJC Overseas</span> for
        Your Germany Job Search?
      </h2>
      <p className="mb-4">
  Germany is a global hub for industries like engineering, IT, healthcare,
  and manufacturing. However, standing out in the job market requires more
  than just qualifications. Employers value resumes that are clear,
  concise, and tailored to local recruitment practices. At{" "}
  <Link href="https://www.vjcoverseas.com/" className="text-orange-500 font-bold">
    VJC Overseas
  </Link>, we provide:
</p>

      <ul className="list-disc list-inside mb-4">
        <li>Tailored resumes that match German hiring standards.</li>
        <li>Applicant Tracking System (ATS)-friendly formatting.</li>
        <li>Personalized career summaries and profile highlights.</li>
        <li>LinkedIn profile optimization for recruiter visibility.</li>
        <li>
          Professional cover letters and{" "}
          <Link
            href="https://www.vjcoverseas.com/resume-marketing"
            className="text-orange-600 font-bold"
          >
            Resume Marketing Services
          </Link>{" "}
          for targeted job applications.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        <span className="text-black">Germany Salary Structure:</span>{" "}
        Understanding Your Earning Potential
      </h2>
      <p className="mb-4">
        Before stepping into the German job market, it is essential to know the
        salary benchmarks. On average, professionals earn between €45,000 –
        €55,000 per year, though this varies by industry and experience.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Entry-Level Roles: €35,000 – €45,000</li>
        <li>Mid-Level Professionals: €45,000 – €60,000</li>
        <li>Senior-Level Positions: €60,000 – €85,000</li>
        <li>Executive & Specialist Roles: €90,000+</li>
      </ul>
      <p className="mb-4">
        With <strong className="text-black font-bold">VJC Overseas</strong>, we
        ensure your resume reflects your strengths and aligns with salary
        expectations that match your expertise.
      </p>

      <h2 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        <span className="text-black">Living in Germany:</span> A High Quality of
        Life
      </h2>
      <p className="mb-4">
        Germany is not only a career destination but also a lifestyle upgrade.
        Professionals moving here enjoy a high standard of living, world-class
        infrastructure, and a strong focus on work-life balance.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Cost of Living:</strong> Munich and Frankfurt are on the
          higher side, while Leipzig and Dresden are more affordable. Monthly
          living costs average between €800 – €1,500 excluding rent.
        </li>
        <li>
          <strong>Healthcare:</strong> Employees benefit from Germany’s excellent
          healthcare system with access to both public and private options.
        </li>
        <li>
          <strong>Housing:</strong> Berlin apartments average €900 – €1,500 per
          month for a single-bedroom unit.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        <span className="text-black">Work Opportunities in Germany:</span> Your
        Path to Career Growth
      </h2>
      <p className="mb-4">
        Germany’s economy is Europe’s largest, and skilled professionals are
        constantly in demand. The German government is also introducing
        initiatives like the{" "}
        <Link
          href="https://www.vjcoverseas.com/migrate/germany/opportunity-card"
          className="text-orange-600 font-bold"
        >
          Germany Opportunity Card
        </Link>{" "}
        to make it easier for skilled workers to enter and work in the country.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Information Technology: Developers, engineers, and IT specialists</li>
        <li>Engineering: Mechanical, civil, and electrical engineers</li>
        <li>Healthcare: Doctors, nurses, and healthcare professionals</li>
        <li>Finance: Accountants, analysts, and banking experts</li>
        <li>Manufacturing: Automotive and industrial machinery experts</li>
      </ul>

      <h2 className="text-xl font-semibold text-black mt-4 mb-2">
        Benefits of Working in Germany
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Social security coverage including pensions and insurance.</li>
        <li>At least 20 days of paid vacation annually (many companies offer more).</li>
        <li>Workweeks of 35–40 hours, emphasizing balance and wellness.</li>
        <li>Access to professional training and certifications.</li>
      </ul>

      <h2 className="text-xl font-semibold text-black mt-4 mb-2">
        Professional CV Marketing with VJC Overseas
      </h2>
      <p className="mb-4">
        Your CV is your professional identity. Through our{" "}
        <Link
          href="https://www.vjcoverseas.com/resume-marketing"
          className="text-orange-600 font-bold"
        >
          Professional CV Marketing
        </Link>
        , we don’t just write resumes—we craft career tools that reflect your
        strengths, achievements, and goals.
      </p>

      <h2 className="text-xl font-semibold text-black mt-4 mb-2">
        How Our Germany Resume Marketing Service Works
      </h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Consultation – Understanding your skills, goals, and career aspirations.</li>
        <li>Resume Crafting – Customized, ATS-compliant German-standard resume.</li>
        <li>LinkedIn Optimization – Enhancing your online presence.</li>
        <li>Job Search Strategy – Guidance on applying to the right roles.</li>
        <li>Interview Coaching – Preparing you for German interview expectations.</li>
      </ol>

      <h2 className="text-xl font-semibold black mt-4 mb-2">Get Started Today</h2>
      <p className="mb-4">
        If you're ready to make the leap,{" "}
        <Link
          href="https://www.vjcoverseas.com/resume-marketing/germany"
          className="text-orange-600 font-bold"
        >
          Germany Resume Marketing Services
        </Link>{" "}
        with <strong className="text-black font-bold">VJC Overseas</strong> is
        your gateway to a successful career abroad.
      </p>
      <p className="font-semibold">
        Contact Us today to schedule a consultation and start your journey to
        success in Germany!
      </p>

      {/* Frequently Asked Questions Section */}
      <h2 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Frequently Asked <span className="text-orange-500">Questions</span> – Germany Resume Marketing
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
}
