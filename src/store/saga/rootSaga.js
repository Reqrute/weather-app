import { all } from 'redux-saga/effects'
import { watchpositionTake } from './position'
import { watchEventUpload, watchEventClear } from './calendar'

export default function * rootSaga () {
  yield all([
    watchpositionTake(),
    watchEventUpload(),
    watchEventClear()
  ])
}
