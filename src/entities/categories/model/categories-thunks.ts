import { setAppError, setAppStatusLoading } from 'entities/app/model/app-reducer';
import { categoriesApi } from 'entities/categories/api/categoriesApi';
import { setCategories } from 'entities/categories/model/categories-actions';
import { getErrorResponse } from 'shared/lib/utils';
import { AppThunkType } from 'types';

export const getCategoriesTC = (): AppThunkType => async dispatch => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await categoriesApi.getCategories();

    dispatch(setCategories(response.data));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    dispatch(setAppError(getErrorResponse(error)));
    dispatch(setAppStatusLoading('failed'));
  }
};
