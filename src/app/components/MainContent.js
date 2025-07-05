"use client";
import Image from 'next/image';

import { useEffect, useRef, useCallback, useState } from 'react';
import SvgIconAi from '../utils/svgIconAi';

export default function MainContent() {
  const [isMobile, setIsMobile] = useState(false);
  const joinButtonRef = useRef(null);

  const logos = [
    { name: "openai", width: 107, height: 32, alt: "OpenAI" },
    { name: "claude", width: 100, height: 22, alt: "Claude" },
    { name: "grok", width: 79, height: 30, alt: "Grok" },
    { name: "deepseek", width: 119, height: 26, alt: "DeepSeek" },
    { name: "gemini", width: 66, height: 24, alt: "Gemini" },
    { name: "microsoft-copilot", width: 84, height: 24, alt: "Microsoft Copilot" },
    { name: "mistral-ai", width: 84, height: 24, alt: "Mistral AI" },
    { name: "ollama", width: 83, height: 30, alt: "Ollama" }
  ];

  // CSS animasyon hızını performans ve pil tüketimi için optimize etmek için
  // ekranın görünür olup olmadığını takip ederek animasyonu duraklatabiliriz
  const carouselRef = useRef(null);

  // Optimize keyboard handler
  const handleKeyPress = useCallback((event) => {
    if (event.key === 'j' || event.key === 'J') {
      event.preventDefault();
      joinButtonRef.current?.click();
    }
  }, []);

  useEffect(() => {
    // Keyboard listener
    document.addEventListener('keydown', handleKeyPress, { passive: false });
    
    if (isMobile && carouselRef.current) {
      const carouselElement = carouselRef.current; 
      
      // IntersectionObserver kullanarak element görünür olduğunda animasyonu başlat
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            const carousel = entry.target;
            if (entry.isIntersecting) {
              carousel.style.animationPlayState = 'running';
            } else {
              carousel.style.animationPlayState = 'paused';
            }
          });
        },
        { threshold: 0.1 } // %10 görünür olduğunda tetikle
      );
      
      observer.observe(carouselElement);
      
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
        observer.unobserve(carouselElement);
      };
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMobile, handleKeyPress]);

  // Check if screen width is below 1024px
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <main className="relative w-full bg-[#010101]" style={{ height: 'calc(100vh - 68px)'}}>
      <Image
        src="/images/mainNewHero.webp"
        alt="Main Image"
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        className="object-cover w-full h-full opacity-[0.16]"
        quality={80}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="relative z-10 w-full h-full p-6 pt-10 pb-6 md:px-8 md:py-12 lg:pb-[8.47vh] lg:px-20 lg:pt-[11.754vh] flex flex-col gap-8 lg:gap-0 justify-between">
        
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 xl:gap-15'>
          {/* HEADER - Description - Join waitlist button */}
          <div className="w-fit flex-1 ">
            <div className="mb-6 max-w-fit">
              <h1 className="text-white font-rethinkSans font-bold leading-12 md:leading-16 lg:leading-[72px] tracking-[0.36px] md:tracking-[0.48px] lg:tracking-[0.56px] font-feature-settings-salt text-3xl xs:text-4xl sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] lg:whitespace-nowrap">
              Product adoption
                <span className="block text-white font-instrumentSerif italic font-normal leading-12 lg:leading-[72px] tracking-[0.36px] lg:tracking-[0.56px] font-feature-settings-salt text-3xl xs:text-4xl sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] ">
                reimagined for AI age.
                </span>
              </h1>
            </div>
            
            <p className="max-w-[520px] text-[#CCC] font-light mt-2 md:mt-4 lg:mt-6 
            text-base leading-7 tracking-[0.16px]
            md:text-lg md:leading-8 md:tracking-[0.2px]
            lg:text-[20px] lg:leading-9 lg:tracking-[0.2px]">
            Your users ask to Mues AI-powered cursor. Mues acts like a power user of your product, instantly and 24/7.
            </p>
            
            {/* Join waitlist button */}
            <a 
              ref={joinButtonRef}
              href="https://tally.so/r/w2V7Dg" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Join waitlist" 
              className='w-fit rounded-xl cursor-pointer'
            >
              <div className="inline-flex py-4 px-5 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)] mt-4 md:mt-6 lg:mt-8 w-fit">
                <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Join waitlist</p>
                <span className="flex px-[4.5px] justify-center items-center rounded-[3px] bg-[rgba(119,119,119,0.10)]">
                  <p className="text-[rgba(119,119,119,0.75)] text-center text-[11px] font-medium leading-4 tracking-[0.11px]">J</p>
                </span>
              </div>
            </a>
          </div>

          {/* Video */}
          <div className="w-full min-[530px]:w-[400px] md:w-5/12  flex-1 min-w-0 flex items-start justify-center">
            <video
              className="rounded-xl w-full aspect-[372/233] lg:max-w-[744px] lg:max-h-[466px] object-cover"
              style={{
                width: '100%',
                height: 'auto',
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/videos/videoFirstFrame.webp"
            >
              <source src="/videos/mainVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>


        <div className="mt-auto">
          <div className="text-[rgba(255,255,255,0.40)] text-xs md:text-sm font-light leading-4 tracking-[0.11px] md:tracking-[0.14px] mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 w-fit ">
            Trusted by product leaders and developers worldwide
          </div>
          
          {isMobile ? (
            // Mobil ekranlarda animasyonlu logo carousel
            <div className="w-full overflow-hidden">
              <div 
                ref={carouselRef}
                className="inline-flex whitespace-nowrap animate-marquee"
              >
                {/* Logolar iki kez listelendiğinde sonsuz döngü daha temiz görünür */}
                {[...logos, ...logos].map((logo, idx) => (
                  <div key={idx} className="mx-4 flex items-center justify-center">
                    <SvgIconAi 
                      name={logo.name} 
                      width={logo.width * 1} 
                      height={logo.height * 1} 
                      alt={logo.alt} 
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Desktop ekranlarda normal görünüm
            <div className="w-fit h-8 flex items-center space-x-6">
              {logos.map((logo, idx) => (
                <SvgIconAi 
                  key={idx}
                  name={logo.name} 
                  width={logo.width} 
                  height={logo.height} 
                  alt={logo.alt} 
                />
              ))}
            </div>
          )}
          
        </div>

      </div>
    </main>
  );
}