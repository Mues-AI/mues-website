"use client"
import React, { forwardRef } from 'react';

const ButtonGray = forwardRef(({ 
  children,
  href,
  target = '_blank',
  onClick,
  ariaLabel,
  width = 'w-fit',
  height = 'h-auto',
  className = '',
  padding = 'px-[19px] py-[14px]',
  textClassName = '',
  ...props
}, ref) => {

  const containerClass = `
    inline-flex ${padding} justify-center items-center rounded-xl
    min-w-fit shrink-0 rounded-xl cursor-pointer
    bg-[rgba(255,255,255,0.12)] 
    hover:bg-[rgba(255,255,255,0.15)]
    active:bg-[rgba(255,255,255,0.10)]
    ${width} ${height} ${className}
  `.trim();


  const textClass = `
    text-white text-center font-inter text-[14px] font-medium leading-4 tracking-[0.14px] whitespace-nowrap
    ${textClassName}
  `.trim();

  const content = (
    <p className={textClass}>
      {children}
    </p>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={"noopener noreferrer"}
        aria-label={ariaLabel || children}
        className={containerClass}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      aria-label={ariaLabel || children}
      className={containerClass}
      {...props}
    >
      {content}
    </button>
  );
});

ButtonGray.displayName = 'ButtonGray';

export default ButtonGray;
