import React from 'react';

export default function SvgIconAi({ name, width = 24, height = 24, ...props }) {
  return (
    <svg width={width} height={height} {...props}>
      <use href={`/MainAiModels/sprite.svg#${name}`} />
    </svg>
  );
} 