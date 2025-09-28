import styles from "./developers.module.scss";
import Image from "next/image";
import Navbar from "../components/Navbar.js";
import H1 from "@/app/components/ui/H1";
import ButtonWhite from "@/app/components/ui/ButtonWhite.js";
import { Play } from "iconsax-react";
import CheckSvg from "../utils/svgGeneralUtils.js";
import BorderBadge from "../components/ui/BorderBadge";
import SubHeadings from "@/app/components/ui/SubHeadings";
import { LogoNameSvg } from '../utils/svgOurBrand';
import CorneredLine from "../components/CorneredLine";
import CompatibilityRow from "./CompatibilityRow";
import DeveloperFeatureCell from "./DeveloperFeatureCell";
import { GitHubIcon } from "../utils/svgSocialMedia";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Evolution from "./Evolution";
import InstallationShape from "./installationShape";
import ButtonGray from "../components/ui/ButtonGray";


export default function Developers() {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar 
        className="bg-transparent"
        logoNameAnimationProps={{
          flipOnHover: true,
          primaryText: 'Developers',
          secondaryText: 'mues',
          fontSize: 22,
        }}
      />


      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18 '>
        <div className="flex flex-col items-center gap-4 w-[330px] sm:w-full max-w-[720px] mx-auto
          mt-[46px] mb-[96px] 
          md:mt-[64px] md:mb-[112px] 
          lg:mt-[98px] lg:mb-[132px]"
        >
          <Image
            src="/developers/images/developersHero.webp"
            // src="/CommentsFAQ/images/faqBottomImage1.webp"
            alt="Developers"
            width={500}
            height={246}
            className="aspect-[500/246]"
            fetchPriority="high"
          />

          {/* Main Heading */}
          <H1 variant="white" className="mt-2 md:mt-4 lg:mt-8">
            How developers facilitate successful user interactions
          </H1>

          <p className="w-full text-center text-[#CCC] font-inter not-italic
          text-[16px] md:text-[20px]
          leading-[28px] md:leading-[36px] 
          tracking-[0.16px] md:tracking-[0.2px]">
            When your users get stuck, the AI cursor takes over.
            <br className="hidden sm:block"/> Users just ask, and it handles the rest right away.
          </p>

          <div className="flex flex-row items-center gap-2 mt-2 lg:mt-4">
            {/* Get started free */}
            <ButtonWhite
              href="https://cal.com/mues-ai/demo"
              target="_blank"
              ariaLabel="Get started"
              badge="G"
              className="gap-2"
              padding="py-[13px] px-[18px]"
            >
              Get started - free
            </ButtonWhite>

            <ButtonGray
            href="https://cal.com/mues-ai/talk-with-sales"
            ariaLabel="Talk to a human"
            >
              Talk to a human
            </ButtonGray>
          </div>

          <p className="text-[rgba(255,255,255,0.50)] font-openRunde text-[11px] font-normal leading-[13px]">
            or deploy it into your own setup in 5 mins!
          </p>
        </div>


        <div className="relative w-full max-w-[1168px] mx-auto">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="calc(100% - 1px)"
              height="calc(100% - 1px)"
              rx="16"
              ry="16"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeDasharray="12 6"
            />
          </svg>

          <div className="relative z-10 p-3 w-full h-full">
            {/* buton vs her şey aynı bu satırda - buton componentleşicek sadece  */}
            <div className="flex flex-row items-center gap-6 mb-3 pr-1">
              <button className="inline-flex px-2 py-[5px] justify-center items-center gap-2.5 rounded-md bg-white/20 text-white text-center font-openRunde text-xs font-medium leading-normal tracking-[0.12px] whitespace-nowrap">
                Your Product
              </button>

              <div className="flex flex-1 h-[1px] bg-white/20" />

              <div className="flex flex-row items-center gap-2.5">
                <Play size={15} color="#FFF" />
                <p className="text-white text-center font-openRunde text-xs font-normal leading-normal tracking-[0.12px] whitespace-nowrap">
                  Watch full video
                </p>
              </div>
            </div>

            {/* TODO : Video da watch the full video fallan yazıor video üst barı olmayacak */}
            <div className="w-full flex-1 flex">
              <video
                className="rounded-xl w-full aspect-[372/233] object-cover"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/videos/videoFirstFrame.webp"
              >
                <source src="/videos/mainVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="max-w-[1168px] sm:px-3 mt-6 md:mt-8 lg:mt-12 mx-auto 
        grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense
        gap-y-[16px] gap-x-[clamp(8px,8px,16px)] lg:gap-x-[16px]">
          {[
            "Live onboarding",
            "Personalized", 
            "Plug and Play",
            "Decrease support cost",
            "Adaptive learning",
            "Behavior-driven Support",
            "Branded and customizable",
            "Real-time problem resolution",
          ].map((text, index) => (
            <div key={index} className="inline-flex items-center gap-2 md:gap-3 sm:ml-8 lg:ml-0">
              <CheckSvg 
                fill="#fff"
                className="w-4 h-4 md:w-[26px] md:h-[26px] flex-shrink-0"
              />
              <span className="text-white font-inter font-medium text-[13px] leading-[16px] md:text-[17px] md:leading-[26px]">
                {text}
              </span>
            </div>
          ))}
        </div>


        <div className="w-full max-w-[620px] flex flex-col items-center gap-4 md:gap-6 mx-auto z-10
          mt-[184px] lg:mt-[200px] mb-6 sm:mb-12 lg:mb-18"
        >
          <BorderBadge variant="dark">AGENTIC AI CURSOR</BorderBadge>

          <SubHeadings type="h3" variant="dark" className="text-center">
            Change the way <br/> your users use software
          </SubHeadings>

          <p className="w-full text-center text-[#DDD] text-[18px] font-normal leading-[32px] tracking-[-0.3px] not-italic sm:px-12">
            Software interaction has changed. Users no longer have to learn the
            interfaces, features and workings of software.
          </p>
        </div>

      </div>


      <Evolution />


      <div className='w-full px-6 sm:px-9 md:px-12 lg:px-18'>

        <div className="flex flex-col items-start gap-4 md:gap-6 
        w-full max-w-[1168px] mt-[96px] md:mt-[148px] lg:mt-[200px] mx-auto mb-12 md:mb-15 lg:mb-18">
          <BorderBadge variant="dark">INTELLIGENT</BorderBadge>

          <SubHeadings type="h3" variant="dark" >
          First & only AI Cursor <br/> for your product
          </SubHeadings>

          <p className="max-w-xl subHeadingsDescription text-[#DDD]">
          Mues introduces the first agentic AI cursor for your product, letting users complete tasks with natural language. It's intuitive interaction, redefined.
          </p>
        </div>

        {/* Benchmarks tables */}
        <div className={`${styles.benchmarkContainer}`}>
          {/* Left Container */}
          <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
            <div className={styles.benchmarkBox}>
              <div className={styles.gridContainer}>
                <div className={`${styles.tableHeader}`}>Benchmark</div>
                <div className={styles.tableHeader}>CUA</div>
                <div className={styles.tableHeader}>Prev. SOTA</div>
                <div className={styles.tableHeader}>Human</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.gridContainer}>
                <div className={styles.benchmarkText}>OSWorld</div>
                <div className={styles.redText}>38.1%</div>
                <div className={styles.whiteText}>22%</div>
                <div className={styles.whiteText}>72.4%</div>
              </div>
              <div className={`${styles.gridContainer} mt-6`}>
                <div className={styles.benchmarkText}>WebArena</div>
                <div className={styles.redText}>58.1%</div>
                <div className={styles.whiteText}>36.2%</div>
                <div className={styles.whiteText}>78.2%</div>
              </div>
              <div className={`${styles.gridContainer} mt-6`}>
                <div className={styles.benchmarkText}>WebVoyager</div>
                <div className={styles.redText}>87%</div>
                <div className={styles.whiteText}>56%</div>
                <div className={styles.whiteText}>-</div>
              </div>
            </div>
            <div className={styles.logoContainer}>
              <Image src="/MainAiModels/openai.svg" alt="OpenAI" width={80} height={24} />
              <div className={styles.verticalDivider} />
              <span className={styles.modelText}>CUA Model</span>
            </div>
          </div>
          {/* Right Container */}
          <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
            <div className={styles.benchmarkBox}>
              <div className={styles.gridContainer}>
                <div className={`${styles.tableHeader}`}>Benchmark</div>
                <div className={styles.tableHeader}>A1</div>
                <div className={styles.tableHeader}>M1</div>
                <div className={styles.tableHeader}>M1 Pro</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.gridContainer}>
                <div className={styles.benchmarkText}>Accuracy</div>
                <div className={styles.whiteText}>54.2%</div>
                <div className={styles.whiteText}>65.3%</div>
                <div className={styles.greenText}>70.4%</div>
              </div>
              <div className={`${styles.gridContainer} mt-6`}>
                <div className={styles.benchmarkText}>Latency /step</div>
                <div className={styles.whiteText}>15sec</div>
                <div className={styles.whiteText}>12sec</div>
                <div className={styles.greenText}>8sec</div>
              </div>
              <div className={`${styles.gridContainer} mt-6`}>
                <div className={styles.benchmarkText}>Cost /step</div>
                <div className={styles.whiteText}>$0.025</div>
                <div className={styles.whiteText}>$0.01</div>
                <div className={styles.greenText}>$0.003</div>
              </div>
            </div>
            <div className={styles.logoContainer}>
              <LogoNameSvg width={82} height={16} fill="#FFF" />
              <div className={styles.verticalDivider} />
              <span className={styles.modelText}>Agentic Generations</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1168px] mt-[96px] md:mt-[148px] lg:mt-[200px] mx-auto mb-16 md:mb-20 lg:mb-24">
          <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-[620px] mx-auto text-center">
            <BorderBadge variant="dark">INSTALLATION</BorderBadge>

            <SubHeadings type="h3" variant="dark">
            Fast to integrate,<br/> and deploy in 5 mins.
            </SubHeadings>

            <p className="max-w-xl subHeadingsDescription text-[#DDD]">
            Integrate our AI cursor agent with a simple script. Go from setup to live in minutes, with no engineering overhead.
            </p>
          </div>
        </div>

        {/* CORNERED BOX */}
        <div className="relative w-full max-w-[1512px] mx-auto">
          <CorneredLine variant="dark"/>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
          
            {/* Installation */}
            <div className="p-6 sm:p-12 lg:p-8 xl:p-12 flex flex-col justify-between gap-6 md:gap-8 xl:h-[392px]">
              
              {/* 
              <pre className="w-full whitespace-pre-wrap text-[12px] font-normal leading-[18px] not-italic text-transparent bg-clip-text bg-gradient-to-b from-[#979797] to-[#979797]/20 aspect-[342/141]">
                <code className="font-jetbrainMono ">
                    <span className="text-[#979797] opacity-50 font-jetbrainMono tracking-[-0.04px]">
                      {"<!-- Mues Cursor Config & Setup -->"}
                    </span>
                    {"\n<script id=\"Mues-Config\" type=\"application/json\">\n   {\n     \"apiUrl\": \"https://mues.ai/provider\", \n     \"activationMs\": 1000\n   }\n</script>\n<script\n...\n"}
                </code>
              </pre>
              */}

              <Image src="/developers/images/installImage.webp" alt="Install Image" width={360} height={160} className="object-contain "/> 
              
              <div className="flex flex-col gap-3"> 
                <p className={styles.corneredTitle}>Install</p>
                <p className={styles.corneredDesc}> 
                Install Mues AI with a few lines of code. No engineering burden.
                </p>
              </div>
            </div>

            {/* Customization */}
            <div className="p-6 sm:p-12 lg:p-8 xl:p-12 flex flex-col justify-between gap-6 md:gap-8 lg:gap-12 xl:h-[392px] border-l border-[#222222] border-t lg:border-t-none">
            
              <Image src="/developers/images/customizeImage.webp" unoptimized alt="Customization" width={342} height={142} className="object-contain "/>

              <div className="flex flex-col gap-3"> 
                <p className={styles.corneredTitle}>Customize</p>
                <p className={styles.corneredDesc}> 
                Align your AI Cursor with the branding and UI of your company & products.
                </p>
              </div>
            </div>

            {/* Shape */}
            <div className="p-6 sm:p-12 lg:p-8 xl:p-12 flex flex-col justify-between gap-6 md:gap-8 lg:gap-12 xl:h-[392px] border-l border-[#222222] border-t lg:border-t-none">

              <InstallationShape />

              <div className="flex flex-col gap-3 "> 
                <p className={styles.corneredTitle}>Shape</p>
                <p className={styles.corneredDesc}> 
                Establish rulesets that foster behaviors aligned with the company&apos;s objectives.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-[1168px] mt-[103px] md:mt-[196px] lg:mt-[272px] mx-auto mb-12 md:mb-18 lg:mb-24">
          <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-[620px] mx-auto text-center">
            <BorderBadge variant="dark">MODIFICATION</BorderBadge>

            <SubHeadings type="h3" variant="dark" className="max-w-[1168px]">
            Add your magical touch to AI Cursor
            </SubHeadings>

            <p className="subHeadingsDescription text-[#DDD]">
            Shape the AI's behavior with our powerful APIs for a truly tailored user experience.
            </p>
          </div>
        </div>


        <div className={`${styles.featuresGrid}`}>
          <div className={styles.featureColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/developers/images/features/1.webp"
                alt="Install"
                width={160}
                height={160}
              />
            </div>
            <div className={styles.contentContainer}>
              <h3 className={styles.featureTitle}>Signals API</h3>
              <p className={styles.featureDescription}>
              Guide the AI's actions with real-time application signals.
              </p>
            </div>
            <ButtonGray
            href="https://muesai.featurebase.app/en/help/articles/8844736-signals-api"
            ariaLabel="Signals API"
            >
              Read document
            </ButtonGray>
          </div>

          <div className={styles.featureColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/developers/images/features/2.webp"
                alt="Customize"
                width={160}
                height={160}
              />
            </div>
            <div className={styles.contentContainer}>
              <h3 className={styles.featureTitle}>Customization API</h3>
              <p className={styles.featureDescription}>
              Define the AI's capabilities and rules for your product.
              </p>
            </div>
            {/* TODO : link gelecek*/}
            <ButtonGray
            href=""
            ariaLabel="Customization API"
            >
              Read document
            </ButtonGray>
          </div>

          <div className={styles.featureColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/developers/images/features/3.webp"
                alt="Shape"
                width={160}
                height={160}
              />
            </div>
            <div className={styles.contentContainer}>
              <h3 className={styles.featureTitle}>CSP Permission</h3>
              <p className={styles.featureDescription}>
              Configure your CSP for a secure and seamless AI integration.
              </p>
            </div>
            <ButtonGray
            href="https://muesai.featurebase.app/en/help/articles/8122278-using-mues-ai-with-content-security-policy-csp"
            ariaLabel="CSP Permission"
            >
              Read document
            </ButtonGray>
          </div>
        </div>


        <div className="max-w-[1168px] mt-[128px] md:mt-[196px] lg:mt-[300px] mx-auto
        flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-[clamp(64px,calc(100%-1168px),96px)">

          {/* Compatible */}
          <div className="flex flex-col gap-8 sm:gap-12 w-full lg:min-w-[432px] max-w-[500px]">

            <div className="flex flex-col sm:items-center lg:items-start gap-4 md:gap-6">
              <BorderBadge variant="dark">PLUG AND PLAY</BorderBadge>

              <SubHeadings type="h3" variant="dark" className="max-w-[1168px]">
              Compatible
              </SubHeadings>

              <p className="max-w-xl subHeadingsDescription text-[#DDD] sm:!text-center lg:!text-left ">
              Mues AI is designed for universal compatibility. It works seamlessly across any OS, browser, or modern web framework.
              </p>
            </div>


            {/* WORKS WİTH and Svgler*/}
            <div className="flex flex-col gap-8">
              <p className="text-[#979797] font-inter text-base font-normal tracking-[0.16px]">Works with;</p>

              <div>
                <CompatibilityRow 
                  title="Any OS"
                  icons={[
                    { src: "/developers/svg/worksWith/appleLogo.svg", 
                      alt: "Applle" },
                    { src: "/developers/svg/worksWith/windowsLogo.svg", 
                      alt: "Windows" },
                    { src: "/developers/svg/worksWith/linuxLogo.svg", 
                      alt: "Linux" }
                  ]}
                />

                <CompatibilityRow 
                  title="Any Browser"
                  icons={[
                    { src: "/developers/svg/worksWith/chromeLogo.svg", 
                      alt: "Chrome" },
                    { src: "/developers/svg/worksWith/safariLogo.svg", 
                      alt: "Safari" },
                      { src: "/developers/svg/worksWith/bingLogo.svg", 
                      alt: "Bing" },
                    { src: "/developers/svg/worksWith/operaLogo.svg", 
                      alt: "Opera" }
                  ]}
                />

                <CompatibilityRow 
                  title="Any Framework"
                  icons={[
                    { src: "/developers/svg/worksWith/javascriptLogo.svg", 
                      alt: "javascriptLogo" },
                    { src: "/developers/svg/worksWith/reactLogo.svg", 
                      alt: "React" },
                    { src: "/developers/svg/worksWith/nextLogo.svg", 
                      alt: "Next" },
                    { src: "/developers/svg/worksWith/vueLogo.svg", 
                      alt: "Vue" },
                  ]}
                />
              </div>
            </div>

          </div>

          {/* Right Side Image */}
          <div className="w-full max-w-[572px] lg:self-start">
            <Image 
              src="/developers/m4.svg" 
              alt="M41x" 
              width={572} 
              height={572} 
              className="w-full h-full object-cover aspect-square"
            />
          </div>

        </div>


        <div className="max-w-[1168px] mt-[96px] md:mt-[216px] lg:mt-[300px] mx-auto relative">

          <div className="flex flex-row justify-between relative">
            <div className="flex flex-col items-start gap-4 md:gap-6 w-full max-w-[586px]">
              <BorderBadge variant="dark">COMMUNITY</BorderBadge>

              <SubHeadings type="h3" variant="dark" className="max-w-[1168px]">
              Mues AI Devs Club
              </SubHeadings>

              <p className="max-w-xl subHeadingsDescription text-[#DDD]">
              Join our developer community to collaborate, get early access, and help shape agentic AI's future.
              </p>

              {/* Join our devs club button */}
              <ButtonWhite
              href="https://cal.com/mues-ai/demo"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Join our devs club"
              badge="J"
              height="h-fit"
              wrapperClassName="mt-2 lg:absolute lg:bottom-0 lg:right-0"
              padding="py-3.5 px-[19px]"
              >
              Join our devs club
              </ButtonWhite>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#222221] mt-[48px] lg:mt-[72px]">
            <DeveloperFeatureCell 
            title="Agentic AI Building Tips"
            iconPath={"/developers/svg/community/community1.svg"} />
            <DeveloperFeatureCell 
            title="Open-Source Contributions"
            iconPath={"/developers/svg/community/community2.svg"}
            />
            <DeveloperFeatureCell 
            title="Early Access Opportunity"
            iconPath={"/developers/svg/community/community3.svg"}
            />
            <DeveloperFeatureCell 
            title="Developer Office Hours"
            iconPath={"/developers/svg/community/community4.svg"}
            />
            <DeveloperFeatureCell 
            title="Beta Testing Program"
            iconPath={"/developers/svg/community/community5.svg"}
            />
            <DeveloperFeatureCell 
            title="Community Hackathons"
            iconPath={"/developers/svg/community/community6.svg"}
            />
            <DeveloperFeatureCell 
            title="AI Updates & News"
            iconPath={"/developers/svg/community/community7.svg"}
            />
            <DeveloperFeatureCell 
            title="Integration Support Channel"
            iconPath={"/developers/svg/community/community8.svg"}
            />
          </div>

          {/* GİTHUBLI KISIM */}
          <div className="my-[148px] md:my-[216px] lg:my-[300px]
          flex flex-col items-center justify-center gap-4 max-w-[480px] mx-auto">
            <GitHubIcon width={67} height={65} className="text-[#fff]" />

            <p className="text-white text-center font-rethinkSans font-medium mt-4
            text-[28px] leading-[40px] md:text-[40px] md:leading-[47px] ">
            Mues AI on GitHub
            </p>

            <p className="text-[#DDD] text-center font-inter font-normal tracking-[-0.3px]
            text-[15px] leading-[24px] lg:text-[18px] lg:leading-[32px] indent-[8px]">
            Follow our progress on GitHub and <br/> help us build the future of user interaction.
            </p>

            <ButtonWhite
              href="https://github.com/Mues-AI"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Follow Mues AI"
              className="mt-2 gap-2"
              icon={<GitHubIcon width={16} height={16} className="text-[#000]" />}
              iconPosition="left"
            >
              Follow Mues AI
            </ButtonWhite>
          </div>
        </div>

      </div>

      {/* Mouse Big Image */}
      <Image src="/developers/images/bigMouse1x.webp" alt="mouse" width={1512} height={982} loading="lazy" className="w-full h-full object-cover aspect-[1512/982]" />


      <FAQ 
        variant="dark" 
        wrapperClass="my-24 lg:mt-[200px] lg:mb-37"
      />

      <Footer variant="dark"/> 


    </div>
  );
}