import Image from 'next/image';
import Badge from './ui/Badge';

export default function DeployFiveHero() {
    return (

// DESKTOPTA Hero 2 - Deploy in 5 mins
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
        
        {/* DEPLOY IN 5 MINS BADGE */}
        <Badge 
        className="bg-transparent border-[rgba(255,255,255,0.25)] xl:mt-6 lg:ml-12 xl:ml-[124px]"
        textClassName="text-[rgba(255,255,255,0.75)]"
        padding="px-[12px] py-[8px]"
        >
        DEPLOY IN 5 MINS
        </Badge>

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

    );
}