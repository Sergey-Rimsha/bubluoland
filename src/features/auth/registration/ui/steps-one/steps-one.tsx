import React, { ReactElement, useEffect } from 'react';

import { useFormik } from 'formik';

import s from './steps-one.module.scss';

import { ButtonField } from 'shared/ui/button-field';
import { TextField } from 'shared/ui/text-field';

export interface IFormInput {
  login: string;
  password: string;
}

export const StepsOne = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    validate: values => {
      if (!/^[a-zA-Z0-9]+$/.test(values.login)) {
        return { login: true };
      }

      if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
        return { password: true };
      }
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (formik.errors) {
      console.log(formik.errors, 'errors');
    }
  }, [formik.errors]);

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <div className={s.form__content}>
        <TextField
          type="text"
          title="Придумайте логин для входа"
          description="Используйте для логина латинский алфавит и цифры"
          errorMessage={formik.errors.login}
          {...formik.getFieldProps('login')}
        />
        <TextField
          type="password"
          title="Пароль"
          description="Пароль не менее 8 символов, с заглавной буквой и цифрой"
          errorMessage={formik.errors.password}
          {...formik.getFieldProps('password')}
        />
      </div>
      <div className={s.form__button}>
        <ButtonField
          text="следующий шаг"
          disabled={!formik.isValid}
          size="lg"
          styleType="primary"
        />
      </div>
    </form>
  );
};
