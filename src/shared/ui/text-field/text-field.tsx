import React, { ReactElement, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import s from './text-field.module.scss';

export const TextField = (): ReactElement => {
  const startVale = '';
  const [error] = useState<boolean>(false);
  const [onFocus, setFocus] = useState<boolean>(false);
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
  }, []);

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
          type="text"
          onChange={onChangeInput}
          onFocus={onFocusInput}
          ref={inputRef}
          required
        />
      </div>
      <span className={s.textField__description}>
        Используйте для логина латинский алфавит и цифры
      </span>
      {error && <span className={s.textField__error}>text field error</span>}
    </div>
  );
};
