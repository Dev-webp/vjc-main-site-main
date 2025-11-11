import Script from 'next/script';

export const metadata = {
  title: 'PTE Coaching and Training Services Professional Exam Preparation for High Band Scores',
  keywords: 'PTE coaching, PTE exam preparation, professional PTE training, online PTE classes, PTE mock tests, PTE High score, PTE study abroad, visa PTE requirement, Pearson Test of English training, PTE strategies, fluency PTE, PTE success tips, exam readiness PTE, PTE academic coaching, skill based PTE, PTE test prep, English proficiency PTE, Best Visa Immigration Consultants, VJC Overseas',
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