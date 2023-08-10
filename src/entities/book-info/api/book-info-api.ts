import { AxiosResponse } from 'axios';

import { BookInfoI } from 'entities/book-info/model/book-info-i';
import { instance } from 'shared';

export const bookInfoApi = {
  getBookInfo(id: string) {
    return instance.get<BookInfoI, AxiosResponse<BookInfoI>>(`/api/books/${id}`);
  },
};
