import React from 'react'         // Import React library
import Jumbotron from './Jumbotron';  // Import the Jumbotron component

function App() {
  return (
    <div>
      {/* Render Jumbotron with no children */}
      <Jumbotron />

      {/* Render Jumbotron with children content passed between opening and closing tags */}
      <Jumbotron>
        This is a long sentence, and I want to insert content into the jumbotron component from the outside.
      </Jumbotron>
    </div>
  )
}

export default App  // Export App component for use elsewhere
