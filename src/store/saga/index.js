import { put, takeEvery, all } from 'redux-saga/effects'
import { onIncrement, onDecrement } from '../actions'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function * incrementAsync () {
  yield delay(1000)
  yield put(onIncrement())
}

export function * decrementAsync () {
  yield delay(1000)
  yield put(onDecrement())
}

export function * watchIncrementAsync () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function * watchDecrementAsync () {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export default function * rootSaga () {
  yield all([
    watchDecrementAsync(),
    watchIncrementAsync()
  ])
}
