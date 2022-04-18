import * as types from '../actions';

export default function(state = [], action) {
  let response = action.response;

  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, response };
    case types.LOGIN_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}