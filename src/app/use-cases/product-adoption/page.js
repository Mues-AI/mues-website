'use client'

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { CursorSvg } from '../../utils/showcase/svgShowcase';
import { useEffect, useRef, useState } from 'react';
import SvgIconAi from '../../utils/svgIconAi';
import { productAdoptionData } from '../../data/usecase-prodocutAdoptionData';
import { toast } from 'sonner';
import UserCursor from '../../components/UserCursor';
import HowItWorks from '../../components/HowItWorks';
import PlugAndPlay from '../../components/PlugAndPlay';
import Steps from '../../components/Steps';
import { OnlyLogo } from '../../utils/svgGeneralUtils';
import Comments from '../../components/Comments';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';

function FeatureContainer({
  svgSrc,
  svgAlt,
  title,
  description,
  imageSrc,
  imageAlt,
}) {

  return (
    <div className="w-full md:h-[448px] rounded-[24px] bg-[#FBFBFB] p-6 md:p-9 lg:p-12 pb-0 xs:pb-0 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 flex justify-between flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24 overflow-hidden">
      {/* Left Side */}
      <div className="w-full max-w-[297px] md:max-w-[304px] flex flex-col gap-6 md:gap-8">
        {/* SVG */}
        <div className="w-8 h-8 flex items-center justify-center">
          <Image src={svgSrc} alt={svgAlt} width={32} height={32} />
        </div>

        {/* Title & Description */}
        <div className="w-full flex flex-col gap-3">
          <h3 className="text-[#222] text-[18px] font-medium leading-6">{title}</h3>
          <p className="text-[#777] text-[18px] leading-[30px]">{description}</p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="h-full max-w-[672px] max-h-[400px] flex flex-row rounded-t-[16px] border-t border-l border-r border-[#EEE] bg-white justify-center items-center self-bottom mx-[-16px] md:mx-0 md:w-full px-6 py-4 md:px-9 md:py-5 lg:px-12 lg:py-6 ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
          width={400}
          height={250}
          unoptimized
          loading='lazy'
        />
      </div>
    </div>
  );
}

