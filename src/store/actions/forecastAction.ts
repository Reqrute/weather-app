import {
  INIT_FORECAST,
  UPDATE_FORECAST
}
  from '@constants/action'

import {
  type ActionB,
  type ActionC
}
  from '@constants/types'

export function initForecast (json: any): ActionB {
  return { type: INIT_FORECAST, payload: { ...json } }
}

export function updateForecast (lat: number, lon: number): ActionC {
  return { type: UPDATE_FORECAST, lat, lon }
}
