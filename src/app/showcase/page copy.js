import Image from 'next/image';
import Navbar from '../components/Navbar';
import { CursorSvg, MiniEnterButton, MiniLike, MiniDislike } from '../utils/showcase/svgShowcase';

import AAAEmpty from '../components/AAAEmpty';

// Card Components
const DropboxCard = () => (
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

const HubSpotCard = () => (
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

const MixpanelCard = () => (
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

const JiraCard = () => (
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

const ProductboardCard = () => (
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

const ClickUpCard = () => (
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

const AWSCard = () => (
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

export default function Showcase() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant="light" />

      {/* Badget - Heading */}
      <div className="w-full flex flex-col items-center p-6 md:py-4 md:px-12 lg:px-[80px] mx-auto mt-[132px] mb-12">
        
        {/* Badge */}
        <div className="w-fit h-fit bg-f8f8f8 rounded-full py-[7px] px-3 flex items-center justify-center gap-2 mb-6">
          <CursorSvg width={12} height={12} fill="#777777" />

          <div className="text-center text-[12px] leading-4 tracking-[0.12px] text-[#777]">
          INCREASE PRODUCT ADOPTION
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="w-[544px] text-primary-black text-center font-rethinkSans text-[56px] font-bold leading-[64px] tracking-[0.56px] font-feature-settings-salt not-italic">
          See Mues AI<br />
          in action on your<br />
          favorite softwares
        </h1>
      </div>


      {/* Animation Container */}
      <div className="w-full h-[374px] flex relative bg-red-300">
        
        {/* AWS - Sol Alt */}
        <div className="absolute -left-12 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="132" viewBox="0 0 150 132" fill="none" style={{
            filter: 'drop-shadow(0px 0px 4px rgba(34, 34, 34, 0.05))'
          }}>
            <path d="M65.041 6.25C69.4674 -1.41649 80.5326 -1.41649 84.959 6.25L147.313 114.25C151.74 121.917 146.206 131.5 137.354 131.5H12.6465C3.79384 131.5 -1.73966 121.917 2.68652 114.25L65.041 6.25Z" stroke="#EEEEEE"/>
          </svg>
        </div>

        {/* Jira - Sol Orta */}
        <div className="absolute bottom-[46px] left-[124px] w-[148px] h-[148px] rounded-full border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.07)]">
        </div>

        {/* HubSpot - Sol İlk */}
        <div className="absolute bottom-[94px] left-[320px] w-[148px] h-[148px] rounded-3xl border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)]">
        </div>

        {/*  ////////////////////////////////////////////////////////////////////// */}
        {/* Central Dropbox AI Agent Card */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 cursor-pointer scale-[1.75] origin-top">

          <ClickUpCard />
          <AWSCard />









        </div>
        {/*  ////////////////////////////////////////////////////////////////////// */}

        {/* Mixpanel - Sağ İlk */}
        <div className="absolute bottom-[94px] right-[320px] w-[148px] h-[148px] rounded-3xl border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)]">
        </div>

        {/* ClickUp - Sağ Orta */}
        <div className="absolute bottom-[46px] right-[124px] w-[148px] h-[148px] rounded-full border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.07)]">
        </div>

        {/* Productboard - Sağ Alt */}
        <div className="absolute -right-12 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="132" viewBox="0 0 150 132" fill="none" style={{
            filter: 'drop-shadow(0px 0px 4px rgba(34, 34, 34, 0.05))'
          }}>
            <path d="M65.041 6.25C69.4674 -1.41649 80.5326 -1.41649 84.959 6.25L147.313 114.25C151.74 121.917 146.206 131.5 137.354 131.5H12.6465C3.79384 131.5 -1.73966 121.917 2.68652 114.25L65.041 6.25Z" stroke="#EEEEEE"/>
          </svg>
        </div>
      </div>




      <AAAEmpty />
    </div>
  );
}