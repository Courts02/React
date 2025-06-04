import React from 'react'                              // Import React library
import { Container, Row, Col } from 'react-bootstrap' // Import layout components from react-bootstrap
import Rating from './Rating'                          // Import custom Rating component

const Product = (props) => {
  return (
    // Bootstrap container with fixed width and margin top for spacing
    <Container style={{ width: 500, marginTop: 5 }}>
      <Row>
        <Col xs="auto"> 
          {/* Product image with fixed width and height, alt text for accessibility */}
          <img 
            width={64} height={64} src={props.data.imageUrl}
            alt={props.data.productName} />
        </Col>
        <Col>
          {/* Product name */}
          <div>{props.data.productName}</div>
          {/* Product release date */}
          <div>{props.data.releasedDate}</div>
          {/* Rating component showing the product rating and number of reviews */}
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews} />
          {/* Product description */}
          <p>{props.data.description}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Product;  // Exporting Product component for use in other files
