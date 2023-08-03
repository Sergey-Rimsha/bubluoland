import { CategoriesActionType } from 'entities/categories/enum/categories-action-type';
import { CategoriesActionsReturnType } from 'entities/categories/model/categories-actions';
import { CategoriesI } from 'interface';

export interface CategoriesState {
  categories: CategoriesI[];
}

const initialState: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: CategoriesActionsReturnType,
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionType.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};
