import {
  INIT_FORECAST,
  UPDATE_FORECAST,
  CLEAR_FORECAST
}
  from '@constants/action'

import {
  type ActionA,
  type ActionB,
  type ActionC
}
  from '@constants/types'

export function initForecast (json: object): ActionB {
  return { type: INIT_FORECAST, payload: { ...json } }
}

export function updateForecast (lat: number, lon: number): ActionC {
  return { type: UPDATE_FORECAST, lat, lon }
}

export function clearForecast (): ActionA {
  return { type: CLEAR_FORECAST }
}
