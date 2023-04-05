import {
  INIT_POSITION,
  CLEAR_POSITION
}
  from '@constants/action'

const defaultState = {
  lat: 0,
  lon: 0
}

export default function positionReducer (state = defaultState, action: { type: string, payload: { lat: number, lon: number } }): object {
  switch (action.type) {
    case INIT_POSITION:
      return { ...state, lat: action.payload.lat, lon: action.payload.lon }
    case CLEAR_POSITION:
      return defaultState
    default:
      return state
  }
}
