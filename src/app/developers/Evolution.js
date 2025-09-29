"use client";
import React, { useState } from 'react';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import Image from 'next/image';
import { CursorSvg } from '../utils/svgOurBrand';
import CursorStopped from '../components/ui/cursorStopped/cursorStopped';
import CursorPrompt from '../components/ui/cursorPrompt/cursorPrompt';
import CursorActionState from '../components/ui/cursorActionState/cursorActionState';
import styles from './Evolution.module.scss';

const steps = [
  {
    topContent: 
    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
      <Image src="/developers/svg/macbookCursor.svg" alt="default cursor" width={30} height={30}/>
    </div>,
    bottomText: 
    <p>
      Traditional<br /> interaction way
    </p>,
  },
  {
    topContent: 
    <div className="w-6 h-6 flex items-start justify-center flex-shrink-0">
      <CursorSvg width={16} height={16} />
    </div>,
    bottomText: <p>
      A new kind of<br /> software interaction
    </p>,
  },
  {
    topContent: <CursorStopped/>,
    bottomText: <p>
      Cursor stopped,<br /> Ask AI popped up
    </p>,
  },
  {
    topContent: <CursorPrompt/>,
    bottomText: <p>
      Users write prompt, as human language <br />and magic happens, boom!
    </p>,
  },
  {
    topContent: <CursorActionState type="analyzing" />,
    bottomText: <p>
      AI Cursor complete all steps <br /> based on the prompt
    </p>,
  },
];


const Evolution = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const startColor = { r: 34, g: 34, b: 34 };
  const endColor = { r: 255, g: 255, b: 255 };
  
  const progress = activeIndex / (steps.length - 1);

  const r = Math.round(startColor.r + (endColor.r - startColor.r) * progress);
  const g = Math.round(startColor.g + (endColor.g - startColor.g) * progress);
  const b = Math.round(startColor.b + (endColor.b - startColor.b) * progress);
  
  const currentDotColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Ana Kapsayıcı */}
      <div className="w-full h-[188px] relative">

        {/* MASAÜSTÜ GÖRÜNÜMÜ  */}
        <div className="hidden lg:grid grid-cols-[0.8fr_0.8fr_1fr_1.6fr_1.2fr] items-center h-full w-full max-w-7xl mx-auto">
          <div className={`${styles.linearLine} transform -translate-y-1/2`}></div>
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center justify-center h-full">
              <div className={`${styles.dotIcon} top-[108px]`} style={{
                background: `rgb(${50 + (index / (steps.length -1)) * 205}, ${50 + (index / (steps.length -1)) * 205}, ${50 + (index / (steps.length -1)) * 205})`
              }}></div>
              <div className="absolute bottom-[104px] flex justify-center">
                {step.topContent}
              </div>
              <div className={`${styles.bottomText}`}>
                {step.bottomText}
              </div>
            </div>
          ))}
        </div>

        {/* MOBİL GÖRÜNÜM */}
        <div className="lg:hidden w-full h-full relative overflow-hidden">
          <div className={`${styles.linearLine} transition-all duration-500 ease-in-out`} style={{ backgroundSize: `${steps.length * 100}% 100%`, backgroundPosition: `${(activeIndex / (steps.length - 1)) * 100}% 0`}}></div>

          <div className={`${styles.dotIcon} top-[109px] transition-colors duration-500 ease-in-out`} style={{ backgroundColor: currentDotColor }}></div>
          
          <div className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }} >
            {steps.map((step, index) => (
              <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center px-4">
                <div className="absolute bottom-[104px]">
                  {step.topContent}
                </div>
                <div className={`${styles.bottomText}`}>
                  {step.bottomText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigasyon Butonları */}
      {/* TODO : BU NAVİGASYON BUTONLARI SHOWCASEDE DE BÖYLE VAR - componentleştir ileride */}
      <div className="flex lg:hidden w-fit self-center gap-4">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="w-[40px] h-[40px] rounded-full border border-[#FFF]/10 bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)' }}
        >
          <ArrowLeft2 size="16" color="#CCCCCC" />
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex === steps.length - 1}
          className="w-[40px] h-[40px] rounded-full border border-[#FFF]/10 bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)' }}
        >
          <ArrowRight2 size="16" color="#CCCCCC" />
        </button>
      </div>
    </div>
  );
};

export default Evolution;

