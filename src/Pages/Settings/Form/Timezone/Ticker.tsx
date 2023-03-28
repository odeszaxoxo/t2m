import useInterval from 'Hooks/useInterval';
import React, { useEffect, useState } from 'react';
import { SYSTEM_LOCALE, SYSTEM_TIMEZONE } from 'Utilities/date';

const DATE_OPTIONS = {
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
} as const;

function getDateString(locale: string, timeZone: string) {
  return new Date().toLocaleString(locale, {
    timeZone,
    ...DATE_OPTIONS,
  });
}

export default function TimezoneTicker(props: { currentValue: string }) {
  const { currentValue } = props;
  const [selectedTime, setSelectedTime] = useState(
    getDateString(SYSTEM_LOCALE, currentValue)
  );

  const [systemTime, setSystemTime] = useState(
    getDateString(SYSTEM_LOCALE, SYSTEM_TIMEZONE)
  );

  useEffect(() => {
    setSelectedTime(getDateString(SYSTEM_LOCALE, currentValue));
  }, [currentValue]);

  useInterval(() => {
    setSystemTime(getDateString(SYSTEM_LOCALE, SYSTEM_TIMEZONE));
    setSelectedTime(getDateString(SYSTEM_LOCALE, currentValue));
  }, 1000);

  return (
    <>
      <span className="timezone__selected">
        Время в выбранном часовом поясе: {selectedTime}
      </span>
      <span className="timezone__system">
        Ваш системный часовой пояс: {SYSTEM_TIMEZONE} {systemTime}
      </span>
    </>
  );
}
