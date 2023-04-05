import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@constants/style/styled'
import { CalendarBox, EventBox, EventElements, EventTime, EventTitle, ButtonBox } from './styled'
import { type CalendarState } from './interface'
import { startAuth, quitAuth } from '@store/actions/calendarAction'

export const Calendar: React.FC = () => {
  const dispatch = useDispatch()

  function Authorize (): void {
    dispatch(startAuth())
  }
  function Quit (): void {
    dispatch(quitAuth())
  }
  const events = useSelector((state: CalendarState) => state.calendarReducer?.items)

  return (
    <CalendarBox>
     <ButtonBox>
      <Button onClick={function (e) { Authorize(); e.preventDefault() }}>
        Sign In
      </Button>
      <Button onClick={function (e) { Quit(); e.preventDefault() }}>
        Sign Out
      </Button>
      </ButtonBox>
    {events?.length !== 0 && events !== undefined
      ? (<EventBox>{events?.map((item, id) => {
          return (
        <EventElements key={id}>
          <EventTime>{item.time}</EventTime>
          <EventTitle>{item.title}</EventTitle>
       </EventElements>)
        })}</EventBox>)
      : ('Haven`t events')}
    </CalendarBox>
  )
}
