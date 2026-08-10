import Script from 'next/script';


  export const metadata = {
  title: 'Tours & Travel Packages | VJC Overseas',
  description: 'Explore exciting tours and travel packages with VJC Overseas. Book international holidays, customized trips, flight assistance, and complete travel solutions for your dream destinations.',
  keywords: 'Tours and Packages Ticketing, Europe Trips, Tourist Visa Process, Singapore Tourist Packages, Dubai Tourist Visa Packages, Malaysia Tourist Visa Packages, Canada Tourist Visa Packages, International Tour Packages, Domestic Tour Packages, Flights and Vacations, Holiday Tours Packages and Ticketing, Best Visa immigration Consultants in Hyderabad, Best Visa immigration Consultants, Visa immigration Consultants',
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
