import { setAppError, setAppStatusLoading } from 'app/store/app-actions';
import { booksApi } from 'entities/books/api/booksApi';
import { setBooks, setBooksErrorResponse } from 'entities/books/model/books-actions';
import { setCategories } from 'entities/categories/model/categories-actions';
import {
  getErrorResponse,
  getValueCategories,
  sortBooksRatingDefault,
} from 'shared/utils';
import { AppThunkType } from 'types';

export const getBooksTC = (): AppThunkType => async (dispatch, getState) => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await booksApi.getBooks();
    const payload = getValueCategories(response.data, getState().app.categories);

    dispatch(setBooks(sortBooksRatingDefault(response.data)));
    dispatch(setCategories(payload));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    dispatch(setAppError(getErrorResponse(error)));
    dispatch(setBooksErrorResponse(getErrorResponse(error)));
    dispatch(setAppStatusLoading('failed'));
  }
};
