import React from 'react';
import { IconProps } from './types';
import cn from 'classnames';

export default function OkSocial(props: IconProps) {
  const { color = '#242424', className } = props;

  const classNames = cn('icon-social', className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 12 22"
      width="12"
      height="22"
      className={classNames}
    >
      <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm0 8.48a2.48 2.48 0 1 1 0-4.96 2.48 2.48 0 0 1 0 4.96Z" />
      <path d="M7.97 16.19a8.59 8.59 0 0 0 3.49-1.54c.62-.52.72-1.45.22-2.1a1.43 1.43 0 0 0-2.04-.22 6.2 6.2 0 0 1-3.63 1.08 6.35 6.35 0 0 1-3.65-1.08 1.43 1.43 0 0 0-2.04.23c-.5.64-.4 1.57.22 2.09.07.05 1.4 1.12 3.6 1.55l-3.06 3.28a1.5 1.5 0 0 0 .04 2.1 1.43 1.43 0 0 0 2.05-.03l2.84-3.1 3.14 3.12c.56.58 1.48.57 2.05 0 .56-.59.56-1.53 0-2.1l-3.23-3.28ZM6.02 13.7Z" />
    </svg>
  );
}