export default function ProductAdoption() {
  // Local mobile state for logo carousel (1024px breakpoint)
  const [isMobile, setIsMobile] = useState(false);
  
  // Logo carousel reference for performance optimization
  const carouselRef = useRef(null);
  
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

  // Check screen size for logo carousel (1024px breakpoint)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // B ve J butonları için kullanıcıların sayfaya yönlendirilmesi 
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

  // Performance optimization for logo carousel animation
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;

    // Use IntersectionObserver to pause animation when not visible
    const carouselElement = carouselRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            carouselElement.style.animationPlayState = 'running';
          } else {
            carouselElement.style.animationPlayState = 'paused';
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    observer.observe(carouselElement);

    return () => {
      observer.unobserve(carouselElement);
    };
  }, [isMobile]);

  return (
    <div className='min-h-screen'>
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative flex flex-row items-center justify-between h-auto lg:h-[650px] bg-[#010101]">

        {/* Left bottom image */}
        <Image
          src="/use-cases/product-adoption/images/heroSideContents.webp"
          alt="Hero Side Content Left"
          width={377}
          height={620}
          quality={100}
          priority
          className="h-auto absolute bottom-0 -left-37 sm:-left-18 md:-left-9 lg:left-0"
        />

        {/* Badget - Heading */}
        <div className="w-[330px] sm:w-full max-w-[640px] flex flex-col items-center gap-4 mx-auto z-10
        mt-[104px] mb-[128px] 
        md:mt-[128px] md:mb-[138px] 
        lg:mt-[148px] lg:mb-[148px]  ">

            {/* Badge */}
            <div className="w-fit h-fit bg-[#F8F8F814] rounded-full py-[7px] px-3 flex items-center justify-center gap-2 mb-2">
            <CursorSvg width={12} height={12} fill="#979797" />

                <div className="text-center text-[12px] leading-4 tracking-[0.12px] text-[#979797]">
                PRODUCT ADOPTION
                </div>
            </div>

            {/* Main Heading */}
            <h1 className="w-full text-white text-center font-rethinkSans  font-bold font-feature-settings-salt not-italic md:mb-2
            text-[36px] leading-[48px] tracking-[0.36px]
            sm:text-[48px] sm:leading-[56px] sm:tracking-[0.48px]
            md:text-[52px] md:leading-[60px] md:tracking-[0.52px]
            lg:text-[56px] lg:leading-[64px] lg:tracking-[0.56px]">
            Maximize product adoption with agentic AI
            </h1>

            {/* Subheading */}
            <p className="w-full text-center text-[#CCC] text-[20px] font-normal leading-[36px] tracking-[0.2px] not-italic">
            Mues is an agentic AI that lets your users delegate any task <br /> to an AI agent using human language in your product.
            </p>

            {/* Join Waitlist Button */}
            <a href="https://tally.so/r/w2V7Dg" target="_blank" rel="noopener noreferrer" aria-label="Join waitlist" className='w-fit rounded-xl cursor-pointer'>
              <div className="inline-flex py-3.5 px-[19px] mt-2 md:mt-4 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Join waitlist</p>
                <span className="flex px-[4.5px] justify-center items-center rounded-[3px] bg-[rgba(119,119,119,0.10)]">
                  <p className="text-[rgba(119,119,119,0.75)] text-center text-[11px] font-medium leading-4 tracking-[0.11px]">J</p>
                </span>
              </div>
            </a>

        </div>


        {/* Right bottom image */}
        <Image
          src="/use-cases/product-adoption/images/heroSideContents.webp"
          alt="Hero Side Content Right"
          width={377}
          height={620}
          quality={100}
          priority
          className="rotate-180 h-auto absolute bottom-0 -right-37 sm:-right-18 md:-right-9 lg:right-0"
        />

      </main>

      {/* LLM LOGOLARI */}
      <section className="w-full py-12 mt-6">
        <div className="w-full max-w-6xl mx-auto text-center">
          <p className="text-[rgba(71,70,69,0.40)] text-xs md:text-sm font-light leading-4 tracking-[0.14px] md:tracking-[0.14px] mb-8">
            Trusted by product leaders and developers worldwide
          </p>
          
          {/* YAP - TODO : LOGOLARIN RENKLERİNİ DİNAMİK YAP - SPrite dosyası üzerinden değiştirebiliyorsak oradan değiştir.
          yoksa tek tek component olarak al svgleri  */}
          {isMobile ? (
            // Mobile: Animated infinite carousel
            <div className="w-full overflow-hidden flex items-center h-8">
              <div ref={carouselRef}className="inline-flex items-center whitespace-nowrap animate-marquee">
                {/* Duplicate logos for seamless infinite loop */}
                {[...logos, ...logos].map((logo, idx) => (
                  <div key={`${logo.name}-${idx}`} className="mx-6 flex items-center justify-center flex-shrink-0">
                    <SvgIconAi 
                      name={logo.name} 
                      width={logo.width * 0.8} 
                      height={logo.height * 0.8} 
                      alt={logo.alt} 
                      color="#474645"
                      opacity="1"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Desktop: Static grid layout
            <div className="flex items-center justify-center flex-nowrap gap-6 lg:gap-8 xl:gap-12">
              {logos.map((logo, idx) => (
                <div key={logo.name} className="flex items-center justify-center ">
                  <SvgIconAi 
                    name={logo.name} 
                    width={logo.width} 
                    height={logo.height} 
                    alt={logo.alt} 
                    color="#474645"
                    opacity="1"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>

        {/* Problem Section - Like Meet Mues Section */}
        <div className="flex flex-col items-center gap-4 md:gap-6 max-w-[1168px] mt-24 md:mt-32 lg:mt-[200px] mb-12 md:mb-15 lg:mb-18 mx-auto">

          <div className="flex justify-center items-center gap-1.5 px-3 py-2 rounded-xl border border-[rgba(0,137,255,0.25)] bg-white w-fit">
            <span className="text-primary-blue text-center text-[14px] font-normal leading-[17px]">
              PROBLEM
            </span>
          </div>

          <h2 className="max-w-xl text-primary-black text-center font-rethinkSans font-semibold 
          text-[30px] leading-[40px] tracking-[0.3px]
          md:text-[56px] md:leading-[68px] md:tracking-[0.56px]
          ">
            Eliminate frictions highlight value 
          </h2>

          <p className="w-full text-[#474645] text-center font-light tracking-[-0.3px] 
          text-[18px] leading-[32px]
          md:text-[22px] md:leading-[38px]
          ">
            User frustration with your product doesn&apos;t just ruin the moment. <br className='hidden sm:block'/> It permanently changes how your users view its worth and usability.
          </p>

        </div>

        {/* BEFORE AND AFTER CARDS */}
        <div className="max-w-[1168px] mx-auto flex flex-col lg:flex-row gap-6">
          
          {/* BEFORE MUES CARD */}
          <div className="relative flex-1 h-auto lg:h-[652px] rounded-[24px] border border-[#EEE] bg-white p-8 pb-0 flex flex-col">
            {/* Header */}
            <div className="w-full flex flex-col gap-3">
              <span className="text-[#777] text-[13px] md:text-[14px] font-medium leading-5 tracking-[-0.09px]">
                Before Mues
              </span>
              <h3 className="text-[#121212] font-sfPro font-normal leading-normal 
              text-[24px] tracking-[0.24px]
              md:text-[32px] md:tracking-[0.32px]">
                Users hitting a wall in your product
              </h3>
            </div>

            {/* Content Area - Placeholder */}
            <div className="flex flex-col items-center justify-center flex-1 gap-2 my-12 lg:my-0 ">
            
              {/* User Icon */}
              <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16.16 17.04C16.0667 17.0266 15.9467 17.0266 15.84 17.04C13.4933 16.96 11.6267 15.04 11.6267 12.68C11.6267 10.2666 13.5733 8.30664 16 8.30664C18.4133 8.30664 20.3733 10.2666 20.3733 12.68C20.36 15.04 18.5067 16.96 16.16 17.04Z" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24.9867 25.84C22.6133 28.0133 19.4667 29.3333 16 29.3333C12.5333 29.3333 9.38667 28.0133 7.01334 25.84C7.14667 24.5866 7.94667 23.36 9.37334 22.4C13.0267 19.9733 19 19.9733 22.6267 22.4C24.0533 23.36 24.8533 24.5866 24.9867 25.84Z" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63619 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Down Arrow */}
              <Image 
                src="/use-cases/product-adoption/svg/arrowDown.svg"
                alt="Down Arrow"
                width={12}
                height={66}
              />

              {/* Problem Description */}
              <div className='h-auto w-fit rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] py-[17px] px-6 flex justify-center items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ minWidth: 24, minHeight: 24 }}>
                  <path d="M12 9V14" stroke="#FF3200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5.00003C10.54 1.79003 13.46 1.79003 15.24 5.00003L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z" stroke="#FF3200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9945 17H12.0035" stroke="#FF3200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#474645] text-lg font-normal leading-[30px]">
                  I was unable to create a Slack integration.
                </span>
              </div>

              {/* Down Arrow */}
              <Image 
                src="/use-cases/product-adoption/svg/arrowDown.svg"
                alt="Down Arrow"
                width={12}
                height={66}
              />

              {/* Big Brand Logos */}
              <div className='flex flex-row flex-wrap justify-center gap-4 w-fit'>
                {/* Document Text */}
                <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4 flex items-center justify-center"> 
                  <Image 
                    src="/use-cases/product-adoption/svg/documentText.svg"
                    alt="Document"
                    width={32}
                    height={32}
                  />
                </div>

                {/* Google Logo */}
                <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4 flex items-center justify-center"> 
                  <Image 
                    src="/use-cases/product-adoption/svg/googleLogo.svg"
                    alt="Google"
                    width={32}
                    height={32}
                  />
                </div>

                {/* OpenAI Logo */}
                <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4 flex items-center justify-center"> 
                  <Image 
                    src="/use-cases/product-adoption/svg/openaiLogo.svg"
                    alt="OpenAI"
                    width={32}
                    height={32}
                  />
                </div>

                {/* YouTube Logo */}
                <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4 flex items-center justify-center"> 
                  <Image 
                    src="/use-cases/product-adoption/svg/youtubeLogo.svg"
                    alt="YouTube"
                    width={32}
                    height={32}
                  />
                </div>

                {/* Message Question */}
                <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4 flex items-center justify-center"> 
                  <Image 
                    src="/use-cases/product-adoption/svg/messageQuestion.svg"
                    alt="Message Question"
                    width={32}
                    height={32}
                  />
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="mb-1" style={{ width: 'calc(100% + 56px)', marginLeft: '-28px' }}>
              <div className="h-[52px] rounded-[4px_4px_20px_20px] bg-[#FBFBFB] flex items-center justify-center px-4">
                <p className="text-[#777] text-center text-[13px] font-normal leading-5 tracking-[0.13px]">
                  The user spent time to resolve the issue · Product adoption has decreased
                </p>
              </div>
            </div>
          </div>

          {/* AFTER MUES CARD */}
          <div className="relative flex-1 h-auto lg:h-[652px] rounded-[24px] border border-[#EEE] bg-white p-8 pb-0 flex flex-col">
            {/* Header */}
            <div className="w-full flex flex-col gap-3">
              <span className="text-[#777] text-[13px] md:text-[14px] font-medium leading-5 tracking-[-0.09px]">
                After Mues
              </span>
              <h3 className="text-[#121212] font-sfPro font-normal leading-normal 
              text-[24px] tracking-[0.24px]
              md:text-[32px] md:tracking-[0.32px]">
                7x increase in product adoption
              </h3>
            </div>

            {/* Content Area - Placeholder */}
            <div className="flex flex-col items-center justify-center flex-1 gap-2 my-12 lg:my-0 ">
            
              {/* User Icon */}
              <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16.16 17.04C16.0667 17.0266 15.9467 17.0266 15.84 17.04C13.4933 16.96 11.6267 15.04 11.6267 12.68C11.6267 10.2666 13.5733 8.30664 16 8.30664C18.4133 8.30664 20.3733 10.2666 20.3733 12.68C20.36 15.04 18.5067 16.96 16.16 17.04Z" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24.9867 25.84C22.6133 28.0133 19.4667 29.3333 16 29.3333C12.5333 29.3333 9.38667 28.0133 7.01334 25.84C7.14667 24.5866 7.94667 23.36 9.37334 22.4C13.0267 19.9733 19 19.9733 22.6267 22.4C24.0533 23.36 24.8533 24.5866 24.9867 25.84Z" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63619 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Down Arrow */}
              <Image 
                src="/use-cases/product-adoption/svg/arrowDown.svg"
                alt="Down Arrow"
                width={12}
                height={66}
              />

              {/* Problem Description */}
              <div className='h-auto w-fit rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] py-[17px] px-6 flex justify-center items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ minWidth: 24, minHeight: 24 }}>
                  <path d="M12 9V14" stroke="#FF3200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5.00003C10.54 1.79003 13.46 1.79003 15.24 5.00003L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z" stroke="#FF3200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9945 17H12.0035" stroke="#FF3200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#474645] text-lg font-normal leading-[30px]">
                  I was unable to create a Slack integration.
                </span>
              </div>

              {/* Down Arrow */}
              <Image 
                src="/use-cases/product-adoption/svg/arrowDown.svg"
                alt="Down Arrow"
                width={12}
                height={66}
              />

              {/* Mues Cursor Mini */}
              <div className='w-fit h-auto flex-shrink-0 rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)] relative'>
                
                {/* Cursor Icon */}
                <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1.1 15H1.8585C1.86761 15 1.875 14.9926 1.875 14.9835C1.875 13.8406 2.11485 12.7103 2.57904 11.6659L2.62585 11.5606C4.39543 7.57903 7.57903 4.39543 11.5606 2.62585L11.6659 2.57904C12.7103 2.11485 13.8406 1.875 14.9835 1.875C14.9926 1.875 15 1.86761 15 1.8585V1.1C15 1.04477 14.9552 1 14.9 1H2C1.44772 1 1 1.44772 1 2V14.9C1 14.9552 1.04477 15 1.1 15Z" fill="#0089FF" stroke="#0089FF"/>
                  </svg>
                </div>

                {/* Main Content */}
                <p className="text-[#323232] font-openRunde text-[13px] font-normal leading-4 tracking-[0.13px] p-3">
                  Integrate Slack with my workspace
                </p>

                {/* Footer */}
                <div className="w-full rounded-b-[11px] bg-[#FAFAFA] flex justify-between items-center px-[11px] py-2">
                  <span className="text-[#A1A1A1] text-center font-sfPro text-[10px] font-normal">
                    Press &apos;Enter&apos; to prompt
                  </span>
                  
                  <div className="flex items-center gap-1">
                    <span className="text-[#CCC] text-center font-sfPro text-[10px] font-normal leading-3">
                      Powered by
                    </span>
                    <Image 
                      src="/svg/logoFooter.svg"
                      alt="Mues Logo"
                      width={40}
                      height={8}
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="mb-1" style={{ width: 'calc(100% + 56px)', marginLeft: '-28px' }}>
              <div className="h-[52px] rounded-[4px_4px_20px_20px] bg-[#FBFBFB] flex items-center justify-center px-4">
                <p className="text-[#777] text-center text-[13px] font-normal leading-5 tracking-[0.13px]">
                User watched Mues&apos; actions · Learn from Mues · Product adoption has increased
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* A new kind of software interaction */}
        {/* INFO : componentleştirirken her şey aynı diğerleriyle -- desciription paragrafı yok -- saadece mb-12 md:mb-15 lg:mb-18 değerleri farklı */}
        <div className="flex flex-col items-start gap-4 md:gap-6 max-w-[1168px] mt-24 md:mt-32 lg:mt-[200px] mb-12 md:mb-15 lg:mb-18 mx-auto">
          <div className="flex justify-center items-center gap-1.5 px-3 py-2 rounded-xl border border-[rgba(0,137,255,0.25)] bg-white w-fit">
            <span className="text-primary-blue text-center text-[14px] font-normal leading-[17px]">
            INCREASE ADOPTION
            </span>
          </div>

          <h2 className="max-w-xl text-primary-black font-rethinkSans font-semibold 
          text-[30px] leading-[40px] tracking-[0.3px]
          md:text-[56px] md:leading-[68px] md:tracking-[0.56px]">
            A new kind of <p>software interaction.</p> 
          </h2>
        </div>

        {/* Feature Containers */}
        <div className="w-full h-auto max-w-[1168px] mx-auto flex flex-col gap-12">
          {productAdoptionData.map((feature) => (
            <FeatureContainer
              key={feature.id}
              svgSrc={feature.svgSrc}
              svgAlt={feature.svgAlt}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>

        {/* Boost product adoption and Video */}
        <div className="w-full h-auto max-w-[1168px] mx-auto flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-12
        my-[200px]">
          {/* Text Content */}
          <p className="text-[#211D1D] text-[20px] font-medium leading-[26px] tracking-[-0.33px] text-center md:text-start">
            Boost product adoption <br  /> and reduce churn
          </p>

          {/* Divider Line */}
          <div className="hidden md:block flex-1 h-[1px] bg-[#EEE]"></div>
          <div className="block md:hidden w-[1px] h-[192px] bg-[#EEE]"></div>

          {/* Video Button */}
          <button
            className="inline-flex flex-row gap-3 items-center w-fit rounded-[4px] cursor-pointer hover:ring-1 hover:ring-offset hover:ring-[#f2f0ed] hover:ring-offset-12 hover:ring-offset-white"
            onClick={() => toast('Coming soon!')}
          >
            <div className="flex w-[85px] h-12 justify-center items-center rounded ">
              <Image
                quality={100}
                loading="lazy"
                unoptimized
                src="/ModularParts/images/modularPartsVideo2.webp"
                alt="Product adoption video preview"
                width={85}
                height={48}
                className="object-cover rounded cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-1 rounded items-start">
              <span className="text-black-121212 text-[15px] font-normal leading-[22px]">
                Churn Prevention with Mues
              </span>
              <span className="text-[#4A443F]/50 text-[13px] font-normal leading-[18px] tracking-[-0.13px]">
                Watch the video
              </span>
            </div>
          </button>
        </div>


        <UserCursor />
        
        <HowItWorks />
      </div>


      {/* DESKTOPTA Hero 2 - Deploy in 5 mins */}
      <div className="relative w-full aspect-video hidden lg:block">
        <Image
          src="/use-cases/product-adoption/images/deployFiveMinHero.webp"
          alt="Deploy in 5 mins"
          fill
          sizes="100vw"
          className="object-cover w-full h-full -z-10"
          quality={80}
          unoptimized
          loading="lazy"
        />
        {/* Ana Flex Container */}
        <div className="w-full h-full flex flex-col justify-between gap-20 xl:gap-[119px] p-12 2xl:p-20">
          
          {/* BADGE */}
          <div className="w-fit inline-flex px-[12px] py-[8px] justify-center items-center gap-[6px] rounded-[12px] border border-[rgba(255,255,255,0.25)] xl:mt-6 lg:ml-12 xl:ml-[124px]">
            <p className="text-[rgba(255,255,255,0.75)] text-center text-[14px] font-medium leading-[16px]">
              DEPLOY IN 5 MINS
            </p>
          </div>

          {/* Content */}
          <div className="w-full h-full relative">

            {/* 1. line */}
            <div className='inline-flex flex-col items-center gap-1 xl:gap-2 absolute bottom-[42%] left-[17.66%]'>
              <div className="inline-flex justify-center items-center mb-1 w-6 h-6 rounded-[8px] bg-[rgba(255,255,255,0.08)] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                <span className="text-white text-center font-sfPro text-[14px] font-[510] leading-4 tracking-[0.14px]">1</span>
              </div>

              <p className="text-white text-[16px] font-normal leading-[22px]">
              Customize your <br /> AI cursor agent
              </p>
          
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="143" viewBox="0 0 7 143" fill="none" >
                <line x1="3.5" y1="-2.18557e-08" x2="3.50001" y2="136" stroke="white" strokeOpacity="0.25"/>
                <circle cx="3.5" cy="139.5" r="3.5" transform="rotate(90 3.5 139.5)" fill="white" fillOpacity="0.25"/>
              </svg>
            </div>

            {/* 2. line */}
            <div className='inline-flex flex-col items-center gap-1 xl:gap-2 absolute bottom-[53%] left-[36%]'>
              <div className="inline-flex justify-center items-center mb-1 w-6 h-6 rounded-[8px] bg-[rgba(255,255,255,0.08)] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                <span className="text-white text-center font-sfPro text-[14px] font-[510] leading-4 tracking-[0.14px]">2</span>
              </div>

              <p className="text-white text-[16px] font-normal leading-[22px]">
              Train your agent with  <br /> your knowledge base
              </p>
          
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="103" viewBox="0 0 7 103" fill="none" >
                <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="96" stroke="white" strokeOpacity="0.25"/>
                <circle cx="3.5" cy="99.5" r="3.5" transform="rotate(90 3.5 99.5)" fill="white" fillOpacity="0.25"/>
              </svg>
            </div>

            {/* 3. line */}
            <div className='inline-flex flex-col items-center gap-1 xl:gap-2 absolute top-[44%] xl:top-[42%] left-[84%]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="130" viewBox="0 0 7 130" fill="none" >
                <line x1="3.5" y1="130" x2="3.49999" y2="7" stroke="white" strokeOpacity="0.4"/>
                <circle cx="3.5" cy="3.5" r="3.5" transform="rotate(-90 3.5 3.5)" fill="white" fillOpacity="0.4"/>
              </svg>

              <p className="text-white text-[16px] font-normal leading-[22px]">
              Add Mues script  <br /> into your product
              </p>

              <div className="inline-flex justify-center items-center mt-1 w-6 h-6 rounded-[8px] bg-[rgba(255,255,255,0.08)] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                <span className="text-white text-center font-sfPro text-[14px] font-[510] leading-4 tracking-[0.14px]">3</span>
              </div>
            </div>
            
          </div>

          {/* Bottom Content */}
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-12 lg:px-12 xl:px-[124px]">
            
            {/* Text Content */}
            <p className="text-[#777] text-[16px] leading-[22px] tracking-[0.08px]">
              Boost product adoption with changing <br className='hidden md:block' /> software interaction in your product.
            </p>
            
            {/* Divider Line */}
            <div className="hidden md:block flex-1 h-[1px] bg-[rgba(238,238,238,0.20)]"></div>
            
            {/* Get started Button */}
            <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo"
            className='inline-flex items-center justify-center px-4 py-3 rounded-[12px] bg-[rgba(255,255,255,0.12)] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]' >
              <span className="text-white text-center font-sfPro text-[14px] font-medium leading-4 tracking-[0.14px]">
                Get started
              </span>
            </a>
          </div>

        </div>
      </div>

      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>

        {/* Mobilde deploy in 5 mins yok - plug and play ve steps var */}
        <div className='block lg:hidden'>
          <PlugAndPlay/> 
          <Steps />
        </div> 

        {/* Impact and Circle Animation */}
        <div className='w-full h-auto max-w-[1168px] mx-auto mt-28 mb-[48px] md:mt-[148px] md:mb-[60px]
        flex flex-col lg:flex-row  items-center lg:items-start
        gap-y-12 lg:gap-y-0
        gap-x-0 md:gap-x-12 lg:gap-x-18'>

          {/* IMPACT */}
          <div className="w-full flex-1 max-w-[570px] flex flex-col gap-y-4 md:gap-y-6 
          items-center md:items-start text-center md:text-start">
            {/* 1.1. IMPACT badge */}
            <span className="text-primary-blue text-center text-[14px] font-normal leading-[17px] w-fit">
              <span className="flex px-3 py-2 justify-center items-center rounded-xl border border-[rgba(0,137,255,0.25)] bg-white">
                IMPACT
              </span>
            </span>

            {/* 1.2. Heading */}
            <h3 className="text-primary-black font-rethinkSans font-semibold 
            text-[30px] leading-[40px] tracking-[0.3px] 
            md:text-[56px] md:leading-[68px] md:tracking-[0.56px]">
              Limitless. Robust. Intelligent.
            </h3>

            {/* 1.3. Description */}
            <div className="text-[#474645] text-[22px] font-light leading-[38px] tracking-[-0.4px]">
              <p>AI that guides every user. <br /> As if you were sitting next to them.</p>
            </div>

            {/* 1.4. Button - Hidden on mobile (md below) */}
            <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo" className='w-fit rounded-xl inline-block'>
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

          {/* CURSOR Animations */}
          <div className='w-full h-[80%] min-h-[304px] aspect-square max-w-[456px] max-h-[412px] sm:w-[456px] sm:h-[412px] flex justify-center items-center relative'>
            <OnlyLogo width={32} height={32} fill="rgba(0, 0, 0, 0.1)" />

            {/* Circle */}
            <div className='w-[85%] h-[88%] min-w-[270px] min-h-[270px] sm:w-[360px] sm:h-[360px] aspect-[1/1] border-2 border-[rgba(0,137,255,0.15)] rounded-[360px]
            absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
            

            {/* Sol */}
            <div className='w-fit h-[auto] px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-[10px] bg-[#0089FF] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]
            absolute left-0 top-1/2 -translate-y-1/2 ml-[10px] ring-6 ring-offset-6 ring-offset-white ring-white'>
              
              <span className='absolute -top-[6px] -left-[6px] sm:-top-[10px] sm:-left-[10px] z-10'>
                <CursorSvg className="block sm:hidden" width={9} height={9} fill="#0089FF" />
                <CursorSvg className="hidden sm:block" width={14} height={14} fill="#0089FF" />
              </span>

              <p className='text-white font-openRunde text-center  font-medium
              text-[9px] leading-[14px] tracking-[0.09px]
              sm:text-[12px] sm:leading-[16px] sm:tracking-[0.12px]'>
              Analyzing..
              </p>
            </div>

            {/* Top */}
            <div className='w-fit h-[auto] px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-[10px] bg-[#0089FF] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]
            absolute top-0 left-1/2 -translate-x-1/2 mt-[16px] ring-8 ring-offset-8 ring-offset-white ring-white'>
              
              <span className='absolute -top-[6px] -left-[6px] sm:-top-[10px] sm:-left-[10px] z-10'>
                <CursorSvg className="block sm:hidden" width={9} height={9} fill="#0089FF" />
                <CursorSvg className="hidden sm:block" width={14} height={14} fill="#0089FF" />
              </span>

              <p className='text-white font-openRunde text-center  font-medium
              text-[9px] leading-[14px] tracking-[0.09px]
              sm:text-[12px] sm:leading-[16px] sm:tracking-[0.12px]'>
              Typing..
              </p>
            </div>

            {/* Right */}
            <div className='w-fit h-[auto] px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-[10px] bg-[#0089FF] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]
            absolute right-0 top-1/2 -translate-y-1/2 mr-[10px] ring-6 ring-offset-6 ring-offset-white ring-white'>
                
              <span className='absolute -top-[6px] -left-[6px] sm:-top-[10px] sm:-left-[10px] z-10'>
                <CursorSvg className="block sm:hidden" width={9} height={9} fill="#0089FF" />
                <CursorSvg className="hidden sm:block" width={14} height={14} fill="#0089FF" />
              </span>

              <p className='text-white font-openRunde text-center  font-medium
              text-[9px] leading-[14px] tracking-[0.09px]
              sm:text-[12px] sm:leading-[16px] sm:tracking-[0.12px]'>
              Searching..
              </p>  
            </div>

            {/* Bottom */}
            <div className='w-fit h-[auto] px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-[10px] bg-[#0089FF] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]
            absolute bottom-0 left-1/2 -translate-x-1/2 mb-[16px] ring-8 ring-offset-8 ring-offset-white ring-white'>
              
              <span className='absolute -top-[6px] -left-[6px] sm:-top-[10px] sm:-left-[10px] z-10'>
                <CursorSvg className="block sm:hidden" width={9} height={9} fill="#0089FF" />
                <CursorSvg className="hidden sm:block" width={14} height={14} fill="#0089FF" />
              </span>

              <p className='text-white font-openRunde text-center  font-medium
              text-[9px] leading-[14px] tracking-[0.09px]
              sm:text-[12px] sm:leading-[16px] sm:tracking-[0.12px]'>
              Clicking..
              </p>
            </div>





          </div>
        </div>

        {/* Numeric Content */}
        <div className='w-full h-auto max-w-[1168px] mx-auto border-t border-[#EEE] mt-24 md:mt-[148px] pt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 '>
          
          {/* 1. Kutu */}
          <div className="w-full flex flex-col gap-y-3 lg:pr-[20px]">
            <p className="text-[#17181A] text-[28px] font-semibold leading-[36px] tracking-[-0.8px]">3x</p>
            <p className="text-[#777] text-[14px] leading-[22px]">
              Increase product adoption<br className='hidden xl:block'/>
              with 3x faster time-to-value
            </p>
          </div>

          {/* 2. Kutu */}
          <div className="w-full flex flex-col gap-y-3 lg:pr-[20px]">
            <p className="text-[#17181A] text-[28px] font-semibold leading-[36px] tracking-[-0.8px]">82%</p>
            <p className="text-[#777] text-[14px] leading-[22px]">
              Higher retention rates among users<br className='hidden xl:block'/>
              guided by AI-powered onboarding
            </p>
          </div>

          {/* 3. Kutu */}
          <div className="w-full flex flex-col gap-y-3 lg:pr-[20px]">
            <p className="text-[#17181A] text-[28px] font-semibold leading-[36px] tracking-[-0.8px]">2.6x</p>
            <p className="text-[#777] text-[14px] leading-[22px]">
              Get higher satisfaction scores with<br className='hidden xl:block'/>
              Mues AI-powered cursor
            </p>
          </div>

          {/* 4. Kutu */}
          <div className="w-full flex flex-col gap-y-3 lg:pr-[20px]">
            <p className="text-[#17181A] text-[28px] font-semibold leading-[36px] tracking-[-0.8px]">40%</p>
            <p className="text-[#777] text-[14px] leading-[22px]">
              Reduce support ticket volume by 40%<br className='hidden xl:block'/>
              through self-service resolution
            </p>
          </div>
  
        </div>

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

        <Comments />
        
        <div className="w-4/5 max-w-[1024px] h-[1px] bg-[#fff] mx-auto hidden lg:block"></div>

        <FAQ />

        <Footer />

      </div>

    </div>
  );
}