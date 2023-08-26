import React, { ReactElement, useEffect } from 'react';

import { useFormik } from 'formik';

import s from './steps-two.module.scss';

import { ButtonField } from 'shared/ui/button-field';
import { TextField } from 'shared/ui/text-field';

interface StepsTwoProps {
  setSteps: (steps: number) => void;
}

export const StepsTwo = ({ setSteps }: StepsTwoProps): ReactElement => {
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
      console.log(values);
      // eslint-disable-next-line no-magic-numbers
      setSteps(3);
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
