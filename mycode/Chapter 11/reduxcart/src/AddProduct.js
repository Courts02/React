import React, { Component } from 'react';

class AddProduct extends Component {
    // Initial component state with productName as an empty string
    // and productPrice initialized to 0
    state = {
        productName: '',
        productPrice: 0
    }

    // Handler function that updates state when product name input changes
    // `event.target.value` gets the new value typed into the input field
    productNameChangedHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    // Handler function that updates state when product price input changes
    productPriceChangedHandler = (event) => {
        this.setState({ productPrice: event.target.value });
    }

    render() {
        return (
            <div className='container'>
                <input
                    type="text"
                    placeholder="Product Name"
                    // This calls the productNameChangedHandler every time the input changes
                    onChange={this.productNameChangedHandler}
                    // Binds the input value to state for controlled input behavior
                    value={this.state.productName}
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    // This calls the productPriceChangedHandler on input change
                    onChange={this.productPriceChangedHandler}
                    // Binds the input value to state
                    value={this.state.productPrice}
                />
                <button className="buttons"
                    // When button is clicked, calls the addProduct function passed in via props
                    // Passes current state values (productName and productPrice) as arguments
                    onClick={() => {
                        this.props.addProduct(this.state.productName, this.state.productPrice);
                    }}>
                    Add Product
                </button>
            </div>
        );
    }
}

export default AddProduct;
