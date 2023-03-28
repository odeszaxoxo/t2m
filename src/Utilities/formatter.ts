/* eslint-disable import/prefer-default-export */
function calculateNextHour(hour: number) {
  if (hour === 24) {
    return '00';
  }
  return hour;
}

export function formatHourInterval(hour: string) {
  const splitted = typeof hour === 'string' ? hour.split(':') : [];
  if (splitted.length > 1) {
    const nextHour = calculateNextHour(parseInt(splitted[0], 10) + 1);
    return `${splitted} - ${nextHour}:00`;
  }
  const nextHour = calculateNextHour(parseInt(hour, 10) + 1);
  return `${hour}:00 - ${nextHour}:00`;
}

export function formatLeadingZero(number: number) {
  const parsedNumber = parseInt(number.toString(), 10);
  if (parsedNumber < 10) {
    return `0${parsedNumber}`;
  }
  return parsedNumber;
}
