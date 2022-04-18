import * as types from './index';

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN,
    user
  }
};