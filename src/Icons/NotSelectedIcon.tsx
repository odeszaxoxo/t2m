import React from 'react';
import { ISvgIcon } from 'Types';

export default function NotSelectedIcon({ width, height }: ISvgIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="25" cy="25" r="25" fill="#FFF" />
        <g stroke="#4B3E38" strokeWidth="1.2" transform="translate(10 10)">
          <circle cx="15" cy="15" r="14.4" />
          <path d="M12 13.2a3.6 3.6 0 1 0-7.2 0M25.2 13.2a3.6 3.6 0 1 0-7.2 0M19.586 21.994a5.001 5.001 0 0 1-9.16.03" />
        </g>
      </g>
    </svg>
  );
}
