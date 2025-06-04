import React from 'react'                             // Import the core React library
import ReactDOM from 'react-dom/client'               // Import the ReactDOM client for rendering the app
import App from './App.jsx'                           // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css'         // Import Bootstrap CSS for styling
import './index.css'                                  // Import your custom global CSS styles

// Render the <App /> component inside the HTML element with id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />                                           {/* Wrap in StrictMode to highlight potential problems during development */}
  </React.StrictMode>,
)
