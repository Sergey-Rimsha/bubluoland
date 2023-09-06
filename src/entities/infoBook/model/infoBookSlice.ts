import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppError, setAppStatusLoading } from 'entities/app';
import { infoBookApi } from 'entities/infoBook/api/infoBookApi';
import { BookInfoI } from 'entities/infoBook/model/infoBook';
import { getErrorResponse } from 'shared/lib/utils';
import { createAppAsyncThunk } from 'shared/model/hooks/hooks';
import { ErrorResponseI } from 'shared/model/interface';

const initialState: BookInfoStateI = {
  book: {},
  error: null,
};

interface BookInfoStateI {
  book: BookInfoI;
  error: ErrorResponseI | null;
}
export const infoBookSlice = createSlice({
  name: 'bookInfo',
  initialState,
  reducers: {
    setBookInfoError(state, action: PayloadAction<ErrorResponseI | null>) {
      state.error = action.payload;
    },
    setBookInfo(state, action: PayloadAction<BookInfoI>) {
      state.book = action.payload;
    },
  },
});

// TODO: remove to features(model) layer
export const getBookInfoTC = createAppAsyncThunk(
  'bookInfo/getBookInfo',
  async (id: string, { dispatch }) => {
    dispatch(setAppStatusLoading('loading'));
    try {
      const response = await infoBookApi.getBookInfo(id);

      dispatch(setBookInfo(response.data));
      dispatch(setAppStatusLoading('succeeded'));
    } catch (error: unknown) {
      dispatch(setAppError(getErrorResponse(error)));
      dispatch(setAppStatusLoading('failed'));
      dispatch(setBookInfoError(getErrorResponse(error)));
    }
  },
);

export const { setBookInfoError, setBookInfo } = infoBookSlice.actions;
