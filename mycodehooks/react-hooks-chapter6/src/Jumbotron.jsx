import React from 'react'
import { Card, Button } from 'react-bootstrap'  // Import Bootstrap Card and Button components

function Jumbotron(props) {
  // Check if this component received any children elements
  const hasChildren = React.Children.count(props.children) > 0;

  return (
    <div>
      <Card style={{ margin: 10 }}>
        <Card.Body>
          {/* Title of the Jumbotron */}
          <h1>Hello, world!</h1>
          
          {/* Conditionally render content:
              - If children passed, show them inside a <p>
              - Otherwise show default descriptive text */}
          {(hasChildren)
            ? <p>{props.children}</p>
            : <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>}
          
          {/* Primary button with label 'Learn more' */}
          <p><Button variant="primary">Learn more</Button></p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Jumbotron
