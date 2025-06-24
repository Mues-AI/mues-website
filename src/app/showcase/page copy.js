import Navbar from '../components/Navbar';
import { CursorSvg } from '../utils/showcase/svgShowcase';

import AAAEmpty from '../components/AAAEmpty';

const DropboxCard = () => (
  <div className="relative max-w-[456px] w-3xs h-auto rounded-xl border border-[#F1F1F1] bg-white shadow-[0px_1.8px_7px_0px_rgba(34,34,34,0.05)] flex flex-col p-[12px] gap-y-[10px]">

    {/* CURSOR - Absolute */}
    <div className="absolute -left-[14px] -top-[14px] w-6 h-6 flex items-center justify-center">
      <CursorSvg width={16} height={16} fill="#0061FE" />
    </div>

    {/* ilk satır */}
    <div className='w-full flex items-center gap-3 h-[18px] '>

      <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clipPath="url(#clip0_507_3357)">
            <path d="M4.65116 0.558105L0 3.57206L3.23721 6.17671L7.88837 3.27438L4.65116 0.558105ZM0 8.70694L4.65116 11.7581L7.88837 9.04183L3.23721 6.17671L0 8.70694ZM7.88837 9.04183L11.1628 11.7581L15.7767 8.74415L12.5767 6.17671L7.88837 9.04183ZM15.7767 3.57206L11.1628 0.558105L7.88837 3.27438L12.5767 6.17671L15.7767 3.57206ZM7.92558 9.63718L4.65116 12.3535L3.27442 11.4232V12.4651L7.92558 15.2558L12.5767 12.4651V11.4232L11.1628 12.3535L7.92558 9.63718Z" fill="#0061FE"/>
          </g>
          <defs>
            <clipPath id="clip0_507_3357">
              <rect width="16" height="14.8837" fill="white" transform="translate(0 0.558105)"/>
            </clipPath>
          </defs>
        </svg>
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
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0.666829 4.83333L2.3335 6.5M0.666829 4.83333L2.3335 3.16667M0.666829 4.83333L5.7335 4.83333C6.29355 4.83333 6.57357 4.83333 6.78749 4.72434C6.97565 4.62847 7.12863 4.47549 7.2245 4.28732C7.3335 4.07341 7.3335 3.79339 7.3335 3.23333L7.3335 2.66667V2.5" stroke="#777777" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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

// Card Components
const MixpanelCard = () => (
  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="white" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
          <span className="text-xs font-bold text-purple-600">M</span>
        </div>
        <span className="text-sm font-medium text-gray-700">Mixpanel Agentic AI</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <p className="text-gray-800 text-base mb-6">
        The best way is to set up a funnel analysis in Mixpanel to see each step users take and where most of them leave your product. This helps you spot the drop-off points.
      </p>
      <p className="text-gray-800 text-base mb-6">
        Do you want me to create one for you?
      </p>
      <button className="w-full text-blue-600 py-2 px-4 text-sm hover:text-blue-800 transition-colors">
        Reply to Dropbox AI Assistant
      </button>
    </div>
  </div>
);

const HubSpotCard = () => (
  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="white" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
          <span className="text-xs font-bold text-orange-600">H</span>
        </div>
        <span className="text-sm font-medium text-gray-700">HubSpot AI Assistant</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <p className="text-gray-800 text-base mb-6">
        A contact is anyone whose information is stored in your CRM—this could be a customer, a prospect you interact with.
      </p>
      <p className="text-gray-800 text-base mb-6">
        Anything else you'd like to ask me?
      </p>
      <button className="w-full text-blue-600 py-2 px-4 text-sm hover:text-blue-800 transition-colors">
        Reply to HubSpot AI Assistant
      </button>
    </div>
  </div>
);

const JiraCard = () => (
  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="white" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
          <span className="text-xs font-bold text-blue-600">J</span>
        </div>
        <span className="text-sm font-medium text-gray-700">Jira AI Companion</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <p className="text-gray-800 text-base mb-6">
        What to do with incomplete tasks?
      </p>
      <div className="space-y-3">
        <button className="w-full bg-blue-50 text-blue-600 py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-between hover:bg-blue-100 transition-colors">
          Move to the next sprint
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </button>
        <button className="w-full text-gray-600 py-2 px-4 text-sm hover:text-gray-800 transition-colors">
          I have another request
        </button>
      </div>
    </div>
  </div>
);

const ProductboardCard = () => (
  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="white" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
          <span className="text-xs font-bold text-yellow-600">P</span>
        </div>
        <span className="text-sm font-medium text-gray-700">Productboard AI Agent</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <p className="text-gray-800 text-base mb-6">
        How would you like to handle feedback?
      </p>
      <div className="space-y-3">
        <button className="w-full bg-yellow-50 text-yellow-600 py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-between hover:bg-yellow-100 transition-colors">
          Summarize feedback for me
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </button>
        <button className="w-full text-gray-600 py-2 px-4 text-sm hover:text-gray-800 transition-colors">
          I have another request
        </button>
      </div>
    </div>
  </div>
);

const ClickUpCard = () => (
  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="white" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-pink-100 rounded flex items-center justify-center">
          <span className="text-xs font-bold text-pink-600">C</span>
        </div>
        <span className="text-sm font-medium text-gray-700">ClickUp Agent</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <p className="text-gray-800 text-base mb-6">
        How was your experience?
      </p>
      <div className="flex gap-4 justify-center">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors">
          <div className="w-4 h-4 rounded-full border-2 border-green-500"></div>
          <span className="text-sm text-gray-700">Helpful</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
          <span className="text-sm text-gray-700">Not helpful</span>
        </button>
      </div>
    </div>
  </div>
);

const AWSCard = () => (
  <div className="w-80 h-64 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
        <CursorSvg width={16} height={16} fill="white" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
          <span className="text-xs font-bold text-orange-600">AWS</span>
        </div>
        <span className="text-sm font-medium text-gray-700">AWS AI Assistant</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <p className="text-gray-800 text-base mb-6">
        How was your experience?
      </p>
      <div className="flex gap-4 justify-center">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors">
          <div className="w-4 h-4 rounded-full border-2 border-green-500"></div>
          <span className="text-sm text-gray-700">Helpful</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
          <span className="text-sm text-gray-700">Not helpful</span>
        </button>
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

      {/* //////////////////////////////////////////////////////////////// */}
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

        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
        {/* Central Dropbox AI Agent Card */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 cursor-pointer scale-[1.77] origin-top">
          <DropboxCard />
        </div>
        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

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