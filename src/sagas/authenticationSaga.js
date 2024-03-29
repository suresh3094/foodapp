import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../services/authenticationService';

import * as types from '../actions'

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [
      put({ type: types.LOGIN_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_ERROR, error });
  }
}