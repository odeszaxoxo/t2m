/* eslint-disable import/prefer-default-export */
// export const SYSTEM_LOCALE = Intl.DateTimeFormat().resolvedOptions().locale;
export const SYSTEM_LOCALE = 'ru-RU';
export const SYSTEM_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

export function getWeekDays() {
  // TODO make weekdays generating programmatically from monday to sunday
  return ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  // const today = new Date();
  // return [...Array(7)].map((_, index) => {
  //   return new Date(
  //     today.getFullYear(),
  //     today.getMonth(),
  //     today.getDay() + index
  //   ).toLocaleString(SYSTEM_LOCALE, {
  //     weekday: 'short',
  //   });
  // });
}

export function getDateMonthName(date: Date) {
  const newDate = new Date(date);
  return newDate.toLocaleString(SYSTEM_LOCALE, {
    month: 'short',
  });
}

export function getTimeDiff(date2: Date, date1: Date = new Date()) {
  const initialTime = date1.getTime();
  const futureTime = date2.getTime();

  let diff = Math.abs(futureTime - initialTime) / 1000;
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60) % 60;
  diff -= minutes * 60;
  const seconds = Math.floor(diff % 60);

  return {
    hours,
    minutes,
    seconds,
  };
}
