import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import { Provider } from 'react-redux'
import GlobalStyles from './globalStyles'
import { store } from './store/index.js'

ReactDOM.render(
  <Provider store = {store}>
    <App />
    <GlobalStyles />
  </Provider>,
  document.getElementById('root')
)
