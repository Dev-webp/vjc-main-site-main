import Script from 'next/script';
export const metadata = {
  title: "Visa & Immigration Services | VJC Overseas",
  description:
    "Expert visa and immigration services for study visas, PR, work permits, visitor visas, job seeker visas and more.",
  keywords:
    "Visa Services, Immigration Services, Study Visa, PR Visa, Work Visa, Visit Visa, VJC Overseas",
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
