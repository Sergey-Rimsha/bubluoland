import React, { ReactElement, useEffect } from 'react';

import { useFormik } from 'formik';

import s from './steps-two.module.scss';

import { setAuthRegistrationData } from 'entities/auth';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import { ButtonField } from 'shared/ui/button-field';
import { TextField } from 'shared/ui/text-field';

interface StepsTwoProps {
  setSteps: () => void;
}

export const StepsTwo = ({ setSteps }: StepsTwoProps): ReactElement => {
  const registrationData = useAppSelector(state => state.auth.registrationData);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },

    validate: values => {
      if (!values.firstName) {
        return { firstName: 'required' };
      }

      if (!values.lastName) {
        return { lastName: 'required' };
      }
    },
    onSubmit: values => {
      dispatch(setAuthRegistrationData({ ...registrationData, ...values }));
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
          title="Имя"
          errorMessage={formik.errors.firstName}
          {...formik.getFieldProps('firstName')}
        />
        <TextField
          type="text"
          title="Пароль"
          errorMessage={formik.errors.lastName}
          {...formik.getFieldProps('lastName')}
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
