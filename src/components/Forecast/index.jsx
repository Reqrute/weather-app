import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAsyncIncrement, onDecrement } from '../../store/actions'
import { Button } from '../../constants/style/styled'
import { ForecastContainer, ButtonContainer } from './styled'
import { Daily } from './Daily/Daily'

export const Forecast = () => {
  const count = useSelector(state => state.countReducer?.count)
  const dispatch = useDispatch()
  return (
    <>
    <ButtonContainer>
    <Button onClick={() => dispatch(onAsyncIncrement())}>+</Button>
    <Button onClick={() => dispatch(onDecrement())}>-</Button>
    <Button>{count}Daily</Button>
    <Button>Hourly</Button>
    </ButtonContainer>
    <ForecastContainer>
    <Daily/>
    </ForecastContainer>
    </>
  )
}
