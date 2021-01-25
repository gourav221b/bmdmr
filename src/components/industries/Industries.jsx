import React from 'react'
import {Link} from 'react-router-dom'
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
            image:chemical,
            link:"/shop/Chemicals&Materials"
        },
        {
            id:2,
            name:"Consumer Goods",
            image:consumer,
            link:"/shop/ConsumerGoods"
        },
        {
            id:3,
            name:"Food & Beverages",
            image:food,
            link:"/shop/Food&Bevarages"
        },
        {
            id:4,
            name:"HealthCare",
            image:HealthCare,
            link:"/shop/HealthCare"
        },
        {
            id:5,
            name:"Internet, Communication & Technology",
            image:ICT,
            link:"/shop/ICT"
        },
        {
            id:6,
            name:"Banking, Financial Services & Insurance",
            image:banking,
            link:"/shop/BFS"
        },
        {
            id:7,
            name:"Automotive & Aerospace",
            image:automotive,
            link:"/shop/Automotive&Aerospace"
        }
    ]
    return (
        <>
    <div className="divHeading"><span> Industries We Serve </span> <div className="divUnderline"></div></div>
    <div className="industriesWrapper">
    {industries.length ? industries.map(service => (
       <Link to={service.link}className="servicecard" key={service.id} onClick={()=>{window.scrollTo(0,0)}}>
            <img src={service.image} alt={service.name}/>
            <span>{service.name}</span>

    </Link>
        ))  :<div> Services Section is undergoing review. Check back in a few days or email us to know more <br/><br/></div>}
   
   {/* <div className="servicecard " style={{background:"linear-gradient(to bottom, transparent,rgb(151, 151, 151))",filter:"brightness(100%)",color:"rgb(69, 107, 177)" }}>
        <img src={consultancy} alt="consultancy"/>
        <span style={{fontSize:"3.5vh"}}>Consult Us <i className="fa fa-arrow-right"></i></span></div>  */}
        </div>
        </>
    )
}

export default Industries

// #3686E9