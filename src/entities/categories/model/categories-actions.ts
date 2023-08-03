import { CategoriesActionType } from 'entities/categories/enum/categories-action-type';
import { CategoriesI } from 'interface';

export type CategoriesActionsReturnType = ReturnType<typeof setCategories>;

export const setCategories = (categories: CategoriesI[]) =>
  ({
    type: CategoriesActionType.SET_CATEGORIES,
    categories,
  }) as const;
