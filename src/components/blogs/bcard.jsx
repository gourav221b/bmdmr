import React from 'react'
import {Link} from "react-router-dom"
import { productContext } from '../../Global/productContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './blog.css'
import bloglist from './blog.json'
import Blog1 from './blogpages/Blog1';
import Blog2 from './blogpages/Blog2';


function Bcard() {
    const blogcard=document.querySelectorAll('.blogcard')
    blogcard.forEach(function(link) {
        link.addEventListener("click", function() {
         
            window.scrollTo(0, 0);
        });
    });

    return (
        <>
       {bloglist.length ? bloglist.map(blog => (
      <div className="filterDiv col-md-4" key={blog.id} data-category={blog.category}>
        <div>
         <Link to={blog.url}><a className="blogcard col-lg-10" style={{ 
      background: `url("${blog.image}") #0000008c`,
      backgroundBlendMode:"overlay",
      backgroundPosition:"center",
      backgroundSize:"cover" 
    }}>
                <div>
                    <h1>{blog.name}</h1>
                    <p>{blog.subtext}</p>
                    
                    {/* <div className="tags">
                        <div className={`tag ${blog.category}`}>{blog.category}</div>
                    </div> */}
                </div>
            </a></Link>
        </div>
    </div> 
        )) :<div> Blog Section is currently empty. Check back in a few days <br/><br/></div>}
         {/* <Router>
          <Switch>
          <Route path="/blog1" exact component={Blog1} />
          <Route path="/blog2" exact component={Blog2} />
        </Switch>
        </Router> */}
    </>
    )
}

export default Bcard
