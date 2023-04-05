import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import ErrorBoundary from '@Common/Error/Error'
import GlobalStyles from '../globalStyles'
import { Container } from '@components/Container/index'
import { type CurentWeather } from './interface'
import {
  CloudsTheme,
  RainTheme,
  SunTheme,
  SnowTheme,
  ThunderstormTheme,
  MistTheme
} from '../theme'
import { Loader } from '@components/Common/Loader/Loader'

const weatherTheme = {
  Clouds: CloudsTheme,
  Rain: RainTheme,
  Clear: SunTheme,
  Snow: SnowTheme,
  Thunderstorm: ThunderstormTheme,
  Mist: MistTheme
}

export const App: React.FC = () => {
  const weather = useSelector((state: CurentWeather) => state?.forecastReducer?.curentWeather)

  return (
    <>
    {weather !== undefined
      ? (<ThemeProvider
    theme={weatherTheme[weather]}>
    <ErrorBoundary>
          <Container/>
    </ErrorBoundary>
    <GlobalStyles />
    </ThemeProvider>)
      : (<Loader/>)}
    </>

  )
}

export default App
