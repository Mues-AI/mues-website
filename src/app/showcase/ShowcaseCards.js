import { CursorSvg, MiniEnterButton, MiniLike, MiniDislike } from '../utils/showcase/svgShowcase';
import Image from 'next/image';

// Card Components
export const DropboxCard = () => (
    <div className="relative max-w-[456px] w-3xs h-auto rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1.8px_7px_0px_rgba(34,34,34,0.05)] flex flex-col p-[12px] gap-y-[10px]">

        {/* CURSOR - Absolute */}
        <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="#0061FE" />
        </div>

        {/* ilk satır */}
        <div className='w-full flex items-center gap-2 h-[18px] '>

        <div className="w-6 h-6 flex items-center justify-center">
            <Image 
                src="/showcase/svg/dropbox.svg" 
                alt="Dropbox" 
                width={16} 
                height={16}
            />
        </div>
        
        <p className="w-full flex items-center text-[#777] text-[12px] leading-[18px] tracking-[0.12px] font-openRunde">
        Dropbox AI Agent
        </p>
        </div>

        {/* İkinci satır */}
        <p className="w-full flex items-center text-[#323232] font-openRunde text-[12px] leading-[16px] tracking-[0.12px] mb-0.5">
        I can help you to create a signature
        </p>

        {/* Üçüncü ve dördüncü satır */}
        <div className="w-full flex flex-col items-center gap-2.5">
        
        {/* Üçüncü */}
        <div className="w-full flex items-center h-[28px] rounded-3xl border border-[rgba(0,97,254,0.15)] px-3 py-1.5 gap-1.5">
            <p className="text-[#0061FE] text-center font-openRunde text-[12px] font-normal leading-[16px] tracking-[0.12px]">
            Create a signature for me
            </p>

            <div className="w-4 h-4 rounded border border-[#EEE] bg-white flex justify-center pt-[1.5px]" 
        style={{ boxShadow: '0px -1px 0px 1px #D8D8D8 inset' }}>
            <MiniEnterButton />
            </div>
        
        </div>

        {/* Dördüncü */}
        <div className="w-full flex items-center h-[28px] rounded-3xl border border-[#F4F4F4] px-3 py-1.5 gap-1.5">
            <p className="text-[#323232] text-center font-openRunde text-[12px] font-normal leading-[16px] tracking-[0.12px]">
            I have another request
            </p>      
        </div>

        </div>
        
    </div>
);
  
export const HubSpotCard = () => (
    <div className="relative max-w-[456px] w-3xs h-auto rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1.8px_7px_0px_rgba(34,34,34,0.05)] flex flex-col p-[12px] gap-y-[10px]">

        {/* CURSOR - Absolute */}
        <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="#F95C35" />
        </div>

        {/* ilk satır */}
        <div className='w-full flex items-center gap-2 h-[18px] '>

        <div className="w-6 h-6 flex items-center justify-center">
            <Image 
            src="/showcase/svg/hubspot.svg" 
            alt="HubSpot" 
            width={16} 
            height={16}
            />
        </div>
        
        <p className="w-full flex items-center text-[#777] text-[12px] leading-[18px] tracking-[0.12px] font-openRunde">
        Hubspot AI Assistant
        </p>
        </div>

        {/* İkinci satır */}
        <p className="w-full flex items-center text-[#323232] font-openRunde text-[13px] leading-[18px] tracking-[0.13px] mb-0.5">
        A contact is anyone whose information is stored in your CRM—this could be a customer, a prospect you interact with.
        <br /><br />
        Anything else you&apos;d like to ask me?
        </p>

        {/* ÇİZGİ - hubspot */}
        <div className="w-full h-[1px] bg-[#F5F6FA] mb-0.5"></div>

        {/* Reply Paragraph */}
        <p className="text-[#BBB] font-openRunde text-[13px] leading-[16px]">
        Reply to Hubspot AI Assistant
        </p>
    </div>
);

