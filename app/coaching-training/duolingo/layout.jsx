import Script from 'next/script';

export const metadata = {
  title: 'Duolingo Test Preparation Coaching Improve English Skills and Achieve Top Scores',
  keywords: 'Duolingo coaching, Duolingo test preparation, DET training, Duolingo practice tests, English skills improvement, Duolingo speaking practice, Duolingo writing practice, Duolingo reading practice, Duolingo listening practice, online Duolingo coaching, Duolingo exam strategies, Study abroad English test, visa English test, Duolingo high score tips, Duolingo mock exams, Professional Duolingo training, Duolingo exam readiness, Duolingo test success, Best Visa Immigration Consultants, VJC Overseas',
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