import {
  THEME_CHANGE,
  THEME_SWAP
}
  from '@constants/action'

import {
  type ActionA,
  type ActionB
}
  from '@constants/types/index'

export function swapTheme (result: string): ActionB {
  return { type: THEME_SWAP, payload: { theme: result } }
}

export function changeTheme (): ActionA {
  return { type: THEME_CHANGE }
}
