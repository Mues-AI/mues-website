"use client"

import RoiCalculatorComponent from "../components/RoiCalculator"
import Navbar from "../components/Navbar"
import Image from "next/image"
import ButtonWhite from "../components/ui/ButtonWhite"
import CallToAction from "../components/ui/CallToAction"
import ButtonBlack from '../components/ui/ButtonBlack.js';
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import H1 from "../components/ui/H1"


export default function RoiCalculator() {
  return (
  <>
  <section className="relative">
    <Image
      src="/images/mainNewHero.webp"
      alt="Main Image"
      fill
      sizes="100vw"
      priority
      fetchPriority="high"
      className="object-cover w-full h-full"
      quality={80}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />

    <Navbar />
    
    {/* Hero Section */}
    <main className="relative flex flex-row items-center justify-between h-auto lg:h-[650px]">

      {/* Heading */}
      <div className="w-[400] sm:w-full max-w-[640px] flex flex-col items-center gap-4 mx-auto z-10
      mt-[104px] mb-[128px] 
      md:mt-[128px] md:mb-[138px] 
      lg:mt-[148px] lg:mb-[148px]  ">

          {/* Main Heading */}
          <H1 variant="white" className="md:mb-2">
          Mues AI <br/> ROI Calculator
          </H1>
          

          {/* Subheading */}
          <p className="w-full text-center text-[#CCC] text-[20px] font-normal leading-[36px] tracking-[0.2px] not-italic">
          Mues AI that guides every user 7/24. <br/> As if you were sitting next to them.
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


    </main>
    
  </section>

  <section>

    <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>

    <RoiCalculatorComponent />

    {/* Get started Frame */}
    <div className="w-full max-w-[1168px] mx-auto mt-24 md:mt-[200px] rounded-2xl flex flex-row justify-center items-center px-6 py-4 xs:p-8 md:px-12 md:py-10 overflow-hidden"
    style={{ background: 'url(/showcase/images/talkWithBg.webp) no-repeat center center',backgroundSize: 'cover'}}>

      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-12">
        
        {/* Text Content */}
        <p className="text-white text-[20px] font-medium leading-[26px] tracking-[-0.33px]">
          Boost product adoption <br className='hidden md:block' /> and reduce support cost
        </p>
        
        {/* Divider Line */}
        <div className="hidden md:block flex-1 h-[1px] bg-[rgba(238,238,238,0.20)]"></div>
        
        {/* Get started button */}
        <ButtonWhite
          href="https://cal.com/mues-ai/talk-with-sales"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="Get started"
          className="max-w-[122px]"
          >
          Get started
        </ButtonWhite>
        
      </div>
    </div>

    <CallToAction 
      text="Drive more adoption<br/>for your product."
      highlightWords={["adoption"]}
      buttons={[
          <ButtonBlack
          key="book-a-demo"
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

    <FAQ />

    <Footer />
    </div>
  </section>
  </>
  )
} 