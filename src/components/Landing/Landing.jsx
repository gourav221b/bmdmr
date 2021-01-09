// import React from 'react'
import { Button, Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';
// import '../App.css';
function landing() {
    return (
        <div>
            <div className="div_big landing row">
                <div className="landingdetails col-md-6">
                <h1>Book My Accountant</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae asperiores laboriosam officiis vel facere ad ab dignissimos quisquam fugiat!</p>
                <Button className=" btn"> Learn More</Button>
                </div>
            </div>
       
        </div>
    )
}

export default landing


