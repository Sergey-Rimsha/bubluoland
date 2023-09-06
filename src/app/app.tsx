import { ReactElement, useEffect } from 'react';

import { RouterProvider } from 'react-router';

import s from './app.module.scss';

import { router } from 'app/routing';
import { getCategoriesTC } from 'entities/categories/model/categoriesSlice';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import { Spinner } from 'shared/ui';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const statusLoading = useAppSelector(state => state.app.statusLoading);

  useEffect(() => {
    dispatch(getCategoriesTC());
  }, [dispatch]);

  return (
    <div className={s.app}>
      {statusLoading === 'loading' ? <Spinner /> : ''}
      <RouterProvider router={router} />
    </div>
  );
};
