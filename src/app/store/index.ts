import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { appReducer } from 'app/store/app-reducer';
import { bookInfoReducer } from 'entities/book-info/model/book-info-reducer';
import { booksReducer } from 'entities/books/model/books-reducer';
import { categoriesReducer } from 'entities/categories/model/categories-reducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  app: appReducer,
  books: booksReducer,
  bookInfo: bookInfoReducer,
  categories: categoriesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
