'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card from './HowItWorksCard';
import useStore from '../lib/store';

const card_data = [
  {
    title: 'Your cursor is more powerful now',
    description: 'Mues transform old-school default cursor with AI agent. The only company that provides this.',
    src: '/CommentsFAQ/images/faqCard1.webp',
    alt: 'How it Works Step 1',
    width: 72,
    height: 72,
  },
  {
    title: 'Cursor stopped, Ask AI popped up',
    description: 'All experience designed to fit every growth motion. And engage every user.',
    src: '/CommentsFAQ/images/faqCard2.webp',
    alt: 'How it Works Step 2',
    width: 149,
    height: 139,
  },
  {
    title: 'Users write prompt as human language',
    description: 'Users can ask the agent to explain, navigate, find, click, type, or all of these. As if asking a friend.',
    src: '/CommentsFAQ/images/faqCard3.webp',
    alt: 'How it Works Step 3',
    width: 371,
    height: 123,
  },
  {
    title: 'After the enter, magic happens, boom!',
    description: 'Agent start to perform like a power user. It completes all steps based on the user prompt.',
    src: '/CommentsFAQ/images/faqCard4.webp',
    alt: 'How it Works Step 4',
    width: 371,
    height: 123,
  },
  {
    title: 'Agent complete all steps based on the prompt',
    description: "That's it! Users watch the flow, learn from agent. No need to onboarding popups or support ticket.",
    src: '/CommentsFAQ/images/faqCard5.webp',
    alt: 'How it Works Step 5',
    width: 368,
    height: 86,
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const bookDemoButtonRef = useRef(null);
  const { isMobile } = useStore();
  
  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  
  // Divide the scroll progress into segments for each card
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Map progress 0-1 to card indexes (0-4)
      // We want animation to start when section is centered on screen
      if (progress < 0.2) {
        setActiveIndex(0);
      } else if (progress < 0.4) {
        setActiveIndex(1);
      } else if (progress < 0.6) {
        setActiveIndex(2);
      } else if (progress < 0.8) {
        setActiveIndex(3);
      } else {
        setActiveIndex(4);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Handle keyboard shortcut for the demo button
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'b' && bookDemoButtonRef.current) {
        bookDemoButtonRef.current.click();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  
  // Modify the transform to prevent unwanted movement at the end
  // When progress reaches 95%, we keep the transform at 0% instead of moving to 100%
  const sectionY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 0.95, 1],
    ["0%", "0%", "0%", "0%", "0%"]
  );

  return (
    <motion.section 
      ref={sectionRef}
      style={{ y: sectionY }}
      className="relative max-w-[1168px] mx-auto mt-24 mb-[112px] md:mt-[148px] md:mb-[220px] min-h-[100vh]"
    >
      <div className={`sticky ${isMobile ? 'top-[-100px]' : 'top-[calc(50vh-148px)]'} 
        flex flex-col md:flex-row md:justify-between
        gap-y-8 md:gap-y-0
        gap-x-0 md:gap-x-12 lg:gap-x-24
        h-auto md:max-h-[344px]`}>
        {/* Left section */}
        <div className="w-full flex-1 max-w-[600px] flex flex-col gap-y-4 md:gap-y-6 
        items-center md:items-start text-center md:text-start">
          {/* 1.1. HOW IT WORKS badge */}
          <span className="text-primary-blue text-center text-[14px] font-normal leading-[17px] w-fit">
            <span className="flex px-3 py-2 justify-center items-center rounded-xl border border-[rgba(0,137,255,0.25)] bg-white">
              HOW IT WORKS
            </span>
          </span>

          {/* 1.2. Heading */}
          <h3 className="text-primary-black font-rethinkSans font-semibold 
          text-[30px] leading-[40px] tracking-[0.3px] 
          md:text-[56px] md:leading-[68px] md:tracking-[0.56px]">
            Details matter.
          </h3>

          {/* 1.3. Description */}
          <div className="text-[#474645] text-[22px] font-light leading-[38px] tracking-[-0.4px]">
            <p>We are changing the software interaction to create a world where software adapts to humans, not humans to software!</p>
          </div>

          {/* 1.4. Button - Hidden on mobile (md below) */}
          <a ref={bookDemoButtonRef} href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo" className='w-fit rounded-xl hidden md:inline-block'>
            <div className="w-[154px] h-12 rounded-xl flex justify-center items-center bg-black hover:bg-[#17181A] active:bg-[#262728]">
              <div className="w-[152px] h-[46px] rounded-[11px] px-[19px] py-[13px] text-center flex justify-between items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
              bg-gradient-to-b from-[#252525] to-[#17181A] hover:from-[#323232] hover:to-[#17181A] active:from-[#484848] active:to-[#262728] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
                <span className="w-fit text-white font-openRunde text-[14px] font-medium leading-[17px] tracking-[0.14px]">
                  Book a demo
                </span>
                <span className="w-[17px] h-[17px] flex items-center justify-center py-[0.5px] px-[4.5px] rounded-[3px] bg-[rgba(255,255,255,0.10)]">
                  <span className="text-[rgba(255,255,255,0.75)] text-center text-[11px] font-normal leading-[16px] tracking-[0.11px]">
                    B
                  </span>
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Right section - cards container */}
        <div className="relative w-full min-w-0 max-w-[400px] md:flex-1 md:max-w-[472px] h-[362px] md:h-[344px] overflow-hidden mx-auto md:mx-0">
          {card_data.map((project, i) => (
            <Card 
              key={`p_${i}`} 
              {...project} 
              i={i} 
              activeIndex={activeIndex} 
            />
          ))}
        </div>
      </div>
      
      {/* Extra space to enable scrolling through all cards */}
      <div className="h-[350vh] -z-10"></div>
    </motion.section>
  );
}