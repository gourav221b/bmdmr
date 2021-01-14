import React from 'react'
import './industries.css';
import '../../App.css'
import chemical from './icons/chemical.png';
import consumer from './icons/consumer.png';
import food from './icons/food.png';
import HealthCare from './icons/healthcare.png';
import ICT from './icons/ICT.png';
import banking from './icons/banking.png';
import automotive from './icons/automotive.png';
import consultancy from './icons/consultancy.png';
function Industries() {

    var industries=[
        {
            id:1,
            name:"Chemicals and Materials",
            image:chemical
        },
        {
            id:2,
            name:"Consumer Goods",
            image:consumer
        },
        {
            id:3,
            name:"Food & Beverages",
            image:food
        },
        {
            id:4,
            name:"HealthCare",
            image:HealthCare
        },
        {
            id:5,
            name:"Internet, Communication & Technology",
            image:ICT
        },
        {
            id:6,
            name:"Banking, Financial Services & Insurance",
            image:banking
        },
        {
            id:7,
            name:"Automotive & Aerospace",
            image:automotive
        },
        {
            id:8,
            name:"Consultancy Services",
            image:consultancy
        }
    ]
    return (
        <>
    <div className="divHeading"><span> Industries We Serve </span> <div className="divUnderline"></div></div>
    <div className="industriesWrapper">
    {industries.length ? industries.map(service => (
        <div className="servicecard" key={service.id}>
            <img src={service.image} alt={service.name}/>
            <span>{service.name}</span>

    </div>
        )) :<div> Services Section is undergoing review. Check back in a few days or email us to know more <br/><br/></div>}
    </div>
        </>
    )
}

export default Industries

// #3686E9