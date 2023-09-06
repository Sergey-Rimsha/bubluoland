import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './MainLayout.module.scss';

import { ModalError } from 'shared/ui';
import { FooterPage, HeaderPage, Menu } from 'widgets';

export const MainLayout = (): ReactElement => {
  return (
    <>
      <div className={s.main}>
        <ModalError />
        <HeaderPage />
        <div className={s.main__body}>
          <div className={s.container}>
            <Menu menuId="navigation" />
            <Outlet />
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};
