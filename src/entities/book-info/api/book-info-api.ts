import { BookInfoI } from 'interface';
import { instance } from 'shared';

export const bookInfoApi = {
  getBookInfo(id: string) {
    return instance.get<BookInfoI>(`/api/books/${id}`);
  },
};
