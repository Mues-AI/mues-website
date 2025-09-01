export const NoneXIcon = ({ width = 18, height = 18, strokeColor = "#777777", strokeWidth = 1.2, className = "" }) => {
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

export const TickIcon = ({ width = 19, height = 18, strokeColor = "#0089FF", strokeWidth = 1.2, className = "" }) => {
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