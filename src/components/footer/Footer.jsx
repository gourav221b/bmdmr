import React from 'react'
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
                    Chemicals & Materials
<br />
                       </li>
                    <li>
                    Consumer Goods</li>
                    <li>
                    Food & Beverages
                    </li>
                    <li>
                    HealthCare
                    </li>
                    <li>
                    Internet, Communication & Technology
                    </li>
                        <li> Banking, Financial Services & Insurance

                    </li>
                        <li> Automotive & Aerospace


                    </li>
                </ul>
            </div>
            <div className="rightDiv ">
                <div className="title ">Important Links:</div>
                <ul>
                    <li>
                        <a>Blog1</a>
                    </li>
                    <li>
                        <a>Blog2</a>
                    </li>
                    <li>
                        <a>Blog3</a>
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
            <div className="title white-text " >SUBSCRIBE TO OUR NEWSLETTER</div>
            <form  className="gform newsletter " method="POST ">
                <input type="email " className="newsletterinput newsletteremail " name="email " id="email " placeholder="Email address " />
                <button type="submit " className="newsletterinput newsletterbutton " >
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
