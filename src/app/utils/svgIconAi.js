import React from 'react';

export default function SvgIconAi({
  name,
  width = 24,
  height = 24,
  color = '#ffffff', 
  opacity = 0.4,     
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      style={{ color, opacity }}
      {...props}
    >
      <use href={`/MainAiModels/sprite.svg#${name}`} />
    </svg>
  );
} 