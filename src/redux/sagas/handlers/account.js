import { call, put } from 'redux-saga/effects';
import { requestGetAccount } from '../request/account';
import { setAccount } from '../../ducks/account';

export function* handleGetAccount(action) {
  try {
    const response = yield call(requestGetAccount);
    const { data } = response;
    yield put(setAccount(data));
  } catch (error) {
    console.log(error);
  }
}
