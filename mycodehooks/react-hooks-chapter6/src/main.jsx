import React from 'react'
import ReactDOM from 'react-dom/client'  // Import ReactDOM client API for rendering
import App from './App.jsx'               // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css'  // Import Bootstrap CSS globally
import './index.css'                      // Import custom styles

// Create root React node and render the App inside React.StrictMode for highlighting potential problems
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
