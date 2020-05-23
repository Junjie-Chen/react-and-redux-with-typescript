import { State } from '../reducers';

const mapStateToProps = (state: State) => ({
  loading: state.loading,
  todos: state.todos
});
