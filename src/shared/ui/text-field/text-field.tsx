import React, { ChangeEvent, ReactElement, useState } from 'react';

import classNames from 'classnames';
import { Path, UseFormRegister } from 'react-hook-form';

import s from './text-field.module.scss';

import { IFormInput } from 'features/auth/registration/ui/registrations';
import eye from 'shared/assets/svg/eye.svg';
import eyeClosed from 'shared/assets/svg/eye_closed.svg';

type InputType = 'text' | 'password' | 'email';

interface TextFieldProps {
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required: boolean;
  type: InputType;
  title: string;
  description: string;
}

export const TextField = ({
  type,
  label,
  required,
  register,
  title,
  description,
}: TextFieldProps): ReactElement => {
  const [valueInput, setValueInput] = useState<string>('');
  const [error] = useState<boolean>(false);
  const [onFocus, setFocus] = useState<boolean>(false);
  const [inputType, setInputType] = useState<InputType>(type);

  const [showPass, setShowPass] = useState(false);

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

  return (
    <div className={s.textField}>
      <div className={s.textField__box}>
        <label
          className={classNames(s.textField__label, {
            [`${s.textField__label_focus}`]: onFocus,
          })}
          htmlFor={label}
        >
          {title}
        </label>
        <input
          id={label}
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
      <span className={s.textField__description}>{description}</span>
      {error && <span className={s.textField__error}>text field error</span>}
    </div>
  );
};
