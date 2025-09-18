"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import { ModulerPresentationVariants } from './ModulerPresentationVariants';
import CheckSvg from '../utils/svgGeneralUtils.js';
import useStore from '../lib/store';

const ModularPresentationParts = ({ variant }) => {
  const variantData = ModulerPresentationVariants[variant];
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Zustand store'dan isMobile değerini al
  const isMobile = useStore((state) => state.isMobile);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowVideoModal(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Close the modal
  const closeModal = () => {
    setShowVideoModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  const handleOverlayClick = (e) => {
    // Only close if clicking on the overlay, not the video container
    if (videoContainerRef.current && !videoContainerRef.current.contains(e.target)) {
      closeModal();
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-18 xl:gap-[120px] items-center justify-between w-full h-auto xl:h-[500px]">
      {/* Left Section */}
      <div className={`
        flex flex-col
        w-full md:w-auto md:flex-1
        md:min-w-[347px] md:max-w-[448px] 
        h-auto gap-6 md:gap-8
      `} 
      style={{ 
        order: isMobile ? 2 : variantData.leftOrder 
      }}>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-3 md:gap-4">
            <p className={`text-[14px] font-medium leading-[20px] tracking-[-0.09px]`} style={{ color: variantData.tagColor }}>{variantData.tag}</p>
            <h2 className="w-full md:max-w-[448px] h-auto text-black-121212 font-sfPro font-medium text-[26px] leading-[32px] md:text-[42px] md:leading-[48px] whitespace-pre-line">
              {variantData.title}
            </h2>
          </div>

          <p className="w-full text-[#474645] font-light text-base leading-[26px] md:text-[18px] md:leading-[30px]">{variantData.description}</p>

          <div className="flex flex-col items-start gap-4">
            {variantData.features.map((feature, index) => (
              <span className="flex space-x-2" key={index}>
                <CheckSvg fill={feature.featureColor} className="w-[26px] h-[26px]" />
                <span className="text-[17px] font-normal leading-[26px]" style={{ color: feature.featureColor }}>{feature.text}</span>
              </span>
            ))}
          </div>
        </div>
        {/* BURADA şimdilik setShowVideoModal(false) yapıyoruz - gerçek video gelince true yap */}
        <button 
          className="inline-flex flex-row gap-3 items-center w-fit rounded-[4px] cursor-pointer hover:ring-1 hover:ring-offset hover:ring-[#f2f0ed] hover:ring-offset-12 hover:ring-offset-white" onClick={() => { setShowVideoModal(false); toast("Coming soon!"); }}>
            <div className="flex w-[85px] h-12 justify-center items-center rounded relative">
              <Image quality={100} priority={false} src={variantData.videoImage} alt={variantData.imageAlt} sizes="100%" width={340} height={192} className="object-cover rounded cursor-pointer"/>
              <Image src="/svg/play.svg" alt="play button svg" sizes="15px" width={15} height={16}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'/>
            </div>

          <div className="flex flex-col items-start gap-1 rounded">
            <span className="text-black-121212 text-[15px] font-normal leading-[22px]">{variantData.videoTitle}</span>
            <span className="text-[#4A443F]/50 text-[13px] font-normal leading-[18px] tracking-[-0.13px]">{variantData.videoSubtitle}</span>
          </div>
        </button>

      </div>

      {/* Right Section - Big Photo */}
      <div 
        className={`
          w-full max-w-[400px] md:max-w-[600px] 
          aspect-[345/286] lg:aspect-[600/500]
          rounded-xl md:rounded-3xl
          bg-[#FBFBFB]
          p-6 md:p-8 xl:p-12 
          overflow-hidden
          flex items-center justify-center md:flex-1
          flex-shrink-0
        `} 
        style={{ 
          order: isMobile ? 1 : variantData.rightOrder,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image 
            quality={75} 
            priority={false} 
            src={variantData.imageSrc} 
            alt={variantData.imageAlt} 
            fill={true}
            sizes="(max-width: 768px) 352px, 504px"
            className="object-contain" 
          />
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={handleOverlayClick}
        >
          <div 
            ref={videoContainerRef}
            className="relative max-w-4xl w-full mx-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovering && (
              <button
                onClick={closeModal}
                className="absolute top-0 right-3 z-50 text-white text-2xl font-bold p-2 cursor-pointer"
              >
                ✕
              </button>
            )}
            <div className="relative rounded-2xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                className="w-full rounded-2xl"
                controls
                onTimeUpdate={handleTimeUpdate}
                onPlay={handlePlay}
                onPause={handlePause}
              >
                <source src={variantData.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div className="absolute top-0 left-0 p-4 w-full">
                  <p className="text-white text-lg font-normal">{variantData.videoTitle}</p>
                  <p className="text-white/80 text-sm">{formatTime(currentTime)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModularPresentationParts;
