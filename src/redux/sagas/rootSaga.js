import { takeLatest } from 'redux-saga/effects';
import { GET_PROJECT } from '../ducks/project';
import { handleGetProject } from './handlers/project';

export function* watcherSaga() {
  yield takeLatest(GET_PROJECT, handleGetProject);
}