export const MixpanelCard = () => (
    <div className="relative max-w-[456px] w-3xs h-auto rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1.8px_7px_0px_rgba(34,34,34,0.05)] flex flex-col p-[12px] gap-y-[10px]">

        {/* CURSOR - Absolute */}
        <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="#7856FF" />
        </div>

        {/* ilk satır */}
        <div className='w-full flex items-center gap-2 h-[18px] '>

        <div className="w-6 h-6 flex items-center justify-center">
            <Image 
            src="/showcase/svg/mixpanel.svg" 
            alt="Mixpanel" 
            width={16} 
            height={16}
            />
        </div>
        
        <p className="w-full flex items-center text-[#777] text-[12px] leading-[18px] tracking-[0.12px] font-openRunde">
        Mixpanel Agentic AI
        </p>
        </div>

        {/* İkinci satır */}
        <p className="w-full flex items-center text-[#323232] font-openRunde text-[13px] leading-[18px] tracking-[0.13px] mb-0.5">
        The best way is to set up a funnel analysis in Mixpanel to see each step users take and where most of them leave your product. This helps you spot the drop-off points. <br /><br /> Do you want me to create one for you?
        </p>

        {/* ÇİZGİ - hubspot */}
        <div className="w-full h-[1px] bg-[#F5F6FA] mb-0.5"></div>

        {/* Reply Paragraph */}
        <p className="text-[#BBB] font-openRunde text-[13px] leading-[16px]">
        Reply to Mixpanel AI Assistant
        </p>
    </div>
);

export const JiraCard = () => (
    <div className="relative max-w-[456px] w-3xs h-auto rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1.8px_7px_0px_rgba(34,34,34,0.05)] flex flex-col p-[12px] gap-y-[10px]">

        {/* CURSOR - Absolute */}
        <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="#1868DB" />
        </div>

        {/* ilk satır */}
        <div className='w-full flex items-center gap-2 h-[18px] '>

        <div className="w-6 h-6 flex items-center justify-center">
            <Image 
                src="/showcase/svg/jira.svg" 
                alt="Jira" 
                width={16} 
                height={16}
            />
        </div>
        
        <p className="w-full flex items-center text-[#777] text-[12px] leading-[18px] tracking-[0.12px] font-openRunde">
        Jira AI Companion
        </p>
        </div>

        {/* İkinci satır */}
        <p className="w-full flex items-center text-[#323232] font-openRunde text-[12px] leading-[16px] tracking-[0.12px] mb-0.5">
        What to do with incomplete tasks?
        </p>

        {/* Üçüncü ve dördüncü satır */}
        <div className="w-full flex flex-col items-center gap-2.5">
        
        {/* Üçüncü */}
        <div className="w-full flex items-center h-[28px] rounded-3xl border border-[#1868DB26] px-3 py-1.5 gap-1.5">
            <p className="text-[#1868DB] text-center font-openRunde text-[12px] font-normal leading-[16px] tracking-[0.12px]">
            Move to the next sprint
            </p>

            <div className="w-4 h-4 rounded border border-[#EEE] bg-white flex justify-center pt-[1.5px]" 
        style={{ boxShadow: '0px -1px 0px 1px #D8D8D8 inset' }}>
            <MiniEnterButton />
            </div>
        
        </div>

        {/* Dördüncü */}
        <div className="w-full flex items-center h-[28px] rounded-3xl border border-[#F4F4F4] px-3 py-1.5 gap-1.5">
            <p className="text-[#323232] text-center font-openRunde text-[12px] font-normal leading-[16px] tracking-[0.12px]">
            I have another request
            </p>      
        </div>

        </div>
        
    </div>
);

export const ProductboardCard = () => (
    <div className="relative max-w-[456px] w-3xs h-auto rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1.8px_7px_0px_rgba(34,34,34,0.05)] flex flex-col p-[12px] gap-y-[10px]">

        {/* CURSOR - Absolute */}
        <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="#F4BE00" />
        </div>

        {/* ilk satır */}
        <div className='w-full flex items-center gap-2 h-[18px] '>

        <div className="w-6 h-6 flex items-center justify-center">
            <Image 
                src="/showcase/svg/productboard.svg" 
                alt="Productboard" 
                width={16} 
                height={16}
            />
        </div>
        
        <p className="w-full flex items-center text-[#777] text-[12px] leading-[18px] tracking-[0.12px] font-openRunde">
        Productboard AI Agent
        </p>
        </div>

        {/* İkinci satır */}
        <p className="w-full flex items-center text-[#323232] font-openRunde text-[12px] leading-[16px] tracking-[0.12px] mb-0.5">
        How would you like to handle feedback?
        </p>

        {/* Üçüncü ve dördüncü satır */}
        <div className="w-full flex flex-col items-center gap-2.5">
        
        {/* Üçüncü */}
        <div className="w-full flex items-center h-[28px] rounded-3xl border border-[#F4BE0026] px-3 py-1.5 gap-1.5">
            <p className="text-[#F4BE00] text-center font-openRunde text-[12px] font-normal leading-[16px] tracking-[0.12px]">
            Summarize feedback for me
            </p>

            <div className="w-4 h-4 rounded border border-[#EEE] bg-white flex justify-center pt-[1.5px]" 
        style={{ boxShadow: '0px -1px 0px 1px #D8D8D8 inset' }}>
            <MiniEnterButton />
            </div>
        
        </div>

        {/* Dördüncü */}
        <div className="w-full flex items-center h-[28px] rounded-3xl border border-[#F4F4F4] px-3 py-1.5 gap-1.5">
            <p className="text-[#323232] text-center font-openRunde text-[12px] font-normal leading-[16px] tracking-[0.12px]">
            I have another request
            </p>      
        </div>

        </div>
        
    </div>
);

