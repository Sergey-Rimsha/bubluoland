export { authApi } from './api/auth-api';
export {
  authReducer,
  setAuthUserData,
  setAuthRegistrationData,
  postAuthRegistrationTC,
} from './model/auth-reducer';
export type { IUserData, IRegistrationData, IAuthState } from './model/auth';
