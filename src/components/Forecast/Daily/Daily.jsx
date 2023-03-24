import React from 'react'
import { useSelector } from 'react-redux'
import { DailyElement, FirstDailyElement } from './styled'

export const Daily = () => {
  let arr = []
  const daily = useSelector(state => state.forecastReducer?.list)
  console.log(daily)
  let DailyElemens

  arr = daily?.filter(a => a.dt_txt.split(' ')[1] === '12:00:00' && a.dt_txt.split(' ')[0] !== daily[0].dt_txt.split(' ')[0])
  arr?.unshift(daily[0])
  if (arr) {
    DailyElemens = arr.map((a, id) => {
      if (id === 0) {
        return (
            <FirstDailyElement key={id}>
            {Math.round(a.main.temp - 273.15) } {a?.weather[0].main}
            Today
           </FirstDailyElement>)
      }
      return (
        <DailyElement key={id}>
         {new Date(a.dt_txt).toLocaleString('en-US', { weekday: 'long' })} <div></div>{ Math.round(a.main.temp - 273.15) } {a.weather[0].main}
       </DailyElement>)
    })
  }

  return (
    <>
         {DailyElemens}
    </>
  )
}
