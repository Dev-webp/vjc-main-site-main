import Script from 'next/script';

export const metadata = {
  title: 'GMAT Coaching and Training Services Expert Exam Preparation for Top Business Schools',
  
  keywords: 'GMAT coaching, GMAT exam preparation, GMAT training services, GMAT test preparation, GMAT online classes, GMAT mock tests, GMAT strategies, GMAT study material, GMAT verbal reasoning, GMAT quantitative reasoning, GMAT integrated reasoning, GMAT analytical writing, GMAT practice tests, GMAT coaching center, GMAT coaching in India, GMAT coaching in Hyderabad, GMAT coaching in Bangalore, GMAT coaching in USA, GMAT coaching for study abroad, Best Visa Immigration Consultants, VJC Overseas',
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