import React from 'react';
import cn from 'classnames';
import Button from 'Components/UI/Button';
import Title from 'Components/UI/Title';
import ArrowRight from 'Icons/Arrows/ArrowRight';
import useResize from 'Hooks/useResize';

interface IListItem {
  title: string;
  count?: number;
}

interface IList {
  title?: string;
  list: IListItem[];
  className?: string;
}

export default function VacanciesList({ list, className, title }: IList) {
  const { isDesktop } = useResize();
  const listClassName = cn('list--vacancies', className);
  return (
    <div className="list--vacancies-wrap">
      {title && <Title sizeName={isDesktop ? 'xl' : 'sm'}>{title}</Title>}
      {list?.length > 0 && (
        <div className={listClassName}>
          {list.map((item) => (
            <Button key={item?.title} className="list--vacancies-item" url="/">
              <div className="list--vacancies-item-inner">
                <p>{item.title}</p>
                <span>{item.count}</span>
              </div>
              <ArrowRight />
            </Button>
          ))}
        </div>
      )}
      <Button className="list--vacancies-button" url="/">
        Все вакансии в магазинах
      </Button>
    </div>
  );
}
