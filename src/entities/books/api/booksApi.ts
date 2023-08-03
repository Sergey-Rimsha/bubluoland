import { BookI } from 'interface';
import { instance } from 'shared';

export const booksApi = {
  getBooks() {
    return instance.get<BookI[]>('/api/books');
  },
};
