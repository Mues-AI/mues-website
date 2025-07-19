'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { CursorSvg, MiniArrow } from '../utils/showcase/svgShowcase';
import {DropboxCard, HubSpotCard, MixpanelCard, JiraCard, ProductboardCard, ClickUpCard, AWSCard } from './ShowcaseCards';
import Benefits from '../components/Benefits';
import FooterTopTwoBenefit from '../components/FooterTopTwoBenefit';
import Footer from '../components/Footer';
import ButtonBlack from '../components/ui/ButtonBlack';
import ButtonWhite from '../components/ui/ButtonWhite';
import CallToAction from '../components/ui/CallToAction';

const products = [
  {
    id: 'aws',
    name: 'AWS',
    logo: '/showcase/svg/aws.svg',
    logoWidth: 48,
    logoHeight: 28,
    component: AWSCard,
    color: '#FF9900'
  },
  {
    id: 'jira',
    name: 'Jira', 
    logo: '/showcase/svg/jira.svg',
    logoWidth: 43,
    logoHeight: 48,
    component: JiraCard,
    color: '#1868DB'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    logo: '/showcase/svg/hubspot.svg', 
    logoWidth: 46,
    logoHeight: 48,
    component: HubSpotCard,
    color: '#F95C35'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    logo: '/showcase/svg/dropbox.svg',
    logoWidth: 48,
    logoHeight: 48,
    component: DropboxCard,
    color: '#0061FE'
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    logo: '/showcase/svg/mixpanel.svg',
    logoWidth: 48, 
    logoHeight: 46,
    component: MixpanelCard,
    color: '#7856FF'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    logo: '/showcase/svg/clickup.svg',
    logoWidth: 40,
    logoHeight: 40, 
    component: ClickUpCard,
    color: '#FA12E3'
  },
  {
    id: 'productboard',
    name: 'Productboard',
    logo: '/showcase/svg/productboard.svg',
    logoWidth: 48,
    logoHeight: 48,
    component: ProductboardCard,
    color: '#F4BE00'
  }
];

// Animation variants
const logoVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

