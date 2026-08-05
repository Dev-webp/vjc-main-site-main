import Script from 'next/script';
export const metadata = {
  title: "Study Abroad Consultants in Hyderabad & Bangalore | VJC Overseas",
  description:
    "Study abroad with VJC Overseas. Get expert guidance for admissions, student visas, scholarships, and overseas education.",
  keywords:
    "Study Abroad Consultants, Overseas Education, Student Visa, Study Abroad Hyderabad, Study Abroad Bangalore, VJC Overseas",
};

export default function ContactLayout({ children }) {
  return (
    <>
      {/* Google Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        strategy="afterInteractive"
        async
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16767451796');
        `}
      </Script>

      {children}
    </>
  );
}
