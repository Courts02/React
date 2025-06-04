import React from 'react'                        // Importing the React library
import ReactDOM from 'react-dom/client'          // Importing the ReactDOM client API for rendering
import App from './App.jsx'                      // Importing the main App component
import './index.css'                             // Importing global CSS styles

// Rendering the App component inside the element with the ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />                                      {/* Wrapping App in StrictMode to highlight potential problems */}
  </React.StrictMode>,
)
