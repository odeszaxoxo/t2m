import React from 'react';
import cn from 'classnames';

interface ILoader {
  color?: string;
  className?: string;
}

export default function Loader({ color, className }: ILoader) {
  const loaderClassNames = cn('loader', className);

  return (
    <svg
      className={loaderClassNames}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16C7.44772 16 7 15.5523 7 15C7 14.4477 7.44772 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 8.64723 2.10214 9.27934 2.3002 9.88016C2.4731 10.4047 2.18807 10.9701 1.66355 11.143C1.13902 11.3159 0.573648 11.0308 0.400742 10.5063C0.136285 9.70407 0 8.86063 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z"
        fill={color || 'currentColor'}
      />
    </svg>
  );
}
