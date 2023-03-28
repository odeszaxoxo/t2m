import useResize from 'Hooks/useResize';
import React from 'react';

export default function SigninNote() {
  const { isPhone } = useResize();
  return (
    <div className="signin__note">
      Авторизируясь вы принимаете наши
      <br />
      <a href="/" target="_blank">
        Условия пользования
      </a>{' '}
      {isPhone ? <br /> : `и `}
      <a href="/" target="_blank">
        Политику конфиденциальности
      </a>
    </div>
  );
}
