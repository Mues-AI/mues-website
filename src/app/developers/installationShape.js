import Image from 'next/image';

const InstallationShape = () => {
  const items = [
    {
      icon: '/developers/svg/community/community2.svg',
      label: 'Knowledge',
    },
    {
      icon: '/developers/svg/community/community3.svg',
      label: 'Design',
    },
    {
      icon: '/developers/svg/community/community4.svg',
      label: 'Rulesets',
    },
    {
      icon: '/developers/svg/community/community1.svg',
      label: 'Limitations',
    },
  ];

  const getBorderRadiusClass = (index) => {
    if (index === 0) return 'rounded-tl-xl';
    if (index === 1) return 'rounded-tr-xl';
    if (index === 2) return 'rounded-bl-xl';
    if (index === 3) return 'rounded-br-xl';
    return '';
  };

  return (
    <div className="w-full h-auto aspect-[360/142] xl:max-h-[142px] grid grid-cols-2 gap-2">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`
            flex items-center justify-center
            border border-[rgba(241,241,241,0.07)]
            bg-[rgba(255,255,255,0.07)]
            shadow-[0_0.905px_3.62px_0_rgba(34,34,34,0.05)]
            ${getBorderRadiusClass(index)}
          `}
        >
          <div className="flex items-center gap-2.5">
            <Image
              src={item.icon}
              alt={item.label}
              width={10}
              height={10}
              className="w-[10px] h-[10px] sm:w-[16px] sm:h-[16px] lg:w-[10px] lg:h-[10px]"
            />
            <p className="text-white font-normal font-openRunde
            text-[13px] sm:text-[18px] lg:text-[13px] 
            leading-[16px] sm:leading-[18px] lg:leading-[16px] 
            tracking-[0.13px] sm:tracking-[0.18px] lg:tracking-[0.13px]">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstallationShape;