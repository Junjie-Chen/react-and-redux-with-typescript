import { Loading } from './loading';
import { Todo } from '../actions';

export * from './loading';

export interface State {
  loading: Loading;
  todos: Todo[];
}
