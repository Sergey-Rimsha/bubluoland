import React, { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { Path, UseFormRegister } from 'react-hook-form';

import s from './text-field.module.scss';

import { IFormInput } from 'features/auth/registration/ui/registrations';
import eye from 'shared/assets/svg/eye.svg';
import eyeClosed from 'shared/assets/svg/eye_closed.svg';

interface TextFieldProps {
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required: boolean;
  type: 'text' | 'password' | 'email';
  changeInput: (label: 'login' | 'password', value: string) => void;
}

export const TextField = ({
  type,
  label,
  required,
  register,
  changeInput,
}: TextFieldProps): ReactElement => {
  const [valueInput, setValueInput] = useState<string>('');
  const [error] = useState<boolean>(false);
  const [onFocus, setFocus] = useState<boolean>(false);
  const [inputType, setInputType] = useState(type);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [showPass, setShowPass] = useState(false);

  const description = {
    password: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    login: 'Используйте для логина латинский алфавит и цифры',
  };

  const handleLabelClick = (): void => {
    inputRef.current?.focus();
  };

  const onFocusInput = (): void => {
    setFocus(true);
  };

  const onBlurInput = (): void => {
    if (!valueInput) {
      setFocus(false);
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValueInput(event.currentTarget.value);
  };

  const onClickShowPass = (): void => {
    setShowPass(prevState => !prevState);
    if (!showPass) {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  useEffect(() => {
    changeInput(label, valueInput);
  }, [changeInput, label, valueInput]);

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
          {...register(label, { required })}
          onChange={onChangeInput}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          type={inputType}
        />
        {type === 'password' && (
          <button className={s.textField__eye} onClick={onClickShowPass} type="button">
            {showPass ? (
              <img src={eye} alt="eye" />
            ) : (
              <img src={eyeClosed} alt="eye closed" />
            )}
          </button>
        )}
      </div>
      <span className={s.textField__description}>{description[label]}</span>
      {error && <span className={s.textField__error}>text field error</span>}
    </div>
  );
};
