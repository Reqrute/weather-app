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
    <Button onClick={function (e) { setShow(false); e.preventDefault() }}>Daily</Button>
    <Button onClick={function (e) { setShow(true); e.preventDefault() }}>Hourly</Button>
    </ButtonContainer>
    <ForecastContainer>
    {show ? <Hourly/> : <Daily/>}
    </ForecastContainer>
    </>
  )
}
