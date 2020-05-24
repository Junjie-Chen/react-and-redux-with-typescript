import { LoadingTodos } from './loading';
import { FetchTodos, DeleteTodo } from './todos';

export enum Types {
  LoadingTodos,
  FetchTodos,
  DeleteTodo
}

export type Action = LoadingTodos | FetchTodos | DeleteTodo;
