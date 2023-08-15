import React, { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './auth.module.scss';

export const Auth = (): ReactElement => {
  return (
    <div className={s.auth}>
      <h2 className={s.auth__title}>Cleverland</h2>
      <div className={s.auth__content}>
        <Outlet />
      </div>
    </div>
  );
};
