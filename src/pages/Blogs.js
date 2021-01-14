import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Landing/landing.css';
import '../components/blogs/blog.css';
import '../components/blogs/bcard';
import Bcard from '../components/blogs/bcard';
import Blog1 from '../components/blogs/blogpages/Blog1';
import Blog2 from '../components/blogs/blogpages/Blog2';
function Blogs() {
   





    return (
        <>
        <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Blogs</h1>
                <p>Knowledge is the power that will set you above your competition</p>              
                </div>                
            </div>
            <div className="row cards-wrapper">     
            <Bcard/>          
           </div>
           <Router>
          <Switch>
          <Route path="/blog1" exact component={Blog1} />
          <Route path="/blog2" exact component={Blog2} />
        </Switch>
      </Router>
         
        </>
    )
}

export default Blogs
