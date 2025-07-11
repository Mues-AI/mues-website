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

export const InfoIcon = ({ width = 18, height = 18, strokeColor = "#979797", strokeWidth = 1.2, className = "" }) => {
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
        d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M9.021 11.385V9.31104" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8.99989 7.86598C9.49197 7.86598 9.89089 7.46707 9.89089 6.97498C9.89089 6.4829 9.49197 6.08398 8.99989 6.08398C8.5078 6.08398 8.10889 6.4829 8.10889 6.97498C8.10889 7.46707 8.5078 7.86598 8.99989 7.86598Z" 
        fill={strokeColor}
      />
    </svg>
  );
};