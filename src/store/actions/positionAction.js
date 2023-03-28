import {
  INIT_POSITION,
  UPDATE_POSITION,
  UPDATE_POSITION_NEW
}
  from '../../constants/action'

export function initPosition (lat, lon) {
  return { type: INIT_POSITION, payload: { lat, lon } }
}
export function changePosition (lat, lon) {
  return { type: UPDATE_POSITION_NEW, lat, lon }
}
export function updatePosition () {
  return { type: UPDATE_POSITION }
}
