import { put, takeEvery, call } from 'redux-saga/effects'
import { uploadEvent, clearEvent } from '../actions/calendarAction'
import ApiCalendar from 'react-google-calendar-api'
import { type CalendarType } from './interface'
declare const window

const config = {
  clientId: '791850112231-e02qk8d9ml56uecikh9i5vbce1vnffos',
  apiKey: 'AIzaSyCPY-2djkqpYDVRLJPnF5KguZc82-f_Z6g',
  scope: 'https://www.googleapis.com/auth/calendar',
  plugin_name: 'App Name that you used in google developer console API',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
  ]
}

const apiCalendar = new ApiCalendar(config)

export function * eventUpload (): Iterator<object> {
  const Auth = async (): Promise<CalendarType> => {
    return await new Promise((resolve, reject) => {
      const gapi = window.gapi
      gapi.load('client:auth2', () => {
        gapi.client.init(config)

        gapi.auth2.getAuthInstance().signIn()
          .then(() => {
            apiCalendar.listEvents({
              timeMin: new Date().toISOString(),
              timeMax: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1).toISOString(),
              showDeleted: true,
              maxResults: 10,
              orderBy: 'updated'
            }).then(({ result }) => {
              resolve(result)
            })
          })
      })
    })
  }

  const json = yield call(Auth)
  if (json !== undefined) {
    (json as CalendarType | { title: string, time: string, items }).items = (json as CalendarType).items.sort((a, b) => +new Date(a.start.dateTime) - +new Date(b.start.dateTime)).map((a) => {
      return { title: a.summary, time: `${new Date(a.start.dateTime).getHours()}:${new Date(a.start.dateTime).getMinutes() === 0 ? ('00') : (new Date(a.start.dateTime).getMinutes())}` }
    })

    yield put(uploadEvent(json))
  }
}

export function * eventClear (): Iterator<object> {
  yield call(apiCalendar.handleSignoutClick)
  yield put(clearEvent())
}

export function * watchEventUpload (): Iterator<object> {
  yield takeEvery('START_AUTIFACATION', eventUpload)
}

export function * watchEventClear (): Iterator<object> {
  yield takeEvery('QUIT_FROM_CALENDAR', eventClear)
}
