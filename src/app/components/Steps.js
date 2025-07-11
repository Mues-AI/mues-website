'use client';

import Image from 'next/image';
import CorneredLine from './CorneredLine.js';
import { useRef, useEffect } from 'react';

export default function Steps() {
    const waitlistButtonRef = useRef(null);

    // Card data for Step 2
    const cardListData = [
        {
            id: 1,
            imageSrc: "/Steps/svg/step2card1.svg",
            imageWidth: 71,
            imageHeight: 58,
            title: "Website"
        },
        {
            id: 2,
            imageSrc: "/Steps/svg/step2card2.svg",
            imageWidth: 91,
            imageHeight: 75,
            title: "Knowledge Base"
        },
        {
            id: 3,
            imageSrc: "/Steps/svg/step2card3.svg",
            imageWidth: 47,
            imageHeight: 32,
            title: "Tutorial Videos"
        },
        {
            id: 4,
            imageSrc: "/Steps/svg/step2card4.svg",
            imageWidth: 70,
            imageHeight: 32,
            title: "Internal Files"
        }
    ];

    // Handle keyboard shortcut for the waitlist button
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'j' && waitlistButtonRef.current) {
                waitlistButtonRef.current.click();
            }
        };
        
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div className="relative w-full max-w-[1512px] h-auto mx-auto p-6 md:p-10 lg:p-16 ">

            <CorneredLine/>

            <div className="w-full h-auto flex flex-col gap-y-12 gap-x-4">
                {/* 1.Satir */}
                <div className="w-full h-auto flex flex-wrap flex-col lg:flex-row gap-y-12 lg:gap-4">
                    {/* İlk Öğe */}
                    <div className="flex-1 md:min-w-[350px] lg:min-w-[450px]">
                        <div className="inline-flex flex-col gap-6">
                            <div className="flex flex-col gap-4 max-w-[352px]">
                                <p className="text-[#777] text-[14px] font-normal leading-[20px] tracking-[-0.09px]">
                                Step 1
                                </p>
                                <h3 className="h-auto text-black-121212 font-sfPro text-[32px] lg:text-[42px] font-medium leading-8 lg:leading-[48px]">
                                Customize your<br />AI cursor agent
                                </h3>
                            </div>

                            <Image quality={100} loading='lazy' unoptimized src="/Steps/images/step1image.webp" alt="Step 1 Image" width={500} height={196} className="object-contain w-full h-auto max-w-[500px] max-h-[196px] min-w-[200px] min-h-[98px] " />
                        </div>
                    </div>


                    {/* İkinci Öğe */}
                    <div className="flex-1 md:min-w-[350px] lg:min-w-[588px]">
                        <div className="flex flex-col gap-8 lg:min-w-[588px] max-w-[588px]">
                            <div className="flex flex-col gap-4 w-fit max-w-[378px]">
                                <p className="text-[#777] text-[14px] font-normal leading-[20px] tracking-[-0.09px]">
                                Step 2
                                </p>
                                <h3 className="h-auto text-black-121212 font-sfPro text-[32px] lg:text-[42px] font-medium leading-8 lg:leading-[48px]">
                                Train your agent <br className='block lg:hidden'/> with  <br className='hidden lg:block'/> your knowledge
                                </h3>
                            </div>

                            <div className='inline-flex w-full flex-row flex-wrap gap-3 justify-center md:justify-between'>
                                {cardListData.map((card) => (
                                    <div key={card.id} className="w-[138px] lg:flex-1 lg:max-w-[138px] h-[172px] rounded-2xl border border-[#EEE] bg-[#FFF] p-4 flex flex-col justify-between items-center">
                                        <div className='w-fit h-[72px] inline-flex items-center'>
                                            <Image src={card.imageSrc} alt={`Step 2 Card ${card.id}`} width={card.imageWidth} height={card.imageHeight} className="object-contain" />
                                        </div>
                                        <p className="h-12 inline-flex items-center text-[#222] text-center text-[18px] font-normal leading-normal">
                                            {card.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            
                        </div>

                    </div>
                </div>

                {/* Üçüncü Öğe */}
                <div className="w-full h-auto lg:h-[320px] flex flex-col gap-y-6 gap-x-4 lg:flex-row lg:items-center ">
                    <div className="w-full flex lg:block">
                        <div className="flex flex-col gap-8 max-w-[320px] translate-y-[-4px]">
                    
                            <div className="flex flex-col gap-4 max-w-[320px]">
                                <p className="text-[#777] text-[14px] font-normal leading-[20px] tracking-[-0.09px]">
                                Step 3
                                </p>
                                <h3 className="h-auto text-black-121212 font-sfPro text-[32px] lg:text-[42px] font-medium leading-8 lg:leading-[48px]">
                                Get your script and deploy easily
                                </h3>
                            </div>

                            <a ref={waitlistButtonRef} href="https://tally.so/r/w2V7Dg" target="_blank" rel="noopener noreferrer" aria-label="Join waitlist" className='w-fit rounded-xl'>
                                <div className="w-[154px] h-12 rounded-xl flex justify-center items-center bg-black hover:bg-[#17181A] active:bg-[#262728]">
                                    <div className="w-[152px] h-[46px] rounded-[11px] px-[19px] py-[13px] text-center flex justify-between items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                                    bg-gradient-to-b from-[#252525] to-[#17181A] hover:from-[#323232] hover:to-[#17181A] active:from-[#484848] active:to-[#262728] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
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

                    <div className="w-full lg:block ">
                        <div className="lg:min-w-[400px] translate-y-[3px] rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.04)] overflow-hidden flex w-full md:w-auto max-w-[588px] flex-col justify-center items-start">
                            {/* TOP BAR */}
                            <div className="w-full h-12 flex items-center justify-between p-4 rounded-t-md border-b border-b-[#EBEBEB] bg-[#FAFAFA]">
                                <div className="inline-flex gap-x-2.5">
                                    <Image src="/Steps/svg/typescript.svg" alt="typescript logo" width={14} height={17} className="object-contain" />
                                    <span className='text-[#666] font-Geist text-[14px] not-italic font-light tracking-[0.2px] leading-[17px]'>pages/master.html</span>
                                </div>

                                <button className="flex items-center justify-center w-8 h-8 p-2 rounded-[5px] hover:bg-[rgba(200,200,200,0.2)] transition duration-200 ease-in-out cursor-pointer">       
                                    <Image src="/Steps/svg/codecoppy.svg" alt="typescript logo" width={16} height={16} className="object-contain" />
                                </button>
                            </div>


                            <pre className="w-full px-5 py-6 bg-white rounded-b-md whitespace-pre-wrap text-[12px] font-normal leading-[18px] not-italic text-[#4E4E55]">
                                <code className="font-jetbrainMono">
                                    <span className="text-[#4E4E55]/50 font-jetbrainMono tracking-[-0.04px]">{"  <!--Mues Cursor Config & Setup -->"}</span>
                                    {"\n  <script id=\"Mues-Config\" type=\"application/json\">\n     {\n       \"apiUrl\": \"https://mues.ai/provider\", \n       \"activationMs\": 1000\n     }\n  </script>\n  <script\n       src=\"https://cdn.mues.ai/mues-agent.min.js\"\n       crossorigin=\"*\"\n  ></script>\n"}
                                </code>
                            </pre>
                        </div>
                    </div>

                </div>



            </div>
            
        </div>
    );
  }