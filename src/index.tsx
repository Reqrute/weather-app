import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
import { Provider } from 'react-redux'
import { store } from './store/index'
declare global {
  interface Window {
    Cypress?: any
    store?: any
  }
}

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
)
if (window.Cypress !== undefined) {
  window.store = store
}
