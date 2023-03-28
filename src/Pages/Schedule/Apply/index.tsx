import React, { useContext, useState, useEffect } from 'react';
import useInterval from 'Hooks/useInterval';
import { SYSTEM_LOCALE } from 'Utilities/date';
import Form from 'Components/UI/Form';
import { FormProvider, useForm } from 'react-hook-form';
import FormTextArea from 'Components/UI/Form/Textarea';
import { useRecoilValue } from 'recoil';
import userAtom from 'Recoil/Atoms/User';
import Api from 'Api';
import { CalendarContext } from '../Context';

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

export default function Apply(props: { time: string; slotId: number }) {
  const { time, slotId } = props;
  const user = useRecoilValue(userAtom);
  const { date, changeApply } = useContext(CalendarContext);
  const zone = user.timeZone || 'Europe/Moscow';
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      comment: '',
    },
  });

  const [selectedTime, setSelectedTime] = useState(
    getDateString(SYSTEM_LOCALE, zone)
  );

  useEffect(() => {
    setSelectedTime(getDateString(SYSTEM_LOCALE, zone));
  }, [zone]);

  useInterval(() => {
    setSelectedTime(getDateString(SYSTEM_LOCALE, zone));
  }, 1000);

  const formatter = new Intl.DateTimeFormat('ru', { month: 'long' });

  const formatDate = () => {
    const monthName = formatter.format(date).replace(/.$/, 'я');
    return `${`${date.getDate()} ${monthName}, ${time}`}`;
  };

  const onSubmit = async (values: { comment: string }) => {
    await Api.post(Api.routes.useSlot(), {
      comment: values.comment,
      id: slotId,
    });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="apply">
          <span>Подтверждение записи</span>
          <div className="apply__holder">
            <p className="apply__text">
              <span>Дата: </span>
              {formatDate()}
            </p>
            <p className="apply__text">
              <span>Часовой пояс: </span>
              {selectedTime}
            </p>
            <FormTextArea
              className="apply__textarea"
              name="comment"
              label="Если вам важно, оставьте комментарий для специалиста, он его
              увидит до начала сеанса:"
            />
          </div>
          <div className="apply__accept">
            <button
              type="button"
              className="apply__button"
              onClick={() => changeApply(false)}
            >
              Я передумал
            </button>
            <button type="submit" className="apply__button">
              Далее
            </button>
          </div>
        </div>
      </Form>
    </FormProvider>
  );
}
