import { CategoriesI } from 'interface';
import { instance } from 'shared';

export const categoriesApi = {
  getCategories() {
    return instance.get<CategoriesI[]>('/api/categories');
  },
};
