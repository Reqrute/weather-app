import React from 'react'
import { Card } from './styled'
import { Header } from '../Header/index'
import { Calendar } from '../Calendar/index'
import { Forecast } from '../Forecast/index'

export const Container: React.FC = () => {
  return (
      <Card >
        <Header/>
        <Calendar/>
        <Forecast/>
      </Card>
  )
}
