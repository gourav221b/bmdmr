import React, {useState} from 'react'
import Switch from 'react-switch'
import '../App.css'
import '../components/Landing/landing.css'

import{Link} from 'react-router-dom'

import '../components/solutions/solution.css'
import '../components/contact/contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Landing/landing.css';
import Strategy from '../components/industries/icons/strategy.svg';
import Research from '../components/industries/icons/research.svg'; 

function Consultancy() {
    window.scrollTo(0,0)
    const strategy =document.querySelector('#strategy');
const research =document.querySelector('#research');
    function  showstrat() {
        document.querySelector('#strategy').style.display="block";
        document.querySelector('#strategy').scrollIntoView();
        document.querySelector('#research').style.display="none";
    }
    function showresearch() {
        document.querySelector('#strategy').style.display="none";
        document.querySelector('#research').style.display="block";
        document.querySelector('#research').scrollIntoView();
        
    }
    function closeForm()
    {
        document.querySelector('#strategy').style.display="none";
        document.querySelector('#research').style.display="none";
    }
    return (
      <>
       <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Consultancy</h1>
                <p>Get in touch with us</p>              
                </div>                
            </div>
            <div className="consultancyDiv" style={{width:"100vw",margin:"0",boxShadow:"none",padding:"0%"}}>
            {/* <div className="solutionTitle"><span>consultancy</span><div className="divUnderline"></div></div> */}
            <div className="industryCardDiv ConsultancyCardDiv row" title="Click to continue to Strategy Consultancy" > 
                <div className="ConsultancyCard col-md-5"onClick={
               ()=>{
                showstrat() }
             } >
                    <img src={Strategy} alt="Strategy" className="img-fluid"/>
                    <div className="consultancydetails">
                    <div className=" ConsultancyName">Strategy Consulting </div>
                    <div className="consultancyUl"> 
                    <ul>
                        <li>Growth/Business Strategy</li>
                        <li>Channel/Partner Strategy</li>
                        <li>M&A Strategy</li>
                        <li> Business
Planning</li>
                    </ul>
                        </div></div>

                </div>
               
                <div className="ConsultancyCard col-md-5" title="Click to continue to Advanced Formative Research"  onClick={
               ()=>{
                showresearch() }
             }> 
                    <img src={Research} alt="Research" className="img-fluid"/>
                    <div className="consultancydetails">
                    <div className=" ConsultancyName">Advanced Formative Research </div>
                    <div className="consultancyUl"> 
                    <ul>
                        <li>Account Intelligence</li>
                        <li> Competitive Strategy</li>
                        <li>Persona Mapping</li>
                        <li>Customer/Consumer Insights</li>
                        <li>Country Insights</li>
                    </ul>
                        </div></div>
                </div>
               
                </div>
                
            </div>
            <div className="consultancyForm" >
            <section className="get-in-touch col-md-8" id="strategy">
   <h3 className="title">Strategy Consultancy</h3>
   <div className="closeform" onClick={()=>closeForm()}>&times;</div>
   <form className="contact-form row">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="name"> Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" required/>
         <label className="label" htmlFor="email">E-mail</label>
      </div>
      
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="phone">Contact Number</label>
      </div>
      
      <div className="form-field col-lg-6 ">
         <input id="country" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="country">Your Country</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="company">Company Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="designation" className="input-text js-input" type="text" defaultValue=""  required/>
         <label className="label" htmlFor="designation">Designation</label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="website" className="input-text js-input" type="text"/>
         <label className="label" htmlFor="website">Company Website</label>
      </div>
      <div className="form-field col-lg-12 ">
         <textarea id="requirement" className="input-text js-input" type="text" style={{height:"auto"}}/>
         <label className="label" htmlFor="requirement">Any Queries Regarding Our Service?  <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12">
         <textarea id="message" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="message">Your Message</label>
      </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>

</section>
            <section className="get-in-touch col-md-8" id="research">
   <h3 className="title">Advanced Formative Research</h3>
   <div className="closeform" onClick={()=>closeForm()}>&times;</div>
   <form className="contact-form row">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="name"> Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" required/>
         <label className="label" htmlFor="email">E-mail</label>
      </div>
      
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="phone">Contact Number</label>
      </div>
      
      <div className="form-field col-lg-6 ">
         <input id="country" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="country">Your Country</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="company">Company Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="designation" className="input-text js-input" type="text" defaultValue=""  required/>
         <label className="label" htmlFor="designation">Designation</label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="website" className="input-text js-input" type="text"/>
         <label className="label" htmlFor="website">Company Website</label>
      </div>
      <div className="form-field col-lg-12 ">
         <textarea id="requirement" className="input-text js-input" type="text"/>
         <label className="label" htmlFor="requirement">Any Queries Regarding Our Service?  <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12">
         <textarea id="message" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="message">Your Message</label>
      </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>

</section>
            </div>

         
   </>
    )
}

export default Consultancy
