import React from 'react';

/**
 * Reusable Input component
 *
 * Props:
 * - type: input type (text, number, email, etc.)
 * - value: controlled value
 * - onChange: change handler (receives event)
 * - height: custom height (number in px or string e.g. '56px')
 * - padding: custom padding (e.g. 'px-3 py-2' or 'p-4')
 * - className: extra classes to merge
 * - disabled: disabled state
 * - ...rest: any other native input props (placeholder, name, etc.)
 */
const Input = React.forwardRef(function Input(
  {
    type = 'text',
    value,
    onChange,
    height = 'h-12', // default height as Tailwind class
    padding = 'p-4', // default padding as Tailwind class
    className = '',
    disabled = false,
    ...rest
  },
  ref
) {
  // Base styling for input
  const inputClass = `
    w-full ${height} ${padding} rounded-xl border border-[#F4F4F4] bg-white box-border
    text-[#17181A] font-inter text-sm font-normal leading-4 tracking-[0.14px]
    placeholder:text-[#8C97AC] placeholder:font-inter placeholder:text-sm placeholder:font-normal placeholder:leading-4 placeholder:tracking-[0.14px]
    ${disabled 
      ? 'border-[#F4F4F4] bg-[#F5F7F8] cursor-not-allowed placeholder:text-[#8C97AC]'
      : 'hover:border-[rgba(0,137,255,0.20)] hover:placeholder:text-[#777] focus:border-[#0089FF] focus:outline-1 focus:outline-[rgba(0,137,255,0.12)] focus:outline-offset-2 focus:placeholder:text-[#17181A]'
    }
    ${className}
  `.trim();

  // Handle custom height if provided as number or string
  const style = {};
  if (typeof height === 'number') {
    style.height = `${height}px`;
  } else if (typeof height === 'string' && !height.startsWith('h-')) {
    style.height = height;
  }

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={inputClass}
      style={style}
      {...rest}
    />
  );
});

export default Input;
