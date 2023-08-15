import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppError, setAppStatusLoading } from 'entities/app/model/app-reducer';
import { categoriesApi } from 'entities/categories/api/categoriesApi';
import { CategoriesI } from 'interface';
import { getErrorResponse } from 'shared/lib/utils';
import { createAppAsyncThunk } from 'shared/model/hooks/hooks';

export interface CategoriesState {
  categories: CategoriesI[];
}

const initialState: CategoriesState = {
  categories: [],
};

export const getCategoriesTC = createAppAsyncThunk(
  'categories/getCategories',
  async (arg, { dispatch }) => {
    dispatch(setAppStatusLoading('loading'));
    try {
      const response = await categoriesApi.getCategories();

      dispatch(setCategories(response.data));
      dispatch(setAppStatusLoading('succeeded'));
    } catch (error: unknown) {
      dispatch(setAppError(getErrorResponse(error)));
      dispatch(setAppStatusLoading('failed'));
    }
  },
);

const slice = createSlice({
  name: 'categories',

  initialState,

  reducers: {
    setCategories(state, action: PayloadAction<CategoriesI[]>) {
      state.categories = action.payload;
    },
  },
});

export const categoriesReducer = slice.reducer;
export const { setCategories } = slice.actions;
