import { AppActionType } from 'enum';
import { ErrorResponseI } from 'interface';
import { StatusLoading } from 'types';

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
