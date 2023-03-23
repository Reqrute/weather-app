import React, { useEffect, useState } from 'react'

export const Title = () => {
  const [date, useDate] = useState('')

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }

  useEffect(() => {
    setInterval(() => new Date(), 1000)
    useDate(new Date())
  }, [])

  return (
        <h1>{date.toLocaleString('en-US', options)}</h1>
  )
}
