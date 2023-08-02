import { ReactElement, useEffect } from 'react';

import s from './app.module.scss';

import { ModalError, Spinner } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { FooterPage, HeaderPage } from 'pages';
import { Routing } from 'routing';
import { getCategoriesTC } from 'thunks';

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
