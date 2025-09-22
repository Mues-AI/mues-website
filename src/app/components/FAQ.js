"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "../utils/svgGeneralUtils";
import FooterTopTwoBenefit from "./FooterTopTwoBenefit";
import { faqData } from "../data/faqData";
import SubHeadings from "./ui/SubHeadings";
import { Add, Minus } from "iconsax-react";

const variants = {
  light: {
    background: "bg-[#FCFCFC]",
    text: "text-[#211D1D]",
  },
  dark: {
    background: "bg-[#F8F8F8]/[0.05]",
    text: "text-[#FFF]",
  },
};

export default function FAQ({
  type = "general",
  variant = "light",
  wrapperClass = "mb-24 lg:my-[148px]",
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();
  const handleToggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const theme = variants[variant];
  const faqs = faqData[type] || faqData.general;

  const handleSeeMoreClick = () => {
    router.push("/contact");
    setTimeout(() => {
      const faqElement = document.getElementById("faq");
      if (faqElement) {
        faqElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1000);
  };

  return (
    <div id="faq">
      {/* faq and list container */}
      <div
        className={`max-w-[1168px] ${wrapperClass} mx-auto flex flex-col items-start gap-6 lg:flex-row lg:justify-between`}
      >
        <SubHeadings type="h3" variant={variant} className="text-center">
          FAQ
        </SubHeadings>
        <div className="w-full lg:w-[800px] inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            {/* list elements */}
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="w-full">
                  <div
                    className={`w-full h-auto p-6 ${theme.background} rounded-xl inline-flex justify-between items-center gap-x-3 lg:gap-x-12 cursor-pointer`}
                    onClick={() => handleToggle(idx)}
                  >
                    <div
                      className={`w-full flex flex-col ${theme.text} text-[18px] font-normal leading-[24px]`}
                    >
                      <h4 className="min-h-8 w-full flex items-center">
                        {item.question}
                      </h4>
                      <div
                        className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 pt-3"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="overflow-hidden text-8e8e8e text-[14px] font-light leading-6 tracking-[0.14px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>

                    {isOpen ? (
                      <Minus className="self-start" size="32" color="#8E8E8E" />
                    ) : (
                      <Add className="self-start" size="32" color="#0089ff" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show 'See more' FAQ */}
          {type !== "contact" && (
            <div
              className="inline-flex justify-between items-center gap-2 cursor-pointer"
              onClick={handleSeeMoreClick}
            >
              <div className="text-primary-blue text-[16px] font-normal leading-[20px]">
                See more
              </div>
              <ArrowRightIcon
                width={16}
                height={16}
                color="#0089FF"
                alt="arrow right icon"
              />
            </div>
          )}
        </div>
      </div>
      {/* FooterTopTwoBenefit Component */}
      <FooterTopTwoBenefit variant={variant} />
    </div>
  );
}
