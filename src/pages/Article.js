import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Landing/landing.css';

function Article() {
    return (
        <>
        <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Articles</h1>
                <p>Knowledge is the power that will set you above your competition</p>              
                </div>                
            </div>
            </>
    )
}

export default Article
