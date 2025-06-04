import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';  // Import Bootstrap layout components
import Rating from './Rating'  // Import custom Rating component

const Product = (props) => {
  return (
    // Bootstrap Container with fixed width and margin on top
    <Container style={{ width: 500, marginTop: 5 }}>
      <Row>
        {/* Column for product image, auto-sized */}
        <Col xs="auto">
          <img 
            width={64} height={64} src={props.data.imageUrl}  // Display product image
            alt={props.data.productName} />                    // Use product name for alt text
        </Col>
        {/* Column for product details */}
        <Col>
          <div>{props.data.productName}</div>      {/* Display product name */}
          <div>{props.data.releasedDate}</div>     {/* Display release date */}
          {/* Render Rating component, passing rating and number of reviews */}
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews} />
          <p>{props.data.description}</p>           {/* Display product description */}
        </Col>
      </Row>
    </Container>
  )
}

export default Product;
