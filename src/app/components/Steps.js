'use client';

import Image from 'next/image';
import CorneredLine from './CorneredLine.js';
import { useRef, useEffect } from 'react';

export default function Steps() {
    const waitlistButtonRef = useRef(null);

    // Handle keyboard shortcut for the waitlist button
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'j' && waitlistButtonRef.current) {
                // Check if button is visible in viewport
                const rect = waitlistButtonRef.current.getBoundingClientRect();
                const isVisible = 
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth);
                
                if (isVisible) {
                    waitlistButtonRef.current.click();
                }
            }
        };
        
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div className="relative w-full max-w-[1512px] mx-auto p-16 ">

            <CorneredLine/>

            <div className="w-full h-auto flex flex-wrap gap-y-12">
                {/* İlk Öğe */}
                <div className="flex-1 h-auto">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4 max-w-[352px]">
                            <p className="text-[#777] text-[14px] font-normal leading-[20px] tracking-[-0.09px]">
                            Step 1
                            </p>
                            <p className="h-23 text-[#121212] font-sfPro text-[42px] font-[510] leading-[48px]">
                            Customize your<br />AI cursor agent
                            </p>
                        </div>

                        <div>
                            <Image quality={100} loading='lazy' unoptimized src="/Steps/images/step1image.webp" alt="Step 1 Image" width={499} height={196} className="object-contain max-w-[499px] max-h-[196px]" />
                        </div>
                    </div>
                </div>


                {/* İkinci Öğe */}
                <div className="flex-1 h-auto">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4 w-fit max-w-[378px]">
                            <p className="text-[#777] text-[14px] font-normal leading-[20px] tracking-[-0.09px]">
                            Step 2
                            </p>
                            <p className="h-23 text-[#121212] font-sfPro text-[42px] font-[510] leading-[48px]">
                            Train your agent with your knowledge
                            </p>
                        </div>

                        <div className='flex flex-row gap-x-3 h-[172px] '>

                            {/* 1. Öğe */}
                            <div className="w-[138px] h-[172px] rounded-2xl border border-[#EEE] bg-[#FFF] p-4 flex flex-col justify-between items-center">
                                {/* 1.1. SVG */}
                                <div className='w-fit h-[72px] inline-flex items-center'>
                                    <Image  src="/Steps/svg/step2card1.svg" alt="Step 2 Card 1" width={71} height={58} className="object-contain" />
                                </div>

                                {/* 1.2. Yazı */}
                                <p className="h-12 inline-flex items-center text-[#222] text-center text-[18px] font-normal leading-normal">
                                    Website
                                </p>
                            </div>

                            {/* 2. Öğe */}
                            <div className="w-[138px] h-[172px] rounded-2xl border border-[#EEE] bg-[#FFF] p-4 flex flex-col justify-between items-center">
                                {/* 2.1. SVG */}
                                <div className='w-fit h-[72px] inline-flex items-center'>
                                    <Image src="/Steps/svg/step2card2.svg" alt="Step 2 Card 1" width={91} height={75} className="object-contain" />
                                </div>

                                {/* 2.2. Yazı */}
                                <p className="h-12 inline-flex items-center text-[#222] text-center text-[18px] font-normal leading-normal">
                                    Knowledge Base
                                </p>
                            </div>

                            {/* 3. Öğe */}
                            <div className="w-[138px] h-[172px] rounded-2xl border border-[#EEE] bg-[#FFF] p-4 flex flex-col justify-between items-center">
                                {/* 1.1. SVG */}
                                <div className='w-fit h-[72px] inline-flex items-center'>
                                    <Image src="/Steps/svg/step2card3.svg" alt="Step 2 Card 1" width={47} height={32} className="object-contain" />
                                </div>

                                {/* 1.2. Yazı */}
                                <p className="h-12 inline-flex items-center text-[#222] text-center text-[18px] font-normal leading-normal">
                                    Tutorial Videos
                                </p>
                            </div>

                            {/* 4. Öğe */}
                            <div className="w-[138px] h-[172px] rounded-2xl border border-[#EEE] bg-[#FFF] p-4 flex flex-col justify-between items-center">
                                {/* 1.1. SVG */}
                                <div className='w-fit h-[72px] inline-flex items-center'>
                                    <Image src="/Steps/svg/step2card4.svg" alt="Step 2 Card 1" width={70} height={32} className="object-contain" />
                                </div>

                                {/* 1.2. Yazı */}
                                <p className="h-12 inline-flex items-center text-[#222] text-center text-[18px] font-normal leading-normal">
                                    Internal Files
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Üçüncü Öğe */}
                <div className="w-full h-[320px] flex flex-row mt-2.5">
                    <div className="w-1/2">
                        <div className="flex flex-col gap-8 max-w-[320px] pt-8">
                    
                            <div className="flex flex-col gap-4 max-w-[320px]">
                                <p className="text-[#777] text-[14px] font-normal leading-[20px] tracking-[-0.09px]">
                                Step 3
                                </p>
                                <p className="h-23 text-[#121212] font-sfPro text-[42px] font-[510] leading-[48px]">
                                Get your script and deploy easily
                                </p>
                            </div>

                            <a ref={waitlistButtonRef} href="https://tally.so/r/w2V7Dg" target="_blank" rel="noopener noreferrer" aria-label="Join waitlist" className='w-fit rounded-xl'>
                                <div className="w-[154px] h-12 rounded-xl flex justify-center items-center bg-gradient-to-b from-[#252525] to-[#17181A]">
                                    <div className="w-[152px] h-[46px] rounded-[11px] px-[19px] py-[13px] text-center flex justify-between items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                                    bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.02)] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
                                        <span className="w-fit text-white font-openRunde text-[14px] font-medium leading-[17px] tracking-[0.14px]">
                                            Join Waitlist
                                        </span>
                                        <span className="w-[17px] h-[17px] flex items-center justify-center py-[0.5px] px-[4.5px] rounded-[3px] bg-[rgba(255,255,255,0.10)]">
                                            <span className=" text-[rgba(255,255,255,0.75)] text-center text-[11px] font-normal leading-[16px] tracking-[0.11px]">
                                            J
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </a>


                        </div>
                    </div>

                    <div className="w-1/2">
                        <div className="relative -left-[3px] rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.04)] overflow-hidden flex w-[622px] flex-col justify-center items-start">
                            {/* TOP BAR */}
                            <div className="w-full h-12 flex items-center justify-between p-4 rounded-t-md border-b border-b-[#EBEBEB] bg-[#FAFAFA]">
                                <div className="inline-flex gap-x-2.5">
                                    <Image src="/Steps/svg/typescript.svg" alt="typescript logo" width={14} height={17} className="object-contain" />
                                    <span className='text-[#666] font-Geist text-[14px] not-italic font-light tracking-[0.2px] leading-[17px]'>app/users/page.tsx</span>
                                </div>

                                <button className="flex items-center justify-center w-8 h-8 p-2 rounded-[5px] hover:bg-[rgba(200,200,200,0.2)] transition duration-200 ease-in-out cursor-pointer">       
                                    <Image src="/Steps/svg/codecoppy.svg" alt="typescript logo" width={16} height={16} className="object-contain" />
                                </button>
                            </div>


                            <pre className="w-full p-5 bg-white rounded-b-md whitespace-pre-wrap text-[#4E4E55] font-mono text-[12px] font-normal leading-4 not-italic">
                                <code> {`  // mues.config.js
   const defaultTheme = require('tailwindcss/defaultTheme')

   module.exports = {
     theme: {
       extend: {
         fontFamily: {
           sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
         },
       },
     },
    // ...
   } `}
                                </code>
                            </pre>
                        </div>
                    </div>

                </div>



            </div>
            
        </div>
    );
  }