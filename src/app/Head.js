// app/head.js
export default function Head() {
    return (
      <>
        {/* Preload SVG Sprite */}
        <link 
          rel="preload" 
          href="/MainAiModels/sprite.svg" 
          as="image" 
          type="image/svg+xml" 
          fetchPriority="low"
        />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/x-icon" href="/favicon.ico" />
      </>
    );
  }
