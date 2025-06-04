import React from 'react'  // Importing the React library

function Products() {
  // Array of product titles
  const products = ["Learning React", "Pro React", "Beginning React"]

  // Using the map function to create an array of <li> elements from the products array
  const listProducts = products.map((product) => 
    <li key={product.toString()}>{product}</li>  // Each <li> gets a unique key (required by React)
  )

  return (
    <div>
      {/* Displaying the list of products in an unordered list */}
      <ul>{listProducts}</ul>
    </div>
  )
}

export default Products  // Exporting the Products component so it can be used in other files
