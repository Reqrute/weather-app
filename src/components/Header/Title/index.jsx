import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateForecast } from '../../../store/actions/forecastAction'
import { First, Second } from './styled'

export const Title = () => {
  const Cord = useSelector(state => state.positionReducer)
  const dispatch = useDispatch()
  const [date, useDate] = useState('')
  const first = {
    hour: 'numeric',
    minute: 'numeric'
  }

  const second = {
    year: 'numeric',
    month: 'long'
  }

  useEffect(() => {
    setInterval(() => useDate(new Date()), 1000)
    if (new Date().getHours() % 3 === 0 && new Date().getMinutes() === 0) dispatch(updateForecast(Cord.lat, Cord.lng))
  })

  return (
    <div>
        <First>{date.toLocaleString('en-US', first)}</First>
        <Second>{date.toLocaleString('en-US', { weekday: 'long' })}, {date.toLocaleString('en-US', { day: 'numeric' })} {date.toLocaleString('en-US', second)}</Second>
    </div>
  )
}
