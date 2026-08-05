import Script from 'next/script';
export const metadata = {
  title: "Contact VJC Overseas | Visa & Immigration Consultants",
  description:
    "Contact VJC Overseas for expert guidance on study visas, PR, work permits, visitor visas, and immigration services.",
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
