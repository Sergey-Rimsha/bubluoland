import React, { ReactElement } from 'react';

import { useFormik } from 'formik';

import s from 'features/authentication/login/ui/loginForm/LoginForm.module.scss';
import { Paths } from 'shared/enum';
import { ButtonField } from 'shared/ui/button-field';
import { TextField } from 'shared/ui/text-field';

export const LoginForm = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: '',
    },
    validate: values => {
      if (!values.identifier && formik.touched.identifier) {
        return { login: 'required' };
      }

      if (!values.password && formik.touched.password) {
        return { password: 'required' };
      }
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className={s.loginForm}>
      <h2 className={s.loginForm__title}>Вход в личный кабинет</h2>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <div className={s.form__content}>
          <TextField
            type="text"
            title="Логин"
            errorMessage={formik.errors.identifier}
            description={formik.errors.identifier}
            {...formik.getFieldProps('identifier')}
          />
          <TextField
            type="password"
            title="Пароль"
            errorMessage={formik.errors.password}
            description={formik.errors.password}
            {...formik.getFieldProps('password')}
          />
        </div>
        <div className={s.loginForm__link}>Забыли логин или пароль?</div>
        <div className={s.form__button}>
          <ButtonField text="вход" disabled={!formik.isValid} size="lg" styleType="primary" />
        </div>
      </form>
      <div className={s.loginForm__footer}>
        <span className={s.loginForm__decription}>Нет учётной записи?</span>
        <ButtonField
          text="Регистрация"
          disabled={false}
          size="lg"
          styleType="text"
          link={`${Paths.AUTH}${Paths.REGISTRATION}`}
        />
      </div>
    </div>
  );
};
