import {
  INIT_FORECAST
}
  from '@constants/action'

const defaultState = {}

export default function forecastReducer (state = defaultState, action: { type: string, payload: object }): object {
  switch (action.type) {
    case INIT_FORECAST:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
