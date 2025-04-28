// app/head.js
export default function Head() {
    return (
      <>
        <link
          rel="preload"
          href="/fonts/sfPro/SFProDisplay-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/openRunde/OpenRunde-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/openRunde/OpenRunde-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link rel="preload" href="/MainAiModels/sprite.svg" as="image" type="image/svg+xml" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/x-icon" href="/favicon.ico" />
      </>
    );
  }
