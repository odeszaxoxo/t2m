/* eslint-disable import/prefer-default-export */
export function generateDays(month: Date) {
  // const monthDate = new Date(month);
  // console.log(month, 'month');
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const daysToUnShift = [];
  if (firstDay > 0) {
    daysToUnShift.push(...[...Array(firstDay - 1)]);
  }

  const totalDaysCount = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0
  ).getDate();

  const days = [
    ...daysToUnShift,
    ...[...Array(totalDaysCount)].map((_, index) => index + 1),
  ];

  return days;
}
