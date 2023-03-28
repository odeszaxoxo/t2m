import React from 'react';
import { ISvgIcon } from 'Types';

export default function PlusIcon({ width, height }: ISvgIcon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="14.5"
        cy="14.5"
        r="13.75"
        fill="#4F65FC"
        stroke="#4F65FC"
        strokeWidth="1.5"
      />
      <rect x="14" y="8" width="1.5" height="13" fill="white" />
      <rect
        x="21.25"
        y="13.75"
        width="1.5"
        height="13"
        transform="rotate(90 21.25 13.75)"
        fill="white"
      />
    </svg>
  );
}
