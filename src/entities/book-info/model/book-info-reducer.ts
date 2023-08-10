import { BookInfoActionReturnType } from 'entities/book-info/model/book-info-actions';
import { BookInfoStateI } from 'entities/book-info/model/book-info-i';
import { BookInfoActionType } from 'entities/book-info/model/enum/book-info-action-type';

const initialState: BookInfoStateI = {
  book: {},
  error: null,
};

export const bookInfoReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: BookInfoActionReturnType,
): BookInfoStateI => {
  switch (action.type) {
    case BookInfoActionType.SET_BOOK:
      return {
        ...state,
        book: action.book,
        error: null,
      };
    case BookInfoActionType.SET_ERROR:
      return {
        ...state,
        error: action.error,
        book: {},
      };
    default:
      return state;
  }
};
