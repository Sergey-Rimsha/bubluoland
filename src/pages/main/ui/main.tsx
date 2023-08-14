import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import s from './main.module.scss';

import { Menu, ModalError } from 'shared/ui';
import { FooterPage, HeaderPage } from 'widgets';

export const Main = (): ReactElement => {
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
