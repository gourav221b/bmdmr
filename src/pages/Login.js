import React from 'react'
import '../components/login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Landing/landing.css';
import '../components/login/login.css';
import {Link} from 'react-router-dom';
import loginIcon from '../components/login/login.png';


function Login() {
    window.scrollTo(0,0);
    return (
        <>
        <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1 id="pageHeader">Login</h1>
                <p>Login to your Account to avail your services</p>
              
                </div>
               
            </div>
            <div className="container loginSignup">

  <div className="card ">
    <div className="left col-md-6">
        <img src="https://images.pexels.com/photos/973506/pexels-photo-973506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
    </div>
    <div className="right col-md-6">
      <form>
        <div className="form-input">
          <input type="text" id="username" placeholder="e.g. Username221" required/>
          <label hmtlFor="username">username</label>
        </div>
        <div className="form-input">
          <input type="password" id="password" placeholder="*********" required/>
          <label hmtlFor="password">password</label>
        </div>
        <input type="submit" className="btn" value="LOGIN"/>
        <a href="#" className="forgot-password">forgot password?</a>
        <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Not Yet Registered? <Link to='/register'> <span className="text-primary ml-2">Join Us</span></Link></p>
                    </div>
      </form>
      
    </div>
  </div>
</div>

         </>
    )
}

export default Login
