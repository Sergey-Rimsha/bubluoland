import { ReactElement, useEffect } from 'react';

import s from './app.module.scss';

import { Routing } from 'app/routing';
import { getCategoriesTC } from 'entities/categories/model/categories-thunks';
import { FooterPage, HeaderPage } from 'pages';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { ModalError, Spinner } from 'shared/ui';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  const statusLoading = useAppSelector(state => state.app.statusLoading);

  useEffect(() => {
    dispatch(getCategoriesTC());
  }, [dispatch]);

  return (
    <div className={s.app}>
      {statusLoading === 'loading' ? <Spinner /> : ''}
      <div className={s.app__body}>
        <ModalError />
        <HeaderPage />
        <Routing />
      </div>
      <FooterPage />
    </div>
  );
};
