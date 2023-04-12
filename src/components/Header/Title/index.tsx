import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '@Common/Loader/Loader'
import { updateForecast } from '@store/actions/forecastAction'
import { First, Second } from './styled'
import { useTranslation } from 'react-i18next'
import { type PositionState } from './interface'

export const Title: React.FC = () => {
  const { t } = useTranslation()
  const Cord = useSelector((state: PositionState) => state.positionReducer)
  const dispatch = useDispatch()
  const [date, useDate] = useState<string | undefined | Date | boolean>()

  useEffect(() => {
    setInterval(() => { useDate(new Date()) }, 1000)
    if (new Date().getHours() % 3 === 0 && new Date().getMinutes() === 0) dispatch(updateForecast(Cord.lat, Cord.lon))
  }, [])

  return (
    <div>
    {date !== undefined
      ? (<>
    <First>{t('time.Hours', { val: date })}</First>
    <Second>{t('time.DayWeek', { val: date })}, {t('time.DayNumber', { val: date })} {t('time.Rest', { val: date })}</Second>
    </>)
      : (<Loader/>)}
    </div>
  )
}
