import { AxiosResponse } from 'axios';

import { BookInfoI } from 'entities/infoBook';
import { instance } from 'shared';

export const infoBookApi = {
  getBookInfo(id: string) {
    return instance.get<BookInfoI, AxiosResponse<BookInfoI>>(`/api/books/${id}`);
  },
};
