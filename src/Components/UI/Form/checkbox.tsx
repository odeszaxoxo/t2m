import { nanoid } from 'nanoid';
import React, { useRef } from 'react';
import cn from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';
import CheckboxComponent from 'Components/UI/Checkbox';

interface ICheckbox extends React.HTMLProps<HTMLInputElement> {
  classNameInput?: string;
  classNameLabel?: string;
  name: string;
}

export default function CheckboxForm(props: ICheckbox) {
  const {
    classNameInput,
    classNameLabel,
    name,
    required,
    className,
    children,
    ...rest
  } = props;
  const id = useRef(nanoid());
  const { control } = useFormContext();

  return (
    <Controller
      rules={{ required }}
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div
          className={cn('form__checkbox-inline-wrapper', className, {
            'form__checkbox-inline-wrapper--error': fieldState.error,
          })}
        >
          <CheckboxComponent
            classNameInput={classNameInput}
            classNameLabel={classNameLabel}
            {...rest}
            {...field}
          >
            {children}
          </CheckboxComponent>
        </div>
      )}
    />
  );
}
