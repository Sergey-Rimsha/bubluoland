import { combineReducers } from 'redux';

import { appReducer } from 'entities/app/model/app-reducer';
import { bookInfoReducer } from 'entities/book-info/model/book-info-reducer';
import { booksReducer } from 'entities/books/model/books-reducer';
import { categoriesReducer } from 'entities/categories/model/categories-reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  books: booksReducer,
  bookInfo: bookInfoReducer,
  categories: categoriesReducer,
});
