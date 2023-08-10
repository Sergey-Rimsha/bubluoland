import { AppActionType } from 'app/store/enum/app-action-type';
import { ErrorResponseI } from 'interface';
import { StatusLoading } from 'types';

export type AppActionReturnType =
  | ReturnType<typeof setAppStatusLoading>
  | ReturnType<typeof setAppError>;

export const setAppStatusLoading = (statusLoading: StatusLoading) =>
  ({
    type: AppActionType.SET_STATUS_LOADING,
    statusLoading,
  }) as const;

export const setAppError = (error: ErrorResponseI | null) =>
  ({
    type: AppActionType.SET_ERROR,
    error,
  }) as const;
