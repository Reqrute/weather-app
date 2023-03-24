import {
  INIT_POSITION,
  UPDATE_POSITION
}
  from '../../constants/action'

export function initPosition (lat, lon) {
  return { type: INIT_POSITION, payload: { lat, lon } }
}

export function updatePosition () {
  return { type: UPDATE_POSITION }
}
