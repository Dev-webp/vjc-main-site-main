import React from "react";
import Image from "next/image";

const CanadaStudentVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Heading */}
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-4 text-center whitespace-nowrap">
        Study in Canada - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/canada-student-visa.jpg"
            alt="Canada Student Visa"
            width={600}
            height={400}
            className=" w-full object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-justify">
          <p className="mb-4">
            Canada is a top destination for international students, offering a high standard of education, a welcoming multicultural environment, and numerous opportunities for career growth. If you’re planning to study in Canada, obtaining a Canada Student Visa (Study Permit) is an essential step. <span className="text-orange-600">VJC Overseas</span> guides you through the process, ensuring a smooth and successful application journey.
          </p>
        </div>
      </div>

      {/* Eligibility Criteria */}
      <h2 className="text-xl mt-4 font-semibold mb-2 text-black">
        Canada Student Visa: Basic Eligibility Criteria
      </h2>
      <ul className="list-decimal pl-6 mb-2 space-y-2">
        <li>
          <strong>Proof of Acceptance from a Recognized Institution:</strong>
          <ul className="list-disc pl-6">
            <li>You must have an acceptance letter from a Designated Learning Institution (DLI) in Canada.</li>
          </ul>
        </li>
        <li>
          <strong>Sufficient Financial Resources:</strong>
          <ul className="list-disc pl-6">
            <li>You must demonstrate funds for tuition, living expenses, and return travel.</li>
            <li>Approx. CAD 10,000 (excluding Quebec); extra for dependents.</li>
          </ul>
        </li>
        <li>
          <strong>No Criminal Record:</strong>
          <ul className="list-disc pl-6">
            <li>Submit a police certificate confirming a clean record.</li>
          </ul>
        </li>
        <li>
          <strong>Health and Medical Requirements:</strong>
          <ul className="list-disc pl-6">
            <li>Medical exams may be needed depending on your country or stay duration.</li>
          </ul>
        </li>
        <li>
          <strong>Intention to Leave Canada after Studies:</strong>
          <ul className="list-disc pl-6">
            <li>Show ties to home country (family, job, assets).</li>
          </ul>
        </li>
        <li>
          <strong>Language Proficiency:</strong>
          <ul className="list-disc pl-6">
            <li>IELTS, TOEFL, TEF may be required based on institution language.</li>
          </ul>
        </li>
      </ul>

      {/* Documents Required */}
      <h2 className="text-xl mt-4 font-semibold mb-2 text-green-600">
        Documents Required for Canada Student Visa Application
      </h2>
      <ul className="list-decimal pl-6 mb-2 space-y-2">
        <li>Valid Passport (at least six months beyond stay period)</li>
        <li>Proof of Acceptance (DLI Letter)</li>
        <li>Proof of Sufficient Funds (bank statements, affidavits)</li>
        <li>Passport-sized Photographs (as per Canadian visa norms)</li>
        <li>Statement of Purpose (SOP)</li>
        <li>Police Clearance Certificate</li>
        <li>Medical Examination Results (if applicable)</li>
        <li>Language Proficiency Test Results (IELTS/TOEFL/TEF)</li>
        <li>Transcripts and Educational Certificates</li>
        <li>Statement of Funds and relationship proof (for dependents)</li>
        <li>Visa Application Forms and Fees (IMM 1294)</li>
        <li>Biometrics (if required)</li>
      </ul>

      {/* Steps */}
      <h2 className="text-xl mt-4 font-semibold mb-2 text-blue-600">
        Steps to Apply for a Canada Student Visa
      </h2>
      <ol className="list-decimal pl-6 mb-2 space-y-2">
        <li>Prepare Your Documents</li>
        <li>Complete the Application Form (IMM 1294)</li>
        <li>Submit the Application (Online or at VAC)</li>
        <li>Attend Biometrics Appointment (if applicable)</li>
        <li>Wait for Processing</li>
        <li>Receive Your Visa and Letter of Introduction</li>
      </ol>

      {/* Why VJC Overseas */}
      <h2 className="text-xl mt-4 font-semibold mb-2 text-green-600">
        Why Choose <span className="text-orange-600">VJC Overseas</span>?
      </h2>
      <p className="mb-4">
        At <span className="text-orange-600">VJC Overseas</span>, we understand that the process of applying for a Canadian student visa can be overwhelming. Our experts offer step-by-step guidance, personalized counselling, and help you choose the right course and institution in Canada.
      </p>

      {/* Call to Action */}
      <h2 className="text-xl mt-4 font-semibold mb-2 text-black-600">
        Get in Touch Today!
      </h2>
      <p>
        Start your journey to studying in Canada with the trusted experts at <span className="text-orange-600">VJC Overseas</span>. Contact us today for a consultation and take the first step toward your Canadian dream!
      </p>
    </div>
  );
};

export default CanadaStudentVisa;
