import useResize from 'Hooks/useResize';
import Calendar from 'Components/Calendar';
import React, { useEffect, useState } from 'react';
import Api from 'Api';
import { useRecoilValue } from 'recoil';
import userAtom from 'Recoil/Atoms/User';
import { ISlot } from 'Types';
import useAPIError from 'Hooks/useAPIError';
import Timetable from './Timetable';
import { CalendarContextProvider } from './Context';

export default function SchedulePage() {
  const { isPhone } = useResize();
  const [slots, setSlots] = useState<ISlot[]>([]);
  const user = useRecoilValue(userAtom);
  const { handleAPIError } = useAPIError();

  useEffect(() => {
    async function getSlots() {
      try {
        const results = await Api.post(Api.routes.getFreeSlots(), {
          langs: user ? user.langs : ['ru', 'ua'],
        });
        setSlots(results.result);
      } catch (error: any) {
        handleAPIError(error);
      }
    }

    getSlots();
  }, [user]);

  return (
    <>
      {isPhone && <div className="page__navigation-info">Запись на приём</div>}
      <section className="schedule">
        <CalendarContextProvider>
          <Calendar slots={slots} />
          <Timetable slots={slots} />
        </CalendarContextProvider>
      </section>
    </>
  );
}
