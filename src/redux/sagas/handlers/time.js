import { call, put } from 'redux-saga/effects';
import { requestGetTime } from '../request/time';
import { setTime } from '../../ducks/time';

export function* handleGetTime(action) {
  try {
    const response = yield call(requestGetTime);
    const { data } = response;
    yield put(setTime(data));
  } catch (error) {
    console.log(error);
  }
}
