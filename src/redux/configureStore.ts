import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import pageReducer from './ducks/page.js';
import projectReducer from './ducks/project';
import bugReducer from './ducks/bug';
import { watcherSaga } from './sagas/rootSaga.js';
import timeReducer from './ducks/time';

const reducer = combineReducers({
  pageTracker: pageReducer,
  project: projectReducer,
  bug: bugReducer,
  time: timeReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export type RootState = ReturnType<typeof reducer>;
const store = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);
// const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

// const store = createStore(reducer, {}, applyMiddleware(...middleware));

// sagaMiddleware.run(watcherSaga);

export default store;
