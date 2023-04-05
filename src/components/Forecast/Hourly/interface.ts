export interface HourlyListState {
  forecastReducer: { hourlyList: Array<{ temperature: number, weather: string, time: string, icon: string }> }
}
