"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Canadapr = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I apply for Canada PR from India?",
      answer: (
        <>
          You can{" "}
          <Link href="https://vjcoverseas.com/migrate/canada/pr-visa" style={{ color: "orange", fontWeight: "bold" }}>
            apply for Canada PR from India
          </Link>{" "}
          through immigration pathways such as Express Entry or a Provincial
          Nominee Program (PNP). Your eligibility depends on factors such as age,
          education, work experience, language proficiency, and other program
          requirements.
        </>
      ),
    },
    {
      question: "What are the eligibility requirements for Canada PR?",
      answer: (
        <>
          <Link href="https://vjcoverseas.com/migrate/canada/pr-visa" style={{ color: "orange", fontWeight: "bold" }}>
            Canada PR eligibility
          </Link>{" "}
          depends on your age, education, skilled work experience, language
          proficiency, and other factors. A profile assessment can help
          determine which Canadian immigration pathway may be suitable for you.
        </>
      ),
    },
    {
      question: "What is Canada Express Entry?",
      answer: (
        <>
          <Link href="https://vjcoverseas.com/migrate/canada/pr-visa" style={{ color: "orange", fontWeight: "bold" }}>
            Canada Express Entry
          </Link>{" "}
          is an online immigration system used to manage applications for
          several economic immigration programs. Eligible candidates create a
          profile and are ranked based on the applicable selection criteria
          before receiving an invitation to apply.
        </>
      ),
    },
    {
      question: "What is the Canada Provincial Nominee Program (PNP)?",
      answer:
        "The Canada Provincial Nominee Program allows participating provinces and territories to nominate eligible candidates based on their skills, education, work experience, and regional labour-market needs. A provincial nomination can support your pathway to Canadian permanent residence.",
    },
    {
      question: "How long does the Canada PR process take?",
      answer: (
        <>
          The{" "}
          <Link href="https://vjcoverseas.com/migrate/canada/pr-visa" style={{ color: "orange", fontWeight: "bold" }}>
            Canada PR processing time
          </Link>{" "}
          varies depending on the immigration program, application completeness,
          and other factors. Your selected pathway, such as Express Entry or
          PNP, can affect the overall processing timeline.
        </>
      ),
    },
    {
      question: "How much does Canada PR cost from India?",
      answer: (
        <>
          The{" "}
          <Link href="https://vjcoverseas.com/migrate/canada/pr-visa" style={{ color: "orange", fontWeight: "bold" }}>
            Canada PR cost
          </Link>{" "}
          depends on factors such as government application fees, biometrics,
          medical examinations, police certificates, and other expenses. The
          applicable fees can also vary depending on the number of family
          members included in the application.
        </>
      ),
    },
    {
      question: "What documents are required for Canada PR?",
      answer:
        "Documents for a Canada PR application may include your passport, educational certificates, work experience documents, language test results, proof of funds where applicable, police certificates, medical examination records, and other supporting documents required for your immigration program.",
    },
    {
      question: "Can I move to Canada with my family after getting PR?",
      answer:
        "Yes, eligible applicants can include qualifying family members in their Canada PR application, subject to the requirements of the selected immigration program. Permanent residence can provide access to healthcare, education, and other benefits available to eligible residents in Canada.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          Canada Permanent Residence Visa: Your Pathway to a New Life in Canada
          - <span style={{ color: "red", fontWeight: "bold" }}>VJC Overseas</span>
        </h3>
      </div>

      <article>
        <section style={{ marginBottom: "30px" }}>
          <h2
            style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
          >
            Why Choose Canada for Permanent Residency?
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Canada is renowned for its strong economy, political stability, and
            diverse, inclusive culture. As a permanent resident, you’ll enjoy
            access to world-class healthcare, education, and social services.
            Whether you’re seeking better career opportunities, a high standard
            of living, or a safe environment to raise your family, Canada offers
            all that and more. Many people consult{" "}
            <a
              href="https://www.vjcoverseas.com/"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Best Visa Immigration Consultants
            </a>{" "}
            to make this dream a reality.
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2
            style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
          >
            Living Expenses and Lifestyle in Canada
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Canada’s living costs can vary significantly depending on the
            province and city. On average, you can expect to pay. For those who{" "}
            <a
              href="https://www.vjcoverseas.com/migrate/canada/"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Migrate to Canada
            </a>
            , understanding these costs is crucial.
          </p>

          <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <Image
                src="/migrate/migratesub/canadaimg3.png"
                alt="Canada Pr Visa - Vjc Overseas"
                width={500}
                height={300}
                className="w-full max-w-xs mb-4 sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
                priority
                unoptimized
              />
            </div>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <li>
                <strong>Housing:</strong> Monthly rent for a one-bedroom
                apartment can range from CAD 1,200 to CAD 2,500 in major cities
                like Toronto and Vancouver. Smaller cities or towns may offer
                more affordable options.
              </li>
              <li>
                <strong>Groceries:</strong> A monthly grocery bill for a single
                person is typically CAD 300 to CAD 500.
              </li>
            </ul>
          </div>
          <li>
            <strong>Transportation:</strong> Public transport costs range from
            CAD 100 to CAD 150 per month in urban areas. Alternatively, owning a
            car can cost around CAD 500 to CAD 700 monthly, including insurance
            and fuel.
          </li>
          <li>
            <strong>Utilities:</strong> Utilities (electricity, heating, water,
            garbage) average CAD 150 to CAD 250 per month.
          </li>
          <p style={{ marginBottom: "20px" }}>
            Canada also offers a balanced work-life culture with plenty of
            opportunities for outdoor activities like skiing, hiking, and
            cycling, which is perfect for those who enjoy a healthy and active
            lifestyle. Many students who{" "}
            <a
              href="https://www.vjcoverseas.com/study-abroad/canada"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Study in Canada
            </a>{" "}
            also enjoy this lifestyle.
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2
            style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
          >
            Processing Time for Canada PR Visa
          </h2>
          <p style={{ marginBottom: "20px" }}>
            The processing time for a{" "}
            <a
              href="https://www.vjcoverseas.com/pr-visas"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Canada Permanent Residency
            </a>{" "}
            visa can vary depending on the immigration program you apply under
            (Express Entry, Provincial Nominee Program, Family Sponsorship,
            etc.). Typically, Express Entry applications are processed in
            approximately 6 to 8 months, while other pathways like the
            Provincial Nominee Program may take around 12 to 18 months. However,
            processing times can be affected by various factors such as your
            country of origin and application completeness.{" "}
            <b style={{ color: "black" }}>VJC Overseas</b> ensures that your
            application is handled efficiently, helping you navigate all the
            necessary steps and paperwork.
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2
            style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
          >
            Visa Fees
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              marginBottom: "20px",
            }}
          >
            <li>
              <strong>Principal applicant fee:</strong> CAD 1,365
            </li>
            <li>
              <strong>Spouse or common-law partner fee:</strong> CAD 1,365
            </li>
            <li>
              <strong>Dependent child fee:</strong> CAD 230 per child
            </li>
          </ul>
          <p style={{ marginBottom: "20px" }}>
            Additional costs may include medical exams, police certificates, and
            biometrics, which vary by individual circumstances. At{" "}
            <b style={{ color: "black" }}>VJC Overseas</b>, we provide
            transparent and accurate estimates to ensure you are prepared for
            all costs involved.
          </p>
        </section>

        {/* Canada PR Visa FAQs */}
        <section style={{ marginBottom: "30px" }}>
          <h2
            style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
          >
            Canada PR Visa – Frequently Asked Questions
          </h2>
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
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    textAlign: "left",
                    backgroundColor: openIndex === index ? "#fff7ed" : "white",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
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
                      color: openIndex === index ? "#f97316" : "#6b7280",
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
                  <p
                    style={{
                      padding: "0 20px 16px 20px",
                      margin: 0,
                      color: "#333333",
                      lineHeight: "1.6",
                      fontSize: "15px",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
          >
            Get Started with <b style={{ color: "black" }}>VJC Overseas</b>
          </h2>
          <p>
            The process of applying for a Canada PR visa can be complex, but
            with the expert guidance of{" "}
            <a
              href="https://www.vjcoverseas.com/"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              VJC Overseas
            </a>
            , you can streamline your application and maximize your chances of
            success. Our experienced consultants provide tailored advice and
            support, helping you understand your eligibility, navigate the
            paperwork, and ensure that your application is submitted correctly
            and on time.
          </p>
          <p>
            Are you ready to begin your journey to Canada? Contact{" "}
            <b style={{ color: "black" }}>VJC Overseas</b> today to start your
            application process and take the first step toward making Canada
            your new home!
          </p>
        </section>
      </article>
    </section>
  );
};
export default Canadapr;