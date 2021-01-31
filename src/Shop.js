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
import './form-submission-handler';
function Shop() {
  return ( <div>
  
    <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Reports</h1>
                <p>Browse through to get the best deals fast.</p>
                
                </div>
                
            </div>
  
      <Router>
          <Switch>
          <Route path="/shop/AllCategories" exact component={Product1}/>
          <Route path="/shop/Chemicals&Materials" exact component={Product1}/>
          <Route path="/shop/ConsumerGoods" exact component={Product1}/>
          <Route path="/shop/Food&Bevarages" exact component={Product1}/>
          <Route path="/shop/HealthCare" exact component={Product1}/>
          <Route path="/shop/ICT" exact component={Product1}/>
          <Route path="/shop/BFS" exact component={Product1}/>
          <Route path="/shop/Automotive&Aerospace" exact component={Product1}/>
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    
    
   
  </div>);
}

export default Shop;
