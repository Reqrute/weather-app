import { all } from 'redux-saga/effects'
import { watchpositionTake } from './position'
import { watchEventUpload, watchEventClear } from './calendar'
import { watchThemeWorker } from './theme'

export default function * rootSaga (): Iterator<object> {
  yield all([
    watchpositionTake(),
    watchEventUpload(),
    watchEventClear(),
    watchThemeWorker()
  ])
}
