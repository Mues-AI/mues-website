import { CursorSvg } from '../../../utils/svgOurBrand';

const CursorStopped = () => {
  return (
    <div className="w-fit h-auto flex flex-col items-center justify-center shrink-0 gap-1 rounded-[12px] border border-[#F1F1F1] bg-white p-2 shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)] whitespace-nowrap relative">

      <CursorSvg width={16} height={16} className="absolute -top-[10px] -left-[10px]" />

      <span className="text-[#565A64] text-center font-openrunde text-[12px] font-medium leading-[16px] tracking-[0.12px]">
        Ask AI
      </span>
      <div className="flex items-center gap-[2px]">
        <span className="inline-block text-[#B0BCC9] font-openrunde text-[9px] font-light leading-[12px] tracking-[0.09px]">
          Enter
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M0.666341 4.33333L2.33301 6M0.666341 4.33333L2.33301 2.66667M0.666341 4.33333L5.19968 4.33333C5.94641 4.33333 6.31978 4.33333 6.605 4.18801C6.85588 4.06018 7.05985 3.8562 7.18768 3.60532C7.33301 3.3201 7.33301 2.94674 7.33301 2.2V2.16667V2" stroke="#B0BCC9" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default CursorStopped;
