import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Next() {

  // =============================================
  // FAQ SECTION - State and Functions
  // =============================================

  // State to track which FAQ is open (null means none are open)
  const [openIndex, setOpenIndex] = useState(null);

  // Function to open/close FAQ boxes
  // When a question is clicked, it opens that answer
  // If the same question is clicked again, it closes
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // =============================================
  // FAQ DATA - All 12 Questions and Answers
  // =============================================

  const faqs = [
    {
      question: "What are the Canada Express Entry eligibility requirements?",
      answer: <>To be eligible for Canada Express Entry, you must qualify for at least one of the federal economic immigration programs managed through Express Entry: the Federal Skilled Worker Program (FSWP), Federal Skilled Trades Program (FSTP), or Canadian Experience Class (CEC). Canada Express Entry eligibility depends on factors such as work experience, education, language ability, and other program-specific requirements. Meeting the Express Entry requirements is essential before creating your profile. For more details, visit <a href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-express-entry" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Canada Express Entry eligibility</a>.</>
    },
    {
      question: "How much CRS score is required for Canada Express Entry?",
      answer: <>There is no fixed CRS score that guarantees an Invitation to Apply (ITA). IRCC ranks candidates in the Express Entry pool using the Comprehensive Ranking System (CRS), and the minimum score required changes depending on the type of draw and the candidates invited. The Canada Express Entry CRS score required can therefore vary from one draw to another, so applicants should monitor the latest Express Entry CRS cutoff. For more details, visit <a href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-express-entry" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>CRS score calculator Canada</a>.</>
    },
    {
      question: "How can I improve my CRS score for Canada Express Entry?",
      answer: <>You may be able to improve your CRS score by achieving higher language test results, gaining additional eligible work experience, improving your educational qualifications, or qualifying for other CRS factors. A provincial or territorial nomination can also significantly increase your CRS score. Applicants can use a CRS score calculator Canada to assess their current score and identify ways to increase CRS score Canada. For more details, visit <a href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-express-entry" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>increase CRS score Canada</a>.</>
    },
    {
      question: "What is the minimum IELTS score required for Canada Express Entry?",
      answer: <>The required language score depends on the Express Entry program you are applying under. For English, applicants commonly use an approved IELTS General Training test, but the required Canadian Language Benchmark (CLB) level varies by program. Therefore, the IELTS score for Canada Express Entry depends on your selected immigration program. Applicants should check the applicable IELTS requirements for Canada PR before creating an Express Entry profile. For more details, visit <a href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-express-entry" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>IELTS requirements for Canada PR</a>.</>
    },
    {
      question: "Can I apply for Canada PR without a job offer through Express Entry?",
      answer: "Yes. A valid Canadian job offer is not mandatory for every Express Entry pathway. Candidates can qualify based on the requirements of their eligible Express Entry program and compete in the pool based on their CRS score. Therefore, eligible applicants may be able to apply for Canada PR without a job offer if they meet the relevant Canada PR eligibility requirements."
    },
    {
      question: "What is the difference between Express Entry and Canada PR?",
      answer: "Express Entry is an online immigration application management system used to manage applications for certain economic immigration programs. Canada PR is the permanent resident status applicants seek. Therefore, Express Entry Canada is an immigration system and not a separate PR status. Eligible candidates can obtain Canada PR through Express Entry by receiving an ITA and successfully completing the permanent residence application process."
    },
    {
      question: "How long does Canada Express Entry processing take?",
      answer: "Canada Express Entry processing time can vary depending on the type of application, completeness of the submission, background checks, and other factors. After receiving an ITA, candidates have 60 days to submit their complete permanent residence application. The overall Canada PR processing time may vary depending on individual circumstances and IRCC processing requirements."
    },
    {
      question: "What documents are required for Canada Express Entry?",
      answer: "Depending on your circumstances and the program you qualify under, documents may include a valid passport, language test results, Educational Credential Assessment (ECA), education documents, work experience documents, proof of funds where applicable, police certificates, and other supporting documents requested by IRCC. Applicants should prepare the required Canada Express Entry documents and follow the applicable Express Entry document checklist."
    },
    {
      question: "Can I include my spouse and children in a Canada Express Entry application?",
      answer: "Yes. Eligible family members can generally be included in a permanent residence application. Your family composition and accompanying family members can also affect the CRS calculation and the documentation required for the application. Applicants planning Express Entry with spouse and children should provide accurate family information when applying for Canada PR with family."
    },
    {
      question: "What happens after receiving an Invitation to Apply (ITA) for Canada PR?",
      answer: "After receiving a Canada Express Entry ITA, you must submit a complete permanent residence application with the required documents within 60 days. IRCC then assesses the application based on program eligibility, the information provided, and admissibility requirements. Understanding what to do after Express Entry invitation can help applicants prepare and submit their Canada PR application after ITA correctly."
    },
    {
      question: "Can I apply for Canada Express Entry from India?",
      answer: <>Yes. Eligible candidates living outside Canada can create an Express Entry profile and enter the pool if they meet the requirements of at least one eligible Express Entry program. You do not need to be physically present in Canada to create an Express Entry profile. Eligible applicants can therefore explore Canada Express Entry from India as a pathway toward Canada PR from India. For more details, visit <a href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-express-entry" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Canada Express Entry from India</a>.</>
    },
    {
      question: "What is category-based selection in Canada Express Entry?",
      answer: "Category-based selection allows IRCC to invite eligible candidates who have specific skills, work experience, or language abilities that match established economic immigration categories. Candidates must still be eligible for one of the Express Entry programs and are ranked using the CRS. Express Entry category-based selection can provide opportunities for eligible candidates through specific Canada category-based draws."
    }
  ];

  // =============================================
  // PAGE CONTENT - Main HTML Structure
  // =============================================

  return (
    <>
      {/* Page Head - Title and Meta Tags */}
      <Head>
        <title>Express Entry - Canada PR | VJC Overseas</title>
        <meta name="description" content="Get Canada PR through Express Entry with VJC Overseas. Expert guidance, CRS boosting strategies, and full support." />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Express Entry - Canada PR | VJC Overseas" />
        <meta property="og:description" content="Fast-track your Canadian immigration through Express Entry with expert help from VJC Overseas." />
        <meta property="og:image" content="/canadapr-express-entry.png" />
        <meta property="og:url" content="https://www.vjcoverseas.com/pr-visas/canadapr/canada-express-entry" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Express Entry Canada PR | VJC Overseas" />
        <meta name="twitter:description" content="Migrate to Canada via Express Entry - Trusted Guidance from VJC Overseas." />
        <meta name="twitter:image" content="/images/express-entry-canada.jpg" />
      </Head>

      <div className="max-w-8xl mx-auto  py-8 bg-white">

        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-black mb-4">
          Express Entry – Your Fast Track to Canadian Immigration
        </h1>

        {/* Image and Introduction Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 w-full overflow-hidden rounded-xl">
            <Image
              src="/canadapr-express-entry.png"
              alt="Express Entry Canada Immigration - VJC Overseas"
              title="Express Entry Canada Immigration - VJC Overseas"
              width={600}
              height={400}
              className="w-full object-cover transform transition duration-500 hover:scale-105"
              unoptimized
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Canada continues to be one of the most welcoming destinations for skilled professionals, offering a high quality of life, advanced healthcare, and world-class education. Among the various immigration options, the <Link href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-express-entry" className="text-orange-600 font-bold">Express Entry Program</Link> is recognized as the most efficient pathway for qualified individuals seeking long-term settlement. At <span className="font-bold">VJC Overseas</span>, we provide complete guidance on how to navigate this system successfully and turn your dream of Canadian immigration into reality.
            </p>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="mt-10 space-y-6 text-gray-800 text-lg leading-relaxed">

          {/* What is Express Entry Section */}
          <h2 className="text-2xl font-semibold text-orange-700">What is Express Entry?</h2>
          <p>
            Express Entry is an online application management system created by the Government of Canada to oversee applications for permanent residence under three economic immigration programs:
          </p>
          <ul className="list-disc pl-6">
            <li>Federal Skilled Worker Program (FSWP)</li>
            <li>Federal Skilled Trades Program (FSTP)</li>
            <li>Canadian Experience Class (CEC)</li>
          </ul>
          <p>
            Each pathway is designed to attract skilled individuals who can contribute to Canada's economy. Applications are evaluated using the Comprehensive Ranking System (CRS), which assigns points based on education, age, work experience, language skills, and other factors.
          </p>

          {/* How the Process Works Section */}
          <h2 className="text-2xl font-semibold text-orange-700">How the Process Works</h2>
          <ol className="list-decimal pl-6">
            <li><strong>Profile Creation:</strong> Applicants create an online profile including personal details, test scores, education, and work experience. Eligible profiles are then placed in the Express Entry pool.</li>
            <li><strong>Invitation to Apply (ITA):</strong> Regular draws are conducted by Immigration, Refugees and Citizenship Canada (IRCC), and candidates with the highest CRS scores receive an ITA.</li>
            <li><strong>Submitting the PR Application:</strong> Once invited, applicants have 60 days to submit all documents and complete their <Link href="https://www.vjcoverseas.com/pr-visas/canada-pr" className="text-orange-600 font-bold">Canada PR Visa</Link> application.</li>
          </ol>

          {/* Boosting Your CRS Score Section */}
          <h2 className="text-2xl font-semibold text-orange-700">Boosting Your CRS Score</h2>
          <p>
            A strong CRS score is the key to success in Express Entry. Our consultants suggest proven strategies such as:
          </p>
          <ul className="list-disc pl-6">
            <li>Improving English or French language test results.</li>
            <li>Completing additional Educational Credential Assessments (ECA).</li>
            <li>Obtaining a valid Canadian job offer.</li>
            <li>Applying with your spouse to maximize available points.</li>
          </ul>

          {/* Why Work With Experts Section */}
          <h2 className="text-2xl font-semibold text-orange-700">Why Work With Experts?</h2>
          <p>
            As one of the <Link href="https://www.vjcoverseas.com" className="text-orange-600 font-bold">Best Visa Immigration Consultants</Link>, our goal is to simplify the complex process for you. From initial evaluation to post-landing support, we handle every detail. Our <Link href="https://www.vjcoverseas.com/pr-visas" className="text-orange-600 font-bold">PR Visa Consultants</Link> ensure that your documents are complete, your strategy is personalized, and your chances of approval are maximized.
          </p>

          {/* Start Your Canadian Journey Section */}
          <h2 className="text-2xl font-semibold text-orange-700">Start Your Canadian Journey Today</h2>
          <p>
            The Express Entry system is highly competitive, and CRS cut-off scores may change with every draw. Early preparation is crucial if you want to stay ahead in the process. With the expertise of <Link href="https://www.vjcoverseas.com" className="text-orange-600">VJC Overseas</Link>, you can confidently move one step closer to Canadian Permanent Residency PR Visa for Canada and a brighter future abroad.
          </p>
        </div>

        {/* ============================================= */}
        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        {/* ============================================= */}

        <div className="mt-10">

          {/* FAQ Heading */}
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            Frequently Asked <span className="text-red-600">Questions</span> – Canada Express Entry
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

      </div>
    </>
  );
}
