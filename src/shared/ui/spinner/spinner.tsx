import { ReactElement } from 'react';

import s from 'shared/ui/spinner/spinner.module.scss';

export const Spinner = (): ReactElement => (
  <div data-test-id="loader" className={s.spinner}>
    <div className={s.spinner__box}>
      <div className={s.spinner__item}>
        <div />
      </div>
    </div>
  </div>
);
