import { put, takeEvery, select } from 'redux-saga/effects'
import { swapTheme } from '../actions/themeAction'

export function * themeWorker (): Iterator<object> {
  let currentTheme: string | undefined = yield select((state) => state.themeReducer.theme)
  currentTheme === 'Light' ? currentTheme = 'Dark' : currentTheme = 'Light'
  yield put(swapTheme(currentTheme))
}

export function * watchThemeWorker (): Iterator<object> {
  yield takeEvery('THEME_CHANGE', themeWorker)
}
