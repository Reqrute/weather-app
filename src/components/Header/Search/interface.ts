export interface PositionState {
  positionReducer: { lat: number
    lon: number }
}
export interface CityState {
  forecastReducer: { city: {
    name: string
  } }
}
