import React, { ReactElement, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { Path, UseFormRegister } from 'react-hook-form';

import s from './text-field.module.scss';

import { IFormInput } from 'features/auth/registration/ui/registrations';

interface TextFieldProps {
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required: boolean;
  type: 'text' | 'password' | 'email';
}

export const TextField = ({ type, ...restProps }: TextFieldProps): ReactElement => {
  const startVale = '';
  const [error] = useState<boolean>(false);
  const [onFocus, setFocus] = useState<boolean>(false);
  const [inputType, setInputType] = useState('text');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleLabelClick = (): void => {
    inputRef.current?.focus();
  };

  const onChangeInput = (): void => {
    setFocus(true);
  };

  const onFocusInput = (): void => {
    setFocus(true);
  };

  useEffect(() => {
    if (startVale) {
      setFocus(true);
    }
    setInputType(type);
  }, [type]);

  return (
    <div className={s.textField}>
      <div className={s.textField__box}>
        <button
          className={classNames(s.textField__label, {
            [`${s.textField__label_focuc}`]: onFocus,
          })}
          type="button"
          onClick={handleLabelClick}
        >
          Придумайте логин для входа
        </button>
        <input
          className={s.textField__input}
          onChange={onChangeInput}
          onFocus={onFocusInput}
          ref={inputRef}
          type={inputType}
          {...restProps}
        />
      </div>
      <span className={s.textField__description}>
        Используйте для логина латинский алфавит и цифры
      </span>
      {error && <span className={s.textField__error}>text field error</span>}
    </div>
  );
};
