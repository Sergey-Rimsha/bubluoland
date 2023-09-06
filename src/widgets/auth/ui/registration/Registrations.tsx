import React, { ReactElement, useState } from 'react';

import { StepsOne, StepsThree, StepsTwo } from 'features/authentication/registration';
import { ButtonField } from 'shared/ui/button-field';
import s from 'widgets/auth/ui/registration/Registration.module.scss';

enum StepsForm {
  one = 1,
  // eslint-disable-next-line no-magic-numbers
  two = 2,
  // eslint-disable-next-line no-magic-numbers
  three = 3,
}

export const Registrations = (): ReactElement => {
  const [steps, setSteps] = useState<number>(1);

  const onClickNextSteps = (): void => {
    setSteps(prevState => prevState + 1);
  };

  return (
    <div className={s.form}>
      <div className={s.form__header}>
        <h3 className={s.form__title}>Регистрация</h3>
        <span className={s.form__steps}>{steps} шаг из 3</span>
      </div>
      {steps === StepsForm.one && <StepsOne setSteps={onClickNextSteps} />}
      {steps === StepsForm.two && <StepsTwo setSteps={onClickNextSteps} />}
      {steps === StepsForm.three && <StepsThree />}
      <div className={s.form__footer}>
        <span className={s.form__decription}>Есть учётная запись?</span>
        <ButtonField text="войти" disabled={false} size="lg" styleType="text" />
      </div>
    </div>
  );
};
