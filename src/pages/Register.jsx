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
                {/* <p>Know What is best for your business. Get in touch</p> */}
              
                </div>
               
            </div>
            <div className="container loginModal">
        <div className="col-md-4 col-lg-5 ">
        <img src={loginIcon} className="loginimg" alt=""/>
        </div>

        <div className="col-md-7 col-lg-5 ml-auto">
              <section id="registerModal">
                  <form action="#">
                <div className="row">

                  
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-phone-square text-muted"></i>
                            </span>
                        </div>
                       
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"/>
                    </div>
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-skype text-muted"></i>
                            </span>
                        </div>
                       
                        <input id="skypeLink" type="text" name="skypeId" placeholder="Your Skype Id" className="form-control bg-white border-md border-left-0 pl-3"/>
                    </div>


                    
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-black-tie text-muted"></i>
                            </span>
                        </div>
                        <select id="job" name="jobtitle" className="form-control custom-select bg-white border-left-0 border-md">
                            <option value="">Choose your job</option>
                            <option value="">Designer</option>
                            <option value="">Developer</option>
                            <option value="">Manager</option>
                            <option value="">Accountant</option>
                            <option value="">Other</option>
                        </select>
                    </div>

                    
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    
                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-primary btn-block py-2">
                            <span className="font-weight-bold">Create your account</span>
                        </a>
                    </div>

                    
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                    
                    <div className="form-group col-lg-12 mx-auto">
                        <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
                            <i className="fa fa-facebook-f mr-2"></i>
                            <span className="font-weight-bold">Continue with Facebook</span>
                        </a>
                        <a href="#" className="btn btn-primary btn-block py-2 btn-twitter">
                            <i className="fa fa-twitter mr-2"></i>
                            <span className="font-weight-bold">Continue with Twitter</span>
                        </a>
                    </div>

                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Already Registered? <Link to='/login'> <span className="text-primary ml-2">Login</span></Link></p>
                    </div>
                    </div></form>
</section>
                  
    </div></div>

         </>
    )
}

export default Register
