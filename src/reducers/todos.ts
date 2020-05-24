import { Todo, Types } from '../actions';

export const todos = (state: Todo[] = [], action) => {
  switch (action.type) {
    case Types.FetchTodos:
      return action.payload;
    case Types.DeleteTodo:
      return state.filter(todo: boolean => todo.id !== action.payload);
    default:
      return state;
  }
};
