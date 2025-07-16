import Badge from "./ui/Badge";

export default function PlugAndPlay() {
    return (
      <div className="flex flex-col items-center gap-4 w-full md:gap-6 max-w-[464px] mt-24 md:mt-30 lg:mt-[148px] mb-16 md:mb-20 lg:mb-24 mx-auto">
  
        <Badge>PLUG AND PLAY</Badge>
  
        <h3 className="w-full text-primary-black text-center font-rethinkSans font-semibold text-[30px] leading-[40px] tracking-[0.3px] md:text-[56px] md:leading-[68px] md:tracking-[0.56px]">
            Deploys in less <br /> than 5 minutes.
        </h3>
  
        <p className="w-full text-[#474645] text-center font-light text-[18px] leading-[32px] md:text-[22px] md:leading-[38px] tracking-[-0.3px]">
            Innovate without worrying about steep learning curves or complex integration costs.
        </p>
        
      </div>
    );
  }