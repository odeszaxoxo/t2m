import { useFormContext } from 'react-hook-form';
import cn from 'classnames';
import React, { useMemo, useRef } from 'react';
import { nanoid } from 'nanoid';

const generateRequired = (required: boolean) => {
  if (required) {
    if (typeof required === 'string') {
      return required;
    }
    return 'Поле обязательно для заполнения';
  }
  return false;
};

interface IFormTextArea {
  name: string;
  className?: string;
  label?: string;
  rules?: {
    required: boolean;
  };
}

export default function FormTextArea({
  name,
  // eslint-disable-next-line no-unused-vars
  className,
  rules = { required: false },
  label,
}: IFormTextArea) {
  const id = useRef(nanoid());
  const inputRules = useMemo(
    () => ({
      ...rules,
      required: generateRequired(rules.required),
    }),
    [rules]
  );

  const { register, formState } = useFormContext();
  const { errors } = formState;

  const holderClassnames = cn('form__input-holder', {
    'form__input-holder--error': errors[name],
  });

  const classNames = cn(className, 'form__textarea');

  return (
    <div className={holderClassnames}>
      {label && (
        <label className="form__label" htmlFor={id.current}>
          {label}
        </label>
      )}
      <textarea
        className={classNames}
        id={id.current}
        {...register(name, inputRules)}
      />
      {errors[name] && (
        <span className="form__input-error">
          {errors[name]?.message as unknown as string}
        </span>
      )}
    </div>
  );
}
