import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  insideRef?: React.Ref<HTMLButtonElement>;
  variant?: boolean;
  color?: string;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string;
  insideRef?: React.Ref<HTMLAnchorElement>;
}

export default function Button({
  className,
  url,
  children,
  insideRef,
  variant,
  color,
  ...rest
}: ButtonProps & LinkProps) {
  const classNames = cn('button', className, {
    'button--text': variant,
    'button--blue': color === 'blue',
    'button--pink': color === 'pink',
  });

  if (url) {
    return (
      <Link ref={insideRef} to={url} className={classNames} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" ref={insideRef} className={classNames} {...rest}>
      {children}
    </button>
  );
}
