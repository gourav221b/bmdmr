import React from 'react'
import '../components/login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Landing/landing.css';
import '../components/login/login.css'
function Login() {
   
    return (
        <>
        <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>Login Page</h1>
                {/* <p>Know What is best for your business. Get in touch</p> */}
              
                </div>
               
            </div>
            <div classname="formwrapper">
            <form className="col-lg-6 col-md-8">
                   <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="submitbtn btn-primary btn-block">Submit</button>
                <p className="forgot-password ">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
        </>
    )
}

export default Login
