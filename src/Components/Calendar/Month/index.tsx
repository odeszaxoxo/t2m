/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { nanoid } from 'nanoid';
import { CalendarContext } from 'Pages/Schedule/Context';
import React, { memo, useRef, useMemo, useContext } from 'react';
import { ISlot } from 'Types';
import Utilities from 'Utilities';
import { SYSTEM_LOCALE } from 'Utilities/date';
import { generateDays } from './helper';

const DAYS = Utilities.date.getWeekDays();

const DayButton = (props: {
  day: number;
  index: number;
  today: Date;
  month: Date;
  slots: ISlot[];
}) => {
  const { changeDate } = useContext(CalendarContext);
  const { day, index, today, month, slots } = props;

  const disabled = useMemo(() => {
    if (today.getMonth() === new Date(month).getMonth()) {
      const todayDay = today.getDate();
      return day < todayDay;
    }
    return false;
  }, [day, month, today]);

  const id = useRef(nanoid());

  const workLoad = useMemo(() => {
    const selectedDay = new Date(month);
    if (day) {
      const queryDate = `${selectedDay.getFullYear()}-${day
        ?.toString()
        .padStart(2, '0')}-${(selectedDay.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;
      if (slots) {
        const modifier = slots?.filter((slot) =>
          slot.startedat.includes(queryDate)
        ).length;
        return `${(modifier / 16) * 100}%`;
      }
    }
    return '100%';
  }, [day, month, slots]);

  if (!day) {
    return <label className="calendar__day" data-invisible="true" />;
  }

  return (
    <>
      <input
        id={id.current}
        disabled={disabled}
        // defaultChecked={
        //   today.getMonth() === month.getMonth() && today.getDate() === day
        // }
        hidden
        name="day"
        type="radio"
        onChange={() =>
          changeDate(new Date(month.getFullYear(), month.getMonth(), day))
        }
        value="1"
      />
      <label
        htmlFor={id.current}
        className="calendar__day calendar__day-user"
        data-day={day || index + 1}
        style={
          {
            '--work-load': workLoad,
          } as React.CSSProperties
        }
      />
    </>
  );
};

const Days = (props: {
  days: number[];
  today: Date;
  month: Date;
  slots: ISlot[];
}) => {
  const { days, today, month, slots } = props;
  return (
    <>
      {days.map((day, index) => (
        <DayButton
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          today={today}
          month={month}
          index={index}
          day={day}
          slots={slots}
        />
      ))}
    </>
  );
};

export default function CalendarMonth(props: {
  month: Date;
  today: Date;
  slots: ISlot[];
}) {
  const { month, today, slots } = props;
  const monthName = useRef(
    new Date(month).toLocaleString(SYSTEM_LOCALE, {
      month: 'long',
      year: 'numeric',
    })
  );
  const days = useMemo(() => generateDays(month), [month]);

  return (
    <div className="calendar__month">
      <span className="calendar__month-name">{monthName.current}</span>
      <div className="calendar__weekdays">
        {DAYS.map((day) => (
          <div key={day} className="calendar__weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar__days">
        <Days days={days} today={today} month={month} slots={slots} />
      </div>
    </div>
  );
}
