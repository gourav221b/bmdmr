import React, {useContext} from "react";
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import {cartContext} from '../Global/cartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import document from "../assets/Untitled.png"
import document2 from "../assets/Untitled2.png"
toast.configure();
const Cart = (props) => {
 
    const {shoppingCart, totalPrice,qty,dispatch} = useContext(cartContext);
        //  console.log("total qty: ",qty);
        console.log("cart.jsx");
        console.log(shoppingCart.length);

    const handleToken = async (token) => {

        const product = {name: 'All Products', price: totalPrice}
          const response = await axios.post('https://w7gqb.sse.codesandbox.io/checkout', {
              token,
              product
          });
          const {status} = response.data;
          if(status === 'success'){
             
              dispatch({type: 'EMPTY'});
              props.history.push(`/`)
              toast.success("You have paid successfully now you can continue your shopping!", {
                position: toast.POSITION.TOP_RIGHT
              });

          } else {
           
          }

    }
   var shoppingcart=[
    {id: 1, name: ' Chemicals & Materials', price: 40, image: document, productStatus: 'Consumer Goods',qty:1},
    {id: 2, name: 'Consumer Goods', price: 200, image: document2,productStatus: 'Chemicals & Materials',qty:1},
    {id: 3, name: 'Consumer Goods', price: 300, image: document,productStatus: 'Chemicals & Materials',qty:1},
    {id: 4, name: 'Food & Beverages', price: 150, image: document2,productStatus: 'Chemicals & Materials',qty:1},
    {id: 5, name: 'HealthCare', price: 160, image: document,productStatus: 'Consumer Goods',qty:1},
    {id: 6, name: 'Food & Beverages', price: 500, image: document2,productStatus: 'Chemicals & Materials',qty:1},
   ]
    return(
       <div className="cartContainer">
       <div className="cartDetails">
           {shoppingCart.length ? shoppingCart.map(product => (
       <div className="cart" key={product.id}>
        <span className="cartProImage"><img src={product.image} alt=""/>
           <span className="imageCount">{product.qty}</span>
        </span>
        <span className="cartProductName">{product.name}</span>
        <span className="cartProductPrice">${product.price}.00</span>
        {/* <span className="inc" onClick={() => dispatch({type: 'INC', id:product.id})}><i className="fas fa-plus"></i></span>
        <span className="productQuantity">{product.qty}</span>
        <span className="dec" onClick={() => dispatch({type: 'DEC', id: product.id})}><i className="fas fa-minus"></i></span>
        <span className="productTotalPrice">${product.qty * product.price}.00</span> */}
        <button onClick={() => dispatch({type: 'DELETE_PRODUCT', id: product.id})} className="deleteCartPro"><i className="fa fa-trash"></i></button>
           </div>  
        )) :<div> Your Cart is currently empty! Return to shop to buy something <br/><br/></div>}
        
        </div>
        {shoppingCart.length ? <div className="cartSummary">
            <div className="summary">
                <h3>Order Summary</h3>
                <div className="totalItems">
                    <div className="items">Total Items</div>
               <div className="itemsCount">{qty}.00</div>
                </div>
                <div className="totalPriceSection">
                 <div className="justTitle">Total Price</div>
        <div className="itemsPrice">${totalPrice}.00</div>
                </div>
       <div className="stripSection">
       <StripeCheckout
       stripeKey="pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg"
       token={handleToken}
       billingAddress
       shippingAddress
       amount = {totalPrice * 100}
       name="all products in the cart"
       />
       </div>
       </div></div>
        : ''}
  
       
       
</div>
    )
}

export default Cart;