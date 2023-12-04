import React, { ReactElement, useEffect } from 'react';

import { useFormik } from 'formik';

import s from './steps-one.module.scss';

import { authActions } from 'entities/auth';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import { ButtonField } from 'shared/ui/button-field';
import { TextField } from 'shared/ui/text-field';

interface StepsOneProps {
  setSteps: () => void;
}

export const StepsOne = ({ setSteps }: StepsOneProps): ReactElement => {
  const registrationData = useAppSelector(state => state.auth.registration);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validate: values => {
      if (!/^[a-zA-Z0-9]+$/.test(values.username)) {
        return { login: true };
      }

      if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
        return { password: true };
      }
    },
    onSubmit: values => {
      dispatch(authActions.setRegistration({ ...registrationData, ...values }));
      setSteps();
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
          errorMessage={formik.errors.username}
          {...formik.getFieldProps('username')}
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
        <ButtonField text="следующий шаг" disabled={!formik.isValid} size="lg" styleType="primary" />
      </div>
    </form>
  );
};
