export function HamburgerSvg({ width = 20, height = 20, stroke = 'white' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 7.5H17.5" stroke={stroke} strokeLinecap="round"/>
      <path d="M2.5 12.5H17.5" stroke={stroke} strokeLinecap="round"/>
    </svg>
  );
}