'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = ({ title, description, src, alt, width, height, i, activeIndex }) => {
  // Animation variants
  const variants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      // Reverse z-index so newer cards (higher i) have higher z-index
      zIndex: i,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    visible: { 
      y: 0, 
      opacity: 1,
      // Reverse z-index so newer cards (higher i) have higher z-index
      zIndex: i,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  // Card is visible when it's the active card or has already been shown
  const isVisible = i <= activeIndex;

  return (
    <motion.div
      className="absolute w-[472px] h-auto flex flex-col gap-y-6"
      style={{ 
        top: 0, 
        left: 0,
        background: "#FFFFFF", // Add white background to completely cover previous cards
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      {/* Card image container */}
      <div className="w-[472px] h-[224px] rounded-3xl bg-[#FBFBFB] flex justify-center items-center">
        <Image 
          quality={100} 
          loading='lazy' 
          unoptimized 
          width={width} 
          height={height} 
          src={src} 
          alt={alt} 
          className='object-cover'
          style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}
        />
      </div>
      {/* Card text content */}
      <div className="max-w-[424px] h-24 flex flex-col gap-y-3 mx-auto">
        <p className="text-[#222] text-[18px] font-normal leading-[24px]">{title}</p>
        <p className="h-auto text-[#777] text-[18px] font-light leading-[30px]">{description}</p>
      </div>
    </motion.div>
  )
}

export default Card;