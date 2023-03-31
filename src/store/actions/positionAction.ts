import {
  INIT_POSITION,
  UPDATE_POSITION,
  UPDATE_POSITION_NEW
}
  from '@constants/action'

import {
  type ActionA,
  type ActionC,
  type ActionD
}
  from '@constants/types'

export function initPosition (lat: number, lon: number): ActionD {
  return { type: INIT_POSITION, payload: { lat, lon } }
}
export function changePosition (lat: number, lon: number): ActionC {
  return { type: UPDATE_POSITION_NEW, lat, lon }
}
export function updatePosition (): ActionA {
  return { type: UPDATE_POSITION }
}
