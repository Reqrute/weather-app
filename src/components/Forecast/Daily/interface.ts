export interface DailyListState {
  forecastReducer: { dailyList: Array<{ temperature: number, weather: string, day: string, icon: string }> }
}
