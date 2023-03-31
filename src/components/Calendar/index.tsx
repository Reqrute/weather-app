import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../constants/style/styled'
import { CalendarBox, EventBox, EventElements, EventTime, EventTitle, ButtonBox } from './styled'
import { Loader } from '../Common/Loader/Loader'
import { startAuth, quitAuth } from '../../store/actions/calendarAction'

export const Calendar: React.FC = () => {
  interface CalState {
    calendarReducer: { items: any[] }
  }

  const dispatch = useDispatch()
  function handleItemClick (name: string): void {
    if (name === 'sign-in') {
      dispatch(startAuth())
    } else if (name === 'sign-out') {
      dispatch(quitAuth())
    }
  }
  const events = useSelector((state: CalState) => state.calendarReducer?.items)
  let Events
  if (events !== undefined) {
    Events = events.sort((a, b) => +new Date(a.start.dateTime) - +new Date(b.start.dateTime)).map((a, id) => {
      return (
        <EventElements key={id}>
          <EventTime>{new Date(a.start.dateTime).getHours()}:{new Date(a.start.dateTime).getMinutes() === 0 ? ('00') : (new Date(a.start.dateTime).getMinutes())}</EventTime>
          <EventTitle>{a.summary}</EventTitle>
       </EventElements>)
    })
  }

  return (
    <CalendarBox>
     <ButtonBox>
      <Button onClick={() => { handleItemClick('sign-in') }}>
        Sign In
      </Button>
      <Button onClick={() => { handleItemClick('sign-out') }}>
        Sign Out
      </Button>
      </ButtonBox>
    {events !== undefined ? (<EventBox>{(Boolean(Events)) || (<Loader/>)}</EventBox>) : (null)}
    </CalendarBox>
  )
}
