import { setAppError, setAppStatusLoading } from 'app/store/app-actions';

export type AppActionReturnType =
  | ReturnType<typeof setAppStatusLoading>
  | ReturnType<typeof setAppError>;
