import Navbar from '../components/Navbar';
import { CursorSvg } from '../utils/showcase/svgShowcase';

export default function Showcase() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Navbar variant="light" />

      {/* Badget - Heading */}
      <div className="w-full flex flex-col items-center p-6 md:py-4 md:px-12 lg:px-[80px] mx-auto mt-[132px] mb-12">
        
        {/* Badge */}
        <div className="w-fit h-fit bg-f8f8f8 rounded-full py-[7px] px-3 flex items-center justify-center gap-2 mb-6">
          <CursorSvg width={12} height={12} fill="#777777" />

          <div className="text-center text-[12px] font-normal leading-4 tracking-[0.12px] text-[#777]">
          INCREASE PRODUCT ADOPTION
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="w-[544px] text-primary-black text-center font-rethinkSans text-[56px] font-bold leading-[64px] tracking-[0.56px] font-feature-settings-salt not-italic">
          See Mues AI<br />
          in action on your<br />
          favorite softwares
        </h1>
      </div>

      {/* Animation Container */}
      <div className="w-full h-full flex flex-col items-center justify-center">


      </div>

    </div>
  );
}
{/* <div className="px-3 py-1.5 bg-stone-50 rounded-[99px] inline-flex justify-center items-center gap-2">
    <div className="w-3 h-3 bg-neutral-500 shadow-[0px_1px_8px_0px_rgba(34,34,34,0.10)] outline outline-1 outline-offset-[-0.50px] outline-neutral-500" />
    <div className="text-center justify-center text-neutral-500 text-xs font-normal font-['Inter'] leading-none tracking-tight">INCREASE PRODUCT ADOPTION</div>
</div> */}