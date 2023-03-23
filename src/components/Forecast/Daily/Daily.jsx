import React, { useEffect, useState } from 'react'
import { DailyElement, FirstDailyElement } from './styled'

export const Daily = () => {
  const [dayli, setDayli] = useState([])
  let arr = []
  let lat, lon
  const APIkey = '1812e7ea1446508957bd2700fd80bbaa'

  function getLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }
  function showPosition (position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
  }
  getLocation()

  useEffect(() => {
    (async function () {
      const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`
      const data = await fetch(API).then((res) => res.json())
      setDayli(data.list)
    })()
  }, [lat, lon])

  let DailyElemens

  arr = dayli?.filter(a => a.dt_txt.split(' ')[1] === '12:00:00' && a.dt_txt.split(' ')[0] !== dayli[0].dt_txt.split(' ')[0])
  arr?.unshift(dayli[0])

  if (arr) {
    DailyElemens = arr.map((a, id) => {
      if (id === 0) {
        return (
            <FirstDailyElement key={id}>
            {a?.main.temp} {a?.weather[0].main}
            Today
           </FirstDailyElement>)
      }
      return (
        <DailyElement key={id}>
         {a.main.temp} {a.weather[0].main}
       </DailyElement>)
    })
  }

  return (
    <>
         {DailyElemens}
    </>
  )
}
