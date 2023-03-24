import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { onAsyncIncrement, onDecrement } from '../../store/actions/countAction'
import { Button } from '../../constants/style/styled'
import { ForecastContainer, ButtonContainer } from './styled'
import { Daily } from './Daily/Daily'

export const Forecast = () => {
  return (
    <>
    <ButtonContainer>

    <Button>Daily</Button>
    <Button>Hourly</Button>
    </ButtonContainer>
    <ForecastContainer>
    <Daily/>
    </ForecastContainer>
    </>
  )
}
