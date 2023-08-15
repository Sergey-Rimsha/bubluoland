import React, { ReactElement } from 'react';

import s from './registration.module.scss';

import { TextField } from 'shared/ui/text-field';

export const Registrations = (): ReactElement => {
  return (
    <div className={s.form}>
      <div className={s.form__header}>
        <h3 className={s.form__title}>Регистрация</h3>
        <span className={s.form__steps}>1 шаг из 3</span>
      </div>
      <div className={s.form__content}>
        <TextField />
        <TextField />
      </div>
      <div className={s.form__footer}>
        <button type="submit">next steps</button>
        <div>Есть учётная запись? войти</div>
      </div>
    </div>
  );
};
