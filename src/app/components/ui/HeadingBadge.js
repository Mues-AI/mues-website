import React from 'react';

const HeadingBadge = ({ 
  variant = 'light',
  children,
  icon,
  className = "",
  ...props
}) => {

  const themeColors = {
    dark: {
      bg: 'bg-[#F8F8F814]',
      textColor: 'text-[#979797]',
    },
    light: {
      bg: 'bg-f8f8f8',
      textColor: 'text-[#777]',
    }
  };

  const theme = themeColors[variant];


  return (
    <span className={`${className} w-fit h-fit rounded-full py-[7px] px-3 flex items-center justify-center gap-2 ${theme.bg}`} {...props}>
      {icon}
      <span className={`${theme.textColor} text-center text-[12px] leading-4 tracking-[0.12px]`}>
        {children}
      </span>
    </span>
  );
};

export default HeadingBadge;
