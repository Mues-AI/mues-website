import { OnlyLogo } from '../../utils/svgOurBrand';

const LOGO_VARIANTS = {
  24: { symbolSize: 16, gap: "gap-1.5" },
  30: { symbolSize: 20, gap: "gap-2" }
};

const getDefaultValues = (fs) => {
  if (LOGO_VARIANTS[fs]) return LOGO_VARIANTS[fs];
  
  return {
    symbolSize: Math.round(fs * 0.67),
    gap: fs <= 24 ? "gap-1.5" : "gap-2"
  };
};

export default function LogoName({ 
  text = "mues", 
  color,
  variant = "light",
  fontSize = 30,
  symbolSize: customSymbolSize,
  gap: customGap,
}) {
  const themeColor = color ?? (variant === 'light' ? '#17181A' : '#FFF');
  const defaultValues = getDefaultValues(fontSize);
  const symbolSize = customSymbolSize ?? defaultValues.symbolSize;
  const gap = customGap ?? defaultValues.gap;
  return (
    <div className={`w-fit flex items-center ${gap}`}>
      <OnlyLogo 
        width={symbolSize} 
        height={symbolSize} 
        fill={themeColor}
      />
      <div 
        className="font-urbanist font-bold"
        style={{
          color: themeColor,
          fontSize: `${fontSize}px`,
          lineHeight: "1",
          textBoxTrim: "trim-both",
          textBoxEdge: text.charAt(0) === text.charAt(0).toUpperCase() ? "cap alphabetic" : "ex alphabetic",
        }}
      >
        {text}
      </div>
    </div>
  );
}