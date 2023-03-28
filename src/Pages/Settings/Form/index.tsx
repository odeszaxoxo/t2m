import Form from 'Components/UI/Form';
import FormInput from 'Components/UI/Form/Input';
import { FormProvider, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import userAtom from 'Recoil/Atoms/User';
import useUserActions from 'Hooks/useUserActions';
import Avatar from './Avatar';
import Languages from './Languages';
import Timezone from './Timezone';

export default function SettingsForm() {
  const user = useRecoilValue(userAtom);
  const { updateSettings } = useUserActions();
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      timeZone: user.timeZone || 'Europe/Moscow',
      name: user.name || '',
      langs: user.langs || [],
      gender: user.gender || 0,
    },
  });

  useEffect(() => {
    if (user) {
      methods.reset({
        timeZone: user.timeZone || 'Europe/Moscow',
        name: user.name,
        langs: user.langs,
        gender: user.gender,
      });
    }
  }, [user, methods]);

  const onSubmit = async (values: object) => {
    updateSettings(values);
  };

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={methods.handleSubmit(onSubmit)}
        submitText="Сохранить"
        color="blue"
      >
        <FormInput type="text" name="name" label="Ваше имя" />
        <Languages />
        <Timezone />
        <Avatar />
      </Form>
    </FormProvider>
  );
}
