import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppError, setAppStatusLoading } from 'entities/app/model/app-reducer';
import { booksApi } from 'entities/books/api/booksApi';
import { setCategories } from 'entities/categories/model/categories-reducer';
import { BookI, BooksStateI, ErrorResponseI } from 'interface';
import {
  getErrorResponse,
  getValueCategories,
  sortBooksRatingDefault,
} from 'shared/lib/utils';
import { createAppAsyncThunk } from 'shared/model/hooks/hooks';
import { StatusLoading } from 'types';

const initialState: BooksStateI = {
  items: [],
  error: null,
  statusLoading: 'idle',
  sort: true,
  search: '',
};

export const getBooksTC = createAppAsyncThunk(
  'books/getBooks',
  async (arg, { dispatch, getState }) => {
    dispatch(setAppStatusLoading('loading'));
    try {
      const response = await booksApi.getBooks();
      const payload = getValueCategories(response.data, getState().categories.categories);

      dispatch(setBooks(sortBooksRatingDefault(response.data)));
      dispatch(setCategories(payload));
      dispatch(setAppStatusLoading('succeeded'));
    } catch (error: unknown) {
      dispatch(setAppError(getErrorResponse(error)));
      dispatch(setBooksError(getErrorResponse(error)));
      dispatch(setAppStatusLoading('failed'));
    }
  },
);

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooksStatusLoading(state, action: PayloadAction<StatusLoading>) {
      state.statusLoading = action.payload;
    },
    setBooks(state, action: PayloadAction<BookI[]>) {
      state.items = action.payload;
    },
    setBooksError(state, action: PayloadAction<ErrorResponseI>) {
      state.error = action.payload;
    },
    setBooksSortRating(state, action: PayloadAction<boolean>) {
      state.sort = action.payload;
    },
    setBooksSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const booksReducer = slice.reducer;
export const {
  setBooksStatusLoading,
  setBooks,
  setBooksError,
  setBooksSearch,
  setBooksSortRating,
} = slice.actions;
