import React from 'react';

export default function CheckSvg ({ fill = '#000', className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" className={className} {...props}>
      <path 
      d="M4.33325 14.0833L9.74992 19.5L21.6666 6.5" 
      stroke={fill} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    </svg>
  );
}

// Bunun kalınlı doğru diye bunu kullanıyoruz. İleride kaldır başka svg bul
export const ArrowRightIcon = ({ width = 16, height = 16, className = "", color = "#0089FF" }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.33325 8H13.5533" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Alttakileri şu anlık sadece pricing kullanıyor
export const XCloseIcon = ({ width = 18, height = 18, strokeColor = "#777777", strokeWidth = 1.2, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 18 18" 
      fill="none"
      className={className}
    >
      <path 
        d="M13.5 4.5L4.5 13.5M13.5 13.5L4.5 4.5" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const OvalTickIcon = ({ width = 19, height = 18, strokeColor = "#0089FF", strokeWidth = 1.2, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 19 18" 
      fill="none"
      className={className}
    >
      <path 
        d="M5.0415 8.59L6.0545 10.192C6.7515 11.293 7.0995 11.844 7.5465 12.037C7.9365 12.205 8.3785 12.208 8.7715 12.047C9.2215 11.86 9.5785 11.315 10.2915 10.225L14.0415 4.5" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};
