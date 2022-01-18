import { call, put } from 'redux-saga/effects';
import { requestPostLogin } from '../request/login';
import { setLogin } from '../../ducks/login';

export function* handlePostLogin(action) {
  try {
    const response = yield call(requestPostLogin, action);
    const { data } = response;
    yield put(setLogin(data));
  } catch (error) {
    console.log(error);
  }
}
