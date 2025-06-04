import React from 'react'                           // Import React core library
import ReactDOM from 'react-dom/client'             // Import ReactDOM for rendering React components to the DOM
import App from './App.jsx'                          // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css'       // Import Bootstrap CSS globally
import './index.css'                                 // Import custom CSS file

// Create a React root and render the App component inside <React.StrictMode> for highlighting potential problems
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
