import { combineReducers } from 'redux';
import { Loading, loading } from './loading';
import { todos } from './todos';
import { Todo } from '../actions';

export * from './loading';

export interface State {
  loading: Loading;
  todos: Todo[];
}

export const reducers = combineReducers({
  loading,
  todos
});
