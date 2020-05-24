import { Todo, Action, Types } from '../actions';

export const todos = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case Types.FetchTodos:
      return action.payload;
    case Types.DeleteTodo:
      return state.filter(todo: boolean => todo.id !== action.payload);
    default:
      return state;
  }
};
