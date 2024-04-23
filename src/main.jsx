import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from './Products.jsx'

import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </Router>
    {/* <App /> */}

  </React.StrictMode>,
)
