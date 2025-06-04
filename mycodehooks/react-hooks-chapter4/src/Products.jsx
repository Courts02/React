import React from 'react'
import Product from './Product'  // Importing the Product component

// Function that returns a hardcoded array of product objects
const getProducts = () => {
  return [
    {
      imageUrl: "http://loremflickr.com/150/150?random=1",
      productName: "Product 1",
      releasedDate: "May 31, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
      rating: 4,
      numOfReviews: 2
    },
    {
      imageUrl: "http://loremflickr.com/150/150?random=2",
      productName: "Product 2",
      releasedDate: "October 31, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
      rating: 2,
      numOfReviews: 12
    },
    {
      imageUrl: "http://loremflickr.com/150/150?random=3",
      productName: "Product 3",
      releasedDate: "July 30, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
      rating: 5,
      numOfReviews: 2
    }
  ]
}

function Products() {
  // Retrieve the products list from getProducts
  const products = getProducts()

  // Map over products array and create Product components for each,
  // using productName as the unique key and passing product data as props
  const listProducts = products.map((product) =>
    <Product key={product.productName} data={product} />
  )

  return (
    <div>
      {/* Render the list of Product components inside a <ul> */}
      <ul>{listProducts}</ul>
    </div>
  )
}

export default Products  // Export Products component for use elsewhere
