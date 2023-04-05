import {
  INIT_FORECAST,
  CLEAR_FORECAST
}
  from '@constants/action'

const defaultState = {}

export default function forecastReducer (state = defaultState, action: { type: string, payload: object }): object {
  switch (action.type) {
    case INIT_FORECAST:
      return { ...state, ...action.payload }
    case CLEAR_FORECAST:
      return defaultState
    default:
      return state
  }
}
