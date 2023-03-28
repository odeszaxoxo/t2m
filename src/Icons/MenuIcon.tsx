import React from 'react';
import { ISvgIcon } from 'Types';

export default function MenuIcon({ width, height }: ISvgIcon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 11C0 10.4477 0.447715 10 1 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H1C0.447715 12 0 11.5523 0 11ZM1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H15C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5H1Z"
        fill="#4B3E38"
      />
    </svg>
  );
}
