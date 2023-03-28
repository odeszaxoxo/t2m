import React from 'react';
import { ISvgIcon } from 'Types';

export default function CalendarControlIcon({ width, height }: ISvgIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 14"
      width={width}
      height={height}
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#3C3C3E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="m2 12 5.556-5L2 2"
      />
    </svg>
  );
}
