export { authApi } from './api/auth-api';
export {
  authSlice,
  setAuthUserData,
  setAuthRegistrationData,
  postAuthRegistrationTC,
} from 'entities/auth/model/authSlice';
export type { IUserData, IRegistrationData } from './model/auth';
