import React from 'react'
import '../Landing/landing.css'
import '../solutions/solution.css'
function Strategy() {

    return (
        <>
        <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Strategy Consulting</h1>
                {/* <p>Knowledge is the power that will set you above your competition</p>               */}
                </div>                
            </div>
            <section className="get-in-touch col-md-8" id="strategy">
   <h3 className="title">Strategy Consultancy</h3>
   {/* <div className="closeform" onClick={()=>closeForm()}>&times;</div> */}
   <form className="contact-form row gform" action="https://script.google.com/macros/s/AKfycbz1pXXYINt9hvG_Dib29Uk-_V7kPIF8X5sIPjG5a-oCAcoqEnmSabFAdA/exec">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" name="name" required/>
         <label className="label" htmlFor="name"> Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" name="email" required/>
         <label className="label" htmlFor="email">E-mail</label>
      </div>
      
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" name="contact" required/>
         <label className="label" htmlFor="phone">Contact Number</label>
      </div>
      
      <div className="form-field col-lg-6 ">
         <input id="country" className="input-text js-input" type="text" name="country" required/>
         <label className="label" htmlFor="country">Your Country</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" name="company" required/>
         <label className="label" htmlFor="company">Company Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="designation" className="input-text js-input" type="text" defaultValue="" name="designation"  required/>
         <label className="label" htmlFor="designation">Designation</label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="website" className="input-text js-input" name="website" type="text"/>
         <label className="label" htmlFor="website">Company Website</label>
      </div>
      <div className="form-field col-lg-12 ">
         <input id="requirement" className="input-text js-input" type="text" style={{height:"auto"}} name="requirement"/>
         <label className="label" htmlFor="requirement">Any Queries Regarding Our Service?  <span className="optional">(Optional)</span></label>
      </div>
      <div className="form-field col-lg-12">
         <textarea id="message" className="input-text js-input" type="text" name="message" required/>
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

</section>
          
            </>
    )
}

export default Strategy
