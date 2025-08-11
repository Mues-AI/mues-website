"use client";
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
import SvgIconAi from '../utils/svgIconAi';
import ButtonWhite from './ui/ButtonWhite';

export default function MainContent() {
  const [domain, setDomain] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!domain.trim()) {
      toast.error('Please enter your domain');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/web-api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          domain: domain.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success('Successfully submitted!');
      
      setDomain('');
      
      setTimeout(() => {
        window.open('https://cal.com/mues-ai/demo', '_blank');
      }, 1000);
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <main className="relative w-full bg-[#010101]" style={{ height: 'calc(100vh - 68px)'}}>
      <Image
        src="/images/mainNewHero.webp"
        alt="Main Image"
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        className="object-cover w-full h-full opacity-[0.16]"
        quality={80}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="relative z-10 w-full h-full p-6 pt-10 pb-6 md:px-8 md:py-12 lg:pb-[8.47vh] lg:px-20 lg:pt-[11.754vh] flex flex-col gap-6 lg:gap-0 justify-between">
        
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 xl:gap-15'>
          {/* HEADER - Description - Get Domain Input */}
          <div className="w-fit flex-1 ">
            <div className="mb-6 max-w-fit">
              <h1 className="text-white font-rethinkSans font-bold leading-12 md:leading-16 lg:leading-[72px] tracking-[0.36px] md:tracking-[0.48px] lg:tracking-[0.56px] font-feature-settings-salt text-3xl xs:text-4xl sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] lg:whitespace-nowrap">
              Your users get stuck,
                <span className="block text-white font-instrumentSerif italic font-normal leading-12 lg:leading-[72px] tracking-[0.36px] lg:tracking-[0.56px] font-feature-settings-salt text-3xl xs:text-4xl sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] ">
                AI Cursor solves instantly
                </span>
              </h1>
            </div>
            
            <p className="max-w-[520px] text-[#CCC] font-light mt-2 md:mt-4 lg:mt-6 
            text-base leading-7 tracking-[0.16px]
            md:text-lg md:leading-8 md:tracking-[0.2px]
            lg:text-[20px] lg:leading-9 lg:tracking-[0.2px]">
            Users just ask, and AI Cursor handles the rest right away. Instantly, personalized, and 24/7.
            </p>
            
            <form onSubmit={handleSubmit} className='max-w-[442px] flex flex-col items-center xs:flex-row xs:items-start gap-2 mt-4 md:mt-6 lg:mt-8'>

              <input 
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="yourproduct.com"
                disabled={isSubmitting}
                className="w-full h-[48px] min-w-[130px] flex-1 rounded-xl border border-[#2A2A2A] bg-[#121212] px-4 pt-[15px] pb-[16px]
                  text-[rgba(255,255,255,0.33)] font-Inter text-[14px] font-normal tracking-[0.14px] leading-[17px]
                  hover:border-[#333] hover:text-[rgba(255,255,255,0.50)]
                  focus:border-[#2A2A2A] focus:text-white focus:outline-none
                  placeholder:text-[rgba(255,255,255,0.33)] placeholder:font-Inter placeholder:text-[14px] placeholder:tracking-[0.14px] placeholder:leading-[17px]
                  placeholder:hover:text-[rgba(255,255,255,0.50)]
                  [&:not(:placeholder-shown)]:border-[#2A2A2A] [&:not(:placeholder-shown)]:bg-[#121212] [&:not(:placeholder-shown)]:text-white
                  disabled:opacity-50 disabled:cursor-not-allowed"
              />

              <div className="flex flex-col gap-2 items-center">
                {/* Get a demo button */}
                <ButtonWhite
                  onClick={handleButtonClick}
                  ariaLabel="Get a demo"
                  className="gap-1"
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <svg className="animate-spin h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M4.45508 9.95998L7.71508 6.69998C8.10008 6.31498 8.10008 5.68498 7.71508 5.29998L4.45508 2.03998" stroke="#17181A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )
                  }
                  >
                  {isSubmitting ? 'Submitting...' : 'Get a demo'}
                </ButtonWhite>

                <p className="text-[rgba(255,255,255,0.66)] font-openRunde text-[11px] font-normal leading-normal tracking-[0.11px]">
                  on your own product!
                </p>
              </div>

            </form>

          </div>

          {/* Video */}
          <div className="w-full min-[530px]:w-[400px] md:w-5/12  flex-1 min-w-0 flex items-start justify-center">
            <video
              className="rounded-xl w-full aspect-[372/233] lg:max-w-[744px] lg:max-h-[466px] object-cover"
              style={{
                width: '100%',
                height: 'auto',
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/videos/videoFirstFrame.webp"
            >
              <source src="/videos/mainVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>

        <div className="mt-auto">
          <p className="text-[rgba(255,255,255,0.40)] text-xs md:text-sm font-light leading-4 tracking-[0.11px] md:tracking-[0.14px] mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 w-fit ">
            Compatible with all major LLM providers
          </p>
          
          {/* Mobile: Animasyonlu carousel (lg breakpoint altında) */}
          <div className="w-full overflow-hidden lg:hidden">
            <div className="inline-flex whitespace-nowrap animate-marquee">
              {/* Logolar iki kez listelendiğinde sonsuz döngü daha temiz görünür */}
              {[...logos, ...logos].map((logo, idx) => (
                <div key={idx} className="mx-4 flex items-center justify-center">
                  <SvgIconAi 
                    name={logo.name} 
                    width={logo.width} 
                    height={logo.height} 
                    alt={logo.alt} 
                    opacity="0.4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Statik logo listesi (lg breakpoint ve üstü) */}
          <div className="w-fit h-8 hidden lg:flex items-center space-x-6">
            {logos.map((logo, idx) => (
              <SvgIconAi 
                key={idx}
                name={logo.name} 
                width={logo.width} 
                height={logo.height} 
                alt={logo.alt} 
                opacity="0.4" 
              />
            ))}
          </div>
          
        </div>

      </div>
    </main>
  );
}