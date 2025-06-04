import React from 'react'                             // Importing the core React library
import ReactDOM from 'react-dom/client'               // Importing ReactDOM for rendering React components
import App from './App.jsx'                           // Importing the main App component
import 'bootstrap/dist/css/bootstrap.min.css'         // Importing Bootstrap's CSS for styling
import './index.css'                                  // Importing custom CSS styles

// Rendering the <App /> component inside the HTML element with the ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />                                           {/* Wrapping App in StrictMode to help catch bugs in development */}
  </React.StrictMode>,
)
