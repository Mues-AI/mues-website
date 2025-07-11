import { OnlyLogo } from '../utils/svgGeneralUtils';
import { CursorSvg } from '../utils/showcase/svgShowcase';

export default function ImpactCircle() {
  return (
<>
  {/* Impact and Circle Animation */}
  <div className='w-full h-auto max-w-[1168px] mx-auto mt-28 mb-[48px] md:mt-[200px] md:mb-[60px]
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
  <div className='w-full h-auto max-w-[1168px] mx-auto border-t border-[#EEE] mt-12 md:mt-16 pt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 '>
    
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

</>
  );
}