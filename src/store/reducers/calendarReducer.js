import {
  UPLOAD_EVENT,
  CLEAR_EVENT
}
  from '../../constants/action'

const defaultState = {}

export default function calendarReducer (state = defaultState, action) {
  switch (action.type) {
    case UPLOAD_EVENT:
      return { ...state, ...action.payload }
    case CLEAR_EVENT:
      return defaultState
    default:
      return state
  }
}
