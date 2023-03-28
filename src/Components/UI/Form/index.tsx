import Button from 'Components/UI/Button';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

interface IForm {
  onSubmit: () => void;
  children: React.ReactNode;
  color?: string;
  fullWidth?: boolean;
  submitText?: string;
}

export default function Form({
  onSubmit,
  children,
  submitText,
  color,
  fullWidth,
}: IForm) {
  const { formState } = useFormContext();
  // eslint-disable-next-line no-unused-vars
  const { isValid } = formState;
  const formClasses = cn({
    'form--blue': color === 'blue',
    'form--full-width': fullWidth,
  });

  return (
    <form className={formClasses} onSubmit={onSubmit} noValidate>
      {children}
      {submitText && (
        <Button color="pink" type="submit">
          {submitText}
        </Button>
      )}
    </form>
  );
}
