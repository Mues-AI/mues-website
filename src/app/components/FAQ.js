"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '../utils/svgIcons';
import FooterTopTwoBenefit from './FooterTopTwoBenefit';
import { faqData } from '../data/faqData';
import SubHeadings from './ui/SubHeadings';
import { Add,Minus } from 'iconsax-react';


export default function FAQ({ type = 'general' }) {
    const [openIndex, setOpenIndex] = useState(null);
    const router = useRouter();
    const handleToggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    const faqs = faqData[type] || faqData.general;

    const handleSeeMoreClick = () => {
        router.push('/contact');
        setTimeout(() => {
            const faqElement = document.getElementById('faq');
            if (faqElement) {
                faqElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 1000);
    };

    return (
        <div id="faq">
            {/* faq and list container */}
            <div className="max-w-[1168px] mb-24 lg:my-[148px] mx-auto flex flex-col items-start gap-6 lg:flex-row lg:justify-between">
                <SubHeadings type="h3" className="text-center">
                    FAQ
                </SubHeadings>
                <div className="w-full lg:w-[800px] inline-flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        {/* list elements */}
                        {faqs.map((item, idx) => (
                            <div key={idx} className="w-full">
                                <div
                                    className="w-full h-auto p-6 bg-[#FCFCFC] rounded-xl inline-flex justify-between items-center gap-x-3 lg:gap-x-12 cursor-pointer"
                                    onClick={() => handleToggle(idx)}
                                >
                                    <div className="w-full flex flex-col text-[#211D1D] text-[18px] font-normal leading-[24px] gap-y-3">
                                        <h4 className={`${openIndex === idx ? '' : ' '} min-h-8 w-full flex items-center`}>{item.question}</h4>
                                        {openIndex === idx && (
                                            <p className="flex w-full rounded-b-xl text-8e8e8e text-[14px] font-light leading-6 tracking-[0.14px]">
                                                {item.answer}
                                            </p>
                                        )}
                                    </div>
                                    {openIndex === idx ? (
                                        <Minus className='self-start' size="32" color="#8E8E8E"/>
                                    ) : (
                                        <Add className='self-start' size="32" color="#0089ff"/>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Show 'See more' FAQ */}
                    {type !== 'contact' && (
                        <div className="inline-flex justify-between items-center gap-2 cursor-pointer" onClick={handleSeeMoreClick}>
                            <div className="text-primary-blue text-[16px] font-normal leading-[20px]">See more</div>
                            <ArrowRightIcon width={16} height={16} color="#0089FF" alt="arrow right icon"/>
                        </div>
                    )}
                </div>
            </div>
            {/* FooterTopTwoBenefit Component */}
            <FooterTopTwoBenefit />
        </div>
    );
}