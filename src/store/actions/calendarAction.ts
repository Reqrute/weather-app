import {
  UPLOAD_EVENT,
  CLEAR_EVENT,
  START_AUTIFACATION,
  QUIT_FROM_CALENDAR
}
  from '@constants/action'

import {
  type ActionA,
  type ActionB
}
  from '@constants/types/index'

export function uploadEvent (json: object): ActionB {
  return { type: UPLOAD_EVENT, payload: { ...json } }
}

export function clearEvent (): ActionA {
  return { type: CLEAR_EVENT }
}

export function startAuth (): ActionA {
  return { type: START_AUTIFACATION }
}

export function quitAuth (): ActionA {
  return { type: QUIT_FROM_CALENDAR }
}
