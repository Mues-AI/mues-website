import Image from "next/image";

export default function CompatibilityRow({ title, icons }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <Image src="/developers/svg/worksWith/trail.svg" alt="trail" width={17} height={64} />

      <div className="flex flex-row items-center gap-4 w-[166px]">
        <p className="text-white font-inter text-base font-normal tracking-[0.16px] whitespace-nowrap">
          {title}
        </p>

        <div className="flex-1 h-[1px] bg-[#484848]" />
      </div>

      <div className="flex flex-row items-center gap-3 grow">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-row items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="max-w-6 max-h-6 object-contain"
              />
            </div>
          </div>
        ))}

        <p className="text-white/25 font-inter text-base font-normal tracking-[0.16px] italic
        hidden sm:block">
          and more
        </p>
      </div>
    </div>
  );
}
