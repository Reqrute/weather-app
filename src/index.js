import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import { Provider } from 'react-redux'
import GlobalStyles from './globalStyles'
import { ThemeProvider } from 'styled-components'
import { store } from './store/index.js'
import {
  dayTheme,
  daySTheme
} from './theme.js'

const handleThemeChange = selectedTheme => {
  switch (selectedTheme) {
    case 'day':
      return dayTheme
    case 'rain':
      return daySTheme
    default:
      return dayTheme
  }
}

ReactDOM.render(
  <ThemeProvider
          theme={handleThemeChange(dayTheme)}>
  <Provider store = {store}>
    <App />
    <GlobalStyles />
  </Provider>
</ThemeProvider>,
  document.getElementById('root')
)
