import React from 'react'                  // Importing the React library
import Products from './Products'         // Importing the Products component
import Rating from './Rating'             // Importing the Rating component
import { Button } from 'react-bootstrap'  // Importing the Button component from react-bootstrap

// Function to format and return a user's full name
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  const isValid = true  // Boolean flag, could be used to conditionally render content

  return (
    <div>
      {/* Rendering the Rating component with different rating values */}
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
    </div>
  )
}

export default App  // Exporting the App component so it can be used elsewhere in the project
