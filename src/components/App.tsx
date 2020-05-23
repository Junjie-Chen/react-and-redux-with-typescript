import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action, loadingTodos, fetchTodos, deleteTodo } from '../actions';
import { State } from '../reducers';

const mapStateToProps = (state: State): State => ({
  loading: state.loading,
  todos: state.todos
});

const mapDispatchToProps = (dispatch: ThunkDispatch<State, null, Action>): {
  loadingTodos(loading: boolean): void;
  fetchTodos(): void;
  deleteTodo(id: number): void;
} => ({
  loadingTodos(loading: boolean): void {
    dispatch(loadingTodos(loading));
  },
  fetchTodos(): void {
    dispatch(fetchTodos());
  },
  deleteTodo(id: number): void {
    dispatch(deleteTodo(id));
  }
});

export const connectedApp = connect(mapStateToProps)(App);
