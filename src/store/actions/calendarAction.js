import {
  UPLOAD_EVENT,
  CLEAR_EVENT,
  START_AUTIFACATION,
  QUIT_FROM_CALENDAR
}
  from '../../constants/action'

export function uploadEvent (json) {
  return { type: UPLOAD_EVENT, payload: { ...json } }
}

export function clearEvent () {
  return { type: CLEAR_EVENT }
}

export function startAuth () {
  return { type: START_AUTIFACATION }
}

export function quitAuth () {
  return { type: QUIT_FROM_CALENDAR }
}
