import cn from 'classnames';
import React from 'react';

interface IDescription extends React.HTMLAttributes<HTMLDivElement> {
  sizeName?: 'l' | 'm' | 's' | 'xs';
  className?: string;
  dangerHTML?: string;
  color?: 'gray';
  marginSizeName?: 'l' | 'm' | 's' | 'xs';
}

const Description = ({
  sizeName,
  children,
  className,
  color,
  dangerHTML,
  marginSizeName,
}: IDescription) => {
  const descriptionClassName = cn('description', className, {
    [`description--${sizeName}`]: sizeName,
    [`description--${color}`]: color,
    [`description--margin--${marginSizeName}`]: marginSizeName,
  });

  return dangerHTML ? (
    <p
      className={descriptionClassName}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: dangerHTML }}
    />
  ) : (
    <p className={descriptionClassName}>{children}</p>
  );
};

export default Description;
