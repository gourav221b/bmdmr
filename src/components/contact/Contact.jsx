import React, {useState} from 'react'
import Switch from 'react-switch'
import '../../App.css'
import '../Landing/landing.css'
import './contact.css'

function Contact() {
   
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
  
    return (
      <>
       <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Contact Us</h1>
                <p>Get in touch with us</p>              
                </div>                
            </div>
      <div className="divHeading"><span> Get In Touch</span> <div className="divUnderline"></div></div>
      <div className="contactWrapper row">
         <div className="contactDetails col-md-4">
            <div className="contactEmail contactpageInfo"><i className="fa fa-envelope" aria-hidden="true"></i>info@bookmyaccountant.com</div>
            <div className="contactphone contactpageInfo"><i className="fa fa-phone-square" aria-hidden="true"></i>+94xxx-xx-xx1</div>
            <div className="contactaddress contactpageInfo"><i className="fa fa-map-marker" aria-hidden="true"></i>114/1A, Cotton Street, Burra Bazar, 1st Floor, Kolkata – 700007</div>
         </div>
      <div className="contactDiv col-md-6 ">
         
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
        {checked ? <section className="get-in-touch col-md-12">
   {/* <h1 className="title">Personal Quotation</h1> */}
   <form className="contact-form row gform" action=" https://script.google.com/macros/s/AKfycbzEDvBzEGUsmI6JscD60-p16QbliQu3CQXRBCvrqiSfxD_bbvF7-xE5Ig/exec" >
   <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" name="name" required/>
         <label className="label" htmlFor="name"> Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" name="email" required/>
         <label className="label" htmlFor="email">E-mail</label>
      </div>
      
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" name=" contact number"required/>
         <label className="label" htmlFor="phone">Contact Number</label>
      </div>
      
      <div className="form-field col-lg-6 ">
         <input id="country" className="input-text js-input" type="text" name="country" required/>
         <label className="label" htmlFor="country">Your Country</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" name="company"  />
         <label className="label" htmlFor="company">Company Name </label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="designation" className="input-text js-input" type="text" name="designation" defaultValue="" />
         <label className="label" htmlFor="designation">Designation </label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="website" className="input-text js-input" type="text" name="website"/>
         <label className="label" htmlFor="website">Company Website </label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="requirement" className="input-text js-input" type="text" name="requirements"/>
         <label className="label" htmlFor="requirement">Any Specific Requirements? <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12">
         <input id="message" className="input-text js-input" type="text" name="message" required/>
         <label className="label" htmlFor="message">Your Message</label>
      </div>
     
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
      <div style={{display:"none"}} class="thankyou_message" id="demo">
 
</div>
   </form>

</section> : <section className="get-in-touch col-md-8">
   {/* <h1 className="title">EnterPrise Quote</h1> */}
   
   <form className="contact-form row gform" action="https://script.google.com/macros/s/AKfycbxS7XBX23GkDgqj2HanlRDZe-S1x_WgjnKdy5p70asnW1ZHfeO_91Ebcw/exec">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" name="name" required/>
         <label className="label" htmlFor="name"> Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" name="email" required/>
         <label className="label" htmlFor="email">E-mail</label>
      </div>
      
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" name=" contact number"required/>
         <label className="label" htmlFor="phone">Contact Number</label>
      </div>
      
      <div className="form-field col-lg-6 ">
         <input id="country" className="input-text js-input" type="text" name="country" required/>
         <label className="label" htmlFor="country">Your Country</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" name="company"  />
         <label className="label" htmlFor="company">Company Name <span className="optional"> (Optional)</span></label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="designation" className="input-text js-input" type="text" name="designation" defaultValue="" />
         <label className="label" htmlFor="designation">Designation <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="website" className="input-text js-input" type="text" name="website"/>
         <label className="label" htmlFor="website">Company Website <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="requirement" className="input-text js-input" type="text" name="requirements"/>
         <label className="label" htmlFor="requirement">Any Specific Requirements? <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12">
         <input id="message" className="input-text js-input" type="text" name="message" required/>
         <label className="label" htmlFor="message">Your Message</label>
      </div>
     
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
      <div style={{display:"none"}} class="thankyou_message" id="demo">
 <h2>
 </h2>
</div>
   </form>

</section>}
      </div>
    </div>
    </div>
   </>
    )
}

export default Contact
