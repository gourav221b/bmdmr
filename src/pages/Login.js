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
                {/* <p>Know What is best for your business. Get in touch</p> */}
              
                </div>
               
            </div>
            <div className="container loginModal">
        <div className="col-md-4 col-lg-5 ">
        <img src={loginIcon} className="loginimg" alt=""/>
        </div>

        <div className="col-md-7 col-lg-5 ml-auto">
              
                    {/* LOGIN */}
                        <section id="loginForm">
                            <form action="#">
                                    <div className="row">
                        <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="Loginemail" type="email" name="Loginemail" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                       
                        <input id="skypeLink" type="password" name="Password" placeholder="Password" className="form-control bg-white border-md border-left-0 pl-3"/>
                    </div>
                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-primary btn-block py-2">
                            <span className="font-weight-bold">Login </span>
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
                        <p className="text-muted font-weight-bold">Not Registered Yet ? <Link to='/register'> <span className="text-primary ml-2"
                           >Join Us</span> </Link></p>
                    </div>

                </div>
            </form>
         </section>   </div>

    </div>

         </>
    )
}

export default Login
