import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import classNames from 'classnames';
import { FieldInputProps } from 'formik';

import s from './text-field.module.scss';

import eye from 'shared/assets/svg/eye.svg';
import eyeClosed from 'shared/assets/svg/eye_closed.svg';

type InputType = 'text' | 'password' | 'email';

interface InputProps extends FieldInputProps<string> {
  type: InputType;
  title: string;
  description?: string;
  errorMessage?: string;
}

export const TextField = React.memo(
  ({
    type,
    name,
    title,
    description,
    onChange,
    onBlur,
    value,
    errorMessage,
  }: InputProps): ReactElement => {
    const [valueInput, setValueInput] = useState<string>(value);
    const [error, setError] = useState<boolean>(false);
    const [onFocus, setFocus] = useState<boolean>(false);
    const [inputType, setInputType] = useState<InputType>(type);

    const [showPass, setShowPass] = useState(false);

    const onFocusInput = (): void => {
      setFocus(true);
    };

    const onBlurInput = (e: React.FocusEvent<any>): void => {
      if (!valueInput) {
        setFocus(false);
      }
      onBlur(e);
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
      setValueInput(event.currentTarget.value);
      onChange(event);
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
      if (errorMessage) {
        setError(true);
      } else {
        setError(false);
      }
    }, [errorMessage]);

    return (
      <div className={s.textField}>
        <div
          className={classNames(s.textField__box, {
            [`${s.textField__box_error}`]: error,
          })}
        >
          <label
            className={classNames(s.textField__label, {
              [`${s.textField__label_focus}`]: onFocus,
            })}
            htmlFor={name}
          >
            {title}
          </label>
          <input
            id={name}
            className={s.textField__input}
            onChange={onChangeInput}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            type={inputType}
          />
          {type === 'password' && (
            <button className={s.textField__eye} onClick={onClickShowPass} type="button">
              {showPass ? <img src={eye} alt="eye" /> : <img src={eyeClosed} alt="eye closed" />}
            </button>
          )}
        </div>
        <span
          className={classNames(s.textField__description, {
            [`${s.textField__description_error}`]: error,
          })}
        >
          {description}
        </span>
      </div>
    );
  },
);
