// app/layout.js (or layout.tsx)

import Head from 'next/head'

export const metadata = {
  title: 'Your Site Title',
  description: 'Your Site Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16767451796');
          `,
        }} />
      </Head>
      <body>{children}</body>
    </html>
  )
}
