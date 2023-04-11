import {
  THEME_SWAP
}
  from '@constants/action'

const defaultState = {
  theme: 'Light'
}

export default function themeReducer (state = defaultState, action: { type: string, payload: object }): object {
  switch (action.type) {
    case THEME_SWAP:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
