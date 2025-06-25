import Image from 'next/image';
import Navbar from '../components/Navbar';
import { CursorSvg, MiniArrow } from '../utils/showcase/svgShowcase';
import {DropboxCard, HubSpotCard, MixpanelCard, JiraCard, ProductboardCard, ClickUpCard, AWSCard } from './ShowcaseCards';
import Benefits from '../components/Benefits';
import FooterTopTwo from '../components/FooterTopTwo';
import Footer from '../components/Footer';


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
      <div className="w-full h-[374px] mb-37 flex relative">
        
        {/* AWS - Sol Alt */}
        <div className="absolute -left-12 bottom-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="132" viewBox="0 0 150 132" fill="none" style={{
            filter: 'drop-shadow(0px 0px 4px rgba(34, 34, 34, 0.05))'
          }}>
            <path d="M65.041 6.25C69.4674 -1.41649 80.5326 -1.41649 84.959 6.25L147.313 114.25C151.74 121.917 146.206 131.5 137.354 131.5H12.6465C3.79384 131.5 -1.73966 121.917 2.68652 114.25L65.041 6.25Z" stroke="#EEEEEE"/>
          </svg>

          <div className='w-12 h-12 flex items-end justify-center absolute bottom-9 left-1/2 -translate-x-1/2'>
              <Image 
              src="/showcase/svg/aws.svg" 
              alt="Amazon Web Services" 
              width={48} 
              height={28}
              />
            </div>
        </div>

        {/* Jira - Sol Orta */}
        <div className="absolute bottom-[46px] left-[124px] w-[148px] h-[148px] rounded-full border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.07)] flex items-center justify-center  pt-1">
          <div className='w-fit flex flex-col items-center justify-center gap-3'>

            <div className='w-12 h-12 flex items-center justify-center'>
              <Image 
              src="/showcase/svg/jira.svg" 
              alt="Jira" 
              width={43} 
              height={48}
              />
            </div>

            <p className='text-[#777] text-center font-openRunde text-[15px] leading-[18px] tracking-[0.15px]'>Jira</p>

          </div>
        </div>

        {/* HubSpot - Sol İlk */}
        <div className="absolute bottom-[94px] left-[320px] w-[148px] h-[148px] rounded-3xl border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center pt-0.5">
          <div className='w-fit flex flex-col items-center justify-center gap-4'>

          <div className='w-12 h-12 flex items-center justify-center'>
            <Image 
            src="/showcase/svg/hubspot.svg" 
            alt="HubSpot" 
            width={46} 
            height={48}
            />
          </div>

          <p className='text-[#777] text-center font-openRunde text-[15px] leading-[18px] tracking-[0.15px]'>HubSpot</p>

          </div>

        </div>

        {/*  ////////////////////////////////////////////////////////////////////// */}
        {/* Central Dropbox AI Agent Card */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 cursor-pointer scale-[1.75] origin-top">

          <DropboxCard />

        </div>
        {/*  ////////////////////////////////////////////////////////////////////// */}

        {/* Mixpanel - Sağ İlk */}
        <div className="absolute bottom-[94px] right-[320px] w-[148px] h-[148px] rounded-3xl border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center pt-0.5">
          <div className='w-fit flex flex-col items-center justify-center gap-4'>

          <div className='w-12 h-12 flex items-center justify-center'>
            <Image 
            src="/showcase/svg/mixpanel.svg" 
            alt="Mixpanel" 
            width={48} 
            height={46}
            />
          </div>

          <p className='text-[#777] text-center font-openRunde text-[15px] leading-[18px] tracking-[0.15px]'>Mixpanel</p>

          </div>

        </div>

        {/* ClickUp - Sağ Orta */}
        <div className="absolute bottom-[46px] right-[124px] w-[148px] h-[148px] rounded-full border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.07)] flex items-center justify-center  pt-1">
          <div className='w-fit flex flex-col items-center justify-center gap-3'>

            <div className='w-12 h-12 flex items-center justify-center'>
              <Image 
              src="/showcase/svg/clickup.svg" 
              alt="ClickUp" 
              width={48} 
              height={48}
              />
            </div>

            <p className='text-[#777] text-center font-openRunde text-[15px] leading-[18px] tracking-[0.15px]'>Jira</p>

          </div>
        </div>

        {/* Productboard - Sağ Alt */}
        <div className="absolute -right-12 bottom-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="132" viewBox="0 0 150 132" fill="none" style={{
            filter: 'drop-shadow(0px 0px 4px rgba(34, 34, 34, 0.05))'
          }}>
            <path d="M65.041 6.25C69.4674 -1.41649 80.5326 -1.41649 84.959 6.25L147.313 114.25C151.74 121.917 146.206 131.5 137.354 131.5H12.6465C3.79384 131.5 -1.73966 121.917 2.68652 114.25L65.041 6.25Z" stroke="#EEEEEE"/>
          </svg>

          <div className='w-12 h-12 flex items-end justify-center absolute bottom-9 left-1/2 -translate-x-1/2 
          translate-y-1'>
              <Image 
              src="/showcase/svg/productboard.svg" 
              alt="Productboard" 
              width={48} 
              height={48}
              />
            </div>
        </div>



        {/* Play Animation-Video Buttons */}
        <div className="w-fit flex items-center justify-center gap-4 mt-8 absolute bottom-0 left-1/2 -translate-x-1/2 ">
          
          {/* Sol Ok Butonu */}
          <button className="w-[30px] h-[30px] rounded-3xl border border-[#F4F4F4] bg-white flex items-center justify-center cursor-pointer hover:bg-[#F4F4F4]" 
            style={{ boxShadow: '0px 1px 4px 0px rgba(34, 34, 34, 0.05)' }}>
            <MiniArrow />
          </button>

          {/* Play Butonu */}
          <button className="inline-flex py-3 px-4 justify-center items-center gap-1.5 rounded-3xl border border-[#F4F4F4] bg-white cursor-pointer hover:bg-[#F4F4F4]" 
            style={{ boxShadow: '0px 1px 4px 0px rgba(34, 34, 34, 0.05)' }}>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.3335 6.99998V4.92331C2.3335 2.34498 4.15933 1.28915 6.3935 2.57831L8.196 3.61665L9.9985 4.65498C12.2327 5.94415 12.2327 8.05581 9.9985 9.34498L8.196 10.3833L6.3935 11.4216C4.15933 12.7108 2.3335 11.655 2.3335 9.07665V6.99998Z" stroke="#17181A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            <span className="text-[#17181A] text-center text-[14px] font-normal leading-4">
              Play
            </span>
          </button>

          {/* Sağ Ok Butonu */}
          <button className="w-[30px] h-[30px] rounded-3xl border border-[#F4F4F4] bg-white flex items-center justify-center cursor-pointer hover:bg-[#F4F4F4] rotate-180" 
            style={{ boxShadow: '0px 1px 4px 0px rgba(34, 34, 34, 0.05)' }}>
              <MiniArrow />
          </button>

        </div>

      </div>
      
      {/* Padding Container */}
      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>
      
        {/* Talk With Us Frame */}
        <div className="w-full max-w-[1168px] mx-auto mt-[200px] rounded-2xl flex flex-row justify-center items-center px-12 py-10" style={{ background: 'url(/showcase/images/talkWithBg.webp) no-repeat', backgroundSize: 'cover' }}>
          <div className="w-full flex items-center justify-center gap-12">
            
            {/* Text Content */}
            <p className="text-white text-[20px] font-medium leading-[26px] tracking-[-0.33px]">
              Boost product adoption <br /> and reduce support cost
            </p>
            
            {/* Divider Line */}
            <div className="flex-1 h-[1px] bg-[rgba(238,238,238,0.20)]"></div>
            
            {/* Talk With Us Button */}
            <button className="inline-flex py-4 px-5 justify-center items-center rounded-xl border border-[#F4F4F4] bg-white cursor-pointer hover:bg-[#F4F4F4] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
              <span className="text-[#17181A] text-[14px] font-medium leading-4">
                Talk with us
              </span>
            </button>
            
          </div>
        </div>

        {/* Benefits Component */}
        <Benefits/>

        {/* Add Mues AI to your product */}
        <div className='w-full flex flex-col items-center gap-8 py-31 px-16 mx-auto'>
          
          {/* Main Text */}
          <p className='w-[520px] text-center'>
            <span className='text-[#17181A] font-rethinkSans text-[56px] font-bold leading-[72px] tracking-[0.56px] font-feature-settings-salt'>
              Add Mues AI<br />
              to your product<br />
              for more 
            </span>
            <span className="font-instrumentSerif text-[56px] font-normal italic leading-[72px] tracking-[0.56px] font-feature-settings-salt bg-gradient-to-r from-[#0089FF] to-[#7D52F4] bg-clip-text text-transparent">
              &nbsp;adoption
            </span>
          </p>

          {/* Buttons Container */}
          <div className='flex items-center w-fit gap-3'>
            
            {/* Book a demo button */}
            <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Book a demo" className='w-fit rounded-xl cursor-pointer hover:opacity-90'>
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

            {/* Join waitlist button */}
            <a href="https://tally.so/r/w2V7Dg" target="_blank" rel="noopener noreferrer" aria-label="Join waitlist" className='w-fit rounded-xl cursor-pointer'>
              <div className="inline-flex py-4 px-5 justify-center items-center gap-2 rounded-xl border border-[#F4F4F4] bg-white hover:bg-[#ebebeb] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
                <p className="text-[#17181A] text-center text-[14px] font-medium leading-4">Join waitlist</p>
                <span className="flex px-[4.5px] justify-center items-center rounded-[3px] bg-[rgba(119,119,119,0.10)]">
                  <p className="text-[rgba(119,119,119,0.75)] text-center text-[11px] font-medium leading-4 tracking-[0.11px]">J</p>
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* FooterTopTwo Component */}
        <div className='mt-37'>
          <FooterTopTwo />
        </div>

        <Footer/>

      </div>
    </div>
  );
}