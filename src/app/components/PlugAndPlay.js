import BorderBadge from "./ui/BorderBadge";
import SubHeadings from "./ui/SubHeadings";

export default function PlugAndPlay() {
    return (
      <div className="flex flex-col items-center gap-4 w-full md:gap-6 max-w-[464px] mt-24 md:mt-30 lg:mt-[148px] mb-16 md:mb-20 lg:mb-24 mx-auto">
  
        <BorderBadge>PLUG AND PLAY</BorderBadge>
  
        <SubHeadings type="h3" className="w-full text-center max-w-[1168px]">
        Deploys in less <br /> than 5 minutes.
        </SubHeadings>
  
        <p className="w-full text-center subHeadingsDescription">
            Innovate without worrying about steep learning curves or complex integration costs.
        </p>
        
      </div>
    );
  }
