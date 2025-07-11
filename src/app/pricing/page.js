'use client';
import React from 'react';
import Navbar from '../components/Navbar.js';
import { CursorSvg } from '../utils/showcase/svgShowcase.js';
import { useState, useEffect, useRef } from 'react';
import CorneredLine from '../components/CorneredLine.js';
import SvgIconAi from '../utils/svgIconAi.js';
import styles from './pricing.module.css';
import { NoneXIcon, TickIcon, InfoIcon } from "../utils/pricing/pricingSvg.js";
import DeployFiveHero from '../components/DeployFiveHero.js';
import PlugAndPlay from '../components/PlugAndPlay.js';
import Steps from '../components/Steps.js';
import ImpactCircle from '../components/ImpactCircle.js';
import FAQ from '../components/FAQ.js';
import Footer from '../components/Footer.js';


const pricingTableData = {
    mainFeatures: {
        title: 'Features',
        features: [
            {
                name: 'AI Cursor',
                hasInfo: false,
                values: ['tick', 'tick', 'tick']
            },
            {
                name: 'Journeys',
                hasInfo: false,
                values: ['Up to 1000', 'Up to 2000', 'Unlimited'],
                details: {
                    name: 'Included free journeys',
                    values: ['200', '1000', 'Unlimited']
                }
            },
            {
                name: 'Members',
                hasInfo: false,
                values: ['Unlimited', 'Unlimited', 'Unlimited']
            },
            {
                name: 'Multi model support',
                hasInfo: false,
                values: ['none', 'tick', 'tick']
            },
            {
                name: 'ROI analytics',
                hasInfo: false,
                values: ['none', 'tick', 'tick']
            },
            {
                name: 'Pre-defined actions',
                hasInfo: false,
                values: ['none', 'tick', 'tick']
            },
            {
                name: 'Remove Mues branding',
                hasInfo: false,
                values: ['none', 'tick', 'tick']
            },
            {
                name: 'Custom theme',
                hasInfo: false,
                values: ['tick', 'tick', 'tick']
            },
            {
                name: 'Rulesets',
                hasInfo: false,
                values: ['tick', 'tick', 'tick']
            },
            {
                name: 'Community support',
                hasInfo: false,
                values: ['tick', 'tick', 'tick']
            },
            {
                name: 'File limit',
                hasInfo: false,
                values: ['100MB', '1GB', 'Unlimited']
            },
            {
                name: 'Ruleset limit',
                hasInfo: false,
                values: ['5', '20', 'Unlimited']
            }
        ]
    },
    enterpriseFeatures: {
        title: 'Only for Enterprise',
        features: [
            {
                name: 'Account manager',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: 'On premise setup',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: '99.99% SLA',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: 'Priority support',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: 'Google SSO + SAML',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: 'HIPAA compliance',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: 'Advanced security',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: 'Audit log',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: 'Custom terms',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            },
            {
                name: 'Custom models',
                hasInfo: false,
                values: ['none', 'none', 'tick']
            }
        ]
    }
};

const PRICING = {
    basic: {
        monthly: 199,
        annual: 99
    },
    growth: {
        monthly: 799,
        annual: 599
    }
};

const renderValue = (value) => {
    switch(value) {
        case 'tick':
            return <TickIcon />;
        case 'none':
            return <NoneXIcon />;
        default:
            return <span>{value}</span>;
    }
};

