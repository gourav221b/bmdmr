import React from 'react'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Landing/landing.css';
import '../components/insights/insights.css';

function Insights() {
    return (
        <>
        <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Insights</h1>
                <p><span>Blogs -</span><span> Articles -</span><span> Press Release</span></p>              
                </div>                
            </div>
            <div className="insightDivWrapper">
                <div className="insightDiv blogDiv">
                    <img src="https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid insightImg col-md-4" alt="blogimg"/>

                    <div className="insightDetail col-md-5"> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat laborum pariatur non, libero et accusantium? Natus cumque expedita aspernatur blanditiis nihil aut et rem error iure neque? Odit, esse?</p>
                    <Link to="/blogs" className="insightBtn"> Read our Blogs</Link>
                    </div>
                </div>
                <div className="insightDiv articleDiv">
                <img src="https://images.unsplash.com/photo-1585241936939-be4099591252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="img-fluid insightImg col-md-4" alt="blogimg"/>

                    <div className="insightDetail col-md-5"> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat laborum pariatur non, libero et accusantium? Natus cumque expedita aspernatur blanditiis nihil aut et rem error iure neque? Odit, esse?</p>
                    <Link to="/article" className="insightBtn"> Read our Articles</Link>
                    </div>
                </div>
                <div className="insightDiv infographicDiv">
                <img src="https://images.pexels.com/photos/6214/hands-people-woman-girl.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid insightImg col-md-4" alt="blogimg"/>

                <div className="insightDetail col-md-5"> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat laborum pariatur non, libero et accusantium? Natus cumque expedita aspernatur blanditiis nihil aut et rem error iure neque? Odit, esse?</p>
                <Link to="/pressRelease" className="insightBtn"> Press Release</Link>
                </div>

                </div>


            </div>
            </>
    )
}

export default Insights
