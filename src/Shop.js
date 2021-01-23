import React, { useState, useEffect,useContext } from 'react';
import './App.css';
import './shop.css';
import './components/Landing/landing.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Products from "./components/Product1"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import Product1 from './components/Product1';
function Shop() {
  return ( <div>
  
    <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Library</h1>
                <p>Browse through to get the best deals fast.</p>
                
                </div>
                
            </div>
  
      <Router>
          <Switch>
          <Route path="/shop" exact component={Product1} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    
    
   
  </div>);
}

export default Shop;
