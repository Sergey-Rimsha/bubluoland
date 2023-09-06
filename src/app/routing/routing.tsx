import { createHashRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

import { AuthLayout, MainLayout } from 'app/layouts';
import { LoginForm } from 'features/authentication/login';
import { ContractPage, InfoBookPage, TermsPage } from 'pages';
import { MainPage } from 'pages/MainPage';
import { Paths } from 'shared/enum';
import { Registrations } from 'widgets/auth';

// export const Routing = (): ReactElement => (
//   <Routes>
//     <Route path="/" element={<Main />}>
//       <Route index element={<Navigate to={`${Paths.BOOKS}/all`} />} />
//       <Route path={Paths.BOOKS} element={<MainPage />} />
//       <Route path={`${Paths.BOOKS}/:category`} element={<MainPage />} />
//       <Route path={Paths.TERMS} element={<TermsPage />} />
//       <Route path={Paths.CONTRACT} element={<ContractPage />} />
//     </Route>
//     <Route path={`${Paths.BOOKS}/:category/:id`} element={<BookInfoPage />} />
//     <Route path={Paths.AUTH} element={<Auth />}>
//       <Route index element={<Navigate to={Paths.LOGIN} />} />
//       <Route path={Paths.LOGIN} element={<Login />} />
//       <Route path={Paths.REGISTRATION} element={<Registrations />} />
//     </Route>
//   </Routes>
// );

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={`${Paths.BOOKS}/all`} />} />
        <Route path={Paths.BOOKS} element={<MainPage />} />
        <Route path={`${Paths.BOOKS}/:category`} element={<MainPage />} />
        <Route path={Paths.TERMS} element={<TermsPage />} />
        <Route path={Paths.CONTRACT} element={<ContractPage />} />
      </Route>
      <Route path={`${Paths.BOOKS}/:category/:id`} element={<InfoBookPage />} />
      <Route path={Paths.AUTH} element={<AuthLayout />}>
        <Route index element={<Navigate to={Paths.LOGIN} />} />
        <Route path={Paths.LOGIN} element={<LoginForm />} />
        <Route path={Paths.REGISTRATION} element={<Registrations />} />
      </Route>
    </>,
  ),
);

export const routerNew = createHashRouter([
  {
    id: 'root',
    path: '/',
    Component: MainLayout,
    children: [{ index: true, Component: MainPage }],
  },
]);

// export default function App() {
//   return (
//     <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
//   );
// }

// const router = createBrowserRouter([
//   {
//     id: "root",
//     path: "/",
//     loader() {
//       // Our root route always provides the user, if logged in
//       return { user: fakeAuthProvider.username };
//     },
//     Component: Layout,
//     children: [
//       {
//         index: true,
//         Component: PublicPage,
//       },
//       {
//         path: "login",
//         action: loginAction,
//         loader: loginLoader,
//         Component: LoginPage,
//       },
//       {
//         path: "protected",
//         loader: protectedLoader,
//         Component: ProtectedPage,
//       },
//     ],
//   },
//   {
//     path: "/logout",
//     async action() {
//       // We signout in a "resource route" that we can hit from a fetcher.Form
//       await fakeAuthProvider.signout();
//       return redirect("/");
//     },
//   },
// ]);
