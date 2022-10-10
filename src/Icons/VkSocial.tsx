import React from 'react';
import { IconProps } from './types';
import cn from 'classnames';

export default function VkSocial(props: IconProps) {
  const { color = '#242424', className } = props;

  const classNames = cn('icon-social', className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 15"
      width="24"
      height="15"
      className={classNames}
    >
      <path d="M13.22 15C5.12 15 .19 9.36 0 0h4.1c.13 6.88 3.26 9.8 5.65 10.4V0h3.94v5.94C16 5.68 18.42 2.98 19.23 0h3.87A11.43 11.43 0 0 1 18 7.48c1.86.9 4.86 3.26 6.01 7.52h-4.26c-.9-2.85-3.1-5.06-6.05-5.36V15h-.47Z" />
    </svg>
  );
}
