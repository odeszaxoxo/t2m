import useInterval from 'Hooks/useInterval';
import React, { useState } from 'react';
import Utilities from 'Utilities';

function generateTimeLeft(endDate: Date) {
  return Utilities.date.getTimeDiff(endDate);
}

export default function TimeLeftTicker(props: { endDate: Date }) {
  const { endDate } = props;
  const [timeLeft, setTimeLeft] = useState(generateTimeLeft(endDate));
  const timeString = Object.values(timeLeft)
    .map((time) => Utilities.formatter.formatLeadingZero(time))
    .join(':');

  useInterval(() => {
    setTimeLeft(generateTimeLeft(endDate));
  }, 1000);

  return <span>Вы сможете подключиться через {timeString}</span>;
}
