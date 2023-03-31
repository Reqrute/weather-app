import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ErrorBoundary } from 'react-error-boundary'
import { Error, ErrorHandler } from '@Common/Error/Error'
import GlobalStyles from '../globalStyles'
import { Container } from '@components/Container/index'
import {
  CloudsTheme,
  RainTheme,
  SunTheme,
  SnowTheme,
  ThunderstormTheme,
  MistTheme
} from '../theme'

const handleThemeChange = (selectedTheme: string): any => {
  switch (selectedTheme) {
    case 'Clouds':
      return CloudsTheme
    case 'Rain':
      return RainTheme
    case 'Clear':
      return SunTheme
    case 'Snow':
      return SnowTheme
    case 'Thunderstorm':
      return ThunderstormTheme
    default:
      return MistTheme
  }
}

export const App: React.FC = () => {
  interface RootState {
    forecastReducer: { list: any[] }
  }
  let weather: any[] | any = useSelector((state: RootState) => state?.forecastReducer?.list)
  if (weather !== undefined) weather = weather[0].weather[0].main
  return (
    <ThemeProvider
    theme={handleThemeChange(weather)}>
    <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
          <Container/>
    </ErrorBoundary>
    <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
