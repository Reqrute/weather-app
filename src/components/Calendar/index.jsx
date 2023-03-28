// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../constants/style/styled'
import { CalendarBox, EventBox, EventElements, EventTime, EventTitle, ButtonBox } from './styled'
import { startAuth, quitAuth } from '../../store/actions/calendarAction'

export const Calendar = () => {
  const dispatch = useDispatch()
  function handleItemClick (name) {
    if (name === 'sign-in') {
      dispatch(startAuth())
    } else if (name === 'sign-out') {
      dispatch(quitAuth())
    }
  }
  const events = useSelector(state => state.calendarReducer?.items)
  let Events
  if (events) {
    Events = events.sort((a, b) => new Date(a.start.dateTime) - new Date(b.start.dateTime)).map((a, id) => {
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
      <Button onClick={() => handleItemClick('sign-in')}>
        Sign In
      </Button>
      <Button onClick={() => handleItemClick('sign-out')}>
        Sign Out
      </Button>
      </ButtonBox>
    {events ? (<EventBox>{Events}</EventBox>) : (null)}
    </CalendarBox>
  )
}
