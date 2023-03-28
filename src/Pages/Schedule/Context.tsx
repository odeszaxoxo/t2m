import React, { createContext, useCallback, useMemo, useState } from 'react';

interface ICalendarContext {
  date: Date;
  apply: boolean;
  changeDate(value: Date): void;
  changeApply(value: boolean): void;
}

export const CalendarContext = createContext<ICalendarContext>(
  {} as ICalendarContext
);

export const CalendarContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const { children } = props;
  const [date, setDate] = useState<Date>(new Date());
  const [apply, setApply] = useState<boolean>(false);

  const changeDate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const changeApply = useCallback((newStatus: boolean) => {
    setApply(newStatus);
  }, []);

  const value = useMemo(
    () => ({
      date,
      changeDate,
      apply,
      changeApply,
    }),
    [date, changeDate, apply, changeApply]
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
