import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ErrorResponseI } from 'interface';
import { StatusLoading } from 'types';

export interface AppStateI {
  statusLoading: StatusLoading;
  error: ErrorResponseI | null;
}

const initialState: AppStateI = {
  statusLoading: 'idle',
  error: null,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppStatusLoading(state, action: PayloadAction<StatusLoading>) {
      state.statusLoading = action.payload;
    },
    setAppError(state, action: PayloadAction<ErrorResponseI | null>) {
      state.error = action.payload;
    },
  },
});

export const appReducer = slice.reducer;

export const { setAppStatusLoading, setAppError } = slice.actions;
