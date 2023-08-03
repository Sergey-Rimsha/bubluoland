import { setAppError, setAppStatusLoading } from 'app/store/app-actions';
import { bookInfoApi } from 'entities/book-info/api/book-info-api';
import { setBookInfo } from 'entities/book-info/model/book-info-actions';
import { getErrorResponse } from 'shared/utils';
import { AppThunkType } from 'types';

export const getBookInfoTC =
  (id: string): AppThunkType =>
  async dispatch => {
    dispatch(setAppStatusLoading('loading'));
    try {
      const response = await bookInfoApi.getBookInfo(id);

      dispatch(setBookInfo(response.data));
      dispatch(setAppStatusLoading('succeeded'));
    } catch (error: unknown) {
      dispatch(setAppError(getErrorResponse(error)));
      dispatch(setAppStatusLoading('failed'));
    }
  };
