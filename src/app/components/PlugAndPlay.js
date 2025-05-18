export default function PlugAndPlay() {
    return (
      <div className="flex flex-col items-center gap-4 w-full md:gap-6 max-w-[464px] mt-24 md:mt-30 lg:mt-[148px] mb-16 md:mb-20 lg:mb-24 mx-auto">
  
        <div className="flex justify-center items-center gap-1.5 px-3 py-2 rounded-xl border border-[rgba(0,137,255,0.25)] bg-white w-fit">
          <span className="text-[#0089FF] text-center text-[14px] font-normal leading-[17px]">
          PLUG AND PLAY
          </span>
        </div>
  
        <h3 className="w-full text-[#17181A] text-center font-rethinkSans font-semibold text-[30px] leading-[40px] tracking-[0.3px] md:text-[56px] md:leading-[68px] md:tracking-[0.56px]">
            Deploys in less <br /> than 5 minutes.
        </h3>
  
        <p className="w-full text-[#474645] text-center font-light text-[18px] leading-[32px] md:text-[22px] md:leading-[38px] tracking-[-0.3px]">
            Innovate without worrying about steep learning curves or complex integration costs.
        </p>
        
      </div>
    );
  }