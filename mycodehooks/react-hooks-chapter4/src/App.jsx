import React from 'react'                  // Importing the React library
import Products from './Products'         // Importing the Products component
import Rating from './Rating'             // Importing the Rating component
import { Button } from 'react-bootstrap'  // Importing the Button component from react-bootstrap

// Function to format a user's full name from an object
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  const isValid = true  // A sample boolean variable that could be used for conditional rendering

  return (
    <div>
      {/* Rendering the Products component */}
      <Products />
    </div>
  )
}

export default App  // Exporting the App component so it can be imported and used elsewhere
