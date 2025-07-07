import Image from "next/image";
import { XIcon, LinkedinIcon, GitHubIcon, DiscordIcon } from '../utils/svgIcons';

export default function Footer() {
    return (
    <>
    <div className="flex flex-col mb-8">
        {/* FOOTER */}
        <div className="w-full max-w-[1168px] h-auto flex flex-col mx-auto bg-[#F8F8F8] rounded-xl p-6 md:p-9 lg:p-12 mt-4 md:mt-6">

            {/* 1. satır */}
            <div className="w-full flex flex-col gap-y-12 lg:gap-y-0 lg:flex-row lg:justify-between lg:gap-x-[clamp(16px,5vw,76px)]">
                <div className="w-fit h-fit flex flex-col gap-y-8 justify-between items-start">
                    <Image src={"/svg/logoFooter.svg"} width={80} height={16} alt="mues logo"/>

                    <div className="md:w-[320px]">
                        <p className="w-fit md:w-[300px] h-auto tracking-[0.1px] text-[#AAA] font-Urbanist text-[13px] font-medium leading-[20px]">Software Interaction Company</p>
                        <p className="w-fit md:w-[300px] h-auto tracking-[0.1px] text-[#B6B6B6] text-[12px] font-light leading-[20px]">to create a world where software adapts to humans,
                        not humans to software.</p>
                    </div>
                </div>

                {/* <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 md:justify-items-center lg:grid-cols-4 h-auto gap-x-8 gap-y-12 lg:gap-x-15 "> */}
{/*  geçici olarak use case container gelene kadar col-4 ten col 3 e geçirdim. ilk kodlardaki yapı alttaki div daha sonra yukarıdakini silip alttakini kullanırsın. - tekrar col-4 e geçirdik - empty div de hidden geçti*/}
                <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 h-auto gap-x-8 gap-y-12 lg:gap-x-15 "> 

                        {/* EMPTY DIV - col 3 iken kullanıyoruz*/}
                        {/* <div className="hidden flex-col gap-4 lg:flex"></div> */}

                        <div className="flex flex-col gap-4">
                            <p className="text-primary-black text-[14px] font-normal leading-[16px] tracking-[0.14px]">Product</p>
                            <div className="flex flex-col gap-3.5">
                                {/* <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Features" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Features</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Enterprise" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Enterprise</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Pricing" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Pricing</a> */}
                                <a href="https://cal.com/mues-ai/demo" target="_blank" rel="noopener noreferrer" aria-label="Go to Demo" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Demo</a>
                                <a href="https://muesai.featurebase.app/en/help" target="_blank" rel="noopener noreferrer" aria-label="Go to Docs" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Docs</a>
                                <a href="https://muesai.featurebase.app/en" target="_blank" rel="noopener noreferrer" aria-label="Go to Feedback" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Feedback</a>
                                <a href="https://muesai.featurebase.app/en/changelog" target="_blank" rel="noopener noreferrer" aria-label="Go to Changelog" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Changelog</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-primary-black text-[14px] font-normal leading-[16px] tracking-[0.14px]">Use Cases</p>
                            <div className="flex flex-col gap-3.5">
                                <a href="/showcase" target="_blank" rel="noopener noreferrer" aria-label="Go to Showcase" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Showcase</a>
                                <a href="/use-cases/product-adoption" target="_blank" rel="noopener noreferrer" aria-label="Go to Product adoption" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Product adoption</a>
                                {/* 
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Churn prevention" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Churn prevention</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Customer support" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Customer support</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to User experience" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">User experience</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Agentic AI" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Agentic AI</a> */}
                            </div>
                        </div> 

                        <div className="flex flex-col gap-4">
                            <p className="text-primary-black text-[14px] font-normal leading-[16px] tracking-[0.14px]">Company</p>
                            <div className="flex flex-col gap-3.5">
                                {/* <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to About Mues AI" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">About Mues AI</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Manifesto" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Manifesto</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Blog" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Blog</a> */}
                                <a href="https://mues-ai.notion.site/?pvs=4" target="_blank" rel="noopener noreferrer" aria-label="Go to Careers" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Careers</a>
                                {/* <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Brand assets" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Brand assets</a> */}
                                <a href="https://cal.com/mues-ai/speak-with-founder" target="_blank" rel="noopener noreferrer" aria-label="Go to Speak with founder" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Speak w/ founder</a>
                                <a href="mailto:hi@mues.ai" target="_blank" rel="noopener noreferrer" aria-label="Contact us via email" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Contact us</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-primary-black text-[14px] font-normal leading-[16px] tracking-[0.14px]">Resources</p>
                            <div className="flex flex-col gap-3.5">
                                <a href="https://themuesum.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to The Muesum" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">The Muesum</a>
                                <a href="https://discord.gg/GZGjemzU2H" target="_blank" rel="noopener noreferrer" aria-label="Go to Community" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Community</a>
                                {/* <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Security" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Security</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Status" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Status</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Privacy policy" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Privacy policy</a>
                                <a href="https://www.mues.ai/" target="_blank" rel="noopener noreferrer" aria-label="Go to Terms of service" className="text-8e8e8e text-[14px] font-light leading-[16px] hover:text-primary-black cursor-pointer w-fit">Terms of service</a> */}
                            </div>
                        </div>
                </div>

            </div>

            {/* 2. satır */}
            <div>

                <div className="flex flex-col gap-y-1 xs:gap-y-0 items-center xs:flex-row mt-12 md:mt-9 justify-between xs:items-end">
                    
                    <div className="flex gap-x-2 xs:gap-x-3 md:gap-x-4">
                        <a href="https://x.com/mues_ai" target="_blank" rel="noopener noreferrer" aria-label="Go to X">
                        <XIcon width={24} height={24} className="text-8e8e8e hover:text-primary-black"/>
                        </a>
                        <a href="https://www.linkedin.com/company/muesai/" target="_blank" rel="noopener noreferrer" aria-label="Go to LinkedIn">
                        <LinkedinIcon width={24} height={24} className="text-8e8e8e hover:text-primary-black"/>
                        </a>
                        <a href="https://discord.gg/GZGjemzU2H" target="_blank" rel="noopener noreferrer" aria-label="Go to Discord">
                        <DiscordIcon width={24} height={24} className="text-8e8e8e hover:text-primary-black"/>
                        </a>
                        <a href="https://github.com/Mues-AI" target="_blank" rel="noopener noreferrer" aria-label="Go to GitHub">
                        <GitHubIcon width={24} height={24} className="text-8e8e8e hover:text-primary-black"/>
                        </a>
                    </div>

                    <p className="text-[#b6b6b6] text-right text-xs leading-4 tracking-[0.12px]">Mues AI © 2025</p>
                </div>

            </div>


        </div>

        {/* COLORFUL LINEAR LINES */}
        <div className="w-fit mx-auto flex flex-col items-center justify-center mt-3  gap-y-3">
            <div className="w-[73.016vw] max-w-[1104px] h-1 rounded bg-footerLineGradient"></div>
            <div className="w-[66.667vw] max-w-[1008px] h-1 rounded bg-footerLineGradient opacity-50"></div>
            <div className="w-[60.317vw] max-w-[912px] h-1 rounded bg-footerLineGradient opacity-20"></div>
            <div className="w-[53.968vw] max-w-[816px] h-1 rounded bg-footerLineGradient opacity-10"></div>
        </div>
    </div>
    </>
    );
  }