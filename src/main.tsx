import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { store } from './app/store'
import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
