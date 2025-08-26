import { OnlyLogo } from '../utils/svgGeneralUtils';
import { CursorSvg } from '../utils/showcase/svgShowcase';
import ButtonBlack from './ui/ButtonBlack';
import BorderBadge from './ui/BorderBadge';
import SubHeadings from './ui/SubHeadings';
import styles from './ImpactCircle.module.scss';

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
      <BorderBadge>IMPACT</BorderBadge>

      {/* 1.2. Sub-Heading */}
      <SubHeadings type="h3">
      Limitless. Robust. Intelligent.
      </SubHeadings>

      {/* 1.3. Description */}
      <div className="text-[#474645] text-[22px] font-light leading-[38px] tracking-[-0.4px]">
        <p>AI that guides every user. <br /> As if you were sitting next to them.</p>
      </div>

      {/* 1.4. Button - Hidden on mobile (md below) */}
      <ButtonBlack
        href="https://cal.com/mues-ai/demo"
        width="w-[154px]"
        height="h-12"
        badge="B"
        wrapperClassName="w-fit rounded-xl hidden md:inline-block"
        innerClassName="justify-between px-[19px] py-[13px] "
        ariaLabel="Book a demo"
      >
        Book a demo
      </ButtonBlack>
    </div>

    {/* CURSOR Animations */}
    <div className='w-full h-[80%] min-h-[304px] aspect-square max-w-[456px] max-h-[412px] sm:w-[456px] sm:h-[412px] flex justify-center items-center relative'>
      <OnlyLogo width={32} height={32} fill="rgba(0, 0, 0, 0.1)" />

      {/* Circle */}
      <div className='w-[85%] h-[88%] min-w-[270px] min-h-[270px] sm:w-[360px] sm:h-[360px] aspect-[1/1] border-2 border-[rgba(0,137,255,0.15)] rounded-[360px]
      absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
      

      {/* Sol */}
      <div className={`${styles.cursorBaseClasses}
      absolute left-0 top-1/2 -translate-y-1/2 ml-[10px] ring-6 ring-offset-6 ring-offset-white ring-white`}>
        
        <span className='absolute -top-[6px] -left-[6px] sm:-top-[10px] sm:-left-[10px] z-10'>
          <CursorSvg className="block sm:hidden" width={9} height={9} fill="#0089FF" />
          <CursorSvg className="hidden sm:block" width={14} height={14} fill="#0089FF" />
        </span>

        <p className={`${styles.cursorTextClasses}`}>
        Analyzing..
        </p>
      </div>

      {/* Top */}
      <div className={`${styles.cursorBaseClasses}
      absolute top-0 left-1/2 -translate-x-1/2 mt-[16px] ring-8 ring-offset-8 ring-offset-white ring-white`}>
        
        <span className='absolute -top-[6px] -left-[6px] sm:-top-[10px] sm:-left-[10px] z-10'>
          <CursorSvg className="block sm:hidden" width={9} height={9} fill="#0089FF" />
          <CursorSvg className="hidden sm:block" width={14} height={14} fill="#0089FF" />
        </span>

        <p className={`${styles.cursorTextClasses}`}>
        Typing..
        </p>
      </div>

      {/* Right */}
      <div className={`${styles.cursorBaseClasses}
      absolute right-0 top-1/2 -translate-y-1/2 mr-[10px] ring-6 ring-offset-6 ring-offset-white ring-white`}>
          
        <span className='absolute -top-[6px] -left-[6px] sm:-top-[10px] sm:-left-[10px] z-10'>
          <CursorSvg className="block sm:hidden" width={9} height={9} fill="#0089FF" />
          <CursorSvg className="hidden sm:block" width={14} height={14} fill="#0089FF" />
        </span>

        <p className={`${styles.cursorTextClasses}`}>
        Searching..
        </p>  
      </div>

      {/* Bottom */}
      <div className={`${styles.cursorBaseClasses}
      absolute bottom-0 left-1/2 -translate-x-1/2 mb-[16px] ring-8 ring-offset-8 ring-offset-white ring-white`}>
        
        <span className='absolute -top-[6px] -left-[6px] sm:-top-[10px] sm:-left-[10px] z-10'>
          <CursorSvg className="block sm:hidden" width={9} height={9} fill="#0089FF" />
          <CursorSvg className="hidden sm:block" width={14} height={14} fill="#0089FF" />
        </span>

        <p className={`${styles.cursorTextClasses}`}>
        Clicking..
        </p>
      </div>

    </div>
  </div>

  {/* Numeric Content */}
  <div className='w-full h-auto max-w-[1168px] mx-auto border-t border-[#EEE] mt-12 md:mt-16 pt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 '>
    
    {/* 1. Kutu */}
    <div className={`${styles.numecirContainer}`}>
      <p className={`${styles.numecirTitle}`}>3x</p>
      <p className={`${styles.numecirDescription}`}>
        Increase product adoption<br className='hidden xl:block'/>
        with 3x faster time-to-value
      </p>
    </div>

    {/* 2. Kutu */}
    <div className={`${styles.numecirContainer}`}>
      <p className={`${styles.numecirTitle}`}>82%</p>
      <p className={`${styles.numecirDescription}`}>
        Higher retention rates among users<br className='hidden xl:block'/>
        guided by AI-powered onboarding
      </p>
    </div>

    {/* 3. Kutu */}
    <div className={`${styles.numecirContainer}`}>
      <p className={`${styles.numecirTitle}`}>2.6x</p>
      <p className={`${styles.numecirDescription}`}>
        Get higher satisfaction scores with<br className='hidden xl:block'/>
        Mues AI-powered cursor
      </p>
    </div>

    {/* 4. Kutu */}
    <div className={`${styles.numecirContainer}`}>
      <p className={`${styles.numecirTitle}`}>40%</p>
      <p className={`${styles.numecirDescription}`}>
        Reduce support ticket volume by 40%<br className='hidden xl:block'/>
        through self-service resolution
      </p>
    </div>

  </div>

</>
  );
}