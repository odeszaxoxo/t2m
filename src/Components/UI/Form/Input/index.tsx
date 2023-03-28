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

interface IFormInput {
  type: string;
  name: string;
  className?: string;
  rules?: {
    required: boolean;
    pattern?: {
      value: any;
      message: string;
    };
  };
  label?: string;
}

export default function FormInput({
  type,
  name,
  // eslint-disable-next-line no-unused-vars
  className,
  rules = { required: false },
  label,
}: IFormInput) {
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

  const classNames = cn(className, 'form__input');

  return (
    <div className={holderClassnames}>
      {label && (
        <label className="form__label" htmlFor={id.current}>
          {label}
        </label>
      )}
      <input
        className={classNames}
        type={type}
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
