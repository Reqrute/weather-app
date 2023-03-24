import {
  INIT_POSITION
}
  from '../../constants/action'

const defaultState = {
  lat: 0,
  lon: 0
}

export default function positionReducer (state = defaultState, action) {
  switch (action.type) {
    case INIT_POSITION:
      return { ...state, lat: action.payload.lat, lon: action.payload.lon }
    default:
      return state
  }
}
