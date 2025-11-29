// app/privacy-policy/page.jsx (Next.js 13+ App Router - Full Orange-500 Theme)

import Link from "next/link";
// Import icons if you are using a library like Lucide, FontAwesome, etc.
// For this example, I'll use simple text/emoji for the icons as in your original code.

export const metadata = {
  title:
    "Privacy Policy VJC Overseas – Best Immigration Consultancy for PR & Study Abroad",
  description:
    "Read how VJC Overseas, one of the best immigration and overseas education consultancies, collects, uses, and protects your data for PR, study, work and visit visa services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 text-gray-900">
      {/* 🍊 Hero Section - Corporate Orange Theme - **ENHANCED/SEXY** */}
      <section className="relative w-full overflow-hidden border-b-4 border-orange-400/50 bg-gradient-to-br from-orange-50 via-white to-orange-100/70">
        {/* Decorative background accent 1: Bigger, bolder, shimmering orange blur */}
        <div className="pointer-events-none absolute -left-48 -top-32 h-96 w-96 rounded-full bg-orange-200/50 blur-[75px] opacity-70 animate-pulse-slow" />
        {/* Decorative background accent 2: Darker orange pattern (subtle) */}
        <div className="pointer-events-none absolute inset-0 opacity-10 [background:radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgba(251,146,60,0.1)_100%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 md:py-28 lg:flex-row lg:items-center lg:justify-between">
          {/* Left column: main copy */}
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-orange-300 bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-orange-700 shadow-lg transition-all hover:shadow-xl hover:scale-[1.01] duration-300">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500 shadow-md shadow-green-500/50" />
              VJC Overseas – Privacy Notice
            </div>

            <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl lg:text-4xl">
              Privacy Policy
              <span className="mt-2 block bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent drop-shadow-md">
                VJC Overseas Immigration & Visa Consultants
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              VJC Overseas is widely recognised as one of the{" "}
              <a
  href="https://www.vjcoverseas.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <span className="font-extrabold text-orange-800">
    best immigration consultancy
  </span>
</a>

              - for PR, student, jobseeker and visit visas. This Privacy Policy explains how we collect, use and protect your personal information.
            </p>

            {/* Feature Tags - Larger & More Distinct */}
            <div className="flex flex-wrap gap-4 text-sm pt-2">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-gray-800 shadow-xl border-t border-orange-100 transition-all hover:bg-orange-50">
                <span className="h-2 w-2 rounded-full bg-orange-600 shadow-orange-500/50" />
                Transparent data practices
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-gray-800 shadow-xl border-t border-orange-100 transition-all hover:bg-orange-50">
                <span className="h-2 w-2 rounded-full bg-orange-600 shadow-orange-500/50" />
                Security & confidentiality
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-gray-800 shadow-xl border-t border-orange-100 transition-all hover:bg-orange-50">
                <span className="h-2 w-2 rounded-full bg-orange-600 shadow-orange-500/50" />
                PR,study,work & visit-visas
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="#data-we-collect"
                className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3 text-lg font-bold text-white shadow-2xl shadow-orange-500/50 transition-all duration-300 hover:bg-orange-700 hover:scale-[1.05] active:scale-[0.98]"
              >
                Discover How Your Data is Used
              </Link>
              <div className="flex flex-col text-sm text-gray-600">
                <span className="font-semibold">Last updated: <span className="text-orange-600">27 November 2025</span>.</span>
                <span>Clear, simple explanation of our privacy practices.</span>
              </div>
            </div>
          </div>

          {/* Right column: trust / quick summary card - **ELEVATED DESIGN** */}
          <div className="w-full max-w-md rounded-3xl border-2 border-orange-300 bg-white p-8 shadow-2xl shadow-orange-200/50 lg:p-8 transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-orange-300/70">
            <h2 className="text-md font-extrabold uppercase tracking-widest text-orange-700 border-b border-orange-200 pb-3">
              <span className="text-2xl mr-2"></span> At a glance
            </h2>
            <p className="mt-4 text-base text-gray-700">
              A quick, transparent overview of how VJC Overseas handles your
              personal data for immigration and overseas education services.
            </p>

            <div className="mt-6 space-y-5 text-base text-gray-800">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-lg font-extrabold text-white shadow-md flex-shrink-0">
                  1
                </span>
                <div>
                  <p className="font-bold text-gray-900">
                    What we collect
                  </p>
                  <p className="text-gray-700 text-sm">
                    Contact details, service preferences and essential profile
                    data needed for assessments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-lg font-extrabold text-white shadow-md flex-shrink-0">
                  2
                </span>
                <div>
                  <p className="font-bold text-gray-900">
                    Why we use it
                  </p>
                  <p className="text-gray-700 text-sm">
                    To evaluate eligibility, offer personalised counselling, and
                    manage your visa process efficiently.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-lg font-extrabold text-white shadow-md flex-shrink-0">
                  3
                </span>
                <div>
                  <p className="font-bold text-gray-900">
                    Your control
                  </p>
                  <p className="text-gray-700 text-sm">
                    You can request access, corrections, deletion, or opt out of
                    marketing communications.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-orange-300 bg-white px-5 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-50 hover:border-orange-400"
              >
                ← Back to Home
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-200 hover:shadow-md"
              >
                Contact Our Data Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content body starts here (Keeping your original structure/styles for the main content) */}
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 lg:flex-row lg:gap-16">
        {/* Sidebar TOC - Orange Theme */}
        <aside className="lg:w-80 xl:w-96">
          <div className="sticky top-28 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-orange-25 p-8 shadow-lg">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-orange-700">
              On this page
            </h2>
            <nav className="space-y-3 text-sm">
              <a
                href="#who-we-are"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Who We Are
              </a>
              <a
                href="#data-we-collect"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Data We Collect
              </a>
              <a
                href="#how-we-use"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                How We Use Your Information
              </a>
              <a
                href="#cookies"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Cookies & Tracking
              </a>
              <a
                href="#data-sharing"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Data Sharing & Third Parties
              </a>
              <a
                href="#security"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Data Security
              </a>
              <a
                href="#transfers"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                International Transfers
              </a>
              <a
                href="#your-rights"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Your Rights & Choices
              </a>
              <a
                href="#children"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Children&apos;s Data
              </a>
              <a
                href="#other-sites"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Links to Other Websites
              </a>
              <a
                href="#changes"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                Changes to This Policy
              </a>
              <a
                href="#contact"
                className="block rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-700"
              >
                How to Contact Us
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content - Orange Accents */}
        <section className="lg:w-[68%] space-y-12 text-base leading-relaxed text-gray-800">
          <section id="who-we-are" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                1
              </span>
              Who We Are
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-4">
                VJC Overseas is an{" "}
                <span className="font-semibold text-orange-600">
                  award-winning immigration and overseas education consultancy
                </span>{" "}
                providing PR, student, jobseeker, visit and investor visa guidance
                to aspirants across India and abroad.
              </p>
              <p>
                For the purposes of this Privacy Policy, the data controller is
                VJC Overseas, operating the website{" "}
                <a
                  href="https://www.vjcoverseas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-500 hover:text-orange-600 underline transition-colors"
                >
                  vjcoverseas
                </a>
                . You can learn more about us on our{" "}
                <Link
                  href="/about-us"
                  className="font-semibold text-orange-500 hover:text-orange-600 underline transition-colors"
                >
                  About Us
                </Link>{" "}
                page.
              </p>
            </div>
          </section>

          <section id="data-we-collect" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                2
              </span>
              Data We Collect
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-6">
                We may collect the following categories of information when you
                visit our website, fill out forms or interact with our team:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    Contact details such as your name, email address, phone
                    number, city, country and preferred mode of contact.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    Service-related information such as your preferred destination
                    country, visa category (PR, student, jobseeker, visit,
                    investor, etc.) and basic profile details you share for
                    assessment.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    Technical and usage data such as IP address, browser type,
                    device information, pages visited, time spent and referring
                    sources, collected through cookies and analytics tools.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section id="how-we-use" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                3
              </span>
              How We Use Your Information
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-6">
                We use your information to provide and improve our{" "}
                <span className="font-bold text-orange-600">
                  immigration and overseas education services
                </span>
                , including:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    Evaluating your eligibility for PR, study, work, visit and
                    other visa options.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    Providing personalised counselling, guidance and documentation
                    support.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    Sending service updates, newsletters and promotional
                    communication, where permitted, with the option to opt out at
                    any time.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section id="cookies" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                4
              </span>
              Cookies and Tracking Technologies
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-4">
                Our website may use cookies, pixels and similar technologies to
                understand how visitors use{" "}
                <span className="font-bold text-orange-600">
                  www.vjcoverseas.com
                </span>
                , measure campaign performance and enhance your browsing
                experience.
              </p>
              <p>
                You can usually manage or disable cookies through your browser
                settings, but some features of the website may not function
                properly if certain cookies are disabled.
              </p>
            </div>
          </section>

          <section id="data-sharing" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                5
              </span>
              Data Sharing and Third Parties
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-6 font-semibold text-orange-700">
                We do not sell your personal information. We may share your data
                only in the following situations:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    With partner universities, training providers, immigration
                    associates or authorised representatives to deliver the
                    services you request.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    With trusted service providers who support our operations,
                    such as IT, CRM, marketing, analytics and payment processing,
                    under appropriate confidentiality agreements.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section id="security" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                6
              </span>
              Data Security
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6 space-y-4">
              <p>
                We use reasonable technical and organisational measures to
                protect your personal information against unauthorised access,
                alteration, disclosure or destruction.
              </p>
              <div className="rounded-xl bg-orange-50 p-6 border-l-4 border-orange-400">
                <p className="font-semibold text-orange-800 mb-2">
                  Important Notice:
                </p>
                <p className="text-sm text-orange-700">
                  While we strive to safeguard your data, no system can be
                  guaranteed as completely secure, and you share information with
                  us at your own discretion.
                </p>
              </div>
            </div>
          </section>

          <section id="transfers" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                7
              </span>
              International Data Transfers
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-4">
                Our services involve assisting with immigration and overseas
                education in multiple countries, which may require transferring
                your information across borders.
              </p>
              <p>
                Where such transfers occur, we take reasonable steps to ensure
                that your information is handled securely and in line with
                applicable data-protection laws.
              </p>
            </div>
          </section>

          <section id="your-rights" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                8
              </span>
              Your Rights and Choices
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-4">
                Depending on your location and applicable laws, you may have the
                right to access, correct, update or request deletion of your
                personal information that we hold.
              </p>
              <p>
                You can also choose to opt out of marketing communications at any
                time by using the unsubscribe options in our messages or by{" "}
                <span className="font-semibold text-orange-600">
                  contacting us directly
                </span>
                .
              </p>
            </div>
          </section>

          <section id="children" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                9
              </span>
              Children&apos;s Data
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-4">
                Our services are primarily intended for adults. We do not
                knowingly collect personal information from children without
                appropriate consent as required by law.
              </p>
              <p>
                If you believe a child has provided us with personal information
                without proper consent, please contact us so that we can take
                appropriate action.
              </p>
            </div>
          </section>

          <section id="other-sites" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                10
              </span>
              Links to Other Websites
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p>
                Our website may contain links to third-party websites, services or
                resources. These external sites have their own privacy practices,
                which may differ from ours.
              </p>
              <p className="mt-4">
                We encourage you to review the privacy policies of any external
                sites you visit, as we are not responsible for their content or
                data-handling practices.
              </p>
            </div>
          </section>

          <section id="changes" className="group">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                11
              </span>
              Changes to This Privacy Policy
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6">
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal requirements or services.
              </p>
              <p>
                Last updated:{" "}
                <span className="font-bold text-orange-600">
                  November 27, 2025
                </span>
              </p>
            </div>
          </section>

          <section id="contact" className="group">
            <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-900">
              <span className="mr-3 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 transition-all">
                12
              </span>
              How to Contact Us
            </h2>
            <div className="ml-12 border-l-4 border-orange-200 pl-6 space-y-6">
              <p className="text-lg font-semibold text-gray-900">
                If you have any questions or requests regarding this Privacy
                Policy or how we handle your personal information, reach out to
                our team:
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-gradient-to-r from-orange-500/5 to-orange-600/5 p-6 border border-orange-100">
                  <h3 className="font-bold text-orange-700 mb-2 flex items-center">
                    <span className="mr-2">🌐</span> Website
                  </h3>
                  <a
                    href="https://www.vjcoverseas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl font-bold text-orange-600 hover:text-orange-700 transition-all"
                  >
                    www.vjcoverseas.com
                  </a>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-orange-500/5 to-orange-600/5 p-6 border border-orange-100">
                  <h3 className="font-bold text-orange-700 mb-2 flex items-center">
                    <span className="mr-2">✉️</span> Email
                  </h3>
                  <a
                    href="mailto:info@vjcoverseas.com"
                    className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    info@vjcoverseas.com
                  </a>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-orange-500/5 to-orange-600/5 p-6 border border-orange-100 md:col-span-2">
                  <h3 className="font-bold text-orange-700 mb-3 flex items-center">
                    <span className="mr-2">📞</span> Phone &amp; Connect
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href="tel:+919160449000"
                      className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      +91 91604 49000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}