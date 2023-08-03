import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './layout.module.scss';

import { Menu } from 'shared/ui';

export const Layout = (): ReactElement => (
  <div className={s.layout}>
    <div className={s.container}>
      <Menu menuId="navigation" />
      <Outlet />
    </div>
  </div>
);
