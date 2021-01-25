import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css';

function Footer() {
    return (
        <div className="footer div_big" id="footer">
        <section className="footerContact ">
            <div className="email ">
                <a className="contactfoot" >info@bookmyaccountant.com</a>
            </div>
            <div className="number ">
                <a className="contactfoot"> +91 9x xxxx 0xxx</a>
            </div>
        </section>
        <section className="footerrow1 ">
            <div className="leftDiv ">
                <div className="title ">Services We Provide:</div>
                <ul>
                    <li>
                        <Link to="" className="footerService">
                    Chemicals & Materials</Link>
                        <br />
                       </li>
                    <li>
                        <Link to="" className="footerService">
                    Consumer Goods </Link>
                    </li>
                    <li>
                        <Link to="" className="footerService">
                    Food & Beverages</Link>
                    </li>
                    <li>
                        <Link to="" className="footerService">
                    HealthCare</Link>
                    </li>
                    <li>
                        <Link to="" className="footerService">
                    Internet, Communication & Technology</Link>
                    </li>
                        <li>
                            <Link to="" className="footerService"> Banking, Financial Services & Insurance</Link>

                    </li>
                        <li>
                            <Link to="" className="footerService"> Automotive & Aerospace</Link>


                    </li>
                </ul>
            </div>
            <div className="rightDiv ">
                <div className="title ">Important Links:</div>
                <ul>
                    <li>
                        <a target="_blank" href="https://www.incometaxindiaefiling.gov.in ">Income Tax E-filing</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.gst.gov.in ">GST Portal</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.cbic.gov.in ">Central Board of Indirect Taxes</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.mca.gov.in ">MCA21-ROC Compliance</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.tin-nsdl.com/services ">PAN - TAN Online Application</a>

                    </li>
                    <li>
                        <a target="_blank" href="https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp ">Online Income Tax Payment</a>

                    </li>
                </ul>
            </div>
        </section>
        <section className="social footersocial ">
    
            <div className="social-icon ">
                <a>
                    <i className="fa fa-facebook "></i>
                </a>
            </div>
    
            <div className="social-icon ">
                <a>
                    <i className="fa fa-twitter "></i>
                </a>
            </div>
            <div className="social-icon ">
                <a>
                    <i className="fa fa-instagram "></i>
                </a>
            </div>
            <div className="social-icon ">
                <a>
                    <i className="fa fa-linkedin "></i>
                </a>
            </div>
          
        </section>
        <section className="footerrow2 ">
            <div className="title white-text" >SUBSCRIBE TO OUR NEWSLETTER</div>
            <form  className="gform newsletter " method="POST ">
                <input type="email " className="newsletterinput newsletteremail " name="email " id="email " placeholder="Email address " />
                <button type="submit" className="newsletterinput newsletterbutton " >
            SUBSCRIBE
          </button>
                <div  className="alertdemo ">
                    <h2 id="demonewsletter "></h2>
                </div>
            </form>
            <span id="copyright" >
          © BMDMR 2021</span>
      </section>
    </div>
    )
}

export default Footer
