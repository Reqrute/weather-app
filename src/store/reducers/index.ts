import { combineReducers } from 'redux'
import positionReducer from './positionReducer'
import forecastReducer from './forecastReducer'
import calendarReducer from './calendarReducer'

const rootReducer = combineReducers({
  positionReducer,
  forecastReducer,
  calendarReducer
})

export default rootReducer
