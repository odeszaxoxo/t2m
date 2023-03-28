import React, { Fragment, useContext, useEffect, useState } from 'react';
import Utilities from 'Utilities';
import { SYSTEM_LOCALE } from 'Utilities/date';
import { Navigate } from 'react-router-dom';
import ROUTES from 'Dictionary/routes';
import { ISlot } from 'Types';
import { CalendarContext } from '../Context';
import Apply from '../Apply';

export default function Timetable(props: { slots: ISlot[] }) {
  const { date, apply, changeApply } = useContext(CalendarContext);
  const { slots } = props;
  const [time, setTime] = useState('');
  const [slotId, setSlotId] = useState<number>();

  useEffect(() => {
    console.log(date, apply);
  }, [date]);

  if (slots.length === 1 && slots[0].status === 2) {
    return <Navigate to={ROUTES.appointments()} />;
  }

  if (!date) {
    return null;
  }

  const formatter = (value: Date) => {
    const d = new Date(value);
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, day, month].join('-');
  };

  const labelFormatter = new Intl.DateTimeFormat('ru', { month: 'long' });

  const formatDate = () => {
    const monthName = labelFormatter.format(date).replace(/.$/, 'я');
    return `${`${date.getDate()} ${monthName}, ${time}`}`;
  };

  const checkSlot = (hour: string) => {
    const formattedDate = `${formatter(date)}T${hour}:00:00.000Z`;
    if (slots.some((slot) => slot.startedat === formattedDate)) {
      return true;
    }
    return false;
  };

  const getSlotId = (hour: string) => {
    const formattedDate = `${formatter(date)}T${hour}:00:00.000Z`;
    const selectedSlot = slots.find((slot) => slot.startedat === formattedDate);
    if (selectedSlot) {
      const { id } = selectedSlot;
      setSlotId(id);
    }
  };

  return apply && slotId ? (
    <Apply time={time} slotId={slotId} />
  ) : (
    <div className="timetable">
      <span>Выберите свободное время</span>
      <div className="timetable__holder">
        {[...Array(16)].map((_, index) => {
          const id = `hour-${index}`;
          const today = new Date();
          const hour = new Date(
            today.getFullYear(),
            today.getMonth(),
            1,
            index + 8
          ).toLocaleString(SYSTEM_LOCALE, {
            hour: '2-digit',
          });
          if (checkSlot(hour)) {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={id}>
                <input
                  onClick={() => {
                    setTime(Utilities.formatter.formatHourInterval(hour));
                    getSlotId(hour);
                  }}
                  hidden
                  type="radio"
                  name="timtable_hour"
                  id={id}
                />
                <label className="timetable__item" htmlFor={id}>
                  {Utilities.formatter.formatHourInterval(hour)}
                </label>
              </Fragment>
              // <button className="timetable__item" key={index} type="button">

              // </button>
            );
          }
          return null;
        })}
      </div>
      {time && time.length > 0 && (
        <div className="timetable__accept">
          <span>{formatDate()}</span>
          <button
            type="button"
            className="timetable__button"
            onClick={() => changeApply(true)}
          >
            Далее
          </button>
        </div>
      )}
    </div>
  );
}
