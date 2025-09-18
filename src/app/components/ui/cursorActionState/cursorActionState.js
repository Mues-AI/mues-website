import { CursorSvg } from "../../../utils/svgOurBrand";

const actionTypes = {
  analyzing: {
    text: "Analyzing..",
  },
  typing: {
    text: "Typing..",
  },
  clicking: {
    text: "Clicking..",
  },
  searching: {
    text: "Searching..",
  },
  checking: {
    text: "Checking..",
  }
};

const CursorActionState = ({ type = "analyzing" }) => {
  const action = actionTypes[type] || actionTypes.analyzing;

  return (
    <div className="w-fit px-2 py-1.5 rounded-[10px] bg-[#0089FF] shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]">
      <CursorSvg width={16} height={16} className="absolute -top-[10px] -left-[10px]" />

      <p className="text-white font-openRunde text-center font-medium text-[12px] leading-[16px] tracking-[0.12px]">
        {action.text}
      </p>
    </div>
  );
};

export default CursorActionState;
