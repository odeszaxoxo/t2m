import React from 'react';
import cn from 'classnames';
import Title from 'Components/UI/Title';

interface IListItem {
  title?: string;
  description?: string;
  icon?: string;
}

interface IList {
  title?: string;
  description?: string;
  list: IListItem[];
  className?: string;
}

export default function VariousList({
  list,
  className,
  title,
  description,
}: IList) {
  const listClassName = cn('list--various', className);
  return (
    <div className="list--various-wrap">
      {title && <Title>{title}</Title>}
      {description && <Title>{description}</Title>}
      {list?.length > 0 && (
        <div className={listClassName}>
          {list?.map((item) => (
            <div key={item?.title} className="list--various-item">
              <img src={item.icon} alt="list-item-img" />
              <div className="list--various-item--inner">
                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
