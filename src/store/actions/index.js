export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * другие константы
 */

/*
 * генераторы экшенов
 */

export function onIncrement () {
  return { type: INCREMENT }
}

export function onDecrement () {
  return { type: DECREMENT }
}

export function onAsyncIncrement () {
  return { type: INCREMENT_ASYNC }
}
