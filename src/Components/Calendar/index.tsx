import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useContext,
} from 'react';
import { CalendarContext } from 'Pages/Schedule/Context';
import { ISlot } from 'Types';
import CalendarControlIcon from 'Icons/CalendarControlIcon';
import CalendarMonth from './Month';

function generateMonth(monthDate: Date) {
  return {
    monthDate,
    key: `${monthDate.getFullYear()}-${monthDate.getMonth()}`,
  };
}

function generateVisiblePackOfMonths(date: Date, count = 2) {
  const monthIndex = date.getMonth();
  return [...Array(count)].map((_, index) => {
    return generateMonth(new Date(date.getFullYear(), monthIndex + index));
  });
}

const TRANSLATE_DISTANCE = 284;

export default function CalendarComponent(props: { slots: ISlot[] }) {
  const today = useRef(new Date());
  const { apply } = useContext(CalendarContext);
  const [months, setMonths] = useState(
    generateVisiblePackOfMonths(today.current, 2)
  );
  const { slots } = props;

  // TODO rename translateDirection (it's a date object)
  const [translateDirection, setTranslateDirection] = useState(
    months[months.length - 1].monthDate
  );
  const [isTranslating, setIsTranslating] = useState(false);
  const [direction, setDirection] = useState('next');
  const holderRef = React.useRef<HTMLInputElement>(null);
  const firstMount = useRef(true);

  const prevDisabled = useMemo(() => {
    return months[0].monthDate.getMonth() === today.current.getMonth();
  }, [months]);

  useEffect(() => {
    if (!isTranslating && !firstMount.current) {
      if (direction === 'next') {
        setMonths(generateVisiblePackOfMonths(months[0].monthDate, 3));
      } else {
        setMonths(generateVisiblePackOfMonths(translateDirection, 3));
      }
    }
  }, [translateDirection, direction]);

  useLayoutEffect(() => {
    const holderNode = holderRef.current as HTMLDivElement;

    const onTransitionEnd = () => {
      if (direction === 'next') {
        setMonths(generateVisiblePackOfMonths(months[1].monthDate, 4));
      } else {
        setMonths(generateVisiblePackOfMonths(months[0].monthDate, 4));
      }
    };

    // TODO style is read-only need workaround
    if (!isTranslating && !firstMount.current) {
      setIsTranslating(true);
      if (direction === 'next') {
        holderNode.addEventListener('transitionend', onTransitionEnd);
        holderNode.style.transform = `translate(${
          direction === 'next' ? -TRANSLATE_DISTANCE : TRANSLATE_DISTANCE
        }px)`;
      } else {
        (holderNode.style as any) = `transition: unset; transform: translate(${-TRANSLATE_DISTANCE}px)`;
        setTimeout(() => {
          holderNode.addEventListener('transitionend', onTransitionEnd);
          (holderNode.style as any) = 'transform: translate(0px)';
        }, 100);
      }
    } else if (isTranslating) {
      if (direction === 'next') {
        requestAnimationFrame(() => {
          (holderNode.style as any) = 'transition: unset';
        });
        setTimeout(() => {
          (holderNode.style as any) = 'transform: translate(0px)';
          setIsTranslating(false);
        }, 100);
      } else {
        setIsTranslating(false);
      }
    }

    return () => {
      holderNode?.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [months.length]);

  useEffect(() => {
    firstMount.current = false;
  }, []);

  if (apply) return null;

  return (
    <>
      <span>Выберите день</span>
      <div className="calendar">
        <div className="calendar__navigation">
          <button
            onClick={() => {
              const firstMonth = months[0].monthDate;
              const prevMonth = new Date(
                firstMonth.getFullYear(),
                firstMonth.getMonth() - 1
              );
              setDirection('prev');
              setTranslateDirection(prevMonth);
            }}
            disabled={prevDisabled}
            className="calendar__navigation-prev"
            type="button"
          >
            <CalendarControlIcon width={10} height={14} />
          </button>
          <button
            onClick={() => {
              const lastMonth = months[months.length - 1].monthDate;
              const nextMonth = new Date(
                lastMonth.getFullYear(),
                lastMonth.getMonth() + 1
              );
              setDirection('next');
              setTranslateDirection(nextMonth);
            }}
            className="calendar__navigation-next"
            type="button"
          >
            <CalendarControlIcon width={10} height={14} />
          </button>
        </div>
        <div className="calendar__container">
          <div ref={holderRef} className="calendar__holder">
            {months.map(({ monthDate, key }) => (
              <CalendarMonth
                today={today.current}
                key={key}
                month={monthDate}
                slots={slots}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
