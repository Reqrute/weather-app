import {
  INIT_FORECAST,
  CLEAR_FORECAST,
  LOAD
}
  from '@constants/action'

const defaultState = { Load: true }

export default function forecastReducer (state = defaultState, action: { type: string, payload: object }): object {
  switch (action.type) {
    case INIT_FORECAST:
      return { ...state, ...action.payload }
    case LOAD:
      return { ...state, ...action.payload }
    case CLEAR_FORECAST:
      return defaultState
    default:
      return state
  }
}
