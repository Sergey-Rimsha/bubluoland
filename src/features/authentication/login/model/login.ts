import { AxiosError } from 'axios';

import { authActions, authApi } from 'entities/auth';
import { createAppAsyncThunk } from 'shared/model/hooks';

export interface ErrorResponse {
  data?: any;
  error: AuthResponseError;
}

export interface AuthResponseError {
  status: number;
  name: string;
  message: string;
  details: {};
}

export const authLoginTC = createAppAsyncThunk('auth/authLoginTC', async (arg, { dispatch, getState }) => {
  try {
    const data = getState().auth.login;
    const response = await authApi.login(data);

    dispatch(authActions.setUser(response.data.user));
  } catch (error) {
    const apiError: AxiosError<ErrorResponse> = error as AxiosError<ErrorResponse>;

    const status = apiError.response?.status;

    if (status) {
      dispatch(authActions.setErrors({ status }));
    }
  }
});
