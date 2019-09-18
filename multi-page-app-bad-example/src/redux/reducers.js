import { SET_PAGE } from './action-types';

const initialState = {
  page: 'Page1',
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_PAGE) {
    return { ...state, page: action.payload };
  }
  return state;
}

export default rootReducer;
