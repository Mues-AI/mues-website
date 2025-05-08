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
  // ! YAP - bu alttaki normalde liste sanırım sonra liste yaparız belki
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
  // ! YAP - bu alttaki normalde liste sanırım sonra liste yaparız belki
  {
    question: 'What metrics and insights does Mues provide?',
    answer:
      'Mues offers detailed analytics including: Categorized user questions and common pain points. Screens or features users struggle with most. AI agent accuracy rates and performance metrics. User engagement and success rates. Impact on support ticket volume and resolution times.',
  },
];


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    return (
    <div>

<div className="w-[1168px] my-[148px] mx-auto flex justify-between items-start">

    <div className="text-center text-[#17181A] text-[56px] font-semibold font-rethinkSans leading-[68px] tracking-[0.56px]">
    FAQ
    </div>

    <div className="w-[800px] inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
            
            {/* list elements */}
            {faqData.map((item, idx) => (
              <div key={idx} className="w-full">
                <div
                  className={`w-full h-auto p-6 bg-[#FCFCFC] rounded-xl inline-flex justify-between items-center gap-x-12 cursor-pointer`}
                  onClick={() => handleToggle(idx)}>
                    <h4 className="w-full text-[#211D1D] text-[18px] font-normal leading-[24px]">
                        <p className={`${openIndex === idx ? 'pt-1' : ''}`}>{item.question}</p>
                        
                            {openIndex === idx && (
                            <div className="flex w-full bg-[#FCFCFC] rounded-b-xl mt-3">
                                <div
                                className="text-[#8E8E8E] text-[14px] font-light leading-6 tracking-[0.14px]">
                                {item.answer}
                                </div>
                            </div>
                            )}
                    </h4>
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
            <div className="text-[#0089FF] text-[16px] font-normal leading-[20px]">See more</div>
            <ArrowRightIcon width={16} height={16} color="#0089FF" alt="arrow right icon"/>
        </div>
    </div>
</div>

<div className="w-[1168px] h-37 flex flex-row gap-6 mx-auto">

        <div className='inline-flex w-1/2 h-full bg-[#1A1A1A] rounded-2xl justify-start items-center pl-10 gap-5 cursor-pointer transition-all group'>
            <div className="inline-flex flex-col justify-center items-start gap-3 relative top-[-1px]">
                <div className="inline-flex justify-center items-center gap-2">
                  <div className="text-white font-rethinkSans text-[24px] font-semibold leading-[30px] tracking-[0.24px] ">Benefits for your product</div>
                  <ArrowRightIcon 
                    width={24} 
                    height={24} 
                    color="white" 
                    alt="arrow right icon" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                  />
                </div>
                <div className="text-[#DDD] text-[16px] font-light leading-[20px] ">Increased product adoption and onboarding</div>
            </div>       

            <Image quality={100} loading='lazy' unoptimized src="/CommentsFAQ/images/faqBottomImage1.webp" alt="benefits-for-product"width={170} height={140}
            className='self-end '/>
        </div>

        <div className='inline-flex w-1/2 h-full bg-[#F8F8F8] rounded-2xl justify-start items-center pl-10 relative cursor-pointer transition-all group'>
            <div className="inline-flex flex-col justify-center items-start gap-3 relative top-[-1px]">
               <div className="inline-flex justify-center items-center gap-2">
                    <div className="text-[#17181A] font-rethinkSans text-[24px] font-semibold leading-[30px] tracking-[0.24px] ">Benefits for your users</div>
                    <ArrowRightIcon 
                      width={24} 
                      height={24} 
                      color="#17181A" 
                      alt="arrow right icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                    />
               </div>
                <div className="text-[#777] text-[16px] font-light leading-[20px] ">Less support need with powerful experience</div>
            </div>       

            <Image quality={100} loading='lazy' unoptimized src="/CommentsFAQ/images/faqBottomImage2.webp" alt="benefits-for-users"width={222} height={148} className='self-end absolute right-0'/>
        </div>

</div>

    </div>
    );
  }