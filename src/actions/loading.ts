import { Types } from '.';

export interface LoadingTodos {
  type: Types.LoadingTodos;
  payload: boolean;
}
