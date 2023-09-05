import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi, IAuthState, IRegistrationData, IUserData } from 'entities/auth';
import { createAppAsyncThunk } from 'shared/model/hooks/hooks';

const initialState: IAuthState = {
  userData: {
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
  registrationData: {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
};

export const postAuthRegistrationTC = createAppAsyncThunk(
  'auth/postAuthRegistration',
  async (arg, { dispatch, getState }) => {
    try {
      const data = getState().auth.registrationData;
      const response = await authApi.registration(data);

      console.log(response);

      dispatch(setAuthUserData(response.data.user));
    } catch (e) {
      console.log(e);
    }
  },
);

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUserData(state, action: PayloadAction<IUserData>) {
      state.userData = action.payload;
    },
    setAuthRegistrationData(state, action: PayloadAction<IRegistrationData>) {
      state.registrationData = action.payload;
    },
  },
});

export const authReducer = slice.reducer;
export const { setAuthUserData, setAuthRegistrationData } = slice.actions;
