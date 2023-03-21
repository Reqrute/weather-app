import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from '../components/Container/index.tsx'

import {
  dayTheme
} from '../theme.js'

export const App = () => {
  return (
        <ThemeProvider
          theme={dayTheme}>
          <Container/>
        </ThemeProvider>
  )
}

export default App
