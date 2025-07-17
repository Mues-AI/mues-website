'use client';

import Navbar from '../components/Navbar.js';
import FAQ from '../components/FAQ.js';
import Footer from '../components/Footer.js';
import Image from 'next/image';
import CorneredLine from '../components/CorneredLine.js';
import { XIcon, DiscordIcon } from '../utils/svgIcons.js';
import { ArrowRightIcon } from '../utils/svgIcons.js';
import ButtonBlack from '@/app/components/ui/ButtonBlack';
import ButtonWhite from '@/app/components/ui/ButtonWhite';
import CallToAction from '@/app/components/ui/CallToAction';

export default function Contact() {

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
                    <ButtonWhite
                        href="mailto:hi@mues.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        ariaLabel="Contact us"
                        badge="C"
                        >
                        Contact us
                    </ButtonWhite>

                </div>


                {/* CORNERED BOX */}
                <div className="relative w-full max-w-[1512px] h-auto mx-auto">
                    <CorneredLine/>

                    {/* Main Grid Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        
                        {/* First Row - 2 Equal Boxes */}
                        <div className="h-auto p-8 lg:p-12 flex flex-col gap-8 justify-between">
                            <div className="flex flex-col gap-5">
                                <Image src="/Contact/svg/bulk-like.svg" alt="Support" width={48} height={48} />
                                <h2 className="text-[#121212] font-sfPro font-regular tracking-normal lg:tracking-[-0.05px] 
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
                            <ButtonBlack
                            href="mailto:hi@mues.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            ariaLabel="Get support"
                            width="w-[142px]"
                            height="h-12"
                            icon={<ArrowRightIcon width={12} height={12} color='#FFFFFF'/>}
                            innerDivPadding="px-[19px] py-[13px]"
                            className="min-w-fit"
                            >
                            Get support
                            </ButtonBlack> 
                        
                        </div>

                        <div className="h-auto p-8 lg:p-12 flex flex-col gap-8 justify-between border-l border-t lg:border-t-none border-[#EBEBEB]">
                            <div className="flex flex-col gap-5">
                                <Image src="/Contact/svg/bulk-building.svg" alt="Sales" width={48} height={48} />
                                <h2 className="text-[#121212] font-sfPro font-regular tracking-normal lg:tracking-[-0.05px] 
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
                            <ButtonBlack
                            href="https://cal.com/mues-ai/talk-with-sales"
                            target="_blank"
                            rel="noopener noreferrer"
                            ariaLabel="Contact sales"
                            width="w-[154px]"
                            height="h-12"
                            icon={<ArrowRightIcon width={12} height={12} color='#FFFFFF'/>}
                            innerDivPadding="px-[19px] py-[13px]"
                            className="min-w-fit"
                            >
                            Contact sales
                            </ButtonBlack> 
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
                                        <h3 className="text-[#121212] font-sfPro font-regular 
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
                                <ButtonWhite
                                href="https://muesai.featurebase.app/en/help"
                                target="_blank"
                                rel="noopener noreferrer"
                                ariaLabel="Mues AI Docs"
                                >
                                Mues AI Docs
                                </ButtonWhite>
                            </div>

                            {/* Follow on X Box */}
                            <div className="h-auto p-8 lg:p-12 lg:pt-10 flex flex-col gap-6 justify-between border-l border-t lg:border-t-none border-[#EBEBEB]">
                                <div className="flex flex-col gap-5">
                                    <XIcon width={26} height={32} className="text-[#979797]" />
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-[#121212] font-sfPro font-regular 
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
                                <ButtonWhite
                                href="https://x.com/mues_ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                ariaLabel="Follow @mues_ai"
                                >
                                Follow @mues_ai
                                </ButtonWhite>
                            </div>

                            {/* Join Discord Box */}
                            <div className="h-auto p-8 lg:p-12 lg:pt-10 flex flex-col gap-6 justify-between border-l border-t lg:border-t-none border-[#EBEBEB]">
                                <div className="flex flex-col gap-5">
                                    <DiscordIcon width={30} height={32} className="text-[#979797]" />
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-[#121212] font-sfPro font-regular 
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
                                <ButtonWhite
                                href="https://discord.gg/GZGjemzU2H"
                                target="_blank"
                                rel="noopener noreferrer"
                                ariaLabel="Join our community"
                                >
                                Join our community
                                </ButtonWhite>
                            </div>
                        </div>
                    </div>

                </div>

                <CallToAction 
                containerClassName="w-full flex flex-col items-center gap-8 lg:py-31 lg:px-16 mx-auto my-[176px] mt-[148px]"
                text="Drive more adoption<br/>for your product."
                highlightWords={["adoption"]}
                buttons={[
                    <ButtonBlack
                    key="book-demo"
                    href="https://cal.com/mues-ai/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Book a demo"
                    width="w-[154px]"
                    height="h-12"
                    badge="B"
                    innerDivPadding="px-[19px] py-[13px]"
                    className="min-w-fit"
                    >
                    Book a demo
                    </ButtonBlack>,
                    <ButtonWhite
                    key="join-waitlist"
                    href="https://tally.so/r/w2V7Dg"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Join waitlist"
                    badge="J"
                    >
                    Join waitlist
                    </ButtonWhite>
                ]}
                />


                <FAQ />
                <Footer/>

            </div>
        </div>
    );
}
  