export { authApi } from 'entities/auth/api/authApi';
export {
  authSlice,
  setAuthLogin,
  setAuthRegistration,
  setAuthUser,
  authRegistrationTC,
  authLoginTC,
} from 'entities/auth/model/authSlice';
export type { LoginI, UserI, RegistrationI } from './model/auth';
