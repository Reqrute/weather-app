import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index.js'
import { updatePosition } from './actions/positionAction.js'

import rootSaga from './saga/rootSaga.js'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
store.dispatch(updatePosition())