export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const tables = container.querySelectorAll('.scroll-sync');
        
        const handleScroll = (event) => {
            const scrollLeft = event.target.scrollLeft;
            tables.forEach(table => {
                if (table !== event.target) {
                    table.scrollLeft = scrollLeft;
                }
            });
        };

        tables.forEach(table => {
            table.addEventListener('scroll', handleScroll);
        });

        return () => {
            tables.forEach(table => {
                table.removeEventListener('scroll', handleScroll);
            });
        };
    }, []);

    // Helper function to format price
    const formatPrice = (price) => {
        return `$${price}`;
    };

    // LLM logos configuration
    const logos = [
        { name: "openai", width: 107, height: 32, alt: "OpenAI" },
        { name: "claude", width: 100, height: 22, alt: "Claude" },
        { name: "grok", width: 79, height: 30, alt: "Grok" },
        { name: "deepseek", width: 119, height: 26, alt: "DeepSeek" },
        { name: "gemini", width: 66, height: 24, alt: "Gemini" },
        { name: "microsoft-copilot", width: 84, height: 24, alt: "Microsoft Copilot" },
        { name: "mistral-ai", width: 84, height: 24, alt: "Mistral AI" },
        { name: "ollama", width: 83, height: 30, alt: "Ollama" }
    ];
    
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar variant="light" />
            <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18 '>

                {/* Main Hero Container */}
                <div className='w-full flex flex-col items-center gap-6 mt-24 md:mt-[148px]'>

                    {/* Badge - VALUE FOCUS */}
                    <div className="w-fit h-fit bg-f8f8f8 rounded-full py-[7px] px-3 flex items-center justify-center gap-2">
                        <CursorSvg width={12} height={12} fill="#777777" />  
                        <div className="text-center text-[12px] leading-4 tracking-[0.12px] text-[#777]">
                        VALUE FOCUS
                        </div>
                    </div>


                    {/* Main Title */}
                    <h1 className='text-primary-black text-center font-rethinkSans font-bold 
                    text-[36px] leading-[48px] tracking-[0.36px]
                    sm:text-[48px] sm:leading-[56px] sm:tracking-[0.48px]
                    md:text-[52px] md:leading-[60px] md:tracking-[0.52px]
                    lg:text-[56px] lg:leading-[64px] lg:tracking-[0.56px]'>
                        Simple and <br className='hidden md:block' /> transparent pricing
                    </h1>

                    {/* Proven ROI */}
                    <p className='text-[#474645] text-center
                    text-[18px] leading-[30px] tracking-[0.18px]
                    lg:text-[20px] lg:leading-[36px] lg:tracking-[0.2px]'>
                    Proven ROI. Boost your product adoption <br className='hidden md:block' /> with changing software interaction in your product.
                    </p>

                    {/* Monthly - Monthly Button */}
                    <div className="relative w-[174px] h-12 bg-[#F9F9F9] rounded-[16px] p-1 flex items-center gap-2">
                        {/* Sliding Background */}
                        <div className="absolute w-[79px] h-[40px] bg-white rounded-[12px] shadow-[0px_0px_4px_0px_rgba(140,151,172,0.20)] transition-transform duration-300 ease-in-out" 
                        style={{transform: isMonthly ? 'translateX(0)' : 'translateX(86px)' }}/>
                        
                        {/* Monthly Button */}
                        <button 
                            onClick={() => setIsMonthly(true)}
                            className={`relative flex-1 h-10 flex items-center justify-center text-[14px] font-medium leading-[16px] cursor-pointer ${isMonthly ? 'text-[#17181A]' : 'text-[#777]'}`}
                        >
                            Monthly
                        </button>

                        {/* Annual Button */}
                        <button 
                            onClick={() => setIsMonthly(false)}
                            className={`relative flex-1 h-10 flex items-center justify-center text-[14px] font-medium leading-[16px] cursor-pointer ${!isMonthly ? 'text-[#17181A]' : 'text-[#777]'}`}
                        >
                            Annual
                        </button>
                    </div>

                </div>

                {/* CORNERED BOX */}
                <div className="relative w-full max-w-[1512px] h-auto mx-auto mt-24">
                    <CorneredLine/>

                    {/* Main Grid Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                      
                        {/* Basic Plan */}
                        <div className="h-auto p-10 sm:p-12 flex flex-col justify-between gap-13">
                            {/* Top Content */}
                            <div className="flex justify-between gap-6">
                                {/* Left Side - Title and Description */}
                                <div className="flex flex-col gap-2 lg:max-w-[208px]">
                                    <h3 className="text-[#121212] font-sfPro text-[32px] font-medium leading-[40px] ">
                                        Basic
                                    </h3>
                                    <p className="text-[#777] font-Inter text-[18px] font-normal leading-[28px] tracking-[-0.3px]">
                                        Perfectly designed to enable a new way of software interaction.
                                    </p>
                                </div>

                                {/* Right Side - Pricing */}
                                <div className="flex flex-col gap-2 items-end min-w-20">
                                    <p className="text-[#777] font-Inter text-[14px] font-normal leading-[22px]">
                                        Starts from
                                    </p>
                                    <p className="text-[#121212] font-sfPro text-[40px] font-[590] leading-12">
                                        {formatPrice(isMonthly ? PRICING.basic.monthly : PRICING.basic.annual)}
                                    </p>
                                    <p className="text-[#777] font-Inter text-[14px] font-normal leading-[22px]">
                                        / Per Month
                                    </p>
                                </div>
                            </div>

                            {/* Request Pricing Button */}
                            <a href="https://cal.com/mues-ai/talk-with-sales" target="_blank" rel="noopener noreferrer" aria-label="Request pricing" className='w-fit rounded-xl'>
                                <div className="w-[140px] h-10 rounded-xl flex justify-center items-center bg-gradient-to-b from-[#252525] to-[#17181A]">
                                    <div className="w-[138px] h-[38px] px-[14px] pt-[10px] pb-[11px] rounded-[11px] text-center flex justify-center items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                                    bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.02)] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
                                        <span className="w-fit text-white font-openRunde text-[14px] font-medium leading-[17px] tracking-[0.14px]">
                                        Request pricing
                                        </span>
                                    </div>
                                </div>
                            </a>    
                        </div>

                        {/* Growth Plan */}
                        <div className="h-auto p-10 sm:p-12 flex flex-col justify-between gap-13 border-l border-[#EBEBEB] border-t lg:border-t-none">
                            {/* Top Content */}
                            <div className="flex justify-between gap-6">
                                {/* Left Side - Title and Description */}
                                <div className="flex flex-col gap-2 lg:max-w-[208px]">
                                    <h3 className="text-[#121212] font-sfPro text-[32px] font-medium leading-[40px] ">
                                        Growth
                                    </h3>
                                    <p className="text-[#777] font-Inter text-[18px] font-normal leading-[28px] tracking-[-0.3px]">
                                        For teams quickly scaling their onboarding and customer support.
                                    </p>
                                </div>

                                {/* Right Side - Pricing */}
                                <div className="flex flex-col gap-2 items-end min-w-20">
                                    <p className="text-[#777] font-Inter text-[14px] font-normal leading-[22px]">
                                        Starts from
                                    </p>
                                    <p className="text-[#121212] font-sfPro text-[40px] font-[590] leading-12">
                                        {formatPrice(isMonthly ? PRICING.growth.monthly : PRICING.growth.annual)}
                                    </p>
                                    <p className="text-[#777] font-Inter text-[14px] font-normal leading-[22px]">
                                        / Per Month
                                    </p>
                                </div>
                            </div>

                            {/* Growth Plan - Request Pricing Button */}
                            <a href="https://cal.com/mues-ai/talk-with-sales" target="_blank" rel="noopener noreferrer" aria-label="Request pricing" className='w-fit rounded-xl'>
                                <div className="w-[140px] h-10 rounded-xl flex justify-center items-center bg-gradient-to-b from-[#252525] to-[#17181A]">
                                    <div className="w-[138px] h-[38px] px-[14px] pt-[10px] pb-[11px] rounded-[11px] text-center flex justify-center items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                                    bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.02)] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
                                        <span className="w-fit text-white font-openRunde text-[14px] font-medium leading-[17px] tracking-[0.14px]">
                                        Request pricing
                                        </span>
                                    </div>
                                </div>
                            </a>  
                        </div>

                        {/* Enterprise Plan */}
                        <div className="h-auto p-10 sm:p-12 flex flex-col justify-between gap-13 border-l border-[#EBEBEB] border-t lg:border-t-none">
                            {/* Top Content */}
                            <div className="flex flex-col gap-2 lg:max-w-[280px]">
                                <p className="text-[#979797] font-Inter text-[14px] font-regular leading-[20px] tracking-[-0.09px]">
                                    Available on Sep, 2025
                                </p>
                                <h3 className="text-[#121212] font-sfPro text-[32px] font-medium leading-[40px] [-webkit-text-stroke:0px_rgba(0,0,0,0)]">
                                    Enterprise
                                </h3>
                                <p className="text-[#777] font-Inter text-[18px] font-normal leading-[28px] tracking-[-0.3px]">
                                For products with multiple modules and complex workflows.
                                </p>
                            </div>

                            {/* Enterprise Plan - Buttons */}
                            {/* YAP - TO DO - ÖNEMLİ - Tüm bu siyah butonlar da büyük arka planlı dive px-1 ekle ki w-full yaptığında işin kolay olsun - alt dive de w-[calc(100%-2px)] ekle. belki şeyde yapabilirsin flex grow ve basis değerleri ekleyerek eğer satırda yalnız kalırsa buton yatayı full kaplasın diyebiliriz. 
                            
                            h değerini de h- calc -2px yap
                            
                            siyah buntonların arka planları full siyaha dönmüş -- coomponent yaparken değiştir*/}
                            <div className="flex gap-2 items-center flex-wrap">
                                {/* Book a demo Button */}
                                <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo" className='w-fit rounded-xl min-w-fit'>
                                    <div className="w-[121px] h-10 rounded-xl flex justify-center items-center bg-gradient-to-b from-[#252525] to-[#17181A]">
                                        <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] px-[14px] pt-[10px] pb-[11px] rounded-[11px] text-center flex justify-center items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                                        bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.02)] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
                                            <span className="w-fit text-white font-openRunde text-[14px] font-medium leading-[17px] tracking-[0.14px]">
                                            Book a demo
                                            </span>
                                        </div>
                                    </div>
                                </a>   
                                <a 
                                    href="mailto:hi@mues.ai"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Contact us button" 
                                    className='w-fit rounded-xl min-w-fit cursor-pointer'
                                >
                                    <div className="inline-flex py-3 px-4 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                                        <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Contact us</p>
                                    </div>
                                </a>
                            </div>    



                        </div>

                    </div>

                </div>

            </div>

            {/* LLM LOGOLARI */}
            <section className="w-full py-12 mt-43">
                <div className="w-full max-w-6xl mx-auto text-center">
                    <p className="text-[rgba(71,70,69,0.40)] text-xs md:text-sm font-light leading-4 tracking-[0.14px] md:tracking-[0.14px] mb-8">
                        Trusted by product leaders and developers worldwide
                    </p>
                    
                    {/* Mobile: Animated infinite carousel (< 1024px) */}
                    <div className="lg:hidden w-full overflow-hidden flex items-center h-8">
                        <div className="inline-flex items-center whitespace-nowrap animate-marquee">
                            {/* Duplicate logos for seamless infinite loop */}
                            {[...logos, ...logos].map((logo, idx) => (
                                <div key={`${logo.name}-${idx}`} className="mx-6 flex items-center justify-center flex-shrink-0">
                                    <SvgIconAi 
                                        name={logo.name} 
                                        width={logo.width * 0.8} 
                                        height={logo.height * 0.8} 
                                        alt={logo.alt} 
                                        color="#474645"
                                        opacity={1}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Static grid layout (>= 1024px) */}
                    <div className="hidden lg:flex items-center justify-center flex-nowrap gap-6 lg:gap-8 xl:gap-12">
                        {logos.map((logo) => (
                            <div key={logo.name} className="flex items-center justify-center">
                                <SvgIconAi 
                                    name={logo.name} 
                                    width={logo.width} 
                                    height={logo.height} 
                                    alt={logo.alt} 
                                    color="#474645"
                                    opacity={1}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18 '>
            
                {/* Scroll Sync Container */}
                <div ref={scrollContainerRef}>
                    {/* Pricing Table */}
                    <div className='mt-30 pt-8 pb-8 max-w-[1116px] mx-auto flex flex-nowrap items-end justify-between overflow-x-auto border-b border-[#EDEFF3] sticky top-0 bg-white gap-6 scroll-sync [&::-webkit-scrollbar]:hidden scroll-behavior: smooth'>

                        {/* Select Billing Section */}
                        <div className="flex flex-col gap-[19px] min-w-[220px] flex-shrink-0">
                            <span className="w-[94px] text-[#777] font-inter text-[12px] font-medium leading-[16px]">
                                Select preferred billing cycle
                            </span>

                            {/* Monthly - Monthly Button */}
                            <div className="relative w-[216px] h-8 bg-[#F9F9F9] rounded-[10px] p-0.5 flex items-center gap-1">
                                {/* Sliding Background */}
                                <div className="absolute w-[104px] h-7 bg-white rounded-[10px] shadow-[0px_0px_4px_0px_rgba(140,151,172,0.20)] transition-transform duration-300 ease-in-out" 
                                style={{transform: isMonthly ? 'translateX(0)' : 'translateX(108px)' }}/>
                                
                                {/* Monthly Button */}
                                <button 
                                    onClick={() => setIsMonthly(true)}
                                    className={`relative flex-1 h-7 flex items-center justify-center text-[14px] font-medium leading-[16px] cursor-pointer tracking-[-0.07px] ${isMonthly ? 'text-[#17181A]' : 'text-[#777]'}`}
                                >
                                    Monthly
                                </button>

                                {/* Annual Button */}
                                <button 
                                    onClick={() => setIsMonthly(false)}
                                    className={`relative flex-1 h-7 flex items-center justify-center text-[14px] font-medium leading-[16px] cursor-pointer tracking-[-0.07px] ${!isMonthly ? 'text-[#17181A]' : 'text-[#777]'}`}
                                >
                                    Annual
                                </button>
                            </div>
                        </div>

                        {/* Pricing Plans Container */}
                        <div className="flex flex-nowrap justify-end items-end gap-6">
                            {/* Basic Plan */}
                            <div className="w-[200px] flex flex-col flex-shrink-0 gap-3">
                                <h3 className="text-[#121212] text-2xl font-medium leading-8 tracking-[-0.24px]">
                                    Basic
                                </h3>
                                <p className="text-[#777] text-xs font-medium leading-4">
                                    {formatPrice(isMonthly ? PRICING.basic.monthly : PRICING.basic.annual)} {isMonthly ? 'per month,' : 'per month,'}<br/>{isMonthly ? 'billed monthly' : 'billed annually'}
                                </p>
                                {/* Basic Button */}
                                <a 
                                    href="https://cal.com/mues-ai/talk-with-sales"  
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Basic Button" 
                                    className='w-full rounded-xl cursor-pointer'
                                >
                                    <div className="w-full inline-flex py-[11px] px-5 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                                        <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Continue with Basic</p>
                                    </div>
                                </a>
                            </div>

                            {/* Growth Plan */}
                            <div className="w-[200px] flex flex-col flex-shrink-0 gap-3">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-[#121212] text-2xl font-medium leading-8 tracking-[-0.24px]">
                                        Growth
                                    </h3>
                                    <span className="flex h-6 w-[60px] items-center justify-center rounded-lg border border-[rgba(0,137,255,0.12)] bg-[rgba(0,137,255,0.04)]">
                                        <span className="text-[#0089FF] text-xs font-medium leading-4">
                                            Popular
                                        </span>
                                    </span>
                                </div>
                                <p className="text-[#777] text-xs font-medium leading-4">
                                    {formatPrice(isMonthly ? PRICING.growth.monthly : PRICING.growth.annual)} {isMonthly ? 'per month,' : 'per month,'}<br/>{isMonthly ? 'billed monthly' : 'billed annually'}
                                </p>
                                {/* Growth Button */}
                                <a href="https://cal.com/mues-ai/talk-with-sales" target="_blank" rel="noopener noreferrer" aria-label="Growth Button" className='w-full rounded-xl mt-1'>
                                    <div className="w-full h-10 rounded-xl flex justify-center items-center bg-gradient-to-b from-[#252525] to-[#17181A]">
                                        <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] px-[14px] pt-[10px] pb-[11px] rounded-[11px] text-center flex justify-center items-center gap-x-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
                                        bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.02)] outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]">
                                            <span className="w-fit text-white font-openRunde text-[14px] font-medium leading-[17px] tracking-[0.14px]">
                                            Continue with Growth
                                            </span>
                                        </div>
                                    </div>
                                </a>  
                            </div>

                            {/* Enterprise Plan */}
                            <div className="w-[200px] flex flex-col flex-shrink-0 gap-3">
                                <h3 className="text-[#121212] text-2xl font-medium leading-8 tracking-[-0.24px]">
                                    Enterprise
                                </h3>
                                <p className="text-[#777] text-xs font-medium leading-4">
                                    Get a custom quote,<br/>{isMonthly ? 'billed monthly' : 'billed annually'} 
                                </p>
                                <button disabled className="mt-1 w-full px-[56px] py-3 rounded-xl border border-[#F4F4F4] bg-[#F5F7F8] text-[#979797] text-sm font-medium leading-4 cursor-not-allowed">
                                    Talk to sales
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////// */}
                    {/* Features Table */}
                    <div className={`${styles.tableContainer} scroll-sync `}>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span>{pricingTableData.mainFeatures.title}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingTableData.mainFeatures.features.map((feature, index) => (
                                    <React.Fragment key={`feature-group-${feature.name}`}>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span>{feature.name}</span>
                                                    {feature.hasInfo && <InfoIcon />}
                                                </div>
                                            </td>
                                            {feature.values.map((value, valueIndex) => (
                                                <td key={`${feature.name}-value-${valueIndex}`}>
                                                    {renderValue(value)}
                                                </td>
                                            ))}
                                        </tr>
                                        {feature.details && (
                                            <tr className={styles.detailRow} key={`${feature.name}-details`}>
                                                <td>
                                                    <span>{feature.details.name}</span>
                                                </td>
                                                {feature.details.values.map((value, valueIndex) => (
                                                    <td key={`${feature.name}-details-${valueIndex}`}>
                                                        <span>{value}</span>
                                                    </td>
                                                ))}
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Enterprise Features Table */}
                    <div className={`${styles.tableContainer} mb-45 scroll-sync`}>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span>{pricingTableData.enterpriseFeatures.title}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingTableData.enterpriseFeatures.features.map((feature, index) => (
                                    <React.Fragment key={`enterprise-feature-${feature.name}`}>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span>{feature.name}</span>
                                                    {feature.hasInfo && <InfoIcon />}
                                                </div>
                                            </td>
                                            {feature.values.map((value, valueIndex) => (
                                                <td key={`${feature.name}-value-${valueIndex}`}>
                                                    {renderValue(value)}
                                                </td>
                                            ))}
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* //////////////////////////////////////////////////////////////////////////////////// */}
                </div>

            </div>


            <DeployFiveHero />

            <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>

                {/* Mobilde deploy in 5 mins yok - plug and play ve steps var */}
                <div className='block lg:hidden'>
                <PlugAndPlay/> 
                <Steps />
                </div> 

                <ImpactCircle />

                {/* Drive more adoption for your product -- add mues ai to your product ile aynı formatta sadece dışına MARGİN EKLEYECEĞİM. */}
                <div className='w-full flex flex-col items-center gap-8  lg:py-31 lg:px-16 mx-auto my-[176px]'>
                
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

                {/* Buttons Container */}
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
                </div>

                </div>

                <FAQ />

                <Footer />

            </div> 


        </div>
    );
}
  