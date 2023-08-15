import { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Registrations } from 'features/auth/registration';
import { Auth } from 'pages/auth';
import { Main } from 'pages/main';
import { Paths } from 'shared/enum';
import { BookInfoPage, ContractPage, MainPage, TermsPage } from 'widgets';

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
    <Route path="/auth/" element={<Auth />}>
      <Route index element={<Navigate to="registration" />} />
      <Route path="registration" element={<Registrations />} />
    </Route>
  </Routes>
);
