import { setAppError, setAppStatusLoading } from 'entities/app/model/app-reducer';
import { booksApi } from 'entities/books/api/booksApi';
import { setBooks, setBooksErrorResponse } from 'entities/books/model/books-actions';
import { setCategories } from 'entities/categories/model/categories-actions';
import {
  getErrorResponse,
  getValueCategories,
  sortBooksRatingDefault,
} from 'shared/lib/utils';
import { AppThunkType } from 'types';

export const getBooksTC = (): AppThunkType => async (dispatch, getState) => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await booksApi.getBooks();
    const payload = getValueCategories(response.data, getState().categories.categories);

    dispatch(setBooks(sortBooksRatingDefault(response.data)));
    dispatch(setCategories(payload));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    dispatch(setAppError(getErrorResponse(error)));
    dispatch(setBooksErrorResponse(getErrorResponse(error)));
    dispatch(setAppStatusLoading('failed'));
  }
};
