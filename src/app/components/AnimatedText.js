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

  const text = "Users sometimes experience problems with your product. These are key moments. Because product adoption is affected dramatically.";

  // Kelime uzunluklarını hesapla
  const words = text.split(' ');
  const wordLengths = words.map(word => word.length);

  return (
    <div className="">
      <h2
        className="mx-auto mt-[148px] mb-8 max-w-[1168px] text-[rgba(23,24,26,0.10)] font-rethinkSans text-[80px] font-bold leading-[96px] tracking-[0.8px]"
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
      </h2>

      <div className="mx-auto max-w-[1168px]">
        <div className="h-auto w-fit flex flex-row items-center gap-2">
          <ThickBgBlueSvg width={16} height={16} />
          <p className="text-[#201D1D] text-[16px] font-normal leading-[20px] tracking-[0.08px]">
            Proven ROI. <span className="text-[#8E8D91] text-[16px] font-light leading-[20px] tracking-[0.08px]">
              Boost product adoption with changing software interaction in your product.
            </span>
          </p>
        </div>
      </div>
      
    </div>
  );
}




