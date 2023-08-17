import React, { ReactElement, useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import s from './registration.module.scss';

import { ButtonCard } from 'shared/ui';
import { TextField } from 'shared/ui/text-field';

export interface IFormInput {
  login: string;
  password: string;
}

export const Registrations = (): ReactElement => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  const changeInput = (label: 'login' | 'password', value: string): void => {
    setValue(label, value);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className={s.form}>
      <div className={s.form__header}>
        <h3 className={s.form__title}>Регистрация</h3>
        <span className={s.form__steps}>1 шаг из 3</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form__content}>
          <TextField
            label="login"
            type="text"
            changeInput={changeInput}
            register={register}
            required
          />
          <TextField
            label="password"
            type="password"
            changeInput={changeInput}
            register={register}
            required
          />
        </div>
        <div className={s.form__footer}>
          <div className={s.form__button}>
            <ButtonCard title="следующий шаг" disabled={false} type="Primary" />
          </div>
          <div>Есть учётная запись? войти</div>
        </div>
      </form>
    </div>
  );
};
