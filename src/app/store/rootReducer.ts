import { combineReducers } from 'redux';

import { appReducer } from 'entities/app/model/app-reducer';
import { authReducer } from 'entities/auth';
import { bookInfoReducer } from 'entities/book-info/model/book-info-reducer';
import { booksReducer } from 'entities/books/model/books-reducer';
import { categoriesReducer } from 'entities/categories/model/categories-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  books: booksReducer,
  bookInfo: bookInfoReducer,
  categories: categoriesReducer,
});
