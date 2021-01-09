import React, { useState, useEffect,useContext } from 'react';
import './App.css';
import './shop.css';
import {cartContext} from "./Global/cartContext.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
function Shop() {
  return (
    <div>
    
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
          <Switch>
          <Route path="/shop" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
    
  );
}

export default Shop;
