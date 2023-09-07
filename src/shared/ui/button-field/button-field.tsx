import React, { ReactElement } from 'react';

import classNames from 'classnames';
import { useNavigate } from 'react-router';

import s from './button-field.module.scss';

interface ButtonFieldProps {
  disabled: boolean;
  size?: 'lg';
  styleType: 'primary' | 'text';
  text?: string;
  link?: string;
}

export const ButtonField = ({
  disabled,
  size,
  styleType,
  text,
  link,
}: ButtonFieldProps): ReactElement => {
  const navigate = useNavigate();
  const buttonStyleType = classNames(s.box__button, {
    [`${s.box__button_primary}`]: styleType === 'primary',
  });

  const buttonStyleSize = classNames(s.box__size, {
    [`${s.box__size_lg}`]: size === 'lg',
  });

  const onClickNavigate = (): void => {
    if (link) {
      navigate(link);
    }
  };

  // TODO: buttonText Swap to NavLink

  return (
    <div className={s.box}>
      {styleType === 'text' ? (
        <button className={s.box__buttonText} onClick={onClickNavigate} type="button">
          <div className={s.box__text}>{text}</div>
          <span className={s.box__img} />
        </button>
      ) : (
        <button
          className={classNames(buttonStyleType, buttonStyleSize)}
          type="submit"
          disabled={disabled}
        >
          {text}
        </button>
      )}
    </div>
  );
};
