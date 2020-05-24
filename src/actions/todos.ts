import axios from 'axios';
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

export interface DeleteTodo {
  type: Types.DeleteTodo;
  payload: number;
}

const todosResource = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => async dispatch => {
  const response = await axios.get(todosResource);

  dispatch({
    type: Types.FetchTodos,
    payload: response.data
  });
};
