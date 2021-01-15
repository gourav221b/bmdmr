import React from 'react'
import '../../App.css'
import './contact.css'
var quoteType=document.getElementById('quoteType');
var changetype=document.getElementById('changetype');
const personal=document.querySelector('.personal');
const enterprise=document.querySelector('.enterprise');
function changeactivepersonal(params) {
    quoteType.value="personal quotation";
    changetype.innerHTML="For Personal Quotation";
    enterprise.classList.remove('typeactive');
    personal.classList.add('typeactive');
}
function changeactiveenterprise(params) {
    changetype.innerHTML="For Enterprise Quotation";
    quoteType.value="enterprise quotation";
    personal.classList.remove('typeactive');
    enterprise.classList.add('typeactive');
} 
const Switching=()=>{
const switchers = document.querySelectorAll('.switcher')
const viewEl=document.querySelector('.btn-signup');
// function isElementOutViewport (el) {
//     var rect = el.getBoundingClientRect();
//     return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
// }
// if(!isElementOutViewport(viewEl))
// {   console.log('in view')
// document.querySelector('.switcher-signup').parentElement.classList.remove('.is-active');
// document.querySelector('.switcher-login').parentElement.classList.add('.is-active');
// }
// else
// {
//     console.log('not in view');
// }
switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
}
function Contact() {
   

    return (
        <div className="mainContactDiv">
             <div className="divHeading"><span style={{color:"#fff"}}> Contact Us </span> <div className="divUnderline"style={{backgroundColor:"#fff"}}></div></div>
            {/* <div className="contactWrapper row">
                <div className="col-md-4 typebuttondiv">
                    <div className=" typebutton personal typeactive" onClick={()=>{
                            changeactivepersonal();
                    }}>Get a personal quotation</div>
                    <div className=" typebutton enterprise" onClick={()=>{
                            changeactiveenterprise();
                    }}>Get an enterprise quotation</div>
                </div>
                <div className="col-md-6 formdiv">
                    <h3 id="changetype"> For Personal Quotation</h3>
                <form action="#">
                    <input type="text" name="type" className="inputs quotation" value="personal quotation" id="quoteType" required/>
                    <input type="text" name="name" className="inputs" placeholder="Your Name" required/>
                    <input type="text" name="country" className="inputs" placeholder="Your Country" required/>
                    <input type="email" name="email" className="inputs" placeholder="Your Email" required/>
                    <input type="text" name="company" className="inputs" placeholder="Company Name" required/>
                    <input type="text" name="designation" className="inputs" placeholder="Designation" />
                    <input type="text" className="inputs" placeholder="Any Particular Requirements?" />
                    
                    <textarea name="message" id="textarea" placeholder="Your Message Here"></textarea>
                    <input type="submit"className="btn-success inputs" value="Submit"/>
                </form>

                </div>
            </div> */}
            <section className="forms-section">
   <div className="forms">
    <div className="form-wrapper is-active">
      <button type="button" className="switcher switcher-login" onClick={()=>{
              Switching();
            }}>
         Personal Quote
        <span className="underline"></span>
      </button>
      <form className="form form-login">
        <fieldset>
            <input type="text" name="type"  className="type" id="type" defaultValue="personal quote"/>
        <div className="input-block">
            <label  htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="email">E-mail</label>
            <input id="email" name="email"type="email" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="number">Phone Number</label>
            <input id="number" name="number"type="tel" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="country">Your Country</label>
            <input id="country"name="Country" type="text" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="company">Company Name</label>
            <input id="company"name="company name" type="text" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="Designation">Designation</label>
            <input id="Designation" name="Designation"type="text" />
          </div>
          <div className="input-block">
            <label  htmlFor="requirements">Any specific requirements?</label>
            <input id="requirements" type="text" name="requirements"/>
          </div>
          <div className="input-block">
            <label  htmlFor="message">Your Message</label>
            <textarea id="message" name="message" />
          </div>
        </fieldset>
        <button type="submit" className="btn-login">Get Your Quote</button>
      </form>
    </div>
    <div className="form-wrapper enterprise">
      <button type="button" className="switcher switcher-signup" onClick={()=>{
              Switching();
            }}>
        Enterprise Quote
        <span className="underline"></span>
      </button>
      <form className="form form-signup">
      <fieldset>
            <input type="text" name="type"  className="type" id="type" defaultValue="personal quote"/>
        <div className="input-block">
            <label  htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="email">E-mail</label>
            <input id="email" name="email"type="email" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="number">Phone Number</label>
            <input id="number" name="number"type="tel" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="country">Your Country</label>
            <input id="country"name="Country" type="text" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="company">Company Name</label>
            <input id="company"name="company name" type="text" required/>
          </div>
          <div className="input-block">
            <label  htmlFor="Designation">Designation</label>
            <input id="Designation" name="Designation"type="text" />
          </div>
          <div className="input-block">
            <label  htmlFor="Website">Company Website</label>
            <input id="Website" name="Website"type="url" />
          </div>
          <div className="input-block">
            <label  htmlFor="requirements">Any specific requirements?</label>
            <input id="requirements" type="text" name="requirements"/>
          </div>
          <div className="input-block">
            <label  htmlFor="message">Your Message</label>
            <textarea id="message" name="message" />
          </div>
        </fieldset>
        <button type="submit" className="btn-login">Get Your Enterprise Quote</button>
      </form>
    </div>
  </div>
</section>
        </div>
    )
}

export default Contact
