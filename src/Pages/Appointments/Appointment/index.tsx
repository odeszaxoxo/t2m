import Button from 'Components/UI/Button';
import React, { useMemo, useRef, useState } from 'react';
import Utilities from 'Utilities';
import { SYSTEM_LOCALE } from 'Utilities/date';
import cn from 'classnames';
import ModalComponent from 'Components/UI/Modal';
import { useNavigate } from 'react-router-dom';
import { IAppointment, IComment } from 'Types';
import TimeLeftTicker from './Ticker';

const today = new Date();

function TimeTicker(props: { endDate: Date }) {
  const { endDate } = props;
  return <TimeLeftTicker endDate={endDate} />;
}

function AppointmentComment(props: { comment: IComment; status: string }) {
  const { comment, status } = props;
  const CURRENT_USER_ROLE = 'user';

  return (
    <div className="appointment__comment-holder">
      <div className="appointment__comment-text">
        <span className="appointment__comment-author">{comment.author} </span>
        <span className="appointment__comment">{comment.text}</span>
      </div>
      <time>
        {comment.date.toLocaleTimeString(SYSTEM_LOCALE, {
          hour: '2-digit',
          minute: '2-digit',
        })}
        {', '}
        {comment.date.toLocaleDateString(SYSTEM_LOCALE, {
          month: 'long',
          day: 'numeric',
        })}
      </time>
      {status !== 'in_process' && CURRENT_USER_ROLE === 'user' && (
        <Button type="button" onClick={() => console.log('edit')}>
          Редактировать
        </Button>
      )}
    </div>
  );
}

function generateAppointmentStatus(startDate: Date) {
  if (startDate > today) {
    return 'future';
  }
  const diff = Utilities.date.getTimeDiff(startDate, today);
  if (startDate < today && diff.hours > 1) {
    return 'finished';
  }
  return 'in_process';
}

export default function Appointment({
  comment,
  startDate,
  remove,
  initialDate,
  userZone,
  link,
}: IAppointment) {
  const appointmentStatus = useRef(generateAppointmentStatus(startDate));
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const appointmentDate = useMemo(() => {
    if (!startDate) return null;
    const date = startDate.toLocaleString(SYSTEM_LOCALE, {
      day: '2-digit',
      month: 'long',
    });
    return `${date} ${Utilities.formatter.formatHourInterval(
      startDate.getHours().toString()
    )}`;
  }, [startDate]);

  const appointmentClasses = cn('appointment', {
    'appointment--in-process': appointmentStatus.current === 'in_process',
    'appointment--finished': appointmentStatus.current === 'finished',
  });

  const handleClick = (status: string) => {
    if (status === 'future') {
      console.log('status', initialDate);
    } else if (status === 'in_process') {
      console.log(status);
    } else {
      console.log('Запись тест');
    }
    setDialogOpen(false);
  };

  return (
    <article className={appointmentClasses}>
      <div className="appointment__timer">
        <h2>Встреча {appointmentDate}</h2>
        {appointmentStatus.current === 'future' && (
          <TimeTicker endDate={startDate} />
        )}
        {appointmentStatus.current === 'in_process' && (
          <span>Идет время вашей встречи</span>
        )}
        {appointmentStatus.current === 'finished' && (
          <span>
            У вас нет доступа к этой встрече, возможно время приёма истекло.
          </span>
        )}
      </div>
      <Button type="button" color="blue" onClick={() => setDialogOpen(true)}>
        {appointmentStatus.current === 'future' && 'Отменить встречу'}
        {appointmentStatus.current === 'in_process' && 'Подключиться'}
        {appointmentStatus.current === 'finished' && 'Записаться снова'}
      </Button>
      {comment && (
        <AppointmentComment
          status={appointmentStatus.current}
          comment={comment}
        />
      )}
      <ModalComponent
        className="approvement"
        isOpen={isDialogOpen}
        setOpen={setDialogOpen}
      >
        <h2>Подтверджение</h2>
        <p>
          {appointmentStatus.current === 'future' &&
            'Вы хотите отменить встречу?'}
          {appointmentStatus.current === 'in_process' && 'Подключиться?'}
          {appointmentStatus.current === 'finished' &&
            'Вы хотите записаться снова?'}
        </p>
        <div className="approvement__controls">
          <Button
            type="button"
            color="blue"
            onClick={() => {
              handleClick(appointmentStatus.current);
            }}
          >
            ОК
          </Button>
          <Button
            color="blue"
            type="button"
            onClick={() => setDialogOpen(false)}
          >
            Отмена
          </Button>
        </div>
      </ModalComponent>
    </article>
  );
}
