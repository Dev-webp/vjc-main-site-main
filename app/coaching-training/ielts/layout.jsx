import Script from 'next/script';

export const metadata = {
  title: 'IELTS Coaching Hyderabad & Study Abroad Preparation',
  description: "Join IELTS Coaching in Hyderabad with VJC Overseas. Get expert training, practice materials, mock tests, and proven strategies to improve your IELTS score for study abroad success.",
  keywords: 'IELTS coaching, IELTS exam preparation, IELTS professional training, online IELTS classes, classroom IELTS coaching, IELTS mock tests, study abroad English test, Visa IELTS requirement, Immigration IELTS training, Fluent English for IELTS, High band IELTS, VJC Overseas IELTS, Exam success strategies, English proficiency test, IELTS trainers, IELTS test readiness, Student IELTS coaching, IELTS band improvement, Best Visa Immigration Consultants, VJC Overseas',
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