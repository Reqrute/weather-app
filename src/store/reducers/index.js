import { combineReducers } from 'redux'
import {
  INCREMENT,
  DECREMENT
} from '../actions'

const defaultState = {
  count: -2
}

function countReducer (state = defaultState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      console.log(state.count)
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  countReducer
})
