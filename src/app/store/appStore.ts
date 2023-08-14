import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from 'app/store/rootReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});
