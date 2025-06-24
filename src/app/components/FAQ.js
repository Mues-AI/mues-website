"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '../utils/svgIcons';

const faqData = [
  {
    question: 'What is Mues?',
    answer:
      'Mues is an AI-powered assistant that revolutionizes web user experience by automating complex tasks, streamlining user onboarding, and maximizing product adoption through natural language interaction. Our vision is to create a world where software adapts to humans, not humans to software, by making every user a power user through AI-driven assistance.',
  },
  {
    question: 'What problems does Mues solve?',
    answer:
      'Mues addresses several critical challenges faced by product teams: Challenges in maintaining user engagement and reducing churn. Complex product onboarding requiring significant effort. High volume of basic support tickets. Difficulty in quickly adapting users to new features. Limited 24/7 support availability.',
  },
  {
    question: 'How does Mues integrate with existing products?',
    answer:
      'Mues provides a simple code snippet that can be integrated into your product. This enables an AI-powered cursor to guide users through tasks and processes within your interface. The integration process involves initial data and documentation review, creating custom scripts, testing in a sandbox environment, and gradual rollout with continuous improvement.',
  },
  {
    question: 'Can Mues handle complex, multi-step processes?',
    answer:
      "Yes, Mues is specifically designed to handle both complex, multi-step journeys and repetitive tasks. It adapts to the user's needs and the complexity of your product, providing contextual guidance at each step of the process.",
  },
  {
    question: 'How does Mues manage user privacy and data?',
    answer:
      'Mues is designed with privacy in mind. While we need some user context for effective operation, we work with you to determine the right level of data sharing that maintains user privacy while providing valuable insights. Our enterprise-grade privacy and security features include departmental permissions, data masking, advanced encryption, and secure access controls.',
  },
  {
    question: 'What metrics and insights does Mues provide?',
    answer:
      'Mues offers detailed analytics including: Categorized user questions and common pain points. Screens or features users struggle with most. AI agent accuracy rates and performance metrics. User engagement and success rates. Impact on support ticket volume and resolution times.',
  },
];

// Modular Benefit Card Component
function BenefitCard({ bgColor, title, description, imageSrc, imageWidth, imageHeight, imageAlt, textColor, subtextColor , className}) {
  return (
    <div className={`flex flex-col sm:flex-row lg:inline-flex w-full lg:w-1/2 h-auto lg:h-full p-6 md:p-4 md:pe-0 lg:p-0 ${bgColor} rounded-2xl justify-start sm:justify-between items-center lg:pl-10 gap-5 transition-all group overflow-hidden`}>
      <div className="inline-flex flex-col justify-center items-start gap-2 lg:gap-3 relative top-[-1px]">

        <div className="inline-flex justify-center items-center gap-2">

          <div className={`${textColor} font-rethinkSans font-semibold leading-[30px] 
          text-[20px] tracking-[0.2px]
          lg:text-[24px] lg:tracking-[0.24px]`}>
            {title}
          </div>

          {/* <ArrowRightIcon 
            width={24} 
            height={24} 
            color={textColor === 'text-white' ? 'white' : '#17181A'} 
            alt="arrow right icon" 
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
          /> */}
        </div>

        <div className={`${subtextColor} text-[16px] font-light leading-[20px]`}>
          {description}
        </div>

      </div>       

      <div className='w-[170px] flex justify-center lg:h-full lg:w-auto self-center md:self-end relative -bottom-6 sm:bottom-0 md:-bottom-4 lg:bottom-0 lg:self-end rounded-2xl '>
        <Image 
          quality={100} 
          loading='lazy' 
          unoptimized 
          src={imageSrc} 
          alt={imageAlt} 
          width={imageWidth} 
          height={imageHeight}
          className={`rounded-2xl ${className}`}
        />
      </div>

    </div>
  );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    return (
    <div>

{/* faq and list container */}
<div className="max-w-[1168px] mb-24 lg:my-[148px] mx-auto flex flex-col items-start gap-6 lg:flex-row lg:justify-between">

    <div className="text-center text-primary-black font-semibold font-rethinkSans  
    text-[30px] leading-[40px] tracking-[0.3px]
    lg:text-[56px] lg:leading-[68px] lg:tracking-[0.56px]">
    FAQ
    </div>

    <div className="w-full lg:w-[800px] max-w-[800px] inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
            
            {/* list elements */}
            {faqData.map((item, idx) => (
              <div key={idx} className="w-full">
                <div
                  className={`w-full h-auto p-6 bg-[#FCFCFC] rounded-xl inline-flex justify-between items-center gap-x-3 lg:gap-x-12 cursor-pointer`}
                  onClick={() => handleToggle(idx)}>
                    <div className="w-full flex flex-col text-[#211D1D] text-[18px] font-normal leading-[24px] gap-y-3">
                        <h4 className={`${openIndex === idx ? '' : ' '} min-h-8 w-full flex items-center`}>{item.question}</h4>
                        
                            {openIndex === idx && (
                              <div
                              className="flex w-full rounded-b-xl text-8e8e8e text-[14px] font-light leading-6 tracking-[0.14px]">
                              {item.answer}
                              </div>
                            )}
                    </div>
                    {openIndex === idx ? (
                        <Image className='self-start' src="/CommentsFAQ/svg/minus.svg" alt="minus icon" width={32} height={32}  />
                    ) : (
                        <Image className='self-start' src="/CommentsFAQ/svg/add.svg" alt="add icon" width={32} height={32}  />
                    )}
                </div>
              </div>
            ))}
            
        </div>

        <div className=" justify-between items-center gap-2 cursor-pointer hidden">
        {/* <div className="inline-flex justify-between items-center gap-2 cursor-pointer"> */}
            <div className="text-primary-blue text-[16px] font-normal leading-[20px]">See more</div>
            <ArrowRightIcon width={16} height={16} color="#0089FF" alt="arrow right icon"/>
        </div>
    </div>
</div>

{/* two bottom images container */}
<div className="max-w-[1168px] lg:h-37 flex flex-col md:flex-row gap-4 md:gap-6 mx-auto">

  <BenefitCard 
    bgColor="bg-[#1A1A1A]"
    title="Benefits for your product"
    description="Increased product adoption and onboarding"
    imageSrc="/CommentsFAQ/images/faqBottomImage1.webp"
    imageWidth={170}
    imageHeight={140}
    imageAlt="benefits-for-product"
    textColor="text-white"
    subtextColor="text-[#DDD]"  
    className="object-cover"
  />

  <BenefitCard 
    bgColor="bg-[#F8F8F8]"
    title="Benefits for your users"
    description="Less support need with powerful experience"
    imageSrc="/CommentsFAQ/images/faqBottomImage2.webp"
    imageWidth={180}
    imageHeight={160}
    imageAlt="benefits-for-users"
    textColor="text-primary-black"
    subtextColor="text-[#777]"
    className="object-contain lg:scale-110 -rotate-7"
  />


</div> 

    </div>
    );
  }