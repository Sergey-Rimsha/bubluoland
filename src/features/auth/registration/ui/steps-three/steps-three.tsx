import React, { ReactElement, useEffect } from 'react';

import { useFormik } from 'formik';

import s from './steps-three.module.scss';

import { ButtonField } from 'shared/ui/button-field';
import { TextField } from 'shared/ui/text-field';

export const StepsThree = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      phone: '',
      email: '',
    },

    validate: values => {
      if (!values.phone) {
        return { phone: 'required' };
      }

      if (!values.email) {
        return { email: 'required' };
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
          title="Номер телефона"
          errorMessage={formik.errors.phone}
          {...formik.getFieldProps('phone')}
        />
        <TextField
          type="email"
          title="E-mail"
          errorMessage={formik.errors.email}
          {...formik.getFieldProps('email')}
        />
      </div>
      <div className={s.form__button}>
        <ButtonField
          text="зарегистрироваться"
          disabled={!formik.isValid}
          size="lg"
          styleType="primary"
        />
      </div>
    </form>
  );
};
