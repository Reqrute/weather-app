import { put, takeEvery, call } from 'redux-saga/effects'
import { initPosition } from '../actions/positionAction'
import { initForecast, isLoad } from '../actions/forecastAction'
import { type ForecastType } from './interface'

const APIkey = '1812e7ea1446508957bd2700fd80bbaa'

export function * forecastInit ({ lat, lon }: { lat: number, lon: number }): Iterator<object> {
  const json = yield call(async (): Promise<ForecastType> => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`)
    return await new Promise(resolve => { resolve(data.json()) })
  })
  if (json !== undefined) {
    (json as ForecastType).curentWeather = (json as ForecastType).list[0].weather[0].main;
    (json as ForecastType).dailyList = (json as ForecastType).list?.filter(item => (item.dt_txt.split(' ')[1] === '12:00:00' && item.dt_txt.split(' ')[0] !== (json as ForecastType).list[0].dt_txt.split(' ')[0]) || item === (json as ForecastType).list[0])
      .map((item) => {
        return { temperature: Math.round(item.main.temp - 273.15), weather: item.weather[0].main, day: new Date(item.dt_txt).toLocaleString('en-US', { weekday: 'long' }), icon: item.weather[0].icon }
      });
    (json as ForecastType).hourlyList = (json as ForecastType).list.filter(item => item.dt_txt.split(' ')[0] === (json as ForecastType).list[0].dt_txt.split(' ')[0])
      .map((item) => {
        return { temperature: Math.round(item.main.temp - 273.15), weather: item.weather[0].main, time: item.dt_txt.split(' ')[1], icon: item.weather[0].icon }
      })

    yield put(isLoad(false))
    yield put(initForecast(json))
  }
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

export function * changePosition ({ lat, lon }: { lat: number, lon: number }): Iterator<object> {
  yield put(initPosition(lat, lon))
}

export function * watchpositionTake (): Iterator<object> {
  yield takeEvery('UPDATE_POSITION', positionTake)
  yield takeEvery('UPDATE_FORECAST', forecastInit)
  yield takeEvery('UPDATE_POSITION_NEW', changePosition)
}
