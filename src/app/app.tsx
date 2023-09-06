import { ReactElement } from 'react';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import s from './app.module.scss';

import { router } from 'app/routing';
import { store } from 'app/store/appStore';

export const App = (): ReactElement => {
  return (
    <div className={s.app}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};
