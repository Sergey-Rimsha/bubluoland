import { combineReducers } from 'redux';

import { appSlice } from 'entities/app';
import { authSlice } from 'entities/auth';
import { booksSlice } from 'entities/books';
import { categoriesSlice } from 'entities/categories';
import { infoBookSlice } from 'entities/infoBook';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  app: appSlice.reducer,
  books: booksSlice.reducer,
  bookInfo: infoBookSlice.reducer,
  categories: categoriesSlice.reducer,
});
