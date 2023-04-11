import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import ErrorBoundary from '@Common/Error/Error'
import GlobalStyles from '../globalStyles'
import { Container } from '@components/Container/index'
import { type CurentWeather } from './interface'
import { type Loading, type CurentTheme } from '@constants/types'
import {
  CloudsTheme,
  RainTheme,
  SunTheme,
  SnowTheme,
  ThunderstormTheme,
  MistTheme,
  LightTheme,
  DarkTheme
} from '../theme'
import { Loader } from '@components/Common/Loader/Loader'

const weatherTheme = {
  Clouds: CloudsTheme,
  Rain: RainTheme,
  Clear: SunTheme,
  Snow: SnowTheme,
  Thunderstorm: ThunderstormTheme,
  Mist: MistTheme,
  Light: LightTheme,
  Dark: DarkTheme
}

export const App: React.FC = () => {
  const weather = useSelector((state: CurentWeather) => state?.forecastReducer?.curentWeather)
  const loading: boolean = useSelector((state: Loading) => state?.forecastReducer?.Load)
  const theme: string = useSelector((state: CurentTheme) => state?.themeReducer?.theme)
  return (
    <>
    { !loading
      ? (<ThemeProvider theme={weatherTheme[theme]}>
    <ErrorBoundary>
          <Container/>
    </ErrorBoundary>
    <GlobalStyles theme={weatherTheme[weather]}/>
    </ThemeProvider>)
      : (<Loader/>)}
    </>

  )
}

export default App
