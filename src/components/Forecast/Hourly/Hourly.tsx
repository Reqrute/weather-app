import React from 'react'
import { useSelector } from 'react-redux'
import { DailyElement } from './styled'
import { WearherPicture } from '../../../constants/style/styled'
import { Loader } from '../../Common/Loader/Loader'
import Clouds from '../../../assets/image/Clouds.png'
import Rain from '../../../assets/image/Rain.png'
import Sun from '../../../assets/image/Sun.png'
import Snow from '../../../assets/image/Snow.png'
import Thunderstorm from '../../../assets/image/Thunderstorm.png'
import Mist from '../../../assets/image/Mist.png'

export const Hourly: React.FC = () => {
  interface RootState {
    forecastReducer: { list: any[] }
  }
  let arr: object[] | undefined = []

  const handlePictureChange = (selectedPicture: string): any => {
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

  const daily = useSelector((state: RootState) => state.forecastReducer?.list)
  let DailyElemens: any

  arr = daily?.filter(a => a.dt_txt.split(' ')[0] === daily[0].dt_txt.split(' ')[0])
  if (arr !== undefined) {
    DailyElemens = arr.map((a: { weather: [{ main: string }], main: { temp: number }, dt_txt: string }, id) => {
      return (
        <DailyElement key={id}>
         {a.dt_txt.split(' ')[1]}
         <WearherPicture alt={`${a?.weather[0].main}picture`} src = { handlePictureChange(a?.weather[0].main) } />
         { Math.round(a.main.temp - 273.15)}°
       </DailyElement>)
    })
  }

  return (
    <>
         {daily !== undefined ? (DailyElemens) : (<Loader/>)}
    </>
  )
}
