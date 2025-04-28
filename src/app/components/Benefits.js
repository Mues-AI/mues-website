import Image from "next/image";

export default function Benefits() {
    return (
      <div className="max-w-[1168px] mt-[220px] mb-37 mx-auto">
        
        {/* AGENTIC AI unlocked parts */}
        <div className="flex flex-col items-start gap-6 w-full max-w-[1168px]">
            <div className="flex items-start gap-1.5 px-3 py-2 rounded-xl border border-[rgba(0,137,255,0.25)] bg-white w-fit">
                <span className="text-[#0089FF] text-center text-[14px] font-normal leading-[17px]">
                    BENEFITS
                </span>
            </div>
    
            <h3 className="max-w-[1168px] text-[#17181A] font-rethinkSans text-[56px] font-semibold leading-[68px] tracking-[0.56px]">
                Agentic AI unlocked.
            </h3>
    
            <p className="max-w-xl text-[#474645] text-[22px] font-light leading-[38px] tracking-[-0.3px]">
            With Mues, make your product completely self-serve while turning your users into power users.
            </p>
        </div>  


        {/* 4lü container */}
        <div className="w-full h-auto mt-18 mb-12 flex flex-wrap justify-center gap-8">
            
            {/* 1 */}
            <div className="max-w-[568px] w-full h-[300px] bg-[#FBFBFB] rounded-3xl flex flex-col">
                {/* !YAP - image ayarlarını değiştiricez sonra */}
                <div className="h-full max-h-[150px] rounded-t-3xl w-full flex justify-start items-end px-8 pb-4">
                    <Image src="/Benefits/svg/orangeLine.svg" alt="Product adoption svg" width={473} height={96} className="object-cover w-fit" />
                </div>

                <div className="h-full max-h-[150px] rounded-b-3xl p-8 pt-[22px] flex flex-col gap-y-3">
                    <h3 className="text-[#222] text-[22px] font-normal leading-[24px]">Product adoption</h3>
                    <p className="text-[#777] text-[18px] font-light leading-[30px]">
                    Help users master your product with AI guidance, they watch the agent, learn from it with every action.
                    </p>
                </div>
            </div>


            {/* 2 */}
            <div className="max-w-[568px] w-full h-[300px] bg-[#FBFBFB] rounded-3xl flex flex-col">
                <div className="h-full max-h-[150px] rounded-t-3xl p-8 pb-[22px] flex flex-col gap-y-3">
                    <h3 className="text-[#222] text-[22px] font-normal leading-[24px]">Churn prevention</h3>
                    <p className="text-[#777] text-[18px] font-light leading-[30px]">
                    Reduce churn by addressing user friction early with proactive, behavior-driven AI agent support.
                    </p>
                </div>

                {/* !YAP - image ayarlarını değiştiricez sonra */}
                <div className="h-full max-h-[150px] rounded-b-3xl w-full flex justify-center items-end overflow-hidden px-8 pt-4">
                    <Image src="/Benefits/svg/greenCircleHalf.svg" alt="Product adoption svg" width={444} height={142} className="object-contain w-fit h-auto"  />
                </div>
            </div>

            {/* 3 */}
            <div className="max-w-[568px] w-full h-[300px] bg-[#FBFBFB] rounded-3xl flex flex-col border-3 border-[#0089FF] justify-center">

                {/* !YAP - image ayarlarını değiştiricez sonra */}
                <div className="relative h-full max-h-[160px] rounded-t-3xl w-full flex justify-start items-end px-5 pt-4">
                    <Image src="/Benefits/svg/autoBrowsing.svg" alt="Auto Browsing Photo" width={493} height={155} className="object-contain w-fit h-auto"/>

                    <div className="w-[125px] h-8 max-h-8 rounded-b-xl absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#0089FF] flex justify-center items-center">
                        <span className="absolute -left-[4px] top-[3px] w-1 h-1 scale-[1.05]">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0089FF]" >
                            <path d="M0,0 L100,0 L100,100 A100,100 0 0,0 0,0 Z" />
                            </svg>
                        </span>

                        <p className="relative text-white text-[13px] font-openRunde font-medium leading-[24px] tracking-[0.13px]">
                            Auto Browsing
                        </p>

                        <span className="absolute -right-[4px] top-[3px] w-1 h-1 scale-[1.1]">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0089FF]" >
                            <path d="M0,0 L100,0 A100,100 0 0,0 0,100 Z" />
                            </svg>
                        </span>

                    </div>
                </div>

                <div className="h-full max-h-[140] rounded-b-3xl p-8 pt-3 flex flex-col gap-y-3">
                    <h3 className="text-[#222] text-[22px] font-normal leading-[24px]">Live onboarding</h3>
                    <p className="text-[#777] text-[18px] font-light leading-[30px]">
                    Deliver real-time, personalized onboarding that adapts to each user's pace and needs.
                    </p>
                </div>
            </div>

            {/* 4 */}
            <div className="max-w-[568px] w-full h-[300px] bg-[#FBFBFB] rounded-3xl flex flex-col">
                {/* !YAP - image ayarlarını değiştiricez sonra */}
                <div className="h-full max-h-[150px] rounded-t-3xl w-full flex justify-start items-end">
                    <Image src="/Benefits/svg/supportTicketCharts.svg" alt="Less support tickets svg" width={568} height={150} className="object-cover h-[150px]" />
                </div>

                <div className="h-full max-h-[150px] rounded-b-3xl p-8 pt-[22px] flex flex-col gap-y-3">
                    <h3 className="text-[#222] text-[22px] font-normal leading-[24px]">Less support tickets</h3>
                    <p className="text-[#777] text-[18px] font-light leading-[30px]">
                    Reduce support tickets by empowering users to solve issues with 24/7 AI help, freeing team for high-value tasks.
                    </p>
                </div>
            </div>

        </div>


        {/* List part */}
        <div className="flex flex-col gap-1.5 w-full max-w-[1168px]">

            {/* 1. Satır */}
            <div className="w-[1168px] h-24 rounded-3xl flex flex-row justify-between items-center px-8 py-6">
                <div className="w-1/2 flex flex-row items-center gap-4">
                    {/* !YAP - svg için svgleri image etiketi içine al - dosyaya taşı */}
                    <div className="flex items-center h-[32px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 26C12.3137 26 15 21.5228 15 16C15 10.4772 12.3137 6 9 6C5.68629 6 3 10.4772 3 16C3 21.5228 5.68629 26 9 26Z" fill="#FFDD8D"/>
                            <mask id="mask0_38_1257" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-16" y="0" width="64" height="32">
                            <path d="M48 0H-16V32H48V0Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_38_1257)">
                            <path d="M21 29C25.4183 29 29 23.1797 29 16C29 8.8203 25.4183 3 21 3C16.5817 3 13 8.8203 13 16C13 23.1797 16.5817 29 21 29Z" fill="#F6B51E"/>
                            </g>
                        </svg>
                    </div>

                    <span className="text-[#211D1D] text-[20px] font-normal leading-[21.6px] tracking-[-0.33px]">
                        User experience, self-serve
                    </span>
                </div>

                <div className="w-1/2 pl-12 text-[#636161] text-[16px] font-light leading-[24px] tracking-[-0.18px]">
                    Enable users to complete tasks independently with intuitive AI assistance for seamless workflows.
                </div>
            
            </div>
            
            {/* 2. Satır */}
            <div className="w-[1168px] h-24 rounded-3xl bg-[#FBFBFB] flex flex-row justify-between items-center px-8 py-6">
                <div className="w-1/2 flex flex-row items-center gap-4">
                    {/*  */}
                    <div className="flex items-center h-[32px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M13.5509 4.24974C14.8229 3.48121 16.416 3.48121 17.688 4.24974L26.5599 9.61016C28.7266 10.9193 27.7985 14.2499 25.267 14.2499H5.97188C3.44037 14.2499 2.51232 10.9193 4.67903 9.61016L13.5509 4.24974Z" fill="#47C2FF"/>
                            <path d="M8 17H7C5.89543 17 5 17.8954 5 19V26C5 27.1046 5.89543 28 7 28H8C9.10457 28 10 27.1046 10 26V19C10 17.8954 9.10457 17 8 17Z" fill="#BDE9FF"/>
                            <path d="M16 17H15C13.8954 17 13 17.8954 13 19V26C13 27.1046 13.8954 28 15 28H16C17.1046 28 18 27.1046 18 26V19C18 17.8954 17.1046 17 16 17Z" fill="#BDE9FF"/>
                            <path d="M24 17H23C21.8954 17 21 17.8954 21 19V26C21 27.1046 21.8954 28 23 28H24C25.1046 28 26 27.1046 26 26V19C26 17.8954 25.1046 17 24 17Z" fill="#BDE9FF"/>
                        </svg>
                    </div>

                    <span className="text-[#211D1D] text-[20px] font-normal leading-[21.6px] tracking-[-0.33px]">
                    User satisfaction and productivity
                    </span>
                </div>

                <div className="w-1/2 pl-12 text-[#636161] text-[16px] font-light leading-[24px] tracking-[-0.18px]">
                Boost productivity with instant answers and task automation tailored to user preferences.
                </div>
            
            </div>
            
            {/* 3. Satır */}
            <div className="w-[1168px] h-24 rounded-3xl flex flex-row justify-between items-center px-8 py-6">
                <div className="w-1/2 flex flex-row items-center gap-4">
                    {/*  */}
                    <div className="flex items-center h-[32px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M6 18.7986V8.9524C6 7.80523 6.78074 6.80527 7.89366 6.52705L22.8937 2.77705C24.4715 2.38259 26 3.57597 26 5.2024V15.0486C26 16.1957 25.2193 17.1957 24.1063 17.4739L9.10634 21.2239C7.52847 21.6184 6 20.425 6 18.7986Z" fill="#FF58AE"/>
                            <path d="M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z" fill="#FFC3E2"/>
                        </svg>
                    </div>

                    <span className="text-[#211D1D] text-[20px] font-normal leading-[21.6px] tracking-[-0.33px]">
                    Expand revenues
                    </span>
                </div>

                <div className="w-1/2 pl-12 text-[#636161] text-[16px] font-light leading-[24px] tracking-[-0.18px]">
                Increase revenue by guiding users to premium features with contextual AI-driven recommendations.
                </div>
            </div>
            
            {/* 4. Satır */}    
            <div className="w-[1168px] h-24 rounded-3xl bg-[#FBFBFB] flex flex-row justify-between items-center px-8 py-6">
                <div className="w-1/2 flex flex-row items-center gap-4">
                    {/*  */}
                    <div className="flex items-center h-[32px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="32" viewBox="0 0 39 32" fill="none">
                            <path d="M18.7071 29.435L28.6066 19.5355C30.5592 17.5829 30.5592 14.4171 28.6066 12.4645L18.7071 2.56497C16.7544 0.612345 13.5886 0.612345 11.636 2.56497L1.73649 12.4645C-0.216133 14.4171 -0.216133 17.5829 1.73649 19.5355L11.636 29.435C13.5886 31.3877 16.7544 31.3877 18.7071 29.435Z" fill="#FCFCFC" fillOpacity="0.4"/>
                            <path d="M17.9999 25.8995L25.071 18.8284C26.6331 17.2663 26.6331 14.7337 25.071 13.1716L17.9999 6.1005C16.4378 4.5384 13.9052 4.5384 12.3431 6.1005L5.27199 13.1716C3.70989 14.7337 3.70989 17.2663 5.27199 18.8284L12.3431 25.8995C13.9052 27.4616 16.4378 27.4616 17.9999 25.8995Z" fill="#22D3BB" fillOpacity="0.4"/>
                            <path d="M29.5355 26.6066L36.6066 19.5355C38.5592 17.5829 38.5592 14.4171 36.6066 12.4645L29.5355 5.39339C27.5829 3.44077 24.417 3.44077 22.4644 5.39339L15.3933 12.4645C13.4407 14.4171 13.4407 17.5829 15.3933 19.5355L22.4644 26.6066C24.417 28.5592 27.5829 28.5592 29.5355 26.6066Z" fill="#FCFCFC"/>
                            <path d="M28.1212 23.7782L33.7781 18.1213C34.9497 16.9497 34.9497 15.0503 33.7781 13.8787L28.1212 8.22182C26.9497 7.05025 25.0502 7.05025 23.8786 8.22182L18.2217 13.8787C17.0502 15.0503 17.0502 16.9497 18.2217 18.1213L23.8786 23.7782C25.0502 24.9498 26.9497 24.9498 28.1212 23.7782Z" fill="#22D3BB"/>
                        </svg>
                    </div>

                    <span className="text-[#211D1D] text-[20px] font-normal leading-[21.6px] tracking-[-0.33px]">
                    Learn from user actions directly
                    </span>
                </div>

                <div className="w-1/2 pl-12 text-[#636161] text-[16px] font-light leading-[24px] tracking-[-0.18px]">
                Gain actionable insights from user behavior or prompts to optimize product experience, development and strategy.
                </div>
            </div>

        </div>

      </div>
    );
}