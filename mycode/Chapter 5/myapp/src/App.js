import React, { Component } from 'react'; // Import React and Component class
// import Products from './Products'; 
import JumboTronComponent from './JumboTronComponent'; // Importing the custom Jumbotron component
import SecretMessage from './test'; // Importing a component that likely displays a hidden or surprise message

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Products component is commented out, could be used later to display a product list */}
        <JumboTronComponent>
          {/* Passing children content to the JumboTronComponent */}
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </JumboTronComponent>
        
        {/* This component might display some hidden or dynamic content */}
        <SecretMessage />
      </div>
    );
  }
}

export default App; // Exporting the App component to be used elsewhere in the project
