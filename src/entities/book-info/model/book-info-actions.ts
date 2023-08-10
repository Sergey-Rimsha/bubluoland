import { BookInfoI } from 'entities/book-info/model/book-info-i';
import { BookInfoActionType } from 'entities/book-info/model/enum/book-info-action-type';
import { ErrorResponseI } from 'interface';

export type BookInfoActionReturnType =
  | ReturnType<typeof setBookInfo>
  | ReturnType<typeof setBookInfoError>;

export const setBookInfo = (book: BookInfoI) =>
  ({
    type: BookInfoActionType.SET_BOOK,
    book,
  }) as const;

export const setBookInfoError = (error: ErrorResponseI | null) =>
  ({
    type: BookInfoActionType.SET_ERROR,
    error,
  }) as const;
