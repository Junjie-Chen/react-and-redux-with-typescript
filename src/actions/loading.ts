import { Types } from '.';

export interface LoadingTodos {
  type: Types.LoadingTodos;
  payload: boolean;
}

export const loadingTodos = (loading: boolean) => ({
  type: Types.LoadingTodos,
  payload: loading
});
