import Script from 'next/script';
import db from "../../lib/db"; // Adjust this path as needed

// Helper function to get meta from DB synchronously (since layouts can run sync in Next.js app dir)
function getMaltaMeta() {
  const slug = '/malta';
  try {
    const meta = db
      .prepare('SELECT title, description, keywords FROM metas WHERE route = ?')
      .get(slug);
    return meta || {
      title: 'Contact Us | VJC Overseas',
      description: 'Get in touch with our immigration experts.',
      keywords: 'contact, visa, immigration, VJC Overseas'
    };
  } catch {
    return {
      title: 'Contact Us | VJC Overseas',
      description: 'Get in touch with our immigration experts.',
      keywords: 'contact, visa, immigration, VJC Overseas'
    };
  }
}

// This is critical! Export metadata for head tags in app dir:
export function generateMetadata() {
  return getMaltaMeta();
}

// Main layout component for /malta
export default function ContactLayout({ children }) {
  return (
    <>
      {/* Google Analytics */}
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
