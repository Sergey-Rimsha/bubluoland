import React, { ReactElement } from 'react';

import s from './registration.module.scss';

import { StepsOne } from 'features/auth/registration/ui/steps-one';
import { ButtonField } from 'shared/ui/button-field';

export const Registrations = (): ReactElement => {
  return (
    <div className={s.form}>
      <div className={s.form__header}>
        <h3 className={s.form__title}>Регистрация</h3>
        <span className={s.form__steps}>1 шаг из 3</span>
      </div>
      <StepsOne />
      <div className={s.form__footer}>
        <span className={s.form__decription}>Есть учётная запись?</span>
        <ButtonField text="войти" disabled={false} size="lg" styleType="text" />
      </div>
    </div>
  );
};
