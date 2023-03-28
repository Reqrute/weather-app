import {
  INIT_FORECAST,
  UPDATE_FORECAST
}
  from '../../constants/action'

export function initForecast (json) {
  return { type: INIT_FORECAST, payload: { ...json } }
}

export function updateForecast (lat, lon) {
  return { type: UPDATE_FORECAST, lat, lon }
}
