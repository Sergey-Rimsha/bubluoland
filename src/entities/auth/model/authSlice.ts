import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi, LoginI, RegistrationI, UserI } from 'entities/auth';
import { createAppAsyncThunk } from 'shared/model/hooks';

interface AuthError {
  status: number;
  message?: string;
}

export interface AuthState {
  user: UserI;
  registration: RegistrationI;
  login: LoginI;
  errors: AuthError;
}

const initialState: AuthState = {
  user: {
    id: 0,
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
    createdAt: '',
    updatedAt: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  registration: {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  login: {
    identifier: '',
    password: '',
  },
  errors: {
    status: 0,
    message: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserI>) {
      state.user = action.payload;
    },
    setRegistration(state, action: PayloadAction<RegistrationI>) {
      state.registration = action.payload;
    },
    setLogin(state, action: PayloadAction<LoginI>) {
      state.login = action.payload;
    },
    setErrors(state, action: PayloadAction<AuthError>) {
      state.errors = action.payload;
    },
  },
});

// TODO: remove to features(model) layer
export const authRegistrationTC = createAppAsyncThunk(
  'auth/authRegistrationTC',
  async (arg, { dispatch, getState }) => {
    try {
      const data = getState().auth.registration;
      const response = await authApi.registration(data);

      console.log(response);

      dispatch(authActions.setUser(response.data.user));
    } catch (e) {
      console.log(e);
    }
  },
);

export const authActions = authSlice.actions;
