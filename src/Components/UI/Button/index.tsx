import React from 'react';
import cn from 'classnames';
import Loader from 'Icons/Loader';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  insideRef?: React.Ref<HTMLButtonElement>;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string;
  insideRef?: React.Ref<HTMLAnchorElement>;
}

// todo: типизировать компонент, так, чтобы пропсы могли относится либо
// к пропсам кнопки, либо к пропсам линка. т.е. чтобы кнопка не могла
// одновременно содержать и type, и url одновременно

export default function Button(props: ButtonProps & LinkProps) {
  const { className, url, ...restProps } = props;
  const classNames = cn('button__custom', className);

  if (url) {
    const { children, insideRef, ...rest } = restProps as LinkProps;

    return (
      <Link ref={insideRef} to={url} className={classNames} {...rest}>
        {children}
      </Link>
    );
  }
  const { isLoading, children, insideRef, ...rest } = restProps as ButtonProps;

  return (
    <button ref={insideRef} className={classNames} {...rest}>
      {isLoading ? <Loader /> : children}
    </button>
  );
}
