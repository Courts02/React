import React, { Component } from 'react';
import AddProduct from './AddProduct';
import { Table } from 'reactstrap';

class Cart extends Component {
    render() {
        return (
            <div className="container">
                {/* Passes the add product function as a prop to the AddProduct component */}
                <AddProduct addProduct={this.props.onAddProduct} />

                {/* Displays the product list using a table from Reactstrap */}
                <Table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th> {/* Column for remove action */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Loops through all products in the cart and displays each one */}
                        {this.props.productCart.map(productData => (
                            <tr key={productData.productName}>
                                <td>{productData.productName}</td>
                                <td>{productData.productPrice}</td>
                                {/* Calls the delete function with the current product when clicked */}
                                <td onClick={() =>
                                    this.props.onDeleteProduct(productData)}>Remove</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Displays the total cost of all items in the cart */}
                <span>Total Amount: {this.props.totalCost}</span>
            </div>
        );
    }
}

export default Cart;
