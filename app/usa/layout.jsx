import Script from 'next/script';

export const metadata = {
  title: "Best Visa Consultants in Texas, USA | VJC Overseas",
  description:
    "Visit VJC Overseas USA office in Plano, TX for expert visa consultancy in study abroad, PR, job seeker, and IELTS coaching.",
  keywords:
    "VJC Overseas USA, Plano TX visa consultancy, USA study visas, PR visa USA, IELTS coaching Plano TX",
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
