import Script from 'next/script';

export const metadata = {
  title: 'PTE Coaching Hyderabad | VJC Overseas',
  description: "Join PTE Coaching in Hyderabad with VJC Overseas. Get expert training, practice tests, exam strategies, and guidance to improve your PTE score for study abroad and visa success.",
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