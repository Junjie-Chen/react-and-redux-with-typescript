import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Types } from '.';
import { State } from '../reducers';

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

export const fetchTodos = (): ThunkAction<Promise<void>, State, null, FetchTodos> => async (dispatch: ThunkDispatch<State, null, FetchTodos>): Promise<void> => {
  const response = await axios.get<Todo[]>(todosResource);

  dispatch({
    type: Types.FetchTodos,
    payload: response.data
  });
};

export const deleteTodo = (id: number): DeleteTodo => ({
  type: Types.DeleteTodo,
  payload: id
});
