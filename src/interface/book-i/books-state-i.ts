import { ErrorResponseI } from '../utils-i';

import { BookI } from './book-i';

import { StatusLoading } from 'types';

export interface BooksStateI {
  statusLoading: StatusLoading;
  items: BookI[];
  sort: boolean;
  error: ErrorResponseI | null;
  search: string;
}
