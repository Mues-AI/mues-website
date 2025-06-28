"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '../utils/svgIcons';
import FooterTopTwoBenefit from './FooterTopTwoBenefit';

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

{/* FooterTopTwoBenefit Component */}
<FooterTopTwoBenefit /> 

    </div>
    );
  }