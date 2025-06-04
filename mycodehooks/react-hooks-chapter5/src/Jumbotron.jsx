import React from 'react'
import { Card, Button } from 'react-bootstrap'  // Import Card and Button components from react-bootstrap

function Jumbotron(props) {
  // Check if this component received any children from its parent
  const hasChildren = React.Children.count(props.children) > 0;

  return (
    <div>
      <Card style={{ margin: 10 }}>
        <Card.Body>
          {/* Static heading */}
          <h1>Hello, world!</h1>

          {/* 
            If there are children passed to this component, render them inside a <p> tag,
            otherwise show a default message.
          */}
          {(hasChildren)
            ? <p>{props.children}</p>
            : <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>}
          
          {/* Primary Bootstrap button */}
          <p><Button variant="primary">Learn more</Button></p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Jumbotron  // Export the component for use in other files
