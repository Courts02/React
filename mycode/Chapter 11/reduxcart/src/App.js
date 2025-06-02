import { connect } from "react-redux";
import Cart from "./Cart";

// Maps the Redux state to props that the Cart component can use
function mapStateToProps(state) {
  return {
    totalCost: state.totalCost,        // passes totalCost from the store to the component
    productCart: state.productCart     // passes the array of products in the cart
  };
}

// Maps dispatch actions to props so the Cart component can call them
function mapDispatchToProps(dispatch) {
  return {
    // This function dispatches an action to add a product to the cart
    onAddProduct: (productName, productPrice) =>
      dispatch({
        type: "addProduct",            // action type the reducer will handle
        productData: {
          productName: productName,    // product name to add
          productPrice: productPrice   // product price to add
        }
      }),
    
    // This function dispatches an action to delete a product from the cart
    onDeleteProduct: (productData) =>
      dispatch({
        type: "deleteProduct",         // action type the reducer will handle
        productData: productData       // product info to remove
      })
  };
}

// Connects the Cart component to the Redux store
// Provides it access to state (via mapStateToProps)
// and dispatch functions (via mapDispatchToProps)
let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default connectedComponent;
