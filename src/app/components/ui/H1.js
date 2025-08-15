import React from 'react';

const H1 = ({ 
  variant = 'dark',
  children,
  icon,
  className = "",
  ...props
}) => {

  const themeColors = {
    dark: {
      textColor: 'text-primary-black',
    },
    white: {
      textColor: 'text-white',
    }
  };

  const theme = themeColors[variant];


  return (
    <h1 className={`${className} ${theme.textColor} text-center font-rethinkSans font-bold
      font-feature-settings-salt not-italic
      text-[36px] leading-[48px] tracking-[0.36px]
      sm:text-[48px] sm:leading-[56px] sm:tracking-[0.48px]
      md:text-[52px] md:leading-[60px] md:tracking-[0.52px]
      lg:text-[56px] lg:leading-[64px] lg:tracking-[0.56px] `} {...props}>
      {icon}
        {children}
    </h1>
  );
};

export default H1;
