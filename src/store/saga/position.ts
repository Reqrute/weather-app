/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { put, takeEvery, call } from 'redux-saga/effects'
import { initPosition } from '../actions/positionAction'
import { initForecast } from '../actions/forecastAction'

const APIkey = '1812e7ea1446508957bd2700fd80bbaa'

export function * forecastInit ({ lat, lon }: any): Iterator<object> {
  const data: any = yield call(async () => await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`))
  const json: typeof data = yield call(async () => await new Promise(resolve => { resolve(data.json()) }))
  json.dailyList = json.list?.filter(item => (item.dt_txt.split(' ')[1] === '12:00:00' && item.dt_txt.split(' ')[0] !== json.list[0].dt_txt.split(' ')[0]) || item === json.list[0])
    .map((item) => {
      return { temperature: Math.round(item.main.temp - 273.15), weather: item.weather[0].main, day: new Date(item.dt_txt).toLocaleString('en-US', { weekday: 'long' }), icon: item.weather[0].icon }
    })
  json.curentWeather = json.list[0].weather[0].main
  json.hourlyList = json.list.filter(item => item.dt_txt.split(' ')[0] === json.list[0].dt_txt.split(' ')[0])
    .map((item) => {
      return { temperature: Math.round(item.main.temp - 273.15), weather: item.weather[0].main, time: item.dt_txt.split(' ')[1], icon: item.weather[0].icon }
    })
  yield put(initForecast(json))
}

export function * positionTake (): Iterator<object> {
  async function getLocation (): Promise<object> {
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

export function * watchpositionTake (): Iterator<object> {
  yield takeEvery('UPDATE_POSITION', positionTake)
  yield takeEvery('UPDATE_FORECAST', forecastInit)
  yield takeEvery('UPDATE_POSITION_NEW', changePosition)
}
