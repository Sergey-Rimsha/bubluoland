import { CategoriesI, ErrorResponseI } from '../utils-i';

import { StatusLoading } from 'types';

export interface AppStateI {
  statusLoading: StatusLoading;
  error: ErrorResponseI | null;
  isInitialized: boolean;
  categories: CategoriesI[];
}
