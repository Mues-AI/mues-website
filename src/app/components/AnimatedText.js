"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ThickBgBlueSvg } from '../utils/svgGeneralUtils';


const Character = ({ children, range, progress }) => {
  const color = useTransform(progress, range, ['rgba(23, 24, 26, 0.1)', '#17181A']);
  return (
    <motion.span style={{ color }}>
      {children}
    </motion.span>
  );
};

export default function AnimatedText() {
  const text = "Every day, users hit roadblocks while using your product. They get stuck, confused, and lost. These moments are critical for your user. Adopt or churn?";
  
  const characters = text.split('');
  const totalCharacters = characters.length;

  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 70%', 'start 1%']
  });

  return (
    <div>
      <p
        ref={element}
        className="mx-auto mt-24 md:mt-30 lg:mt-[148px] mb-6 lg:mb-8 max-w-[1168px] text-[rgba(23,24,26,0.10)] font-bold font-rethinkSans 
        text-[33px] leading-[42px] tracking-[0.34px]
        sm:text-[48px] sm:leading-[60px] sm:tracking-[0.48px]
        md:text-[62px] md:leading-[78px] md:tracking-[0.62px]
        lg:text-[80px] lg:leading-[96px] lg:tracking-[0.8px]"
        style={{ fontFeatureSettings: "'salt' on", whiteSpace: 'pre-wrap' }}
      >
        {characters.map((char, index) => {
          const start = index / totalCharacters;
          const end = (index + 1) / totalCharacters;

          if (char === ' ') {
            return ' ';
          }

          return (
            <Character key={index} range={[start, end]} progress={scrollYProgress}>
              {char}
            </Character>
          );
        })}
      </p>

      <div className="mx-auto max-w-[1168px]">
        <div className="h-auto w-fit flex flex-row items-center gap-2">
          <ThickBgBlueSvg width={16} height={16} className={"flex-shrink-0"} />
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
