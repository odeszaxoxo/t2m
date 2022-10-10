import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  insideRef?: React.Ref<HTMLButtonElement>;
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
  ...rest
}: ButtonProps & LinkProps) {
  const classNames = cn('button', className);

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
