import React from 'react';

const SubHeadings = ({ 
  type = 'h2', 
  variant = 'light',
  className="", 
  children, 
  ...props 
}) => {
  const Tag = type;

  const variantStyles = {
    light: 'text-primary-black',
    dark: 'text-white'
  };

  return (
    <Tag className={`${className} ${variantStyles[variant]}
      font-rethinkSans font-semibold 
      text-[30px] leading-[40px] tracking-[0.3px] 
      md:text-[56px] md:leading-[68px] md:tracking-[0.56px]
    `} {...props}>
      {children}
    </Tag>
  );
};

export default SubHeadings;
