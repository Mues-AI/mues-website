import { XIcon, LinkedinIcon, GitHubIcon, DiscordIcon } from '../utils/svgSocialMedia';
import { footerData } from '../data/footerData';
import LogoName from './ui/LogoName';


const variants = {
  light: {
    background: "bg-[#F8F8F8]",
    categoryTitle: "text-primary-black",
    link: {
      base: "text-[var(--color-8e8e8e)]",
      hover: "hover:text-[var(--color-primary-black)]"
    },
    socialIcon: {
      base: "text-8e8e8e",
      hover: "hover:text-primary-black"
    }
  },
  dark: {
    background: "bg-[#F8F8F8]/[0.05]",
    categoryTitle: "text-[#FFF]",
    link: {
      base: "text-[var(--color-8e8e8e)]",
      hover: "hover:text-[#FFF]"
    },
    socialIcon: {
      base: "text-8e8e8e",
      hover: "hover:text-[#FFF]"
    }
  }
};

export default function Footer({ variant = 'light' }) {
    const theme = variants[variant];

    const footerLinkClass = `${theme.link.base} text-[14px] font-light leading-[16px] ${theme.link.hover} cursor-pointer w-fit`;

    // Render footer column component
    const FooterColumn = ({ categoryData }) => (
        <div className="flex flex-col gap-4">
            <p className={`${theme.categoryTitle} text-[14px] font-normal leading-[16px] tracking-[0.14px]`}>
                {categoryData.title}
            </p>
            <div className="flex flex-col gap-3.5">
                {categoryData.links
                    .filter(link => link.active) // Only show active links
                    .map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.target}
                            rel={link.target ? "noopener noreferrer" : undefined}
                            aria-label={link.ariaLabel}
                            className={footerLinkClass}
                        >
                            {link.label}
                        </a>
                    ))
                }
            </div>
        </div>
    );

    return (
    <>
    <div className="flex flex-col mb-8">
        {/* FOOTER */}
        <div className={`w-full max-w-[1168px] h-auto flex flex-col mx-auto ${theme.background} rounded-xl p-6 md:p-9 lg:p-12 mt-4 md:mt-6`}>

            {/* 1. satır */}
            <div className="w-full flex flex-col gap-y-12 lg:gap-y-0 lg:flex-row lg:justify-between lg:gap-x-[clamp(16px,5vw,76px)]">
                <div className="w-fit h-fit flex flex-col gap-y-8 justify-between items-start">

                    <LogoName
                      fontSize={24}
                      color={variant === 'light' ? '#8E8E8E' : '#FFF'} 
                    />

                    <div className="md:w-[320px]">
                        <p className="w-fit md:w-[300px] h-auto tracking-[0.1px] text-[#AAA] font-urbanist text-[13px] font-medium leading-[20px]">The Software Interaction Company</p>
                        <p className="w-fit md:w-[300px] h-auto tracking-[0.1px] text-[#B6B6B6] text-[12px] font-light leading-[20px]">to create a world where software adapts to humans,
                        not humans to software.</p>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 h-auto gap-x-8 gap-y-12 lg:gap-x-15 "> 
                        {/* Footer Columns using data */}
                        <FooterColumn categoryData={footerData.product} />
                        <FooterColumn categoryData={footerData.useCases} />
                        <FooterColumn categoryData={footerData.company} />
                        <FooterColumn categoryData={footerData.resources} />
                </div>

            </div>

            {/* 2. satır */}
            <div>

                <div className="flex flex-col gap-y-1 xs:gap-y-0 items-center xs:flex-row mt-12 md:mt-9 justify-between xs:items-end">
                    
                    <div className="flex gap-x-2 xs:gap-x-3 md:gap-x-4">
                        <a href="https://x.com/mues_ai" target="_blank" rel="noopener noreferrer" aria-label="Go to X">
                        <XIcon width={24} height={24} className={`${theme.socialIcon.base} ${theme.socialIcon.hover}`}/>
                        </a>
                        <a href="https://www.linkedin.com/company/muesai/" target="_blank" rel="noopener noreferrer" aria-label="Go to LinkedIn">
                        <LinkedinIcon width={24} height={24} className={`${theme.socialIcon.base} ${theme.socialIcon.hover}`}/>
                        </a>
                        <a href="https://discord.gg/GZGjemzU2H" target="_blank" rel="noopener noreferrer" aria-label="Go to Discord">
                        <DiscordIcon width={24} height={24} className={`${theme.socialIcon.base} ${theme.socialIcon.hover}`}/>
                        </a>
                        <a href="https://github.com/Mues-AI" target="_blank" rel="noopener noreferrer" aria-label="Go to GitHub">
                        <GitHubIcon width={24} height={24} className={`${theme.socialIcon.base} ${theme.socialIcon.hover}`}/>
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