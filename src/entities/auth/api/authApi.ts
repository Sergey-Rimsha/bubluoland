import { AxiosResponse } from 'axios';

import { RegistrationI, LoginI, UserI } from 'entities/auth';
import { instance } from 'shared';

interface AuthResponseI {
  jwt: string;
  user: UserI;
}

// TODO: Rename Interface IRegistrationResponse
export const authApi = {
  registration(data: RegistrationI) {
    return instance.post<AuthResponseI, AxiosResponse<AuthResponseI>>('/api/auth/local/register', data);
  },
  login(data: LoginI) {
    return instance.post<AuthResponseI, AxiosResponse<AuthResponseI>>('/api/auth/local', data);
  },
};
