import React from 'react'
import { useSelector } from 'react-redux'
import { DailyElement, FirstDailyBox, FirstDailyText, FirstDailyWearherPicture } from './styled'
import { Loader } from '../../Common/Loader/Loader'
import { WearherPicture } from '../../../constants/style/styled'
import Clouds from '../../../assets/image/Clouds.png'
import Rain from '../../../assets/image/Rain.png'
import Sun from '../../../assets/image/Sun.png'
import Snow from '../../../assets/image/Snow.png'
import Thunderstorm from '../../../assets/image/Thunderstorm.png'
import Mist from '../../../assets/image/Mist.png'

export const Daily = () => {
  let arr = []

  const handlePictureChange = selectedPicture => {
    switch (selectedPicture) {
      case 'Clouds':
        return Clouds
      case 'Rain':
        return Rain
      case 'Clear':
        return Sun
      case 'Snow':
        return Snow
      case 'Thunderstorm':
        return Thunderstorm
      default:
        return Mist
    }
  }

  const daily = useSelector(state => state.forecastReducer?.list)
  let DailyElemens

  arr = daily?.filter(a => a.dt_txt.split(' ')[1] === '12:00:00' && a.dt_txt.split(' ')[0] !== daily[0].dt_txt.split(' ')[0])
  arr?.unshift(daily[0])
  if (arr) {
    DailyElemens = arr.map((a, id) => {
      if (id === 0) {
        return (
            <FirstDailyBox key={id}>
            <FirstDailyWearherPicture alt={`${a?.weather[0].main}picture`} src = { handlePictureChange(a?.weather[0].main) } />
            <FirstDailyText>Today {Math.round(a.main.temp - 273.15)}°</FirstDailyText>
           </FirstDailyBox>)
      }
      return (
        <DailyElement key={id}>
         {new Date(a.dt_txt).toLocaleString('en-US', { weekday: 'long' })}
         <WearherPicture alt={`${a?.weather[0].main}picture`} src = { handlePictureChange(a?.weather[0].main) } />
         { Math.round(a.main.temp - 273.15)}°
       </DailyElement>)
    })
  }

  return (
    <>
        {daily ? (DailyElemens) : (<Loader/>)}
    </>
  )
}
