import { combineReducers } from 'redux'
import positionReducer from './positionReducer'
import forecastReducer from './forecastReducer'
import calendarReducer from './calendarReducer'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
  positionReducer,
  forecastReducer,
  calendarReducer,
  themeReducer
})

export default rootReducer
