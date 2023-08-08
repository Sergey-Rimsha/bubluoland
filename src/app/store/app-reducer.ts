import { AppActionReturnType } from 'app/store/app-actions';
import { AppActionType } from 'enum';
import { AppStateI } from 'interface';

const initialState: AppStateI = {
  statusLoading: 'idle',
  error: null,
  isInitialized: false,
  categories: [],
};

export const appReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: AppActionReturnType,
): AppStateI => {
  switch (action.type) {
    case AppActionType.SET_STATUS_LOADING:
      return {
        ...state,
        statusLoading: action.statusLoading,
      };
    case AppActionType.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
