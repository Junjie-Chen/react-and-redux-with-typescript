import { Types } from '../actions';

export interface Loading {
  loadingTodos: boolean;
}

const loadingState = { loadingTodos: false };

export const loading = (state: Loading = loadingState, action) => {
  switch (action.type) {
    case Types.LoadingTodos:
      return { ...state, loadingTodos: action.payload };
    default:
      return state;
  }
};
