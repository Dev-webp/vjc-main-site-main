import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="w-full px-6 sm:px-10 mt-16 lg:px-20 py-10 text-gray-800 leading-relaxed font-sans">
      {/* Header */}
      <div className="border-b pb-8 mb-10">
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight text-black">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500">Last Updated: January 02, 2026</p>
        <p className="mt-4">
          Contact Email:{' '}
          <span className="font-semibold underline">info@vjcoverseas.com</span>
        </p>
      </div>

      <div className="space-y-12">
        {/* 1 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            1. About this Website
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              VJC Overseas is an independent and privately operated consultancy firm
              that provides professional guidance related to immigration, visa
              documentation, and procedural assistance, and it does not represent,
              partner with, or act on behalf of any government authority or embassy.
            </li>
            <li>
              All information displayed on this website is intended for general
              awareness purposes only and should not be interpreted as legal advice,
              government instruction, or an assurance of visa approval under any
              circumstances.
            </li>
            <li>
              Immigration laws, visa rules, processing timelines, and eligibility
              criteria are subject to change without prior notice, and VJC Overseas
              holds no responsibility for such changes occurring after engagement.
            </li>
            <li>
              By accessing or using this website, the visitor agrees that any reliance
              placed on the information provided is done entirely at their own risk
              and discretion.
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            2. Certifications
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              VJC Overseas has undergone internal verification, background validation,
              and business compliance checks to ensure that its operations are lawful,
              transparent, and professionally conducted within applicable regulations.
            </li>
            <li>
              Any certifications, registrations, or acknowledgements obtained by VJC
              Overseas relate strictly to business legitimacy and do not grant authority
              to influence immigration decisions made by any embassy or government body.
            </li>
            <li>
              Clients acknowledge that holding certifications does not guarantee visa
              success, processing priority, or special consideration by immigration
              authorities.
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            3. Intellectual Property Rights
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              All content published on www.vjcoverseas.com, including text, layouts,
              designs, service descriptions, trademarks, logos, and graphics, is the
              exclusive intellectual property of VJC Overseas unless otherwise stated.
            </li>
            <li>
              Unauthorized copying, reproduction, redistribution, scraping, or reuse
              of website content for commercial or non-commercial purposes is strictly
              prohibited without prior written consent.
            </li>
            <li>
              Any violation of intellectual property rights may result in legal action,
              including claims for damages and injunctive relief under applicable law.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            4. Refund & Cancellation Policy (100% Non-Refundable)
          </h2>
          <p className="font-bold underline mb-4">
            All payments made to VJC Overseas are strictly non-refundable under any
            circumstances.
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              Fees paid towards evaluations, assessments, consultations, or reports
              are charged for professional time and expertise and are non-refundable
              even if the client chooses not to proceed further.
            </li>
            <li>
              No refund shall be provided if the client withdraws due to personal
              reasons, change of plans, dissatisfaction, or misunderstanding of
              eligibility criteria.
            </li>
            <li>
              Refunds will not be issued in cases involving document delays, embassy
              policy changes, visa refusals, medical failures, PCC issues, or
              insufficient proof of funds.
            </li>
            <li>
              Submission of fraudulent, misleading, or incorrect information by the
              client will result in immediate termination of services without refund.
            </li>
            <li>
              By making payment, the client expressly agrees not to initiate chargebacks,
              disputes, or legal claims against VJC Overseas regarding fees paid.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            5. Limitation of Liability
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              VJC Overseas shall not be held liable for any direct, indirect, incidental,
              or consequential loss arising from the use of its services or website.
            </li>
            <li>
              Decisions made by immigration authorities, including delays, refusals, or
              additional documentation requests, are beyond the control of VJC Overseas.
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            6. Personal Use Limitation
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              All services, documents, and communications provided by VJC Overseas are
              intended strictly for personal use by the client and may not be shared or
              resold.
            </li>
            <li>
              Any misuse of provided materials for commercial gain or third-party
              distribution is strictly prohibited.
            </li>
          </ul>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            7. Scope of Services
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              VJC Overseas provides advisory assistance, documentation guidance, and
              procedural support only and does not guarantee visa approval outcomes.
            </li>
            <li>
              Final decisions always rest solely with immigration authorities and are
              not influenced by consultancy involvement.
            </li>
          </ul>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            8. Warranty Disclaimer
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              All services and website content are provided on an “as-is” basis without
              warranties of any kind, either expressed or implied.
            </li>
            <li>
              VJC Overseas does not warrant uninterrupted service availability or
              error-free website functionality.
            </li>
          </ul>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            9. Communication & Media Policy
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              Clients agree not to post defamatory, misleading, or damaging statements
              about VJC Overseas on social media, review platforms, or public forums.
            </li>
            <li>
              Any violation may result in legal proceedings and termination of services
              without refund.
            </li>
          </ul>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            10. Termination of Service
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              VJC Overseas reserves the right to terminate services if the client fails
              to cooperate, provide documents, or comply with communication requirements.
            </li>
          </ul>
        </section>

        {/* 11 */}
        <section className="border-t pt-8">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-black pl-3">
            11. Jurisdiction
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              All disputes shall be governed by the laws applicable at the location of
              the head office of VJC Overseas.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <div className="pt-12 text-center">
          <Link href="/" className="text-black font-bold underline hover:no-underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
