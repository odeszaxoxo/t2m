import cn from 'classnames';
import React from 'react';

interface ITitle extends React.HTMLProps<HTMLTitleElement> {
  sizeName?: 'xl' | 'l' | 'm' | 'sm' | 's' | 'semi-m' | 'xs';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  align?: 'left' | 'center' | 'right';
  marginSizeName?: 'l' | 'm' | 'sm' | 's' | 'xs';
}

export default function Title({
  children,
  className,
  sizeName,
  marginSizeName,
  align,
  tag = 'h2',
}: ITitle) {
  const titleClassName = cn('title', className, {
    [`title--${sizeName}`]: sizeName,
    [`title--${align}`]: align,
    [`title--margin--${marginSizeName}`]: marginSizeName,
  });

  return React.createElement(tag, { className: titleClassName }, children);
}
