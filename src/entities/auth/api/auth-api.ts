import { AxiosResponse } from 'axios';

import { IRegistrationData, IUserData } from 'entities/auth';
import { instance } from 'shared';

interface IRegistrationResponse {
  jwt: string;
  user: IUserData;
}

export interface ErrorResponse {
  data?: any;
  error: ErrorResponseError;
}
export interface ErrorResponseErrorDetails {}
export interface ErrorResponseError {
  status: string;
  name: string;
  message: string;
  details: ErrorResponseErrorDetails;
}

export const authApi = {
  registration(data: IRegistrationData) {
    return instance.post<IRegistrationResponse, AxiosResponse<IRegistrationResponse>>(
      '/api/auth/local/register',
      data,
    );
  },
};
