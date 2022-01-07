import { call, put } from 'redux-saga/effects';
import { requestGetProject } from '../request/project';
import { setProject } from '../../ducks/project';

export function* handleGetProject(action) {
  try {
    const response = yield call(requestGetProject);
    const { data } = response;
    yield put(setProject(data));
  } catch (error) {
    console.log(error);
  }
}
