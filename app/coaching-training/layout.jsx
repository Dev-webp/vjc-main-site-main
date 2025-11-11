import Script from 'next/script';

export const metadata = {
  title: 'Coaching and Training Services IELTS GMAT GRE TOEFL PTE for Visa Success',
  keywords: 'Coaching and training, IELTS preparation, GMAT coaching, GRE coaching, TOEFL training, PTE practice, Duolingo test preparation, Visa interview training, Study abroad coaching, Exam strategies, Language proficiency tests, Visa test coaching, Professional test preparation, Student coaching services, Overseas education training, Best Visa Immigration Consultants, VJC Overseas, Visa interview skills, Study test readiness, Exam success coaching',
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