const nameVariants = {
  // Exit animasyonu için
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Play Buttons Component - Desktop ve Mobile için ortak kullanım
const PlayButtons = ({ onNext, onPrevious, className = "mt-12" }) => (
  <div className={`w-fit flex items-center justify-center gap-4 ${className}`}>
    {/* Sol Ok Butonu */}
    <button onClick={onNext} className="w-[30px] h-[30px] rounded-3xl border border-[#F4F4F4] bg-white flex items-center justify-center cursor-pointer hover:bg-[#F4F4F4]" 
    style={{ boxShadow: '0px 1px 4px 0px rgba(34, 34, 34, 0.05)' }}>
      <MiniArrow />
    </button>

    {/* Play Butonu - Inactive for now */}
    {/* TODO - YAP: Play butonunu aktif hale getir */}
    <button 
      className="inline-flex py-3 px-4 justify-center items-center gap-1.5 rounded-3xl border border-[#F4F4F4] bg-white cursor-pointer hover:bg-[#F4F4F4]" style={{ boxShadow: '0px 1px 4px 0px rgba(34, 34, 34, 0.05)' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.3335 6.99998V4.92331C2.3335 2.34498 4.15933 1.28915 6.3935 2.57831L8.196 3.61665L9.9985 4.65498C12.2327 5.94415 12.2327 8.05581 9.9985 9.34498L8.196 10.3833L6.3935 11.4216C4.15933 12.7108 2.3335 11.655 2.3335 9.07665V6.99998Z" stroke="#17181A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      
      <span className="text-[#17181A] text-center text-[14px] font-normal leading-4">
        Play
      </span>
    </button>

    {/* Sağ Ok Butonu */}
    <button onClick={onPrevious} className="w-[30px] h-[30px] rounded-3xl border border-[#F4F4F4] bg-white flex items-center justify-center cursor-pointer hover:bg-[#F4F4F4] rotate-180" style={{ boxShadow: '0px 1px 4px 0px rgba(34, 34, 34, 0.05)' }} >
      <MiniArrow />
    </button>
  </div>
);

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(3); // Start with DropBox in center

  // Ürünlerin pozisyonlarını ataması için hesaplama
  const getProductAt = (offset) => {
    const index = (currentIndex + offset + products.length) % products.length;
    return products[index];
  };

  // Navigation handlers
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  // Position products - Initial
  const leftBottom = getProductAt(-3);   // Sol alt - aws
  const leftMiddle = getProductAt(-2);   // Sol orta - jira
  const leftTop = getProductAt(-1);      // Sol ilk - hubspot
  const center = getProductAt(0);        // Central - dropbox
  const rightTop = getProductAt(1);      // Sağ ilk - mixpanel
  const rightMiddle = getProductAt(2);   // Sağ orta - clickup
  const rightBottom = getProductAt(3);   // Sağ alt - productboard

  const CentralCard = center.component;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant="light" />

      {/* Badget - Heading */}
      <div className="w-full flex flex-col items-center p-6 md:py-4 md:px-12 lg:px-[80px] md:mb-12 mx-auto 
      mt-10 md:mt-16 xl:mt-24 ">
        
        {/* Badge */}
        <div className="w-fit h-fit bg-f8f8f8 rounded-full py-[7px] px-3 flex items-center justify-center gap-2 mb-6">
          <CursorSvg width={12} height={12} fill="#777777" />

          <div className="text-center text-[12px] leading-4 tracking-[0.12px] text-[#777]">
          INCREASE PRODUCT ADOPTION
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="w-full text-primary-black text-center font-rethinkSans  font-bold font-feature-settings-salt not-italic
        text-[36px] leading-[48px] tracking-[0.36px]
        sm:text-[48px] sm:leading-[56px] sm:tracking-[0.48px]
        md:text-[52px] md:leading-[60px] md:tracking-[0.52px]
        lg:text-[56px] lg:leading-[64px] lg:tracking-[0.56px]">
          See Mues AI <br className='block sm:hidden' /> in action <br className='hidden sm:block' /> on your <br className='block sm:hidden' />  favorite softwares
        </h1>
      </div>

    {/* MOBILE ANIMATION CONTAINER */}
    <div className='flex md:hidden w-full h-auto px-6 sm:px-9 md:px-12 lg:px-18
     flex-col items-center justify-center gap-8'> 

      {/* Mobile Central Card - Scale edilmiş */}
      <div className='w-full flex justify-center sm:items-center sm:h-[390px] sm:scale-[1.5]'>
        <AnimatePresence mode="wait">
          <motion.div
            key={center.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <CentralCard />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Logolar Container */}
      <div className="w-full flex justify-between items-center px-2 sm:scale-[1.2] sm:justify-evenly">
        {/* 1. Logo */}
        <div className="w-12 h-12 rounded-lg border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={rightTop.id}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.0 }}
            >
              <Image 
                src={rightTop.logo} 
                alt={rightTop.name} 
                width={24} 
                height={24}
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. Logo */}
        <div className="w-12 h-12 rounded-lg border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={rightMiddle.id}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.0 }}
            >
              <Image 
                src={rightMiddle.logo} 
                alt={rightMiddle.name} 
                width={24} 
                height={24}
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. Logo */}
        <div className="w-12 h-12 rounded-lg border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={rightBottom.id}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.0 }}
            >
              <Image 
                src={rightBottom.logo} 
                alt={rightBottom.name} 
                width={24} 
                height={24}
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Logo */}
        <div className="w-12 h-12 rounded-lg border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={leftBottom.id}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.0 }}
            >
              <Image 
                src={leftBottom.logo} 
                alt={leftBottom.name} 
                width={24} 
                height={24}
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5. Logo */}
        <div className="w-12 h-12 rounded-lg border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={leftMiddle.id}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.0 }}
            >
              <Image 
                src={leftMiddle.logo} 
                alt={leftMiddle.name} 
                width={24} 
                height={24}
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 6. Logo */}
        <div className="w-12 h-12 rounded-lg border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={leftTop.id}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.0 }}
            >
              <Image 
                src={leftTop.logo} 
                alt={leftTop.name} 
                width={24} 
                height={24}
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Play Buttons */}
      <PlayButtons onNext={handleNext}  onPrevious={handlePrevious} className=""/>
      
    </div>

    {/* Desktop Animation Container */}
      <div className="hidden md:flex w-full h-[374px] self-center md:mb-37 
      flex-row flex-nowrap items-end justify-around min-[1380px]:justify-between">
        
        {/* Sol Alt - Triangle */}
        <div className='w-fit h-fit relative min-[1380px]:-left-[46px] hidden min-[1380px]:flex'>
          <div className="w-[148px] h-[148px] min-w-[148px] min-h-[148px]
           flex items-end justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="132" viewBox="0 0 150 132" fill="none" 
              className=" hover:[&>path]:fill-[url(#triangle-gradient)]"
              style={{
              filter: 'drop-shadow(0px 0px 4px rgba(34, 34, 34, 0.05))'
            }}>
              <defs>
                <linearGradient id="triangle-gradient" x1="75" y1="0" x2="75" y2="132" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFF" />
                  <stop offset="100%" stopColor="#F7F7F7" />
                </linearGradient>
              </defs>
              <path 
                d="M65.041 6.25C69.4674 -1.41649 80.5326 -1.41649 84.959 6.25L147.313 114.25C151.74 121.917 146.206 131.5 137.354 131.5H12.6465C3.79384 131.5 -1.73966 121.917 2.68652 114.25L65.041 6.25Z" 
                stroke="#EEEEEE"
                fill="#FFFFFF"
              />
            </svg>

            <div className='w-12 h-12 flex items-end justify-center absolute bottom-7 left-1/2 -translate-x-1/2'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={leftBottom.id}
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.0 }}
                >
                  <Image 
                    src={leftBottom.logo} 
                    alt={leftBottom.name} 
                    width={leftBottom.logoWidth} 
                    height={leftBottom.logoHeight}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Sol Orta - Circle */}
        <div className="w-[148px] h-[148px] min-w-[148px] min-h-[148px] bg-white hover:bg-[linear-gradient(180deg,_#FFF_0%,_#F7F7F7_100%)] relative bottom-12 min-[1380px]:-left-[48px] hidden lg:flex 
        rounded-full border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.07)] items-center justify-center">
          <div className='w-fit flex flex-col items-center justify-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={leftMiddle.id}
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.0 }}
                >
                  <Image 
                    src={leftMiddle.logo} 
                    alt={leftMiddle.name} 
                    width={leftMiddle.logoWidth} 
                    height={leftMiddle.logoHeight}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p 
                key={`${leftMiddle.id}-name`}
                variants={nameVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, delay: 0.1 }}
                className='text-[#777] text-center font-openRunde text-[15px] leading-[18px] tracking-[0.15px]'
              >
                {leftMiddle.name}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Sol İlk - Square */}
        <div className="w-[148px] h-[148px] min-w-[148px] min-h-[148px] bg-white hover:bg-[linear-gradient(180deg,_#FFF_0%,_#F7F7F7_100%)] relative bottom-24 min-[1380px]:-left-6 
        rounded-3xl border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center ">
          <div className='w-fit flex flex-col items-center justify-center gap-4'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={leftTop.id}
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.0 }}
                  >
                  <Image 
                    src={leftTop.logo} 
                    alt={leftTop.name} 
                    width={leftTop.logoWidth} 
                    height={leftTop.logoHeight}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p 
                key={`${leftTop.id}-name`}
                variants={nameVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, delay: 0.1 }}
                className='text-[#777] text-center font-openRunde text-[15px] leading-[18px] tracking-[0.15px]'
              >
                {leftTop.name}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Central AI Agent Card */}
        <div className='flex flex-col items-center mx-3 self-start'>
          <AnimatePresence mode="wait">
            <motion.div
              key={center.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <CentralCard />
            </motion.div>
          </AnimatePresence>
          
          {/* Play Animation-Video Buttons */}
          <PlayButtons 
            onNext={handleNext} 
            onPrevious={handlePrevious}
          />
        </div>

        {/* Sağ İlk - Square */}
        <div className="w-[148px] h-[148px] min-w-[148px] min-h-[148px] bg-white hover:bg-[linear-gradient(180deg,_#FFF_0%,_#F7F7F7_100%)] relative bottom-24 min-[1380px]:-right-6 
        rounded-3xl border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.1)] flex items-center justify-center">
          <div className='w-fit flex flex-col items-center justify-center gap-4'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={rightTop.id}
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.0 }}
                >
                  <Image 
                    src={rightTop.logo} 
                    alt={rightTop.name} 
                    width={rightTop.logoWidth} 
                    height={rightTop.logoHeight}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p 
                key={`${rightTop.id}-name`}
                variants={nameVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, delay: 0.1 }}
                className='text-[#777] text-center font-openRunde text-[15px] leading-[18px] tracking-[0.15px]'
              >
                {rightTop.name}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Sağ Orta - Circle */}
        <div className="w-[148px] h-[148px] min-w-[148px] min-h-[148px] bg-white hover:bg-[linear-gradient(180deg,_#FFF_0%,_#F7F7F7_100%)] relative bottom-12 min-[1380px]:-right-[48px] hidden lg:flex 
        rounded-full border border-[#EEE] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.07)] items-center justify-center">
          <div className='w-fit flex flex-col items-center justify-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={rightMiddle.id}
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.0 }}
                >
                  <Image 
                    src={rightMiddle.logo} 
                    alt={rightMiddle.name} 
                    width={rightMiddle.logoWidth} 
                    height={rightMiddle.logoHeight}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p 
                key={`${rightMiddle.id}-name`}
                variants={nameVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, delay: 0.1 }}
                className='text-[#777] text-center font-openRunde text-[15px] leading-[18px] tracking-[0.15px]'
              >
                {rightMiddle.name}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Sağ Alt - Triangle */}
        <div className="w-fit h-fit relative min-[1380px]:-right-[46px] hidden min-[1380px]:flex">
          <div className="w-[148px] h-[148px] min-w-[148px] min-h-[148px] 
          flex items-end justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="132" viewBox="0 0 150 132" fill="none" 
              className=" hover:[&>path]:fill-[url(#triangle-gradient)]"
              style={{
              filter: 'drop-shadow(0px 0px 4px rgba(34, 34, 34, 0.05))'
            }}>
              <defs>
                <linearGradient id="triangle-gradient" x1="75" y1="0" x2="75" y2="132" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFF" />
                  <stop offset="100%" stopColor="#F7F7F7" />
                </linearGradient>
              </defs>
              <path 
                d="M65.041 6.25C69.4674 -1.41649 80.5326 -1.41649 84.959 6.25L147.313 114.25C151.74 121.917 146.206 131.5 137.354 131.5H12.6465C3.79384 131.5 -1.73966 121.917 2.68652 114.25L65.041 6.25Z" 
                stroke="#EEEEEE"
                fill="#FFFFFF"
              />
            </svg>

            <div className="w-12 h-12 flex items-end justify-center absolute bottom-7 left-1/2 -translate-x-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={rightBottom.id}
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.0 }}
                >
                  <Image 
                    src={rightBottom.logo} 
                    alt={rightBottom.name} 
                    width={rightBottom.logoWidth} 
                    height={rightBottom.logoHeight}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
        
      
      {/* Padding Container */}
      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>
      
        {/* Talk With Us Frame */}
        <div className="w-full max-w-[1168px] mx-auto mt-24 md:mt-[200px] rounded-2xl flex flex-row justify-center items-center px-6 py-4 xs:p-8 md:px-12 md:py-10 overflow-hidden"
        style={{ background: 'url(/showcase/images/talkWithBg.webp) no-repeat center center',backgroundSize: 'cover'}}>

          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-12">
            
            {/* Text Content */}
            <p className="text-white text-[20px] font-medium leading-[26px] tracking-[-0.33px]">
              Boost product adoption <br className='hidden md:block' /> and reduce support cost
            </p>
            
            {/* Divider Line */}
            <div className="hidden md:block flex-1 h-[1px] bg-[rgba(238,238,238,0.20)]"></div>
            
            {/* Talk with us button */}
            <ButtonWhite
              href="https://cal.com/mues-ai/talk-with-sales"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Talk with us"
              className="max-w-[122px]"
              >
              Talk with us
            </ButtonWhite>
            
          </div>
        </div>

        {/* Benefits Component */}
        <Benefits/>

        <CallToAction 
        containerClassName="my-0"
        text="Add Mues AI<br/>to your product<br/>for more adoption"
        highlightWords={["adoption"]}
        buttons={[
          <ButtonBlack
            key="book-demo"
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
          </ButtonBlack>,
          <ButtonWhite
            key="join-waitlist"
            href="https://tally.so/r/w2V7Dg"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Join waitlist"
            badge="J"
          >
            Join waitlist
          </ButtonWhite>
        ]}
      />

        {/* FooterTopTwoBenefit Component */}
        <div className='mt-24 lg:mt-37'>
          <FooterTopTwoBenefit />
        </div>

        <Footer/>

      </div>
    </div>
  );
}