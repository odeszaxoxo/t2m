import React from 'react';
import cn from 'classnames';
import { IconProps } from './types';

export default function TgSocial(props: IconProps) {
  const { color = '#242424', className } = props;

  const classNames = cn('icon-social', className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 23 19"
      width="23"
      height="19"
      className={classNames}
    >
      <path
        fillRule="evenodd"
        d="M2.05 7.8c5.83-2.54 9.7-4.22 11.66-5.04C19.26.44 20.42.04 21.17.03c.17 0 .53.03.78.23.2.17.25.38.29.55.03.17.06.52.03.78a231.5 231.5 0 0 1-2.26 14.38c-.29 1.5-.84 2-1.37 2.05-1.17.1-2.05-.77-3.17-1.5-1.76-1.15-2.74-1.86-4.46-3-1.98-1.3-.7-2.01.43-3.18.3-.3 5.42-4.96 5.52-5.38.01-.05.01-.25-.1-.35-.12-.1-.29-.07-.42-.03-.18.03-2.98 1.9-8.43 5.58-.8.55-1.52.81-2.17.8-.71-.02-2.08-.4-3.11-.74C1.48 9.82.48 9.61.56 8.91c.05-.37.55-.74 1.49-1.12Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
