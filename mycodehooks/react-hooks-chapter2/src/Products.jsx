import React from 'react'  // Importing the React library

function Products() {
  // An array of product names
  const products = ["PC", "Play Sation", "Xbox"]

  // Mapping over the products array to create a list of <li> elements
  const listProducts = products.map((product) => 
    <li key={product.toString()}>{product}</li>  // Each list item needs a unique "key" prop
  )

  return (
    <div>
      <ul>{listProducts}</ul>  {/* Rendering the list of product items */}
    </div>
  )
}

export default Products  // Exporting the Products component so it can be used in other files
