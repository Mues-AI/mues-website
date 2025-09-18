import React from 'react';

export default function SvgIconAiSprite({
  name,
  width = 24,
  height = 24,
  color = '#ffffff', 
  opacity = 1,     
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      style={{ 
        color, 
        opacity,
        // Safari fix: Direct fill override
        fill: color
      }}
      {...props}
    >
      <use 
        href={`/MainAiModels/sprite.svg#${name}`}
        style={{
          // Force color inheritance for all browsers
          fill: color,
          color: color
        }}
      />
    </svg>
  );
} 