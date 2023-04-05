/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'
import { useSelector } from 'react-redux'
import { DailyElement, FirstDailyBox, FirstDailyText, FirstDailyWearherPicture } from './styled'
import { Loader } from '@Common/Loader/Loader'
import { WearherPicture } from '@constants/style/styled'
import { type DailyListState } from './interface'

export const Daily: React.FC = () => {
  const daily = useSelector((state: DailyListState) => state.forecastReducer?.dailyList)

  return (
    <>
        {(daily !== undefined)
          ? (daily.map((item, id) => {
              if (id === 0) {
                return (
            <FirstDailyBox key={id}>
            <FirstDailyWearherPicture alt={`${item.weather}picture`} src = {`https://openweathermap.org/img/wn/${item.icon}@2x.png`} />
            <FirstDailyText>Today {item.temperature}°</FirstDailyText>
           </FirstDailyBox>)
              }
              return (
        <DailyElement key={id}>
         {item.day}
         <WearherPicture alt={`${item.weather}picture`} src = {`https://openweathermap.org/img/wn/${item.icon}@2x.png`} />
         {item.temperature}°
       </DailyElement>)
            }))
          : (<Loader/>)}
    </>
  )
}
