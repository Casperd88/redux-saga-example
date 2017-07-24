import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import weather from './weather';
import weatherSaga from './../sagas/weather';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  combineReducers({weather}),
  applyMiddleware(
    logger,
    sagaMiddleware
  )
);

sagaMiddleware.run(weatherSaga);

export default Store;
