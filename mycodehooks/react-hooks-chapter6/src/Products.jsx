import React from 'react'
import Product from './Product'

// This function returns a hardcoded list of products
const getProducts = () => {
  return [
    {
      imageUrl: "http://loremflickr.com/150/150?random=1",
      productName: "Product 1",
      releasedDate: "May 31, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 4,
      numOfReviews: 2
    },
    {
      imageUrl: "http://loremflickr.com/150/150?random=2",
      productName: "Product 2",
      releasedDate: "October 31, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 2,
      numOfReviews: 12
    },
    {
      imageUrl: "http://loremflickr.com/150/150?random=3",
      productName: "Product 3",
      releasedDate: "July 30, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 5,
      numOfReviews: 2
    }]
}

function Products() {
  // Currently, this is set to an empty array, so no products will be displayed
  const products = []

  // Map each product to a Product component, providing a unique key
  const listProducts = products.map((product) =>
    <Product key={product.productName} data={product} />
  )

  return (
    <div>
      {/* Conditionally render product list or a message if empty */}
      {listProducts.length > 0 && 
        <ul>{listProducts}</ul>     
      }
      {listProducts.length == 0 && 
        <ul>No Products to display</ul>     
      }        
    </div>
  )
}

export default Products
