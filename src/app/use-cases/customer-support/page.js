'use client'

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { CursorSvg } from '../../utils/svgOurBrand';
import SvgIconAiSprite from '../../utils/svgIconAiSprite';
import { customerSupportData } from '../../data/usecase-customerSupportData';
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
import BorderBadge from '../../components/ui/BorderBadge';
import CallToAction from '@/app/components/ui/CallToAction';
import { ProfileCircle,Danger,DocumentText,MessageQuestion } from 'iconsax-react';
import HeadingBadge from '@/app/components/ui/HeadingBadge';
import H1 from '@/app/components/ui/H1';
import SubHeadings from "../../components/ui/SubHeadings";
import CursorPrompt from '@/app/components/ui/cursorPrompt/cursorPrompt';


function FeatureContainer({
  svgSrc,
  svgAlt,
  icon,
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
          {icon ? icon : <Image src={svgSrc} alt={svgAlt} width={32} height={32} />}
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

export default function CustomerSupport() {
  
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
    <div className='min-h-screen flex flex-col'>
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

            {/* HeadingBadge */}
            <HeadingBadge 
            variant="dark"
            icon={
              <CursorSvg width={12} height={12} fill="#979797" />
            }
            >
            CUSTOMER SUPPORT
            </HeadingBadge >

            {/* Main Heading */}
            <H1 variant="white" className="mt-2 md:mb-2">
            Guide users step by step while reducing costs
            </H1>

            {/* subdesc */}
            <p className="w-full text-center text-[#CCC] text-[20px] font-normal leading-[36px] tracking-[0.2px] not-italic">
            Mues AI is the first context-aware AI support agent to resolve support issues instantly and 24/7, reducing support costs.
            </p>

            {/* Get started button */}
            <ButtonWhite
            href="https://cal.com/mues-ai/demo"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Get started"
            badge="G"
            className="mt-2 md:mt-4 gap-2"
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
            Compatible with all major LLM providers
          </p>
          
          {/* Mobile: Animated infinite carousel (< 1024px) */}
          <div className="lg:hidden w-full overflow-hidden flex items-center h-8">
            <div className="inline-flex items-center whitespace-nowrap animate-marquee">
              {/* Duplicate logos for seamless infinite loop */}
              {[...logos, ...logos].map((logo, idx) => (
                <div key={`${logo.name}-${idx}`} className="mx-6 flex items-center justify-center flex-shrink-0">
                  <SvgIconAiSprite 
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
                <SvgIconAiSprite 
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

         <BorderBadge>PROBLEM</BorderBadge>

          <SubHeadings type="h2" className="max-w-lg text-center">
          Stop Losing Users in Support Friction
          </SubHeadings>

          <p className="subHeadingsDescription w-full text-center">
            Users expect instant answers. Your team spends hours on recurring tickets instead of scaling what matters. Traditional bots fail to adapt, and static help docs get ignored.
          </p>

        </div>

        {/* BEFORE AND AFTER CARDS */}
        <div className="max-w-[1172px] mx-auto flex flex-col lg:flex-row gap-6">
          
          {/* BEFORE MUES CARD */}
          <div className="relative flex-1 h-auto lg:min-h-[652px] rounded-[24px] border border-[#EEE] bg-white p-8 pb-0 flex flex-col">
            {/* Header */}
            <div className="w-full flex flex-col gap-3">
              <span className="text-[#777] text-[13px] md:text-[14px] font-medium leading-5 tracking-[-0.09px]">
                Before Mues AI
              </span>
              <h3 className="text-[#121212] font-sfPro font-normal leading-normal 
              text-[24px] tracking-[0.24px]
              md:text-[32px] md:tracking-[0.32px]">
                Overflowing/recurring support tickets
              </h3>
            </div>

            {/* Content Area - Placeholder */}
            <div className="flex flex-col items-center justify-center flex-1 gap-2 my-12 lg:my-0 ">
            
              {/* User Icon */}
              <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4">
                <ProfileCircle size="32" color="#777777"/>
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
                <Danger size="24" color="#ff3200"/>
                <span className="text-[#474645] text-lg font-normal leading-[30px]">
                I don&apos;t know how to change my billing info.
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
              <div className='flex flex-row flex-wrap justify-center items-center gap-4 w-fit min-h-22'>
                {/* Document Text */}
                <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4 flex items-center justify-center"> 
                  <DocumentText size="32" color="#17181a"/>
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
                  <MessageQuestion size="32" color="#17181a"/>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="mb-1" style={{ width: 'calc(100% + 56px)', marginLeft: '-28px' }}>
              <div className="h-[52px] rounded-[4px_4px_20px_20px] bg-[#FBFBFB] flex items-center justify-center px-4">
                <p className="text-[#777] text-center text-[13px] font-normal leading-5 tracking-[0.13px]">
                Your support team is buried in repetitive questions while users wait—and churn.
                </p>
              </div>
            </div>
          </div>

          {/* AFTER MUES CARD */}
          <div className="relative flex-1 h-auto lg:min-h-[652px] rounded-[24px] border border-[#EEE] bg-white p-8 pb-0 flex flex-col">
            {/* Header */}
            <div className="w-full flex flex-col gap-3">
              <span className="text-[#777] text-[13px] md:text-[14px] font-medium leading-5 tracking-[-0.09px]">
                After Mues AI
              </span>
              <h3 className="text-[#121212] font-sfPro font-normal leading-normal 
              text-[24px] tracking-[0.24px]
              md:text-[32px] md:tracking-[0.24px]">
                Reduce support costs by 40%
              </h3>
            </div>

            {/* Content Area - Placeholder */}
            <div className="flex flex-col items-center justify-center flex-1 gap-2 my-12 lg:my-0 ">
            
              {/* User Icon */}
              <div className="w-16 h-16 rounded-2xl border border-[#F4F4F4] bg-white shadow-[0px_1px_4px_0px_rgba(23,24,26,0.05)] p-4">
                <ProfileCircle size="32" color="#777777"/>
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
                <Danger size="24" color="#ff3200"/>
                <span className="text-[#474645] text-lg font-normal leading-[30px]">
                I don&apos;t know how to change my billing info.
                </span>
              </div>

              {/* Down Arrow */}
              <Image 
                src="/use-cases/product-adoption/svg/arrowDown.svg"
                alt="Down Arrow"
                width={12}
                height={66}
              />
              
              <div className='flex items-center justify-center min-h-22'>
              <CursorPrompt prompt="Change my billing information to XYZ inc."/>
              </div>
            </div>

            {/* Footer */}
            <div className="mb-1" style={{ width: 'calc(100% + 56px)', marginLeft: '-28px' }}>
              <div className="h-[52px] rounded-[4px_4px_20px_20px] bg-[#FBFBFB] flex items-center justify-center px-4">
                <p className="text-[#777] text-center text-[13px] font-normal leading-5 tracking-[0.13px]">
                Users solve problems in-product—before they become support issues
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* A new kind of software interaction */}
        {/* INFO : componentleştirirken her şey aynı diğerleriyle -- desciription paragrafı yok -- saadece mb-12 md:mb-15 lg:mb-18 değerleri farklı */}
        <div className="flex flex-col items-start gap-4 md:gap-6 max-w-[1168px] mt-24 md:mt-32 lg:mt-[200px] mb-12 md:mb-15 lg:mb-18 mx-auto">
          <BorderBadge>AI-POWERED SUPPORT</BorderBadge>

          <SubHeadings type="h2" className="max-w-xl">
          Mues AI transforms how support happens
          </SubHeadings>
        </div>

        {/* Feature Containers */}
        <div className="w-full h-auto max-w-[1168px] mx-auto flex flex-col gap-12">
          {customerSupportData.map((feature) => (
            <FeatureContainer
              key={feature.id}
              svgSrc={feature.svgSrc}
              svgAlt={feature.svgAlt}
              icon={feature.icon}
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
          Your cursor becomes <br /> an AI support agent
          </p>

          {/* Divider Line */}
          <div className="hidden md:block flex-1 h-[1px] bg-[#EEE]"></div>
          <div className="block md:hidden w-[1px] h-[192px] bg-[#EEE]"></div>

          {/* Video Button */}
          <button
            className="inline-flex flex-row gap-3 items-center w-fit rounded-[4px] cursor-pointer hover:ring-1 hover:ring-offset hover:ring-[#f2f0ed] hover:ring-offset-12 hover:ring-offset-white"
            onClick={() => toast('Coming soon!')}
          >
            <div className="flex w-[85px] h-12 justify-center items-center rounded relative">
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
              <Image src="/svg/play.svg" alt="play button svg" sizes="15px" width={15} height={16}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'/>
            </div>

            <div className="flex flex-col gap-1 rounded items-start">
              <span className="text-black-121212 text-[15px] font-normal leading-[22px]">
              Reduce support ticket volume
              </span>
              <span className="text-[#4A443F]/50 text-[13px] font-normal leading-[18px] tracking-[-0.13px]">
                Watch the video
              </span>
            </div>
          </button>
        </div>


        <UserCursor />
        
        <div className='lg:pt-[124px] lg:pb-[80px]'>
          <HowItWorks />
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

        <CallToAction 
        text="Drive more support<br/>for your product."
        highlightWords={["support"]}
        buttons={[
          <ButtonBlack
            key="get-started"
            href="https://cal.com/mues-ai/demo"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Get started"
            width="w-[154px]"
            height="h-12"
            badge="G"
            innerDivPadding="px-[19px] py-[13px]"
            className="min-w-fit"
          >
            Get started
          </ButtonBlack>
        ]}
      />
        <Comments />
        
        <div className="w-4/5 max-w-[1024px] h-[1px] bg-[#fff] mx-auto hidden lg:block"></div>

        <FAQ type="customerSupport" />

        <Footer />

      </div>

    </div>
  );
}