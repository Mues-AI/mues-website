"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '../utils/svgIcons';
import FooterTopTwoBenefit from './FooterTopTwoBenefit';
import { faqData } from '../data/faqData';



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
                <h3 className="text-center text-primary-black font-semibold font-rethinkSans  text-[30px] leading-[40px] tracking-[0.3px] lg:text-[56px] lg:leading-[68px] lg:tracking-[0.56px]">
                    FAQ
                </h3>
                <div className="w-full lg:w-[800px] max-w-[800px] inline-flex flex-col justify-start items-start gap-8">
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
                                        <Image className='self-start' src="/CommentsFAQ/svg/minus.svg" alt="minus icon" width={32} height={32} />
                                    ) : (
                                        <Image className='self-start' src="/CommentsFAQ/svg/add.svg" alt="add icon" width={32} height={32} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Show 'See more' only for general FAQ */}
                    {type === 'general' && (
                        <div className="inline-flex justify-between items-center gap-2 cursor-pointer mt-4" onClick={handleSeeMoreClick}>
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