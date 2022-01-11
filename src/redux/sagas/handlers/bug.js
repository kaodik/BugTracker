import { call, put } from 'redux-saga/effects';
import { requestGetBug } from '../request/bug';
import { setBug } from '../../ducks/bug';

export function* handleGetBug(action) {
  try {
    const response = yield call(requestGetBug);
    const { data } = response;
    yield put(setBug(data));
  } catch (error) {
    console.log(error);
  }
}
