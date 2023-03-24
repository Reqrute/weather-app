import { all } from 'redux-saga/effects'
import { watchpositionTake } from './position'

export default function * rootSaga () {
  yield all([
    watchpositionTake()
  ])
}
