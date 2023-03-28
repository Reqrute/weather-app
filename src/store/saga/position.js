import { put, takeEvery, call } from 'redux-saga/effects'
import { initPosition } from '../actions/positionAction'
import { initForecast } from '../actions/forecastAction'

const APIkey = '1812e7ea1446508957bd2700fd80bbaa'

export function * forecastInit ({ lat, lon }) {
  const data = yield call(() => fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`))
  const json = yield call(() => new Promise(resolve => resolve(data.json())))
  yield put(initForecast(json))
}

export function * positionTake () {
  function getLocation () {
    return new Promise(function (resolve) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lon = position.coords.longitude; const lat = position.coords.latitude
        const myLocation = {
          lon,
          lat
        }
        resolve(myLocation)
      })
    }
    )
  }
  const { lat, lon } = yield call(getLocation)
  yield call(forecastInit, { lat, lon })
  yield put(initPosition(lat, lon))
}

export function * changePosition ({ lat, lon }) {
  yield put(initPosition(lat, lon))
}

export function * watchpositionTake () {
  yield takeEvery('UPDATE_POSITION', positionTake)
  yield takeEvery('UPDATE_FORECAST', forecastInit)
  yield takeEvery('UPDATE_POSITION_NEW', changePosition)
}
