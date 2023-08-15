import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppError, setAppStatusLoading } from 'entities/app/model/app-reducer';
import { bookInfoApi } from 'entities/book-info/api/book-info-api';
import { BookInfoI, BookInfoStateI } from 'entities/book-info/model/interface';
import { ErrorResponseI } from 'interface';
import { getErrorResponse } from 'shared/lib/utils';
import { createAppAsyncThunk } from 'shared/model/hooks/hooks';

const initialState: BookInfoStateI = {
  book: {},
  error: null,
};

export const getBookInfoTC = createAppAsyncThunk(
  'bookInfo',
  async (id: string, { dispatch }) => {
    dispatch(setAppStatusLoading('loading'));
    try {
      const response = await bookInfoApi.getBookInfo(id);

      dispatch(setBookInfo(response.data));
      dispatch(setAppStatusLoading('succeeded'));
    } catch (error: unknown) {
      dispatch(setAppError(getErrorResponse(error)));
      dispatch(setAppStatusLoading('failed'));
      dispatch(setBookInfoError(getErrorResponse(error)));
    }
  },
);

const slice = createSlice({
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

export const bookInfoReducer = slice.reducer;

export const { setBookInfoError, setBookInfo } = slice.actions;
