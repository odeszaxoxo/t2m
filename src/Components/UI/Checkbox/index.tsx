import React, { useRef } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  children?: React.ReactNode;
  classNameInput?: string;
  classNameLabel?: string;
}

export default function Checkbox(props: CheckboxProps) {
  const { children, classNameInput, classNameLabel, ...rest } = props;
  const id = useRef(nanoid());

  const classNamesInput = cn('checkbox', classNameInput);
  const classNamesLabel = cn('checkbox-label', classNameLabel);

  return (
    <>
      <input
        hidden
        type="checkbox"
        id={id.current}
        className={classNamesInput}
        {...rest}
      />
      <label htmlFor={id.current} className={classNamesLabel}>
        {children}
      </label>
    </>
  );
}
