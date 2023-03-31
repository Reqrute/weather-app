import React, { useState } from 'react'
import { Button } from '@constants/style/styled'
import { ForecastContainer, ButtonContainer } from './styled'
import { Daily } from './Daily/Daily'
import { Hourly } from './Hourly/Hourly'

export const Forecast: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <ButtonContainer>
    <Button onClick={() => { setShow(false) }}>Daily</Button>
    <Button onClick={() => { setShow(true) }}>Hourly</Button>
    </ButtonContainer>
    <ForecastContainer>
    {show ? <Hourly/> : <Daily/>}
    </ForecastContainer>
    </>
  )
}
