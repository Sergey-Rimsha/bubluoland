import React, { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './auth.module.scss';

export const Auth = (): ReactElement => {
  return (
    <div className={s.auth}>
      <div className={s.auth__content}>
        <h2 className={s.auth__title}>Cleverland</h2>
        <Outlet />
      </div>
    </div>
  );
};
