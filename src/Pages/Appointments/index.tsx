import Api from 'Api';
import Button from 'Components/UI/Button';
import useAPIError from 'Hooks/useAPIError';
import useResize from 'Hooks/useResize';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import userAtom from 'Recoil/Atoms/User';
import { IComment } from 'Types';
import Appointment from './Appointment';

interface IAppointmentData {
  id: number;
  comment: IComment;
  startedat: string;
  link: string;
}

export default function AppointmentsPage() {
  const { isPhone } = useResize();
  const [appointments, setAppointments] = useState<IAppointmentData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useRecoilValue(userAtom);
  const { handleAPIError } = useAPIError();

  useEffect(() => {
    setLoading(true);
    async function getSlots() {
      try {
        const results = await Api.post(Api.routes.getFreeSlots(), {
          langs: user.langs,
        });
        setAppointments(results.result);
      } catch (error: any) {
        handleAPIError(error);
      }
      setLoading(false);
    }

    getSlots();
  }, [user]);

  const formatter = (date: string) => {
    return `${date.substr(0, 4)}-${date.substr(8, 2)}-${date.substr(
      5,
      2
    )}${date.slice(10)}`;
  };

  const removeSlot = async (date: string) => {
    try {
      await Api.post(Api.routes.removeSlot(), {
        time: date,
        timezone: user.timeZone,
      });
    } catch (error: any) {
      handleAPIError(error);
    }
  };

  return (
    <>
      {isPhone && <div className="page__navigation-info">Приёмная</div>}
      <section className="appointments">
        {appointments.length > 0 &&
          appointments.map((appointment: IAppointmentData) => (
            <Appointment
              key={appointment.id}
              comment={appointment.comment || ''}
              startDate={new Date(formatter(appointment.startedat))}
              remove={removeSlot}
              initialDate={appointment.startedat}
              userZone={user.timeZone}
              link={appointment.link}
            />
          ))}
        {!loading && appointments.length === 0 && (
          <div className="appointment">
            <h2>У вас нет запланированных встреч</h2>
            <Button type="button" color="blue">
              Запланировать
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
