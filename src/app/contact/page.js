'use client';

import Navbar from '../components/Navbar.js';
import FAQ from '../components/FAQ.js';
import Footer from '../components/Footer.js';
import { useEffect, useRef } from 'react';
import CorneredLine from '../components/CorneredLine.js';
import { XIcon, DiscordIcon } from '../utils/svgIcons.js';
import { ArrowRightIcon } from '../utils/svgIcons.js';

export default function TermsOfService() {

    // Contact button ref and useEffect for keypress
    const contactButtonRef = useRef(null);
    useEffect(() => {
        const handleKeyPress = (event) => {
            if ((event.key === 'c' || event.key === 'C') && 
                !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                contactButtonRef.current?.click();
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyPress);

        // Cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    // B ve J butonları için kullanıcıların sayfaya yönlendirilmesi 
    // window.open() yaklaşımı daha hızlı - o yüzden butonlara ref vermedik - manuel olarak linkleri değiştirirsin.
    useEffect(() => {
        const handleKeyPress = (event) => {
        const key = event.key.toLowerCase();
        
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }

        switch (key) {
            case 'b':
            window.open('https://cal.com/mues-ai/demo', '_blank', 'noopener,noreferrer');
            break;
            case 'j':
            window.open('https://tally.so/r/w2V7Dg', '_blank', 'noopener,noreferrer');
            break;
            default:
            break;
        }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
        document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar variant="light" />
            <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18 '>

                {/* Main Hero Container */}
                <div className='w-full flex flex-col items-center gap-6 mt-24 md:mt-[148px] mb-24 md:mb-[120px]'>

                    {/* Badge - GET SUPPORT */}
                    <div className="w-fit h-fit bg-f8f8f8 rounded-full py-[7px] px-3 flex items-center justify-center gap-2">
                        <div className="text-center text-[12px] leading-4 tracking-[0.12px] text-[#777]">
                        GET SUPPORT
                        </div>
                    </div>

                    {/* Main Title */}
                    <h1 className='text-primary-black text-center font-rethinkSans font-bold 
                    text-[36px] leading-[48px] tracking-[0.36px]
                    sm:text-[48px] sm:leading-[56px] sm:tracking-[0.48px]
                    md:text-[52px] md:leading-[60px] md:tracking-[0.52px]
                    lg:text-[56px] lg:leading-[64px] lg:tracking-[0.56px]'>
                        Contact us
                    </h1>

                    {/* Last Updated */}
                    <p className='text-[#474645] text-center
                    text-[18px] leading-[30px] tracking-[0.18px]
                    lg:text-[20px] lg:leading-[36px] lg:tracking-[0.2px]'>
                    Mues is an agentic AI that lets your users delegate any task <br className='hidden min-[480px]:block'/> 
                    to an AI agent using human language in your product.
                    </p>

                    {/* Contact us Button */}
                    <a 
                        ref={contactButtonRef}
                        href="mailto:hi@mues.ai" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Contact us" 
                        className='w-fit rounded-xl cursor-pointer'
                    >
                        <div className="inline-flex py-4 px-5 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                            <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Contact us</p>
                            <span className="flex px-[4.5px] justify-center items-center rounded-[3px] bg-[rgba(119,119,119,0.10)]">
                            <p className="text-[rgba(119,119,119,0.75)] text-center text-[11px] font-medium leading-4 tracking-[0.11px]">C</p>
                            </span>
                        </div>
                    </a>

                </div>


                {/* CORNERED BOX */}
                <div className="relative w-full max-w-[1512px] h-auto mx-auto">
                    <CorneredLine/>

                    {/* Main Grid Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        
                        {/* First Row - 2 Equal Boxes */}
                        <div className="h-auto p-8 lg:p-12 flex flex-col gap-8 justify-between">
                            <div className="flex flex-col gap-5">
                                <img src="/Contact/svg/bulk-like.svg" alt="Support" width={48} height={48} />
                                <h2 className="text-[#121212] font-sfPro font-[590]
                                text-[36px] leading-[48px]
                                md:text-[42px] md:leading-[54px]
                                lg:text-[48px] lg:leading-tight
                                ">
                                Reach out to Support team.
                                </h2>
                                <p className="max-w-[470px] text-[#777] font-normal tracking-[-0.3px]
                                text-[16px] leading-[24px] sm:text-[17px] sm:leading-[26px] sm:tracking-[-0.3px]
                                lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.3px]">
                                Get help from the community. If you&apos;re on a paid plan, submit a ticket to our support team.
                                </p>
                            </div>

                            {/* Get Support Button */}
                            <a href="mailto:hi@mues.ai" target="_blank" rel="noopener noreferrer" aria-label="Get support" className='w-fit rounded-xl'>
                                <div className="w-[142px] h-12 rounded-xl flex justify-center items-center bg-gradient-to-b from-[#252525] to-[#17181A]">
                                    <div className="w-[140px] h-[46px] rounded-[11px] px-[19px] py-[13px] text-center flex justify-between items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                                    bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.02)] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
                                        <span className="w-fit text-white font-openRunde text-[14px] font-medium leading-[17px] tracking-[0.14px]">
                                        Get support
                                        </span>
                                        <ArrowRightIcon width={12} height={12} color='#FFFFFF'/>
                                    </div>
                                </div>
                            </a>    
                        
                        </div>

                        <div className="h-auto p-8 lg:p-12 flex flex-col gap-8 justify-between border-l border-t lg:border-t-none border-[#EBEBEB]">
                            <div className="flex flex-col gap-5">
                                <img src="/Contact/svg/bulk-building.svg" alt="Sales" width={48} height={48} />
                                <h2 className="text-[#121212] font-sfPro font-[590]
                                text-[36px] leading-[48px]
                                md:text-[42px] md:leading-[54px]
                                lg:text-[48px] lg:leading-tight">
                                    Talk to our Sales team.
                                </h2>
                                <p className="max-w-[470px] text-[#777] font-normal tracking-[-0.3px]
                                text-[16px] leading-[24px] sm:text-[17px] sm:leading-[26px] sm:tracking-[-0.3px]
                                lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.3px]">
                                Discuss your requirements, learn about custom pricing, or request a demonstration.
                                </p>
                            </div>
                            
                            {/* Contact Sales Button */}
                            <a href="https://cal.com/mues-ai/talk-with-sales" target="_blank" rel="noopener noreferrer" aria-label="Contact sales" className='w-fit rounded-xl'>
                                <div className="w-[154px] h-12 rounded-xl flex justify-center items-center bg-gradient-to-b from-[#252525] to-[#17181A]">
                                    <div className="w-[152px] h-[46px] rounded-[11px] px-[19px] py-[13px] text-center flex justify-between items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                                    bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.02)] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
                                        <span className="w-fit text-white font-openRunde text-[14px] font-medium leading-[17px] tracking-[0.14px]">
                                        Contact sales
                                        </span>
                                        <ArrowRightIcon width={12} height={12} color='#FFFFFF'/>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Divider Line */}
                        <div className="col-span-full h-[1px] bg-[#EBEBEB]"></div>

                        {/* Second Row - 3 Equal Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-3 col-span-full">
                            {/* Documentation Box */}
                            <div className="h-auto p-8 lg:p-12 lg:pt-10 flex flex-col gap-6 justify-between">
                                <div className="flex flex-col gap-5">
                                    {/* Document Text Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M28 9.33329V22.6666C28 26.6666 26 29.3333 21.3333 29.3333H10.6667C6 29.3333 4 26.6666 4 22.6666V9.33329C4 5.33329 6 2.66663 10.6667 2.66663H21.3333C26 2.66663 28 5.33329 28 9.33329Z" stroke="#979797" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10.6667 17.3334H16" stroke="#979797" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10.6667 22.6666H21.3333" stroke="#979797" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-[#121212] font-sfPro font-[510] 
                                        text-[24px] leading-none
                                        md:text-[28px] md:leading-tight
                                        lg:text-[32px] lg:leading-normal">
                                            Read documentation
                                        </h3>
                                        <p className="text-[#777] font-normal tracking-[-0.3px]
                                        text-[16px] leading-[24px] sm:text-[17px] sm:leading-[26px] sm:tracking-[-0.3px]
                                        lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.3px]">
                                        Find answers and inspiration on all things Mues AI.
                                        </p>
                                    </div>
                                </div>
                                {/* Mues AI Docs Button */}
                                <a 
                                    href="https://muesai.featurebase.app/en/help" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Mues AI Docs" 
                                    className='w-fit rounded-xl cursor-pointer'
                                >
                                    <div className="inline-flex py-4 px-5 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                                        <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Mues AI Docs</p>
                                    </div>
                                </a>
                            </div>

                            {/* Follow on X Box */}
                            <div className="h-auto p-8 lg:p-12 lg:pt-10 flex flex-col gap-6 justify-between border-l border-t lg:border-t-none border-[#EBEBEB]">
                                <div className="flex flex-col gap-5">
                                    <XIcon width={26} height={32} className="text-[#979797]" />
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-[#121212] font-sfPro font-[510] 
                                        text-[24px] leading-none
                                        md:text-[28px] md:leading-tight
                                        lg:text-[32px] lg:leading-normal">
                                            Follow us on X
                                        </h3>
                                        <p className="text-[#777] font-normal tracking-[-0.3px]
                                        text-[16px] leading-[24px] sm:text-[17px] sm:leading-[26px] sm:tracking-[-0.3px]
                                        lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.3px]">
                                            Get Mues AI news, company information, and media resources.
                                        </p>
                                    </div>
                                </div>
                                {/* Follow @mues_ai Button */}
                                <a 
                                    href="https://x.com/mues_ai" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Follow @mues_ai" 
                                    className='w-fit rounded-xl cursor-pointer'
                                >
                                    <div className="inline-flex py-4 px-5 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                                        <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Follow @mues_ai</p>
                                    </div>
                                </a>
                            </div>

                            {/* Join Discord Box */}
                            <div className="h-auto p-8 lg:p-12 lg:pt-10 flex flex-col gap-6 justify-between border-l border-t lg:border-t-none border-[#EBEBEB]">
                                <div className="flex flex-col gap-5">
                                    <DiscordIcon width={30} height={32} className="text-[#979797]" />
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-[#121212] font-sfPro font-[510] 
                                        text-[24px] leading-none
                                        md:text-[28px] md:leading-tight
                                        lg:text-[32px] lg:leading-normal">
                                            Join Mues AI - Friends
                                        </h3>
                                        <p className="text-[#777] font-normal tracking-[-0.3px]
                                        text-[16px] leading-[24px] sm:text-[17px] sm:leading-[26px] sm:tracking-[-0.3px]
                                        lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.3px]">
                                            For AI related discussions, join our Discord community.
                                        </p>
                                    </div>
                                </div>
                                {/* Join our community Button */}
                                <a 
                                    href="https://discord.gg/GZGjemzU2H" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Join our community" 
                                    className='w-fit rounded-xl cursor-pointer'
                                >
                                    <div className="inline-flex py-4 px-5 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                                        <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Join our community</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Drive more adoption for your product 2 - ilki ile aynı sadece my-176px den sonra ekstra mt-148px classını ekledim -- add mues ai to your product ile aynı formatta sadece dışına MARGİN EKLEYECEĞİM. */}
                <div className='w-full flex flex-col items-center gap-8  lg:py-31 lg:px-16 mx-auto my-[176px] mt-[148px]'>
          
                    {/* Main Text */}
                    <p className='w-[520px] text-center text-[#17181A] font-rethinkSans font-bold  font-feature-settings-salt 
                        text-[32px] sm:text-[48px] lg:text-[56px]
                        leading-[48px] sm:leading-[60px] lg:leading-[72px]
                        tracking-[0.32px] sm:tracking-[0.48px] lg:tracking-[0.56px]'>
                        Drive more
                        <span className="font-instrumentSerif font-normal font-feature-settings-salt italic bg-gradient-to-r from-[#0089FF] to-[#7D52F4] bg-clip-text text-transparent
                        text-[32px] sm:text-[48px] lg:text-[56px]  
                        leading-[48px] sm:leading-[60px] lg:leading-[72px]
                        tracking-[0.32px] sm:tracking-[0.48px] lg:tracking-[0.56px] ">
                        {" adoption"} <br />
                        </span>
                        for your product.
                    </p>

                    {/* B - J Buttons Container */}
                    <div className='flex flex-col xs:flex-row items-center w-fit gap-3'>
                        
                        {/* Book a demo button */}
                        <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo" className='w-fit rounded-xl cursor-pointer hover:opacity-90'>
                        <div className="w-[154px] h-12 rounded-xl flex justify-center items-center bg-gradient-to-b from-[#252525] to-[#17181A]">
                            <div className="w-[152px] h-[46px] rounded-[11px] px-[19px] py-[13px] text-center flex justify-between items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                            bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.02)] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
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

                        {/* Join waitlist button */}
                        <a href="https://tally.so/r/w2V7Dg" target="_blank" rel="noopener noreferrer" aria-label="Join waitlist" className='w-fit rounded-xl cursor-pointer'>
                        <div className="inline-flex py-4 px-5 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                            <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Join waitlist</p>
                            <span className="flex px-[4.5px] justify-center items-center rounded-[3px] bg-[rgba(119,119,119,0.10)]">
                            <p className="text-[rgba(119,119,119,0.75)] text-center text-[11px] font-medium leading-4 tracking-[0.11px]">J</p>
                            </span>
                        </div>
                        </a>
                    </div>
                </div>


                <FAQ />
                <Footer/>

            </div>
        </div>
    );
}
  