import Script from 'next/script';
export const metadata = {
  title: "Contact VJC Overseas Visa Consultants Hyderabad",
  description:
    "Contact VJC Overseas for expert visa and immigration assistance. Get guidance for PR visas, study visas, work permits, tourist visas, and overseas opportunities from our team.",
  keywords:
    "Contact VJC Overseas, Immigration Consultants, Visa Consultants, Study Visa, PR Visa, Work Visa, Hyderabad, Bangalore",
};
export default function ContactLayout({ children }) {
  return (
    <>
      {/* ✅ Google Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        strategy="afterInteractive"
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
