/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { put, takeEvery, call } from 'redux-saga/effects'
import { initPosition } from '../actions/positionAction'
import { initForecast } from '../actions/forecastAction'

const APIkey = '1812e7ea1446508957bd2700fd80bbaa'

export function * forecastInit ({ lat, lon }: any): Iterator<object> {
  const data: any = yield call(async () => await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`))
  const json = yield call(async () => await new Promise(resolve => { resolve(data.json()) }))
  yield put(initForecast(json))
}

export function * positionTake (): Iterator<object> {
  async function getLocation (): Promise<any> {
    return await new Promise(function (resolve) {
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
  const { lat, lon }: { lat: number, lon: number } | any = yield call(getLocation)
  yield call(forecastInit, { lat, lon })
  yield put(initPosition(lat, lon))
}

export function * changePosition ({ lat, lon }: any): Iterator<object> {
  yield put(initPosition(lat, lon))
}

export function * watchpositionTake (): Iterator<any> {
  yield takeEvery('UPDATE_POSITION', positionTake)
  yield takeEvery('UPDATE_FORECAST', forecastInit)
  yield takeEvery('UPDATE_POSITION_NEW', changePosition)
}
