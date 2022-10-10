/* eslint-disable react/jsx-no-useless-fragment */
import cn from 'classnames';
import { nanoid } from 'nanoid';
import React, { forwardRef, useRef, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  label?: string;
  value?: string;
  htmlId?: string | number;
}

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const {
    disabled,
    type = 'text',
    error,
    className,
    label,
    placeholder,
    value,
    htmlId,
    onChange,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<string>(value || '');
  const id = useRef(htmlId || nanoid());

  const classNames = cn('input', className, {
    'input--labeled': label,
    'input--filled': label && inputValue.length,
  });
  const formClassNames = cn('form__field', {
    'form__field--error': error,
    'form__field--disabled': disabled,
  });

  const onChangeDefault = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={formClassNames} ref={ref}>
      <input
        type={type}
        value={inputValue}
        id={String(id.current)}
        onChange={(event) => {
          if (onChange) onChange(event);
          onChangeDefault(event);
        }}
        className={classNames}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {label && (
        <label htmlFor={String(id.current)} className="input-label">
          {label}
        </label>
      )}
      {error && <span className="form__error-text">{error}</span>}
    </div>
  );
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
