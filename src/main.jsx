import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import './Styles/cart.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className="wrapper">
        <App />
      </div>
  </React.StrictMode>,
)
