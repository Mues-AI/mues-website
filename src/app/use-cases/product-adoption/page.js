'use client'

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { CursorSvg } from '../../utils/showcase/svgShowcase';
import SvgIconAi from '../../utils/svgIconAi';
import { productAdoptionData } from '../../data/usecase-prodocutAdoptionData';
import { toast } from 'sonner';
import UserCursor from '../../components/UserCursor';
import HowItWorks from '../../components/HowItWorks';
import PlugAndPlay from '../../components/PlugAndPlay';
import Steps from '../../components/Steps';
import Comments from '../../components/Comments';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';
import DeployFiveHero from '../../components/DeployFiveHero';
import ImpactCircle from '../../components/ImpactCircle';
import ButtonBlack from '@/app/components/ui/ButtonBlack';
import ButtonWhite from '@/app/components/ui/ButtonWhite';
import Badge from '../../components/ui/Badge';
import CallToAction from '@/app/components/ui/CallToAction';

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

            {/* Get started button */}
            <ButtonWhite
            href="https://cal.com/mues-ai/demo"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Get started"
            badge="G"
            className="mt-2 md:mt-4"
            padding="py-3.5 px-[19px]"
            >
            Get started
            </ButtonWhite>

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

      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>

        {/* Problem Section - Like Meet Mues Section */}
        <div className="flex flex-col items-center gap-4 md:gap-6 max-w-[1168px] mt-24 md:mt-32 lg:mt-[152px] mb-12 md:mb-15 lg:mb-18 mx-auto">

          <Badge>PROBLEM</Badge>

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
          <div className="relative flex-1 h-auto lg:h-[652px] rounded-[24px] border border-[#EEE] bg-white py-8 px-7.5 pb-0 flex flex-col">
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
          <Badge>INCREASE ADOPTION</Badge>

          <h2 className="max-w-xl text-primary-black font-rethinkSans font-semibold 
          text-[30px] leading-[40px] tracking-[0.3px]
          md:text-[56px] md:leading-[68px] md:tracking-[0.56px]">
            A new kind of <br /> software interaction.
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


      <DeployFiveHero />  

      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>

        {/* Mobilde deploy in 5 mins yok - plug and play ve steps var */}
        <div className='block lg:hidden'>
          <PlugAndPlay/> 
          <Steps />
        </div> 

        <ImpactCircle />

        <CallToAction 
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
          </ButtonBlack>
        ]}
      />

        <Comments />
        
        <div className="w-4/5 max-w-[1024px] h-[1px] bg-[#fff] mx-auto hidden lg:block"></div>

        <FAQ />

        <Footer />

      </div>

    </div>
  );
}