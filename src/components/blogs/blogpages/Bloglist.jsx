import React from 'react'
import bloglist from '../blog.json'
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import '../blog.css'


function Bloglist() {
    
    return (
        <>
        <h2 className="listUlHead">All our Blogs</h2>
         <div className="listUl">
       {bloglist.length ? bloglist.map(blog => (
     
        <ul>
        <li> <Link to={blog.url} key={blog.id}>
               {blog.name}
            </Link></li>
        </ul>
    
        )) :<div> Blog Section is currently empty. Check back in a few days <br/><br/></div>}
    </div> </>
    )
}

export default Bloglist
