import { ReactElement, useEffect } from 'react';

import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';

import s from './MainLayout.module.scss';

import { getCategoriesTC } from 'entities/categories';
import { Paths } from 'shared/enum';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import { ModalError, Spinner } from 'shared/ui';
import { DevMenu } from 'shared/ui/DevMenu';
import { FooterPage, HeaderPage, Menu } from 'widgets';

export const MainLayout = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.app.isAuth);
  const statusLoading = useAppSelector(state => state.app.statusLoading);

  useEffect(() => {
    if (!isAuth) {
      dispatch(getCategoriesTC());
    } else {
      navigate(Paths.AUTH);
    }
  }, [dispatch, isAuth, navigate]);

  return (
    <>
      {statusLoading === 'loading' ? <Spinner /> : ''}
      <DevMenu />
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
