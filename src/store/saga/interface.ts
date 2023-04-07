export interface CalendarType {
  accessRole: string
  defaultReminders: object[]
  etag: string
  items: Array<{ summary: string, start: { dateTime: string } }>
  kind: string
  nextSyncToken: string
  summary: string
  timeZone: string
  updated: string
}

export interface ForecastType {
  city: object
  cnt: number
  cod: string
  curentWeather: string
  dailyList: Array<{ temperature: number, weather: string, day: string, icon: string }>
  hourlyList: Array<{ temperature: number, weather: string, time: string, icon: string }>
  list: Array<{ main: { temp: number }, weather: Array<{ main: string, icon: string }>, dt_txt: string }>
  message: number
}
