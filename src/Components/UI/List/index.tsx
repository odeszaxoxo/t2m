import React, { useRef, useState } from 'react';
import Button from 'Components/UI/Button';
import ArrowDown from 'Icons/Arrows/ArrowDown';
import cn from 'classnames';

interface IList {
  list: any;
  className?: string;
  isHidenable?: boolean;
}

export default function List({ list, className, isHidenable = false }: IList) {
  const scrollToFirstItem = useRef(0);
  const [isAllItemsShown, setAllItemsShown] = useState(!isHidenable);

  const listClassNames = cn('list', className, {
    'list--expanded': isAllItemsShown,
    [`${className}-expanded`]: isAllItemsShown,
  });
  const listWrapClassNames = cn('list__wrap', `${className}-wrap`);
  const buttonClassNames = cn('list__button', `${className}-button`, {
    'list__button--expand': isAllItemsShown,
    [`${className}-button--expand`]: isAllItemsShown,
  });

  const handleShowAllList = () => {
    if (!isAllItemsShown) {
      scrollToFirstItem.current = window.scrollY;
    } else {
      window.scrollTo(0, scrollToFirstItem.current);
    }

    setAllItemsShown(!isAllItemsShown);
  };

  const listItem = (item: any) => {
    if (item?.name) {
      return (
        <li key={item?.name} className="list__item">
          <div>
            <h4>{item?.name}</h4>
            <p>{item?.additional}</p>
          </div>
        </li>
      );
    }

    return (
      <li key={item} className="list__item">
        <h4>{item}</h4>
      </li>
    );
  };

  return (
    <div className={listWrapClassNames}>
      {list?.length > 0 && isAllItemsShown ? (
        <ul className={listClassNames}>
          {list.map((item: any) => listItem(item))}
        </ul>
      ) : (
        <ul className={listClassNames}>
          {list.slice(0, 3).map((item: any) => listItem(item))}
        </ul>
      )}
      {isHidenable && (
        <Button className={buttonClassNames} onClick={handleShowAllList}>
          <ArrowDown />
          <p>Скрыть маршрут</p>
        </Button>
      )}
    </div>
  );
}
