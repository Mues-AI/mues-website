export default function MeetMuse() {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 max-w-[1168px] mt-24 md:mt-32 lg:mt-[200px] mb-12 md:mb-18 lg:mb-24 mx-auto">

      <div className="flex justify-center items-center gap-1.5 px-3 py-2 rounded-xl border border-[rgba(0,137,255,0.25)] bg-white w-fit">
        <span className="text-[#0089FF] text-center text-[14px] font-normal leading-[17px]">
          MEET MUES
        </span>
      </div>

      <h2 className="max-w-xl text-[#17181A] text-center font-rethinkSans font-semibold 
      text-[30px] leading-[40px] tracking-[0.3px]
      md:text-[56px] md:leading-[68px] md:tracking-[0.56px]
      ">
        A new kind of <p>software interaction.</p> 
      </h2>

      <p className="w-full max-w-[576px] text-[#474645] text-center font-light tracking-[-0.3px] 
      text-[18px] leading-[32px]
      md:text-[22px] md:leading-[38px]
      ">
        Mues onboards your users, helps them use your product, and reduces churn with lower support effort.
      </p>
      
    </div>
  );
}