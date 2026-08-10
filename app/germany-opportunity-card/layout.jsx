import Script from 'next/script';

export const metadata = {
  title: 'Germany Opportunity Card Visa for IT Professional Skilled Workers Chancenkarte Visa ',
  description: 'Explore Germany Opportunity Card Visa with VJC Overseas. Learn eligibility, points system, documents, application process, and job opportunities for skilled professionals in Germany.',
  keywords: 'Germany Opportunity Card Visa, Opportunity Card Visa, Germany Opportunity Card, Opportunity Card Visa for Germany, Chancenkarte Visa, Germany Chancenkarte Visa, IT Professionals, IT Professionals for Germany, Check Free Eligibility, Germany Check Free Eligibility, Germany Free Assessment, Free Assessment, Points Calculator, Germany Points Calculator, Documents Requirements, Germany Documents Requirements',
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
