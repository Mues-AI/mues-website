import SvgIconAi from '../utils/svgIconAi';
import Image from 'next/image';

export default function MainContent() {
  return (
    <main className="relative flex-grow w-full h-[calc(100vh-68px)] overflow-hidden flex flex-col">

      {/* Background Image */}
      <Image
      src="/images/mainFirstImage-1512.webp"
      alt="Background"
      fill
      priority
      quality={100}
      sizes="100vw"
      className="object-cover object-center"
      />

      <div className="w-full h-full p-6 pt-10 pb-6 sm:p-8 sm:pt-12 md:p-12 md:pt-16 lg:p-6 lg:pt-20 xl:pt-24 xl:pb-[72px] xl:px-20 flex flex-col justify-between relative z-10">
        
        <div className="w-fit">
          <div className="mb-6 max-w-[520px]">
            <h1 className="text-white font-rethinkSans font-bold leading-[72px] tracking-[0.56px] font-feature-settings-salt text-4xl xl:text-[56px] ">
              Software interaction
            </h1>
            {/* ! YAP BURADA text sizeları ayarı yarım kaldı. */}
            <h1 className="text-white font-instrumentSerif italic font-normal leading-[72px] tracking-[0.56px] font-feature-settings-salt text-4xl xl:text-[56px] ">
              has changed.
            </h1>
          </div>
          
          <p className="max-w-[520px] text-[#CCC] text-[20px] font-light leading-9 tracking-[0.2px] mt-6">
            Your users delegate any task to an AI agent using human language in your product.
          </p>
          
          <a href="https://tally.so/r/w2V7Dg" target="_blank" rel="noopener noreferrer" aria-label="Join waitlist" className="inline-flex px-[19px] py-[14px] justify-center items-center rounded-xl bg-white text-black text-center text-sm font-normal leading-4 mt-8 w-fit">
            Join waitlist
          </a>
        </div>

        <div className="mt-auto">
          <div className="text-[rgba(255,255,255,0.40)] text-sm font-light leading-4 tracking-[0.14px] mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 w-fit">
            Trusted by industry leaders and developers worldwide
          </div>
          
          <div className="w-fit h-8 flex items-center space-x-6">
            <SvgIconAi name="openai" width={107} height={32} alt="OpenAI" />
            <SvgIconAi name="claude" width={100} height={22} alt="Claude" />
            <SvgIconAi name="grok" width={79} height={30} alt="Grok" />
            <SvgIconAi name="deepseek" width={119} height={26} alt="DeepSeek" />
            <SvgIconAi name="gemini" width={66} height={24} alt="Gemini" />
            <SvgIconAi name="microsoft-copilot" width={84} height={24} alt="Microsoft Copilot" />
            <SvgIconAi name="mistral-ai" width={84} height={24} alt="Mistral AI" />
            <SvgIconAi name="ollama" width={83} height={30} alt="Ollama" />
          </div>
        </div>

      </div>
    </main>
  );
}