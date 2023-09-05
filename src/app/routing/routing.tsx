import { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from 'pages/auth';
import { Main } from 'pages/main';
import { Paths } from 'shared/enum';
import { BookInfoPage, ContractPage, MainPage, TermsPage } from 'widgets';
import { Login, Registrations } from 'widgets/auth';

export const Routing = (): ReactElement => (
  <Routes>
    <Route path="/" element={<Main />}>
      <Route index element={<Navigate to={`${Paths.BOOKS}/all`} />} />
      <Route path={Paths.BOOKS} element={<MainPage />} />
      <Route path={`${Paths.BOOKS}/:category`} element={<MainPage />} />
      <Route path={Paths.TERMS} element={<TermsPage />} />
      <Route path={Paths.CONTRACT} element={<ContractPage />} />
    </Route>
    <Route path={`${Paths.BOOKS}/:category/:id`} element={<BookInfoPage />} />
    <Route path={Paths.AUTH} element={<Auth />}>
      <Route index element={<Navigate to={Paths.LOGIN} />} />
      <Route path={Paths.LOGIN} element={<Login />} />
      <Route path={Paths.REGISTRATION} element={<Registrations />} />
    </Route>
  </Routes>
);
