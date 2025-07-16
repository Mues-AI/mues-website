import Image from "next/image";
import Badge from "./ui/Badge";

// List item data
const listItems = [
  {
    title: "User experience, self-serve",
    description: "Enable users to complete tasks independently with intuitive AI assistance for seamless workflows.",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 26C12.3137 26 15 21.5228 15 16C15 10.4772 12.3137 6 9 6C5.68629 6 3 10.4772 3 16C3 21.5228 5.68629 26 9 26Z" fill="#FFDD8D"/>
        <mask id="mask0_38_1257" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-16" y="0" width="64" height="32">
        <path d="M48 0H-16V32H48V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_38_1257)">
        <path d="M21 29C25.4183 29 29 23.1797 29 16C29 8.8203 25.4183 3 21 3C16.5817 3 13 8.8203 13 16C13 23.1797 16.5817 29 21 29Z" fill="#F6B51E"/>
        </g>
      </svg>
    )
  },
  {
    title: "User satisfaction and productivity",
    description: "Boost productivity with instant answers and task automation tailored to user preferences.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M13.5509 4.24974C14.8229 3.48121 16.416 3.48121 17.688 4.24974L26.5599 9.61016C28.7266 10.9193 27.7985 14.2499 25.267 14.2499H5.97188C3.44037 14.2499 2.51232 10.9193 4.67903 9.61016L13.5509 4.24974Z" fill="#47C2FF"/>
        <path d="M8 17H7C5.89543 17 5 17.8954 5 19V26C5 27.1046 5.89543 28 7 28H8C9.10457 28 10 27.1046 10 26V19C10 17.8954 9.10457 17 8 17Z" fill="#BDE9FF"/>
        <path d="M16 17H15C13.8954 17 13 17.8954 13 19V26C13 27.1046 13.8954 28 15 28H16C17.1046 28 18 27.1046 18 26V19C18 17.8954 17.1046 17 16 17Z" fill="#BDE9FF"/>
        <path d="M24 17H23C21.8954 17 21 17.8954 21 19V26C21 27.1046 21.8954 28 23 28H24C25.1046 28 26 27.1046 26 26V19C26 17.8954 25.1046 17 24 17Z" fill="#BDE9FF"/>
      </svg>
    )
  },
  {
    title: "Expand revenues",
    description: "Increase revenue by guiding users to premium features with contextual AI-driven recommendations.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 18.7986V8.9524C6 7.80523 6.78074 6.80527 7.89366 6.52705L22.8937 2.77705C24.4715 2.38259 26 3.57597 26 5.2024V15.0486C26 16.1957 25.2193 17.1957 24.1063 17.4739L9.10634 21.2239C7.52847 21.6184 6 20.425 6 18.7986Z" fill="#FF58AE"/>
        <path d="M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z" fill="#FFC3E2"/>
      </svg>
    )
  },
  {
    title: "Learn from user actions directly",
    description: "Gain actionable insights from user behavior or prompts to optimize product experience, development and strategy.",
    svg: (
    <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.7075 29.435L28.607 19.5355C30.5597 17.5829 30.5597 14.4171 28.607 12.4645L18.7075 2.56497C16.7549 0.612345 13.5891 0.612345 11.6365 2.56497L1.73698 12.4645C-0.215645 14.4171 -0.215645 17.5829 1.73698 19.5355L11.6365 29.435C13.5891 31.3877 16.7549 31.3877 18.7075 29.435Z" fill="#FCFCFC" fillOpacity="0.4"/>
    <path d="M17.9999 25.8995L25.071 18.8284C26.6331 17.2663 26.6331 14.7337 25.071 13.1716L17.9999 6.1005C16.4378 4.5384 13.9052 4.5384 12.3431 6.1005L5.27199 13.1716C3.70989 14.7337 3.70989 17.2663 5.27199 18.8284L12.3431 25.8995C13.9052 27.4616 16.4378 27.4616 17.9999 25.8995Z" fill="#22D3BB" fillOpacity="0.4"/>
    <path d="M29.536 26.6066L36.607 19.5355C38.5597 17.5829 38.5597 14.4171 36.607 12.4645L29.536 5.39339C27.5834 3.44077 24.4175 3.44077 22.4649 5.39339L15.3938 12.4645C13.4412 14.4171 13.4412 17.5829 15.3938 19.5355L22.4649 26.6066C24.4175 28.5592 27.5834 28.5592 29.536 26.6066Z" fill="#FCFCFC"/>
    <path d="M28.1212 23.7782L33.7781 18.1213C34.9497 16.9497 34.9497 15.0503 33.7781 13.8787L28.1212 8.22182C26.9497 7.05025 25.0502 7.05025 23.8786 8.22182L18.2217 13.8787C17.0502 15.0503 17.0502 16.9497 18.2217 18.1213L23.8786 23.7782C25.0502 24.9498 26.9497 24.9498 28.1212 23.7782Z" fill="#22D3BB"/>
    </svg>
    )
  }
];

