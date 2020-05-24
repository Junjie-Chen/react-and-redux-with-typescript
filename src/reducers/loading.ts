import { Action, Types } from '../actions';

export interface Loading {
  loadingTodos: boolean;
}

const loadingState = { loadingTodos: false };

export const loading = (state: Loading = loadingState, action: Action): Loading => {
  switch (action.type) {
    case Types.LoadingTodos:
      return { ...state, loadingTodos: action.payload };
    default:
      return state;
  }
};
