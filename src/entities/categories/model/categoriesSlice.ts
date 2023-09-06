import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppError, setAppStatusLoading } from 'entities/app/model/appSlice';
import { categoriesApi } from 'entities/categories/api/categoriesApi';
import { getErrorResponse } from 'shared/lib/utils';
import { createAppAsyncThunk } from 'shared/model/hooks/hooks';
import { CategoriesI } from 'shared/model/interface';

export interface CategoriesState {
  categories: CategoriesI[];
}

const initialState: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',

  initialState,

  reducers: {
    setCategories(state, action: PayloadAction<CategoriesI[]>) {
      state.categories = action.payload;
    },
  },
});

// TODO: remove to features(model) layer
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
export const { setCategories } = categoriesSlice.actions;
