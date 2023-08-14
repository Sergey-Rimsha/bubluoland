import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppRootStateType } from 'app/store/appStore';

export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AnyAction>;
