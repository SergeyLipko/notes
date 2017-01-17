import {createStore, applyMiddleware} from 'redux';
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga'



let store = null;

import rootSaga from './modules/rootSaga';

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();


  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

export const getDispatch = () => store.dispatch();
export const getStore = () => store.getState();