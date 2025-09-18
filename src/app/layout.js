import { Inter, Rethink_Sans, Instrument_Serif, Urbanist } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from 'sonner';
import localFont from 'next/font/local';

const sfPro = localFont({
  src: [
    {
      path: '../../public/fonts/sfPro/sf-pro-display-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sfPro/sf-pro-display-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sfPro/sf-pro-display-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sfPro/sf-pro-display-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sfPro',
  display: 'swap',
});

const openRunde = localFont({
  src: [
    {
      path: '../../public/fonts/openRunde/OpenRunde-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/openRunde/OpenRunde-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-openRunde',
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
  fontFamily: "Inter, sans-serif",
  display: 'swap',
  preload: true,
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  style: ["normal"],
  fontFamily: "Rethink Sans, sans-serif",
  display: 'swap',
  preload: false,
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  fontFamily: "Instrument Serif, serif",
  display: 'swap',
  preload: false,
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  style: ["normal"],
  fontFamily: "Urbanist, sans-serif",
  display: 'swap',
  preload: false,
});

export const metadata = {
  title: "Mues AI | SaaS Onboarding and Support with AI",
  description: "Mues AI transforms SaaS onboarding, product adoption, and support with agentic AI. Guide users and resolve tasks instantly inside your product.",
  keywords: [
    "AI cursor",
    "Cursor Agent",
    "AI-powered assistant",
    "AI-powered product adoption",
    "user onboarding",
    "AI SaaS onboarding",
    "user experience",
    "Agentic AI platforms",
    "AI customer support",
    "Reduce customer churn with Mues AI"
  ],
  robots: "index, follow",
  canonical: "https://www.mues.ai/",
  openGraph: {
    title: "Mues AI | SaaS Onboarding and Support with AI",
    description: "Mues AI transforms SaaS onboarding, product adoption, and support with agentic AI. Guide users and resolve tasks instantly inside your product.",
    url: "https://mues.ai", 
    siteName: "Mues AI",
    images: [
      {
        url: "https://mues.ai/images/og-image.webp", 
        width: 1600,
        height: 836,
        alt: "Mues AI - AI-powered cursor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mues AI | SaaS Onboarding and Support with AI",
    description: "Mues AI transforms SaaS onboarding, product adoption, and support with agentic AI. Guide users and resolve tasks instantly inside your product.",
    images: ["https://mues.ai/images/og-image.webp"], 
    creator: "@MuesAI", 
  },
  other: {
    "discord:image": "https://mues.ai/images/og-image.webp",
    "discord:image:width": "1600",
    "discord:image:height": "836",
    "discord:image:alt": "Mues AI | SaaS Onboarding and Support with AI",
    "discord:title": "Mues AI | SaaS Onboarding and Support with AI",  
    "discord:description": "Mues AI transforms SaaS onboarding, product adoption, and support with agentic AI. Guide users and resolve tasks instantly inside your product.",
    "discord:site_name": "Mues AI",
    "discord:image:type": "image/webp",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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

        <Script
          id="hotjar"
          strategy="lazyOnload"
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
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/x-icon" href="/favicon.ico" />

        {/* First frame image preload */}
        <link rel="preload" as="image" fetchPriority="high" href="/videos/videoFirstFrame.webp" />
      </head>
      <body 
        className={`${inter.variable} ${sfPro.variable} ${openRunde.variable} ${rethinkSans.variable} ${instrumentSerif.variable} ${urbanist.variable}`}
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
        
        {/* Toast Notifications */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
