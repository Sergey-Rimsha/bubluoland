import { setAppError, setAppStatusLoading } from 'app/store/app-actions';
import { categoriesApi } from 'entities/categories/api/categoriesApi';
import { setCategories } from 'entities/categories/model/categories-actions';
import { getErrorResponse } from 'shared/utils';
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
