import React, { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import s from './registration.module.scss';

import { TextField } from 'shared/ui/text-field';

export interface IFormInput {
  login: string;
  password: string;
}

export const Registrations = (): ReactElement => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className={s.form}>
      <div className={s.form__header}>
        <h3 className={s.form__title}>Регистрация</h3>
        <span className={s.form__steps}>1 шаг из 3</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form__content}>
          <TextField label="login" type="email" register={register} required />
          <TextField label="login" type="password" register={register} required />
        </div>
        <div className={s.form__footer}>
          <button type="submit">next steps</button>
          <div>Есть учётная запись? войти</div>
        </div>
      </form>
    </div>
  );
};
