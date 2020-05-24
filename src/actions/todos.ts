import { Types } from '.';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodos {
  type: Types.FetchTodos;
  payload: Todo[];
}
