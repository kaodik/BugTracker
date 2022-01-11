import { takeLatest } from 'redux-saga/effects';
import { GET_PROJECT } from '../ducks/project';
import { handleGetProject } from './handlers/project';
import { GET_BUG } from '../ducks/bug';
import { handleGetBug } from './handlers/bug';

export function* watcherSaga() {
  yield takeLatest(GET_PROJECT, handleGetProject);
  yield takeLatest(GET_PROJECT, handleGetBug);
}
