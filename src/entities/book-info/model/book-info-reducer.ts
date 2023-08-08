import { BookInfoActionReturnType } from 'entities/book-info/model/book-info-actions';
import { BookInfoActionType } from 'enum';
import { BookInfoStateI } from 'interface';

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
