import { Inter, Rethink_Sans,Geist, Fraunces,Urbanist,Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  fontFamily: "Geist, sans-serif",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  fontFamily: "Fraunces, serif",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  fontFamily: "Urbanist, sans-serif",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  fontFamily: "Instrument Serif, serif",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  fontFamily: "JetBrains Mono, monospace",
});

export const metadata = {
  title: "Mues AI | Agentic AI",
  description: "Mues is an agentic AI that lets your users delegate any task to an AI agent using human language in your product.",
  robots: "index, follow",
  canonical: "https://www.mues.ai/",
  openGraph: {
    title: "Mues AI",
    description: "Delegate any task to an AI agent using natural language.",
    url: "https://mues.ai", 
    siteName: "Mues AI",
    images: [
      {
        url: "https://mues.ai/images/og-image.webp", 
        width: 1600,
        height: 836,
        alt: "Mues AI - Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mues AI",
    description: "Delegate any task to an AI agent using natural language.",
    images: ["https://mues.ai/images/og-image.webp"], 
    creator: "@MuesAI", 
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
        rel="preload"
        as="image"
        href="/images/mainFirstImage-1512.webp"
        imageSrcSet="
          /images/mainFirstImage-1512.webp 1512w,
          /images/mainFirstImage-2560.webp 2560w
        "
        imageSizes="100vw"
      />
        
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            try {
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6384438,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            } catch(e) {}`}}
        />

        {/* Google Tag Manager – Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            try {
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-56KJVTJX');
            } catch(e) {}
          `}
        </Script>
      </head>
      <body 
        className={`${inter.variable} ${rethinkSans.variable} ${geist.variable} ${fraunces.variable} ${urbanist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      >
        {/* Google Tag Manager – Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56KJVTJX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
