import React from 'react'
import '../components/login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Landing/landing.css';
import '../components/login/login.css';
import loginIcon from '../components/login/login.png';
import {Link} from 'react-router-dom';
function Register() {
    window.scrollTo(0,0);
    return (
        <>
        <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1 id="pageHeader">Register</h1>
                <p>Create your account to avail services</p>
              
                </div>
               
            </div>
            <div class="container loginSignup">

<div class="card ">
  <div class="left col-md-6">
      <img src="https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
  </div>
  <div class="right col-md-6">
    <form>
      <div class="form-input">
        <input type="text" id="name" placeholder="e.g. Username221" required/>
        <label for="name">Name</label>
      </div>
      <div class="form-input">
        <input type="email" id="email" placeholder="e.g. example@example.net" required/>
        <label for="email">Email id</label>
      </div>
      <div class="form-input">
        <input type="tel" id="contact" placeholder="e.g. +919xxxxxx897" required/>
        <label for="contact">Contact Number</label>
      </div>
      
      <div class="form-input">
        <input type="text" id="skype" placeholder="e.g. " required/>
        <label for="skype">Skype Id</label>
      </div>
      <div class="form-input">
        <input type="password" id="password" placeholder="(8-20 characters)" minLength="8" maxLength="20" required/>
        <label for="password">Password</label>
      </div>
      <div class="form-input">
        <input type="password" id="confirmpassword" placeholder="(8-20 characters)" minLength="8" maxLength="20" required/>
        <label for="confirmpassword">Confirm Password</label>
      </div>
      <input type="submit" class="btn" value="Create Account"/>
     
      <div className="text-center w-100">
                      <p className="text-muted font-weight-bold">Already Registered? <Link to='/login'> <span className="text-primary ml-2">Login</span></Link></p>
                  </div>
    </form>
    
  </div>
</div>
</div>

         </>
    )
}

export default Register
