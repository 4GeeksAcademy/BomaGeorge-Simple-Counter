import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap"

import "@fortawesome/fontawesome-free/css/all.min.css";


import '../styles/index.css'

// components
import Home from "./components/Home.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)


