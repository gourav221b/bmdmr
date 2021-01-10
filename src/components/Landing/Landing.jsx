// import React from 'react'
import { Button, Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';
// import '../App.css';
function landing() {
    return (
        <div>
            <div className="div_big landing homelanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Book My Accountant</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae asperiores laboriosam officiis vel facere ad ab dignissimos quisquam fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi suscipit illo qui porro ad, unde delectus beatae explicabo velit!</p>
                <Button className=" btn"> Learn More</Button>
                </div>
                <div className="landingphoto">
                    <img src="/src/assets/slider-m-1.webp" alt=""/>
                </div>
            </div>
       
        </div>
    )
}

export default landing


