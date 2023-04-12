import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
import { Provider } from 'react-redux'
import { store } from './store/index'
import './i18n'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
)
