"use client";
import { ThickBgBlueSvg } from '../utils/svgGeneralUtils';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimatedText() {
  const scrollY = useMotionValue(0);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous RAF if exists
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame to batch DOM reads
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // Only update if scroll position changed significantly
        if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
          lastScrollY.current = currentScrollY;
          scrollY.set(currentScrollY);
        }
      });
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [scrollY]);

  const text = "Every day, users hit roadblocks while using your product. They get stuck, confused, and lost. These moments are critical for your user. Adopt or churn?";

  // Kelime uzunluklarını hesapla
  const words = text.split(' ');
  const wordLengths = words.map(word => word.length);
  
  // Create a function to get color based on scroll and character index
  const getCharacterColor = (index) => {
    return useTransform(scrollY, (value) => {
      const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
      const progress = (value - windowHeight / 2.2) / 700;
      return progress >= index / 100 ? '#17181A' : 'rgba(23, 24, 26, 0.1)';
    });
  };

  return (
    <div className="">
      <p
        className="mx-auto mt-24 md:mt-30 lg:mt-[148px] mb-6 lg:mb-8 max-w-[1168px] text-[rgba(23,24,26,0.10)] font-bold font-rethinkSans 
        text-[33px] leading-[42px] tracking-[0.34px]
        sm:text-[48px] sm:leading-[60px] sm:tracking-[0.48px]
        md:text-[62px] md:leading-[78px] md:tracking-[0.62px]
        lg:text-[80px] lg:leading-[96px] lg:tracking-[0.8px]"
        style={{ fontFeatureSettings: "'salt' on", whiteSpace: 'pre-wrap' }}
      >
        {words.map((word, wordIndex) => {
          const wordStartIndex = wordLengths.slice(0, wordIndex).reduce((a, b) => a + b, 0);
          return (
            <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {word.split('').map((char, charIndex) => {
                const characterIndex = wordStartIndex + charIndex;
                const color = getCharacterColor(characterIndex);
                return (
                  <motion.span
                    key={charIndex}
                    style={{ 
                      display: 'inline-block',
                      color
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {'\u00A0'}
            </span>
          );
        })}
      </p>

      <div className="mx-auto max-w-[1168px]">
        <div className="h-auto w-fit flex flex-row items-center gap-2">
          <ThickBgBlueSvg width={16} height={16} className={"flex-shrink-0"}  />
          <p className="text-[#201D1D] font-normal leading-5 
          text-sm tracking-[0.07px] lg:text-[16px] lg:tracking-[0.08px]">
            Proven ROI. <span className="text-[#8E8D91] font-light ">
              Boost product adoption with changing software interaction in your product.
            </span>
          </p>
        </div>
      </div>
      
    </div>
  );
}




