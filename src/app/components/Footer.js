import Image from "next/image";
import { XIcon, LinkedinIcon, GitHubIcon, DiscordIcon } from '../utils/svgIcons';

export default function Footer() {
    return (
    <>
    <div className="flex flex-col mb-8">
        {/* FOOTER */}
        <div className="w-[1168px] h-auto flex flex-col mx-auto bg-[#F8F8F8] rounded-xl p-12 mt-6 gap-[66px]">

            {/* 1. satır */}
            <div className="flex flex-row w-full justify-between gap-x-[clamp(16px,5vw,76px)]">
                <div className="w-fit h-fit flex flex-col gap-y-8 justify-between items-start">
                    <Image src={"/svg/logoFooter.svg"} width={80} height={16} alt="mues logo"/>

                    <div className="md:w-[320px]">
                        <p className="w-fit md:w-[300px] h-auto tracking-[0.1px] text-[#AAA] font-Urbanist text-[13px] font-medium leading-[20px]">Software Interaction Company</p>
                        <p className="w-fit md:w-[300px] h-auto tracking-[0.1px] text-[#B6B6B6] text-[12px] font-light leading-[20px]">to create a world where software adapts to humans,
                        not humans to software.</p>
                    </div>
                </div>

                <div className="w-fit flex flex-row flex-1 h-49 gap-15">
                    <div className="flex flex-col gap-4 flex-1">
                        <p className="text-[#17181A] text-[14px] font-normal leading-[16px] tracking-[0.14px]">Product</p>
                        <div className="flex flex-col gap-3.5">
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Features</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Pricing</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Enterprise</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Changelog</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Docs</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Help</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 flex-1">
                        <p className="text-[#17181A] text-[14px] font-normal leading-[16px] tracking-[0.14px]">Use Cases</p>
                        <div className="flex flex-col gap-3.5">
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">How it works</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Product adoption</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Churn prevention</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Customer support</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">User experience</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Agentic AI</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 flex-1">
                        <p className="text-[#17181A] text-[14px] font-normal leading-[16px] tracking-[0.14px]">Company</p>
                        <div className="flex flex-col gap-3.5">
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">About Mues</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Manifesto</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Blog</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Careers</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Brand assets</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Speak w/ founder</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 flex-1">
                        <p className="text-[#17181A] text-[14px] font-normal leading-[16px] tracking-[0.14px]">Resources</p>
                        <div className="flex flex-col gap-3.5">
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Feedback</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Community</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Contact us</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Status</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Privacy policy</p>
                            <p className="text-[#8E8E8E] text-[14px] font-light leading-[16px] hover:text-[#17181A] cursor-pointer w-fit">Terms of service</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* 2. satır */}
            <div>

                <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-between items-end">
                    
                    <div className="flex gap-x-2 xs:gap-x-4 md:gap-x-6">
                        <a href="https://x.com/mues_ai" target="_blank" rel="noopener noreferrer" aria-label="Go to X">
                        <XIcon width={24} height={24} className="text-[#8E8E8E] hover:text-[#17181A]"/>
                        </a>
                        <a href="https://www.linkedin.com/company/muesai/" target="_blank" rel="noopener noreferrer" aria-label="Go to LinkedIn">
                        <LinkedinIcon width={24} height={24} className="text-[#8E8E8E] hover:text-[#17181A]"/>
                        </a>
                        <a href="https://discord.gg/GZGjemzU2H" target="_blank" rel="noopener noreferrer" aria-label="Go to Discord">
                        <DiscordIcon width={24} height={24} className="text-[#8E8E8E] hover:text-[#17181A]"/>
                        </a>
                        <a href="https://github.com/Mues-AI" target="_blank" rel="noopener noreferrer" aria-label="Go to GitHub">
                        <GitHubIcon width={24} height={24} className="text-[#8E8E8E] hover:text-[#17181A]"/>
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
