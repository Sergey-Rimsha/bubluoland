import React, { ReactElement, useEffect } from 'react';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import s from './LoginForm.module.scss';

import { authActions } from 'entities/auth';
import { authLoginTC } from 'features/authentication/login/model/login';
import { loginFormSchema } from 'features/authentication/login/model/loginFormSchema';
import { Paths } from 'shared/enum';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import { ButtonField } from 'shared/ui/button-field';
import { TextField } from 'shared/ui/text-field';

export const LoginForm = (): ReactElement => {
  const dispatch = useAppDispatch();
  const errorStatus = useAppSelector(state => state.auth.errors.status);
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: '',
    },
    validationSchema: loginFormSchema,
    onSubmit: values => {
      dispatch(authActions.setLogin(values));
      dispatch(authLoginTC());
    },
  });

  const errorLogin = formik.errors.identifier && formik.touched.identifier ? formik.errors.identifier : null;

  const errorPassword = formik.errors.password && formik.touched.password ? formik.errors.password : null;

  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    if (errorStatus === 400) {
      formik.setErrors({ identifier: ' ', password: ' ' });
    }
  }, [errorStatus]);

  useEffect(() => {
    return () => {
      dispatch(authActions.setErrors({ status: 0 }));
    };
  }, [dispatch]);

  return (
    <div className={s.loginForm}>
      <h2 className={s.loginForm__title}>Вход в личный кабинет</h2>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <div className={s.form__content}>
          <TextField
            type="text"
            title="Логин"
            errorMessage={errorLogin}
            description={errorLogin}
            {...formik.getFieldProps('identifier')}
          />
          <TextField
            type="password"
            title="Пароль"
            errorMessage={errorPassword}
            description={errorPassword}
            {...formik.getFieldProps('password')}
          />
        </div>

        <div className={s.form__decription}>
          {errorStatus ? (
            <>
              <div className={s.form__error}>Неверный логин или пароль!</div>
              <Link className={`${s.form__link} ${s.form__link_active}`} to={Paths.AUTH}>
                Восстановить?
              </Link>
            </>
          ) : (
            <Link className={s.form__link} to={Paths.AUTH}>
              Забыли логин или пароль?
            </Link>
          )}
        </div>
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
