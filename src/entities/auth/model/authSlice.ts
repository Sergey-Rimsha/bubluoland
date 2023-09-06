import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi, LoginI, RegistrationI, UserI } from 'entities/auth';
import { createAppAsyncThunk } from 'shared/model/hooks';

export interface AuthState {
  user: UserI;
  registration: RegistrationI;
  login: LoginI;
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
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action: PayloadAction<UserI>) {
      state.user = action.payload;
    },
    setAuthRegistration(state, action: PayloadAction<RegistrationI>) {
      state.registration = action.payload;
    },
    setAuthLogin(state, action: PayloadAction<LoginI>) {
      state.login = action.payload;
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

      dispatch(setAuthUser(response.data.user));
    } catch (e) {
      console.log(e);
    }
  },
);

export const authLoginTC = createAppAsyncThunk(
  'auth/authLoginTC',
  async (arg, { dispatch, getState }) => {
    try {
      const data = getState().auth.login;
      const response = await authApi.login(data);

      dispatch(setAuthUser(response.data.user));
    } catch (e) {
      console.log(e);
    }
  },
);
export const { setAuthUser, setAuthRegistration, setAuthLogin } = authSlice.actions;
