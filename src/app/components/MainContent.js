"use client";
import Image from 'next/image';

import { useEffect, useRef } from 'react';
import SvgIconAi from '../utils/svgIconAi';
import useStore from '../utils/store';

export default function MainContent() {
  const isMobile = useStore((state) => state.isMobile);

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

  useEffect(() => {
    if (isMobile && carouselRef.current) {
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
      
      observer.observe(carouselRef.current);
      
      return () => {
        if (carouselRef.current) {
          observer.unobserve(carouselRef.current);
        }
      };
    }
  }, [isMobile]);

  return (
    <main className="relative w-full" style={{ height: 'calc(100vh - 68px)' }}>
      <Image
        src="/images/mainFirstImage-1512.webp"
        alt="Main Image"
        fill
        sizes="100vw"
        priority
        className="object-cover min-w-[200px]"
        quality={80}
        unoptimized
      />
      <div className="relative z-10 w-full h-full p-6 pt-10 pb-6 md:px-12 md:py-16 lg:pb-[72px] lg:px-20 lg:pt-24 flex flex-col justify-between">
        
        <div className="w-fit">
          <div className="mb-6 max-w-[520px]">
            <h1 className="text-white font-rethinkSans font-bold leading-12 md:leading-16 lg:leading-[72px] tracking-[0.36px] md:tracking-[0.48px] lg:tracking-[0.56px] font-feature-settings-salt text-3xl xs:text-4xl sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] ">
              Software interaction
              <span className="block text-white font-instrumentSerif italic font-normal leading-12 lg:leading-[72px] tracking-[0.36px] lg:tracking-[0.56px] font-feature-settings-salt text-3xl xs:text-4xl sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] ">
                has changed.
              </span>
            </h1>
          </div>
          
          <p className="max-w-[520px] text-[#CCC] font-light leading-9 tracking-[0.2px] mt-4 lg:mt-6 text-base md:text-lg lg:text-[20px] ">
            Your users delegate any task to an AI agent using human language in your product.
          </p>
          

          <a href="https://tally.so/r/w2V7Dg" target="_blank" rel="noopener noreferrer" className="inline-flex px-[19px] py-[14px] justify-center items-center rounded-xl bg-white text-black text-center text-sm font-normal leading-4 mt-4 md:mt-6 lg:mt-8 w-fit">
            Join waitlist
          </a>
        </div>

        <div className="mt-auto">
          <div className="text-[rgba(255,255,255,0.40)] text-xs md:text-sm font-light leading-4 tracking-[0.11px] md:tracking-[0.14px] mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 w-fit ">
            Trusted by industry leaders and developers worldwide
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