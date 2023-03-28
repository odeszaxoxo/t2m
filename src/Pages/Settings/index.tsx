import Policy from 'Components/Policy';
import useResize from 'Hooks/useResize';
import React from 'react';
import Form from './Form';

export default function SettingsPage() {
  const { isPhone } = useResize();
  return (
    <>
      {isPhone && <div className="page__navigation-info">Настройки</div>}
      <Form />
      <Policy />
    </>
  );
}
