import React from 'react'
import ReactDOM from 'react-dom/client'

// redux
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

// component
import App from './App.jsx'

// css
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
