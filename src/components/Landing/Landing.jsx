// import React from 'react'
import { Button, Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import './landing.css';
import { Link } from 'react-router-dom';
// import '../App.css';
function landing() {

    return (
        <div>
            <Particles style={{position:"absolute"}}
    params={{
	    "particles": {
	        "number": {
	            "value": 30
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
            <div className="div_big landing homelanding row" id="top">
                <div className="landingdetails col-lg-7">
                <h1>BMDMR.COM</h1>
                <p>BMA Market Research is an India based research and consulting company. The company provides
                    syndicated research reports, customized research reports, and consulting services. </p>
                <Link to="/about"><Button className=" btn"> Learn More</Button></Link>
                </div>
                <div className="landingphoto">
                    <img src="/src/assets/slider-m-1.webp" alt=""/>
                </div>
            </div>
   
        </div>
    )
}

export default landing


