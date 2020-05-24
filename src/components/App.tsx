import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Todo, Action, loadingTodos, fetchTodos, deleteTodo } from '../actions';
import { Loading, State } from '../reducers';

interface Props {
  loading: Loading;
  loadingTodos(loading: boolean): void;
  todos: Todo[];
  fetchTodos(): void;
  deleteTodo(id: number): void;
}

class App extends Component<Props> {
  componentDidUpdate(prevProps: Props): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.props.loadingTodos(false);
    }
  }

  onButtonClick = (): void => {
    if (!this.props.todos.length) {
      this.props.fetchTodos();

      this.props.loadingTodos(true);
    }
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderLoading(): JSX.Element {
    return <div>Loading...</div>;
  }

  renderTodos(): JSX.Element[] {
    return this.props.todos.map((todo: Todo): JSX.Element => {
      return <div key={todo.id} onClick={() => { this.onTodoClick(todo.id) }}>{todo.title}</div>;
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.props.loading.loadingTodos ? this.renderLoading() : this.renderTodos()}
      </div>
    );
  }
}

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

export const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