// List item component
const ListItem = ({ title, description, svg }) => {

  return (
    <div className="max-w-[1168px] h-auto lg:h-24 rounded-3xl flex flex-col lg:flex-row lg:justify-between lg:items-center px-8 py-6 even:bg-[#FBFBFB]">
      <div className="flex flex-row items-center lg:w-1/2 gap-3 md:gap-4">
        <div className="inline-flex h-[24px] w-[24px] md:h-[32px] md:w-[32px] items-center justify-center">
          <div className="transform scale-75 lg:scale-100 origin-center">
            {svg}
          </div>
        </div>
        <span className="text-[#211D1D] font-normal text-[17px] leading-[22px] tracking-[-0.33px] md:text-[20px] md:leading-[21.6px]">
          {title}
        </span>
      </div>

      <div className="ml-9 mt-2 md:ml-12 lg:ml-0 lg:mt-0 lg:pl-12 lg:w-1/2 text-[#636161] font-light text-[14px] leading-[24px] tracking-[-0.18px] md:text-[16px]">
        {description}
      </div>
    </div>
  );
};

export default function Benefits() {
    return (
      <div className="max-w-[1168px] mt-[112px] md:mt-[164px] lg:mt-[220px] mb-24 md:mb-37 mx-auto">
        
        {/* AGENTIC AI unlocked parts */}
        <div className="flex flex-col items-start gap-4 md:gap-6 w-full max-w-[1168px]">
            <Badge>BENEFITS</Badge>

    
            <h3 className="max-w-[1168px] text-primary-black font-rethinkSans font-semibold text-[30px] leading-[40px] tracking-[0.3px] md:text-[56px] md:leading-[68px] md:tracking-[0.56px]">
                Agentic AI unlocked.
            </h3>
    
            <p className="max-w-xl text-[#474645] font-light text-[18px] leading-[32px] md:text-[22px] md:leading-[38px] tracking-[-0.3px]">
            With Mues, make your product completely self-serve while turning your users into power users.
            </p>
        </div>  


        {/* 4lü container */}
        <div className="w-full h-auto mt-8 md:mt-12 lg:mt-18 mb-12 flex flex-wrap justify-center gap-4 md:gap-8">
            
            {/* 1 */}
            <div className="w-full  lg:w-[calc(50%-16px)] sm:max-w-[568px] min-h-[274px] max-h-[300px] h-auto bg-[#FBFBFB] rounded-3xl flex flex-col justify-between">
                <div className="h-[50%] rounded-t-3xl w-full flex justify-center items-end px-8 pt-4 overflow-hidden">
                    <Image src="/Benefits/svg/orangeLine.svg" alt="Product adoption svg" width={473} height={96} className="object-contain w-fit h-auto" />
                </div>

                <div className="h-auto xs:h-fit rounded-b-3xl p-6 md:p-8 pt-[22px] flex flex-col gap-y-1 sm:gap-y-3">
                    <h4 className="text-[#222] text-[19px] md:text-[22px] font-normal leading-[24px]">Product adoption</h4>
                    <p className="text-[#777] text-base md:text-[18px] font-light leading-[26px] md:leading-[30px]">
                    Help users master your product with AI guidance, they watch the agent, learn from it with every action.
                    </p>
                </div>
            </div>


            {/* 2 */}
            <div className="w-full lg:w-[calc(50%-16px)] sm:max-w-[568px] min-h-[274px] max-h-[300px] h-auto bg-[#FBFBFB] rounded-3xl flex flex-col justify-between">
                <div className="h-auto xs:h-fit rounded-t-3xl p-6 md:p-8 md:pb-[22px] flex flex-col gap-y-1 sm:gap-y-3">
                    <h4 className="text-[#222] text-[19px] md:text-[22px] font-normal leading-[24px]">Churn prevention</h4>
                    <p className="text-[#777] text-base md:text-[18px] font-light leading-[26px] md:leading-[30px]">
                    Reduce churn by addressing user friction early with proactive, behavior-driven AI agent support.
                    </p>
                </div>

                <div className="h-[50%] rounded-b-3xl w-full flex justify-center items-end overflow-hidden px-8 pt-4">
                    <Image src="/Benefits/svg/greenCircleHalf.svg" alt="Product adoption svg" width={444} height={142} className="object-contain w-fit h-auto" />
                </div>
            </div>

            {/* 3 */}
            <div className="w-full lg:w-[calc(50%-16px)] sm:max-w-[568px] min-h-[274px] max-h-[300px] h-auto bg-[#FBFBFB] rounded-3xl flex flex-col border-3 border-primary-blue justify-between relative">

                <div className="absolute top-0 w-[125px] left-[50%] -translate-x-1/2 h-8 max-h-8 rounded-b-xl bg-primary-blue flex justify-center items-center ">
                    <span className="absolute -left-[4px] top-[0px] w-1 h-1 scale-[1.05]">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-primary-blue" >
                        <path d="M0,0 L100,0 L100,100 A100,100 0 0,0 0,0 Z" />
                        </svg>
                    </span>

                    <p className="relative text-white text-[13px] font-openRunde font-medium leading-[24px] tracking-[0.13px]">
                        Auto Browsing
                    </p>

                    <span className="absolute -right-[4px] top-[0px] w-1 h-1 scale-[1.1]">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-primary-blue" >
                        <path d="M0,0 L100,0 A100,100 0 0,0 0,100 Z" />
                        </svg>
                    </span>

                </div>

                <div className="h-[50%] rounded-t-3xl w-full flex justify-start sm:justify-center items-center px-5 pt-4
                ">
                    <Image src="/Benefits/svg/autoBrowsing.svg" alt="Auto Browsing Photo" width={493} height={155} className="object-contain w-fit h-auto"/>
                </div>

                <div className="h-auto xs:h-fit rounded-b-3xl p-6 md:p-8 pt-3 flex flex-col gap-y-1 sm:gap-y-3">
                    <h4 className="text-[#222] text-[19px] md:text-[22px] font-normal leading-[24px]">Live onboarding</h4>
                    <p className="text-[#777] text-base md:text-[18px] font-light leading-[26px] md:leading-[30px]">
                    Deliver real-time, personalized onboarding that adapts to each user&apos;s pace and needs.
                    </p>
                </div>
            </div>

            {/* 4 */}
            <div className="w-full lg:w-[calc(50%-16px)] sm:max-w-[568px] min-h-[274px] max-h-[300px] h-auto bg-[#FBFBFB] rounded-3xl flex flex-col justify-between">
                <div className="h-[50%] rounded-t-3xl w-full flex justify-start items-end overflow-hidden">
                    <Image src="/Benefits/svg/supportTicketCharts.svg" alt="Less support tickets svg" width={568} height={150} className="object-contain h-full w-full" />
                </div>

                <div className="h-auto xs:h-fit rounded-b-3xl p-6 md:p-8 pt-[22px] flex flex-col gap-y-1 sm:gap-y-3">
                    <h4 className="text-[#222] text-[19px] md:text-[22px] font-normal leading-[24px]">Less support tickets</h4>
                    <p className="text-[#777] text-base md:text-[18px] font-light leading-[26px] md:leading-[30px]">
                    Reduce support tickets by empowering users to solve issues with 24/7 AI help, freeing team for high-value tasks.
                    </p>
                </div>
            </div>

        </div>


        {/* List part */}
        <div className="flex flex-col   gap-1.5 w-full max-w-[1168px]">
          {listItems.map((item, index) => (
            <ListItem 
              key={index}
              title={item.title}
              description={item.description}
              svg={item.svg}
            />
          ))}
        </div>

      </div>
    );
}