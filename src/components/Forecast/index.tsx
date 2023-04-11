import React, { useState } from 'react'
import { Button } from '@constants/style/styled'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '@store/actions/themeAction'
import { ForecastContainer, ButtonContainer } from './styled'
import { Daily } from './Daily/Daily'
import { Hourly } from './Hourly/Hourly'
import { type CurentTheme } from '@constants/types'

export const Forecast: React.FC = () => {
  const [show, setShow] = useState(false)
  const theme: string = useSelector((state: CurentTheme) => state?.themeReducer?.theme)
  const dispatch = useDispatch()
  function themeChange (): void {
    dispatch(changeTheme())
  }
  return (
    <>
    <ButtonContainer>
    <Button onClick={function (e) { e.preventDefault() }}>Local</Button>
    <Button onClick={function (e) { themeChange(); e.preventDefault() }}>{theme}</Button>
    <Button onClick={function (e) { setShow(false); e.preventDefault() }}>Daily</Button>
    <Button onClick={function (e) { setShow(true); e.preventDefault() }}>Hourly</Button>
    </ButtonContainer>
    <ForecastContainer>
    {show ? <Hourly/> : <Daily/>}
    </ForecastContainer>
    </>
  )
}
