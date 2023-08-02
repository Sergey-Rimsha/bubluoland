import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import { Menu } from '../components';

import s from './layout.module.scss';

export const Layout = (): ReactElement => (
  <div className={s.layout}>
    <div className={s.container}>
      <Menu menuId="navigation" />
      <Outlet />
    </div>
  </div>
);
