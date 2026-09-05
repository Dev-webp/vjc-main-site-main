import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  // State to track which FAQ is open (null means none are open)
  const [openIndex, setOpenIndex] = useState(null);

  // Function to open/close FAQ boxes
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // All FAQ questions and answers
  const faqs = [
    {
      question: "What is the Germany Opportunity Card?",
      answer: "The Germany Opportunity Card (Chancenkarte) allows eligible qualified professionals from countries outside the EU to enter Germany for the purpose of looking for suitable employment, even without having a job offer in advance. Opportunity Card Germany is generally issued for up to 12 months for job searching."
    },
    {
      question: "Who is eligible for the Germany Opportunity Card?",
      answer: <>Applicants can qualify for the Germany Opportunity Card through one of two routes. If their foreign academic or vocational qualification is fully recognised in Germany, they may apply as a skilled worker without using the points system. Otherwise, applicants generally need a recognised qualification, the required language level, and at least 6 points under the points system, along with proof of sufficient financial resources. These are some of the key Germany Opportunity Card eligibility requirements applicants need to meet. For more details, visit <a href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/opportunity-card" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Opportunity Card</a>.</>
    },
    {
      question: "How many points are required for the Germany Opportunity Card?",
      answer: <>Applicants applying through the points-based route generally need to achieve a minimum of 6 points. The Germany Opportunity Card points system considers factors such as professional experience, language skills, age, qualification recognition, shortage occupations, previous stays in Germany and certain partner-related criteria. Applicants can use the official eligibility criteria to understand how their profile may qualify for the required 6 points Germany Opportunity Card threshold. For more details, visit <a href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/opportunity-card" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Opportunity Card</a>.</>
    },
    {
      question: "What are the language requirements for the Germany Opportunity Card?",
      answer: "For the points-based route, applicants generally need German language skills of at least A1 or English language skills of at least B2. These are key Germany Opportunity Card language requirements for applicants applying through the points-based route. Higher German language levels can provide additional points. Applicants applying as recognised skilled workers generally do not need to provide language proof for the Opportunity Card, although German language skills can improve employment prospects."
    },
    {
      question: "How much money is required for the Germany Opportunity Card?",
      answer: <>Applicants must demonstrate that they can financially support themselves during their stay in Germany. For 2026, the standard Germany Opportunity Card financial requirement 2026 is €1,091 net per month, which can generally be demonstrated through an Opportunity Card blocked account or other accepted means to meet the overall Germany Opportunity Card funds criteria. For more details, visit <a href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/opportunity-card" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Opportunity Card</a>.</>
    },
    {
      question: "Can I apply for the Germany Opportunity Card without a job offer?",
      answer: <>Yes, in principle. Germany Opportunity Card is specifically designed for eligible applicants who want to enter Germany to search for suitable employment without already having a qualified job offer. However, applicants must meet the applicable eligibility and financial requirements. A primary benefit of the Germany Opportunity Card without job offer scheme is that candidates are not required to hold an employment contract in advance. For more details, visit <a href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/opportunity-card" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Opportunity Card</a>.</>
    },
    {
      question: "What qualifications are required for the Germany Opportunity Card?",
      answer: <>Applicants using the points-based route generally need a university degree or a state-recognised vocational qualification, with vocational training generally requiring at least two years of full-time training. These are key Germany Opportunity Card degree requirements for applicants applying through the points-based route. Applicants whose foreign qualification is fully recognised in Germany can use the skilled-worker route instead of the points system, depending on the Germany Opportunity Card qualification criteria. For more details, visit <a href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/opportunity-card" target="_blank" style={{ color: "rgb(238, 91, 43)", fontWeight: "bold" }}>Germany Opportunity Card</a>.</>
    },
    {
      question: "What documents are required for the Germany Opportunity Card?",
      answer: "Common Germany Opportunity Card documents can include a valid passport, proof of academic or vocational qualification, applicable recognition/comparability documents, language proof where required, proof of financial resources, health insurance and the relevant application forms. This Germany Opportunity Card checklist can vary depending on the applicant's individual circumstances. The responsible German mission may request additional documents depending on the individual case."
    },
    {
      question: "Can I work in Germany with an Opportunity Card?",
      answer: "Yes. The Job Search Opportunity Card allows holders to undertake secondary employment for up to 20 hours per week on average and certain trial employment arrangements, subject to the applicable rules. These Germany Opportunity Card work rights mean holders can take up Opportunity Card part time work while searching for suitable qualified employment. Once suitable qualified employment is secured, the applicant may be able to switch to an appropriate residence title."
    },
    {
      question: "How long is the Germany Opportunity Card valid?",
      answer: "The Job Search Opportunity Card is initially issued for up to 12 months. In certain circumstances, the Germany Opportunity Card validity may be extended through a follow-up Opportunity Card for up to two additional years if the relevant conditions are met and the person has found qualified employment but does not yet qualify for another residence title. This means the Germany Opportunity Card duration can vary depending on the applicant's circumstances and eligibility."
    }
  ];
  return (
    <div
      style={{
        position: "relative",
        padding: "50px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          Germany Opportunity Card – Your Gateway to a Bright Future -{" "}
          <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
        </h3>
      </div>

      <p style={{ marginBottom: "20px" }}>
        At <span className="font-bold text-black">VJC Overseas</span>, we take
        immense pride in offering one of the most promising pathways to secure a
        future in Germany: the Germany Opportunity Card. This new, innovative
        initiative has opened up exciting prospects for skilled professionals,
        allowing them to live and work in one of Europe’s most thriving
        economies.
      </p>

      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/gocimg.png"
            alt="Germany Opportunity Card"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
            unoptimized
          />
        </div>

        {/* Text Section */}
        <div className="px-4 lg:px-0">
          <h3 className="text-black font-bold text-lg sm:text-xl">
            What is the Germany Opportunity Card?
          </h3>
          <p className="mb-4 text-sm sm:text-base">
            The Germany Opportunity Card is a new immigration pathway designed
            for highly skilled workers from outside the European Union to move
            to Germany. The card offers a flexible and faster approach to
            obtaining a residence permit for work purposes, especially for those
            in fields where there is a recognized skills shortage. For many
            global professionals, this program – often referred to as{" "}
            <span className="text-orange-500 font-bold">
              <Link href="https://www.vjcoverseas.com/germany-opportunity-card">
                Chancenkarte Germany
              </Link>
            </span>{" "}
            – has become a unique opportunity to build careers in one of the
            world’s most advanced economies. It opens doors not only to jobs but
            also to personal growth, cultural experiences, and a better
            lifestyle.
          </p>
        </div>
      </div>

      <p className="hidden lg:block mb-5">
        This opportunity card is the perfect solution for individuals seeking to
        explore career opportunities, enhance professional growth, and
        experience life in one of the world’s most advanced countries.
      </p>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>
        Why Choose VJC Overseas?
      </h3>
      <p style={{ marginBottom: "10px" }}>
        At <span className="font-bold text-black">VJC Overseas</span>, our
        mission is to simplify the process for professionals looking to move to
        Germany. With our unparalleled expertise and deep understanding of the
        German immigration system, we ensure that every step of your application
        is handled with care, precision, and efficiency. With our deep expertise
        and proven track record, we have earned a reputation as{" "}
        <span className="text-orange-500 font-bold">
          <Link href="https://www.vjcoverseas.com">
            Best Visa Immigration Consultants
          </Link>
        </span>
        .
      </p>

      <h3
        style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
      >
        Why is the Germany Opportunity Card a Game Changer?
      </h3>
      <ul style={{ marginBottom: "20px" }}>
        <li>
          <strong style={{ color: "rgb(3, 60, 65)", fontWeight: "bolder" }}>
            1.Faster Processing Times:
          </strong>{" "}
          The new card allows quicker processing of skilled professionals into
          Germany`s workforce. Approvals are much quicker compared to
          traditional permits, making it easier to start your journey sooner.
        </li>
        <li>
          <strong style={{ color: "rgb(3, 60, 65)" }}>2.Job Flexibility:</strong>{" "}
          The Germany Opportunity Card allows professionals to enter Germany
          without needing a prior job offer. You can arrive in Germany and
          search for a job within your field of expertise once you’re there.
        </li>
        <li>
          <strong style={{ color: "rgb(3, 60, 65)" }}>
            3.Permanent Residency Path:
          </strong>{" "}
          After holding the Germany Opportunity Card for a certain number of
          years, you may be eligible to apply for permanent residency.
        </li>
        <li>
          <strong style={{ color: "rgb(3, 60, 65)" }}>
            4.Visa Approvals at Record Speed:
          </strong>{" "}
          Our proven approach ensures that applications are handled efficiently,
          increasing the likelihood of approval and reducing delays.
        </li>
      </ul>

      <h3
        style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
      >
        <span className="font-bold text-black">VJC Overseas</span> – Your
        Trusted Partner for Success
      </h3>
      <p style={{ marginBottom: "20px" }}>
        Here at <span className="font-bold text-black">VJC Overseas</span>, we
        pride ourselves on providing clear, transparent, and expert guidance
        throughout your journey.
      </p>
      <p style={{ marginBottom: "20px" }}>
        We understand that relocating to a new country can feel overwhelming,
        but our team is here to make the process seamless and stress-free.
      </p>
      <p style={{ marginBottom: "20px" }}>
        Our unparalleled success in securing visas — with new approvals coming
        in every alternate day — speaks volumes about our dedication and
        expertise.
      </p>

      <h3
        style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}
      >
        The VJC Overseas Advantage:
      </h3>
      <ul
        style={{
          marginBottom: "20px",
          listStyleType: "disc",
          paddingLeft: "20px",
        }}
      >
        <li>
          <strong style={{ color: "rgb(3, 60, 65)" }}>
            Expert Consultation:
          </strong>{" "}
          We provide tailored advice on the most effective path for your
          individual needs.
        </li>
        <li>
          <strong style={{ color: "rgb(3, 60, 65)" }}>
            Customized Job Search Assistance:
          </strong>{" "}
          Our extensive network of German employers helps you find the right job
          to match your skills.
        </li>
        <li>
          <strong style={{ color: "rgb(3, 60, 65)" }}>
            Comprehensive Visa Support:
          </strong>{" "}
          From start to finish, we assist with all the required documentation
          and processes for a smooth visa approval.
        </li>
        <li>
          <strong style={{ color: "rgb(3, 60, 65)" }}>
            Rapid Success Rate:
          </strong>{" "}
          With visa approvals every alternate day, we have earned a reputation
          for being reliable, fast, and results-oriented.
        </li>
      </ul>

      <h3
        style={{
          color: "brown",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Success Stories
      </h3>
      <p
        style={{
          marginBottom: "20px",
          fontFamily: "cursive",
          fontSize: "14px",
        }}
      >
        We are proud to have helped hundreds of professionals and families
        successfully relocate to Germany. Hear from our satisfied clients who
        are now thriving in their new careers:
      </p>
      <p
        style={{
          marginBottom: "20px",
          fontFamily: "cursive",
          fontSize: "14px",
        }}
      >
        “I never thought that applying for the Germany Opportunity Card would be
        this easy. Thanks to <span className="font-bold text-black">VJC Overseas</span>, my visa was approved quickly, and I found a great
        job within just a few months.” — Anjali S., Software Developer
      </p>

      <h3
        style={{
          marginBottom: "20px",
          fontFamily: "cursive",
          fontSize: "14px",
          fontWeight: "bolder",
        }}
      >
        Start Your Journey Today
      </h3>
      <p
        style={{
          marginBottom: "20px",
          fontFamily: "cursive",
          fontSize: "14px",
        }}
      >
        Ready to take the next step in your career? The Germany Opportunity Card
        offers a unique chance to live, work, and thrive in one of Europe’s most
        prosperous countries. With{" "}
        <span className="text-orange-500 font-bold">
          <Link href="https://www.vjcoverseas.com">
            VJC Overseas
          </Link>
        </span>
        , your path to success is just a few steps away.
      </p>

     <h3 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>
  Contact us today for a free consultation and let us guide you toward
  securing your Germany Opportunity Card.
</h3>

      {/* Frequently Asked Questions Section */}
      <h3
        style={{
          color: "black",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "22px",
          textAlign: "center",
        }}
      >
        Frequently Asked <span style={{ color: "rgb(238, 91, 43)" }}>Questions</span> – Germany Opportunity Card
      </h3>

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



      <p style={{ marginBottom: "20px" }}>
        Germany has become one of the most attractive destinations for
        professionals who are exploring{" "}
        <span className="text-orange-500 font-bold">
          <Link href="https://www.vjcoverseas.com/work-abroad">
            Work Abroad Opportunities
          </Link>
        </span>
        . Its strong economy, cultural diversity, and growing demand for skilled
        workers make it a perfect choice for those seeking career growth while
        experiencing a high standard of living.
      </p>

      <p style={{ marginBottom: "20px" }}>
        Our strong employer network in Germany supports your job-hunting journey
        and provides complete{" "}
        <span className="text-orange-500 font-bold">
          <Link href="https://www.vjcoverseas.com/work-abroad/germany-work-permit">
            Germany Work Permit Visa
          </Link>
        </span>{" "}
        assistance with documentation, filing, and follow-ups.
      </p>

      <p style={{ marginBottom: "20px" }}>
        We ensure your transition is seamless and rewarding. Explore more about
        the{" "}
        <span className="text-orange-500 font-bold">
          <Link href="https://www.vjcoverseas.com/germany-opportunity-card">
            Germany Opportunity Card
          </Link>
        </span>{" "}
        program and how it can help you settle successfully.
      </p>
    </div>
  );
};

export default Content;
