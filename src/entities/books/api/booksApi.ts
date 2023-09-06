import { BookI } from 'entities/books/model/books';
import { instance } from 'shared';

export const booksApi = {
  getBooks() {
    return instance.get<BookI[]>('/api/books');
  },
};
