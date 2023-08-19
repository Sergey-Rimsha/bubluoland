import React, { ReactElement } from 'react';

import s from './button-field.module.scss';

interface ButtonFieldProps {
  disabled: boolean;
}

export const ButtonField = ({ disabled }: ButtonFieldProps): ReactElement => {
  return (
    <div className={s.box}>
      <button className={s.box__button} type="submit" disabled={disabled}>
        submit
      </button>
    </div>
  );
};
