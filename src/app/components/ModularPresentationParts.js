"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ModulerPresentationVariants } from './ModulerPresentationVariants';
import ModularCheckSvg from '../utils/svgGeneralUtils.js';

const ModularPresentationParts = ({ variant }) => {
  const variantData = ModulerPresentationVariants[variant];
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
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
    <div className="flex flex-row gap-[120px] h-[500px] items-center">
      {/* Left Section */}
      <div className={`flex flex-col max-w-[448px] h-auto gap-8`} style={{ order: variantData.leftOrder }}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className={`text-[14px] font-medium leading-[20px] tracking-[-0.09px]`} style={{ color: variantData.tagColor }}>{variantData.tag}</span>
            <h2 className="max-w-[444px] h-23 text-[#121212] font-sfPro text-[42px] font-[510] leading-[48px]">{variantData.title}</h2>
          </div>

          <p className="text-[#474645] text-[18px] font-light leading-[30px]">{variantData.description}</p>

          <div className="flex flex-col items-start gap-4">
            {variantData.features.map((feature, index) => (
              <span className="flex space-x-2" key={index}>
                <ModularCheckSvg fill={feature.featureColor} width={26} height={26} />
                <span className="text-[17px] font-normal leading-[26px]" style={{ color: feature.featureColor }}>{feature.text}</span>
              </span>
            ))}
          </div>
        </div>
         
        {/* YAP - ileri de hover ring offset ile veya border ile yapabiliriz 
        <div 
          className="inline-flex flex-row gap-3 items-center w-fit rounded-[4px] transition-all duration-200 cursor-pointer hover:ring-1 hover:ring-offset-4"
          style={{ '--tw-ring-color': variantData.tagColor}}
          onClick={() => setShowVideoModal(true)}
        > */}
        {/* BURADA şimdilik setShowVideoModal(false) yapıyoruz - gerçek video gelince true yap */}
        <div 
          className="inline-flex flex-row gap-3 items-center w-fit rounded-[4px] cursor-pointer hover:ring-1 hover:ring-offset hover:ring-[#f2f0ed] hover:ring-offset-12 hover:ring-offset-white" onClick={() => setShowVideoModal(false)} >
            <div className="flex w-[85px] h-12 justify-center items-center rounded bg-[#E0E0E0]">
              <Image quality={100} loading='lazy' unoptimized src={variantData.videoImage} alt={variantData.imageAlt} width={85} height={48} className="object-cover rounded cursor-pointer"/>
            </div>

          <div className="flex flex-col gap-1 rounded">
            <span className="text-[#121212] text-[15px] font-normal leading-[22px]">{variantData.videoTitle}</span>
            <span className="text-[#4A443F]/50 text-[13px] font-normal leading-[18px] tracking-[-0.13px]">{variantData.videoSubtitle}</span>
          </div>
        </div>

      </div>

      {/* Right Section - Big Photo */}
      <div className={`w-[600px] h-[500px] rounded-3xl bg-[#FBFBFB] p-12 flex items-center justify-center`} style={{ order: variantData.rightOrder }}>
        <Image quality={100} loading='lazy' unoptimized src={variantData.imageSrc} alt={variantData.imageAlt} width={504} height={404} className="w-full h-full object-contain" />
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
