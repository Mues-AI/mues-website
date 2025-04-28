import { Inter, Rethink_Sans,Geist, Fraunces,Urbanist,Instrument_Serif } from "next/font/google";
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

export const metadata = {
  title: "Mues AI",
  description: "Mues is an agentic AI that lets your users delegate any task to an AI agent using human language in your product.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Mevcut Head.js dosyasındaki şeyler zaten otomatik inject ediliyor. */}
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6384438,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${rethinkSans.variable} ${geist.variable} ${fraunces.variable} ${urbanist.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