export const ClickUpCard = () => (
    <div className="relative max-w-[456px] w-3xs h-auto rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1.8px_7px_0px_rgba(34,34,34,0.05)] flex flex-col p-[12px] gap-y-[10px]">

        {/* CURSOR - Absolute */}
        <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="#FA12E3" />
        </div>

        {/* ilk satır */}
        <div className='w-full flex items-center gap-2 h-[18px] '>

        <div className="w-6 h-6 flex items-center justify-center">
            <Image 
                src="/showcase/svg/clickup.svg" 
                alt="ClickUp" 
                width={16} 
                height={16}
            />
        </div>
        
        <p className="w-full flex items-center text-[#777] text-[12px] leading-[18px] tracking-[0.12px] font-openRunde">
        ClickUp Agent
        </p>
        </div>

        {/* İkinci satır */}
        <p className="w-full flex items-center text-[#323232] font-openRunde text-[12px] leading-[16px] tracking-[0.12px] mb-0.5">
        How was your experience?
        </p>

        {/* Üçüncü ve dördüncü satır */}
        <div className="w-full flex justify-center items-center gap-2">
        
        {/* Üçüncü */}
        <div className='w-1/2 py-1.5 flex justify-center items-center rounded-lg border border-[#F1F1F1] gap-1.5'>
            <MiniLike />

            <p className='text-[#323232] text-center font-openRunde text-[12px] leading-[16px] tracking-[0.12px]'>
            Helpful
            </p>
        </div>

        {/* Dördüncü */}
        <div className='w-1/2 py-1.5 flex justify-center items-center rounded-lg border border-[#F1F1F1] gap-1.5'>
            <MiniDislike />

            <p className='text-[#323232] text-center font-openRunde text-[12px] leading-[16px] tracking-[0.12px]'>
            Not helpful
            </p>
        </div>

        </div>
        
    </div>
);

export const AWSCard = () => (
    <div className="relative max-w-[456px] w-3xs h-auto rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1.8px_7px_0px_rgba(34,34,34,0.05)] flex flex-col p-[12px] gap-y-[10px]">

        {/* CURSOR - Absolute */}
        <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="#FF9900" />
        </div>

        {/* ilk satır */}
        <div className='w-full flex items-center gap-2 h-[18px] '>

        <div className="w-6 h-6 flex items-center justify-center">
            <Image 
                src="/showcase/svg/aws.svg" 
                alt="Amazon Web Services" 
                width={23} 
                height={13}
            />
        </div>
        
        <p className="w-full flex items-center text-[#777] text-[12px] leading-[18px] tracking-[0.12px] font-openRunde">
        AWS AI Assistant
        </p>
        </div>

        {/* İkinci satır */}
        <p className="w-full flex items-center text-[#323232] font-openRunde text-[12px] leading-[16px] tracking-[0.12px] mb-0.5">
        How was your experience?
        </p>

        {/* Üçüncü ve dördüncü satır */}
        <div className="w-full flex justify-center items-center gap-2">
        
        {/* Üçüncü */}
        <div className='w-1/2 py-1.5 flex justify-center items-center rounded-lg border border-[#F1F1F1] gap-1.5'>
            <MiniLike />

            <p className='text-[#323232] text-center font-openRunde text-[12px] leading-[16px] tracking-[0.12px]'>
            Helpful
            </p>
        </div>

        {/* Dördüncü */}
        <div className='w-1/2 py-1.5 flex justify-center items-center rounded-lg border border-[#F1F1F1] gap-1.5'>
            <MiniDislike />

            <p className='text-[#323232] text-center font-openRunde text-[12px] leading-[16px] tracking-[0.12px]'>
            Not helpful
            </p>
        </div>

        </div>
        
    </div>
);
