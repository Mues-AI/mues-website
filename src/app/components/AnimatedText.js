"use client";
import { ThickBgBlueSvg } from '../utils/svgGeneralUtils';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function AnimatedText() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      controls.start((index) => {
        const progress = (scrollY - windowHeight / 2) / 700;
        return {
          color: progress >= index / 100 ? '#17181A' : 'rgba(23, 24, 26, 0.1)',
        };
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const text = "Every day, users hit roadblocks while using your product. They get stuck, confused, and lost. These moments are critical for your user. Adopt or churn?";

  // Kelime uzunluklarını hesapla
  const words = text.split(' ');
  const wordLengths = words.map(word => word.length);

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
        {words.map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                custom={wordLengths.slice(0, wordIndex).reduce((a, b) => a + b, 0) + charIndex}
                animate={controls}
                initial={{ color: 'rgba(23, 24, 26, 0.1)' }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
            {'\u00A0'}
          </span>
        ))}
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




