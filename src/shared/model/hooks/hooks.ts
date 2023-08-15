import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppRootStateType, AppStore } from 'app/store/appStore';

type AsyncThunkConfig = {
  state: ReturnType<AppStore['getState']>;
  dispatch?: AppStore['dispatch'];
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};

export const useAppDispatch = (): ThunkDispatch<AppRootStateType, void, AnyAction> =>
  useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export const createAppAsyncThunk = createAsyncThunk.withTypes<AsyncThunkConfig>();
