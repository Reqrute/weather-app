import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Error, ErrorHandler } from '../components/Common/Error/Error'
import { Container } from '../components/Container/index.jsx'

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
          <Container/>
    </ErrorBoundary>
  )
}

export default App
