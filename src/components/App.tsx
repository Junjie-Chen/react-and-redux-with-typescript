import { State } from '../reducers';

const mapStateToProps = (state: State): State => ({
  loading: state.loading,
  todos: state.todos
});
