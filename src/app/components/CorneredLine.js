export default function CorneredLine() {
    return (
        <div className="">
          
        {/* Dış çizgiler */}

        {/* p-3 sm:p-12 lg:p-24 */}

        {/* Üst */}
        <div className="absolute w-[calc(100vw)] h-[1px] top-0 left-1/2 -translate-x-[50vw] bg-[#EBEBEB]"/>
        
        {/* Alt */}
        <div className="absolute w-[calc(100vw)] h-[1px] bottom-0 left-1/2 -translate-x-[50vw] bg-[#EBEBEB]"/>

        {/* Sol çizgi */}
        <div className=" absolute w-px bg-[#EBEBEB] left-0 -top-6 -bottom-6 sm:-top-12 sm:-bottom-12 lg:-top-24 lg:-bottom-24  "/>

        {/* Sağ çizgi */}
        <div className=" absolute w-px bg-[#EBEBEB] right-0 -top-6 -bottom-6 sm:-top-12 sm:-bottom-12 lg:-top-24 lg:-bottom-24"/>

        {/* Sol üst köşe + */}
        <div className="absolute -top-3 left-0 w-[1px] h-6 bg-[#AAA]" />
        <div className="absolute top-0 -left-3 w-6 h-[1px] bg-[#AAA]" />

        {/* Sağ üst köşe + */}
        <div className="absolute -top-3 right-0 w-[1px] h-6 bg-[#AAA]" />
        <div className="absolute top-0 -right-3 w-6 h-[1px] bg-[#AAA]" />

        {/* Sol alt köşe + */}
        <div className="absolute -bottom-3 left-0 w-[1px] h-6 bg-[#AAA]" />
        <div className="absolute bottom-0 -left-3 w-6 h-[1px] bg-[#AAA]" />

        {/* Sağ alt köşe + */}
        <div className="absolute -bottom-3 right-0 w-[1px] h-6 bg-[#AAA]" />
        <div className="absolute bottom-0 -right-3 w-6 h-[1px] bg-[#AAA]" />
        
      </div>
    );
  }