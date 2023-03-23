import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ErrorBoundary } from 'react-error-boundary'
import { Error, ErrorHandler } from '../components/Common/Error/Error'
import { Container } from '../components/Container/index.jsx'

import {
  dayTheme
} from '../theme.js'

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
        <ThemeProvider
          theme={dayTheme}>
          <Container/>
        </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
