import { call, put } from 'redux-saga/effects';
import { requestGetAccount, requestUpdateAccount } from '../request/account';
import { setAccount } from '../../ducks/account';

export function* handleGetAccount(action) {
  try {
    const response = yield call(requestGetAccount, action);
    const { data } = response;
    yield put(setAccount(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handleUpdateAccount(action) {
  try {
    const response = yield call(requestUpdateAccount, action);
    const { data } = response;
    yield put(setAccount(data));
  } catch (error) {
    console.log(error);
  }
}
