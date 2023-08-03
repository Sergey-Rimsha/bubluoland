import { AnyAction } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThunkAction } from 'redux-thunk';

import { AppRootStateType } from 'app/store';

export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AnyAction>;
