import { instance } from 'shared';
import { CategoriesI } from 'shared/model/interface';

export const categoriesApi = {
  getCategories() {
    return instance.get<CategoriesI[]>('/api/categories');
  },
};
