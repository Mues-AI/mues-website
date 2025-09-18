export default function CorneredLine({ variant = "light" }) {
    const colors = {
        light: {
            border: "bg-[#EBEBEB]",
            corner: "bg-[#AAA]"
        },
        dark: {
            border: "bg-[#222222]",
            corner: "bg-[#777777]"
        }
    };

    const { border, corner } = colors[variant];

    return (
        <div className="">
          
        {/* Dış çizgiler */}

        {/* p-3 sm:p-12 lg:p-24 */}

        {/* Üst */}
        <div className={`absolute w-[calc(100vw)] h-[1px] top-0 left-1/2 -translate-x-[50vw] ${border}`}/>
        
        {/* Alt */}
        <div className={`absolute w-[calc(100vw)] h-[1px] bottom-0 left-1/2 -translate-x-[50vw] ${border}`}/>

        {/* Sol çizgi */}
        <div className={`absolute w-px ${border} left-0 -top-6 -bottom-6 sm:-top-9 sm:-bottom-9 md:-top-12 md:-bottom-12 lg:-top-18 lg:-bottom-18`}/>

        {/* Sağ çizgi */}
        <div className={`absolute w-px ${border} right-0 -top-6 -bottom-6 sm:-top-9 sm:-bottom-9 md:-top-12 md:-bottom-12 lg:-top-18 lg:-bottom-18`}/>

        {/* Sol üst köşe + */}
        <div className={`absolute -top-3 left-0 w-[1px] h-6 ${corner}`} />
        <div className={`absolute top-0 -left-3 w-6 h-[1px] ${corner}`} />

        {/* Sağ üst köşe + */}
        <div className={`absolute -top-3 right-0 w-[1px] h-6 ${corner}`} />
        <div className={`absolute top-0 -right-3 w-6 h-[1px] ${corner}`} />

        {/* Sol alt köşe + */}
        <div className={`absolute -bottom-3 left-0 w-[1px] h-6 ${corner}`} />
        <div className={`absolute bottom-0 -left-3 w-6 h-[1px] ${corner}`} />

        {/* Sağ alt köşe + */}
        <div className={`absolute -bottom-3 right-0 w-[1px] h-6 ${corner}`} />
        <div className={`absolute bottom-0 -right-3 w-6 h-[1px] ${corner}`} />
        
      </div>
    );
}