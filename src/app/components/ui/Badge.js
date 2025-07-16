import React from 'react';

const Badge = ({ 
  children = "",
  className = "bg-white border-[rgba(0,137,255,0.25)]",
  textClassName = "text-primary-blue",
  padding = "px-3 py-2",
  ...props
}) => {
  return (
    <div className={`flex justify-center items-center ${padding} rounded-xl w-fit border ${className}`} {...props}>
      <span className={`text-center text-[14px] font-normal leading-[17px] ${textClassName}`}>
        {children}
      </span>
    </div>
  );
};

export default Badge;


