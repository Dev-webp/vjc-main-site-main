import Script from 'next/script';

export const metadata = {
  title: 'GRE Coaching and Training Services Professional Exam Preparation for Top Universities',
  
  keywords: 'GRE coaching, GRE exam preparation, GRE training programs, GRE test preparation, GRE study abroad, Top university admission, quantitative verbal writing, GRE analytical writing, GRE mock tests, GRE strategies, GRE high score, GRE online classes, GRE classroom course, GRE admissions test, GRE global universities, GRE skill development, GRE success plan, Best Visa Immigration Consultants, VJC Overseas',
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