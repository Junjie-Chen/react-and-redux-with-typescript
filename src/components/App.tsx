import { loadingTodos, fetchTodos, deleteTodo } from '../actions';
import { State } from '../reducers';

const mapStateToProps = (state: State): State => ({
  loading: state.loading,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
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
