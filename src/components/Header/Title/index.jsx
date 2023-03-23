import React, { useEffect, useState } from 'react'

export const Title = () => {
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
    setInterval(() => new Date(), 1000)
    useDate(new Date())
  }, [])

  return (
    <div>
        <h1>{date.toLocaleString('en-US', first)}</h1>
        <h2>{date.toLocaleString('en-US', { weekday: 'long' })}, {date.toLocaleString('en-US', { day: 'numeric' })} {date.toLocaleString('en-US', second)}</h2>
    </div>
  )
}
