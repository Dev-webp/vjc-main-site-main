import Script from 'next/script';

export const metadata = {
  title: 'TOEFL Coaching and Training Services for High Scores and Study Abroad Success',
  keywords: 'TOEFL coaching, TOEFL training, TOEFL exam preparation, TOEFL test strategies, TOEFL online classes, TOEFL practice tests, TOEFL reading practice, TOEFL writing practice, TOEFL speaking practice, TOEFL listening practice, TOEFL study tips, TOEFL score improvement, study abroad TOEFL, visa TOEFL preparation, professional TOEFL coaching, TOEFL skill development, TOEFL academic coaching, TOEFL mock exams, Best Visa Immigration Consultants, VJC Overseas',
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