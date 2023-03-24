import { combineReducers } from 'redux'
import positionReducer from './positionReducer'
import forecastReducer from './forecastReducer'

const rootReducer = combineReducers({
  positionReducer,
  forecastReducer
})

export default rootReducer
