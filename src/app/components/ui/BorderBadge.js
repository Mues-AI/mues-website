import React from 'react';

const BorderBadge = ({ 
  children = "",
  variant = "light",
  className = "",
  textClassName = "",
  padding = "px-3 py-2",
  ...props
}) => {
  const defaultClasses = {
    light: {
      container: "bg-white border-[rgba(0,137,255,0.25)]",
      text: "text-primary-blue"
    },
    dark: {
      container: "bg-transparent border-[rgba(255,255,255,0.25)]",
      text: "text-[rgba(255,255,255,0.75)]"
    }
  };
  const containerClasses = `flex justify-center items-center ${padding} rounded-xl w-fit border ${defaultClasses[variant].container} ${className}`;
  const textClasses = `text-center text-[14px] font-normal leading-[17px] ${defaultClasses[variant].text} ${textClassName}`;

  return (
    <div className={containerClasses} {...props}>
      <span className={textClasses}>
        {children}
      </span>
    </div>
  );
};

export default BorderBadge;


