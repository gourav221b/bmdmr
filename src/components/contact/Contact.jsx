import React, {useState} from 'react'
import Switch from 'react-switch'
import '../../App.css'
import './contact.css'

function Contact() {
   
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
  
    return (
      <>
      <div className="divHeading"><span> Get In Touch</span> <div className="divUnderline"></div></div>
      <div className="contactDiv  ">
         
     <div className="contactLabel">
       {/* <span>Ask for</span> */}
      <label>
           
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch contactSwitch"
          offColor="#08f"
          onColor="#40ecec"
          offHandleColor="#40ecec"
          onHandleColor="#08f"
          handleDiameter={30}
      height={40}
      width={78}
          uncheckedIcon={
            <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color:"#fff"}}>
            <i className="fa fa-user"></i></div>
          }
            checkedIcon={
              
              <div style={{display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color:"#fff"}}>
              <i className="fa fa-building" ></i></div>
            }
        />   
      </label>
      <span>{checked ? "Enterprise" : "Personal"} Quote</span>
      </div>   <div>
        {checked ? <section className="get-in-touch col-md-8">
   {/* <h1 className="title">Personal Quotation</h1> */}
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
         <input id="designation" className="input-text js-input" type="text" value="" required/>
         <label className="label" htmlFor="designation">Designation</label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="website" className="input-text js-input" type="text"/>
         <label className="label" htmlFor="website">Company Website</label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="requirement" className="input-text js-input" type="text"/>
         <label className="label" htmlFor="requirement">Any Specific Requirements?  <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12">
         <input id="message" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="message">Your Message</label>
      </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>

</section> : <section className="get-in-touch col-md-8">
   {/* <h1 className="title">EnterPrise Quote</h1> */}
   
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
         <input id="company" className="input-text js-input" type="text"  />
         <label className="label" htmlFor="company">Company Name <span className="optional"> (Optional)</span></label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="designation" className="input-text js-input" type="text" value="" />
         <label className="label" htmlFor="designation">Designation <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="website" className="input-text js-input" type="text"/>
         <label className="label" htmlFor="website">Company Website <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="requirement" className="input-text js-input" type="text"/>
         <label className="label" htmlFor="requirement">Any Specific Requirements? <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12">
         <input id="message" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="message">Your Message</label>
      </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>

</section>}
      </div>
    </div>
   </>
    )
}

export default Contact
