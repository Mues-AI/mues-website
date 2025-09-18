import { CursorSvg } from "../../../utils/svgOurBrand";
import { LogoNameSvg } from "../../../utils/svgOurBrand";
import clsx from "clsx";

const CursorPrompt = ({ prompt, className }) => {
  const formattedPrompt =
    prompt?.replace(/<br\/>/g, "\n") || "What can I do for you?";

  return (
    <div
      className={clsx(
        "min-w-fit h-auto flex-shrink-0 rounded-xl border border-[#F1F1F1]",
        "bg-white shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)] relative",
        className || "w-[256px]"
      )}
    >
      <CursorSvg width={16} height={16} className="absolute -top-[10px] -left-[10px]" />

      <p
        className={clsx(
          "whitespace-pre-line font-openRunde text-[13px] font-normal leading-4 tracking-[0.13px] p-3",
          prompt ? "text-[#323232]" : "text-[#BBB]"
        )}
      >
        {formattedPrompt}
      </p>

      <div className="w-full rounded-b-[11px] bg-[#FAFAFA] flex justify-between items-center px-[11px] py-2 leading-3 gap-6">
        <span className="text-[#A1A1A1] text-center font-sfPro text-[10px] font-normal">
          Press &apos;Enter&apos; to prompt
        </span>

        <div className="flex items-center gap-1">
          <span className="text-[#CCC] text-center font-sfPro text-[10px] font-normal">
            Powered by
          </span>
          <LogoNameSvg width={40} height={8} fill="#ccc" />
        </div>
      </div>
    </div>
  );
};

export default CursorPrompt;
