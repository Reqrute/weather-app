import React, { useState } from 'react'
import { Button } from '@constants/style/styled'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '@store/actions/themeAction'
import { ForecastContainer, ButtonContainer } from './styled'
import { Daily } from './Daily/Daily'
import { Hourly } from './Hourly/Hourly'
import { useTranslation } from 'react-i18next'
import { type CurentTheme } from '@constants/types'

export const Forecast: React.FC = () => {
  const [language, setLanguage] = useState('ru')
  const [show, setShow] = useState(false)
  const { i18n, t } = useTranslation()
  const theme: string = useSelector((state: CurentTheme) => state?.themeReducer?.theme)
  const dispatch = useDispatch()
  function themeChange (): void {
    dispatch(changeTheme())
  }
  function changeLanguage (): void {
    language === 'ru' ? setLanguage('en') : setLanguage('ru')
    void i18n.changeLanguage(language)
  }
  return (
    <>
    <ButtonContainer>
    <Button onClick={function (e) { changeLanguage(); e.preventDefault() }}> {t('buttons.Local')}</Button>
    <Button onClick={function (e) { themeChange(); e.preventDefault() }}>{t(`buttons.${theme}`)}</Button>
    <Button onClick={function (e) { setShow(false); e.preventDefault() }}>{t('buttons.Daily')}</Button>
    <Button onClick={function (e) { setShow(true); e.preventDefault() }}>{t('buttons.Hourly')}</Button>
    </ButtonContainer>
    <ForecastContainer>
    {show ? <Hourly/> : <Daily/>}
    </ForecastContainer>
    </>
  )
}
