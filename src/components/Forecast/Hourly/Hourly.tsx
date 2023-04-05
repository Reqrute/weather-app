/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'
import { useSelector } from 'react-redux'
import { DailyElement } from './styled'
import { WearherPicture } from '@constants/style/styled'
import { Loader } from '@Common/Loader/Loader'
import { type HourlyListState } from './interface'

export const Hourly: React.FC = () => {
  const daily = useSelector((state: HourlyListState) => state.forecastReducer?.hourlyList)
  return (
    <>
         {daily !== undefined
           ? (daily.map((item, id) => {
               return (
        <DailyElement key={id}>
         {item.time}
         <WearherPicture alt={`${item.weather}picture`} src = {`https://openweathermap.org/img/wn/${item.icon}@2x.png`} />
         {item.temperature}°
       </DailyElement>)
             }))
           : (<Loader/>)}
    </>
  )
}
