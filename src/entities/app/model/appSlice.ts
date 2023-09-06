import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ErrorResponseI } from 'shared/model/interface';
import { StatusLoading } from 'shared/model/types';

export interface AppStateI {
  isAuth: boolean;
  statusLoading: StatusLoading;
  error: ErrorResponseI | null;
}

const initialState: AppStateI = {
  isAuth: false,
  statusLoading: 'idle',
  error: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setAppStatusLoading(state, action: PayloadAction<StatusLoading>) {
      state.statusLoading = action.payload;
    },
    setAppError(state, action: PayloadAction<ErrorResponseI | null>) {
      state.error = action.payload;
    },
  },
});

export const { setAppStatusLoading, setAppError, setAppIsAuth } = appSlice.actions;
