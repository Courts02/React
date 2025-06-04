import React from 'react'              // Importing the React library
import Products from './Products'     // Importing the Products component from a local file

// Function to format a user's full name
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  // Defining a user object with first name, last name, and an image URL
  const user = {
    firstName: 'Greg',
    lastName: 'Tan',
    imageUrl:'https://picsum.photos/200/300'  // Random image placeholder
  }

  return (
    // JSX returned by the App component
    <div>
      <Products />  {/* Rendering the Products component */}
    </div>
  )
}

export default App  // Exporting the App component as the default export
