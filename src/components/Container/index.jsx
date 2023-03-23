import React from 'react'
import { Card } from './styled.js'
import { Header } from '../Header/index.jsx'
import { Calendar } from '../Calendar/index.jsx'
import { Forecast } from '../Forecast/index.jsx'

export const Container = () => {
  return (
      <Card >
        <Header/>
        <Calendar/>
        <Forecast/>
      </Card>
  )
}
