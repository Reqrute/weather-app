import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '@Common/Loader/Loader'
import { updateForecast } from '@store/actions/forecastAction'
import { First, Second } from './styled'
import { type PositionState } from './interface'

export const Title: React.FC = () => {
  const Cord = useSelector((state: PositionState) => state.positionReducer)
  const dispatch = useDispatch()
  const [date, useDate] = useState<string | undefined | Date | boolean>()
  const first: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric'
  }

  const second: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long'
  }

  useEffect(() => {
    setInterval(() => { useDate(new Date()) }, 1000)
    if (new Date().getHours() % 3 === 0 && new Date().getMinutes() === 0) dispatch(updateForecast(Cord.lat, Cord.lon))
  })

  return (
    <div>
    {date !== undefined
      ? (<>
    <First>{date.toLocaleString('en-US', first)}</First>
    <Second>{date.toLocaleString('en-US', { weekday: 'long' })}, {date.toLocaleString('en-US', { day: 'numeric' })} {date.toLocaleString('en-US', second)}</Second>
    </>)
      : (<Loader/>)}
    </div>
  )
}
