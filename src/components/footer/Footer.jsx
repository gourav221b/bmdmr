import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css';

function Footer() {
    return (
        <div className="footer div_big" id="footer">
        <section className="footerContact ">
            <div className="email ">
                <a className="contactfoot" href="mailto:info@bookmyaccountant.com">info@bookmyaccountant.com</a>
            </div>
            <div className="number ">
                <a className="contactfoot"> +91 9x xxxx 0xxx</a>
            </div>
        </section>
        <section className="footerrow1 ">
            <div className="leftDiv ">
                <div className="title ">Here We Are:</div>
                <ul>
                    <li>
                        114/1A, Cotton Street, Burra Bazar, 1st Floor,<br />
                        <span>Kolkata</span> – 700007</li>
                    <li>
                        891/A, BNRK Tower, 7th A Main Road, 1st Block Koramangala, 3rd Floor, Near Wipro Signal, <br/><span>Bengaluru </span>– 560034</li>
                    <li>
                        Near Purulia Income tax building , Sahebandh Road,<br /><span>Purulia</span>-723101
                    </li>
                    <li>
                        House No. 15, Phase 1, Harsh Vihar, Daldal Seoni Road,<br/>
                        <span>Raipur </span> – 492007
                    </li>
                </ul>
               
            </div>
            <div className="rightDiv ">
                <div className="title ">Services We Provide:</div>
                <ul>
                    <li>
                        <Link to="/shop/Chemicals&Materials" className="footerService" onClick={()=>{
                            window.scrollTo(0,0);
                        }} >
                    Chemicals & Materials</Link>
                        <br />
                       </li>
                    <li>
                        <Link to="/shop/ConsumerGoods" className="footerService" onClick={()=>{
                            window.scrollTo(0,0);
                        }} >
                    Consumer Goods </Link>
                    </li>
                    <li>
                        <Link to="/shop/Food&Bevarages" className="footerService" onClick={()=>{
                            window.scrollTo(0,0);
                        }} >
                    Food & Beverages</Link>
                    </li>
                    <li>
                        <Link to="/shop/HealthCare" className="footerService" onClick={()=>{
                            window.scrollTo(0,0);
                        }} >
                    HealthCare</Link>
                    </li>
                    <li>
                        <Link to="/shop/ICT" className="footerService" onClick={()=>{
                            window.scrollTo(0,0);
                        }} >
                    Internet, Communication & Technology</Link>
                    </li>
                        <li>
                            <Link to="/shop/BFS" className="footerService"  onClick={()=>{
                                window.scrollTo(0,0);
                            }}> 
                            Banking, Financial Services & Insurance</Link>

                    </li>
                        <li>
                            <Link to="/shop/Automotive&Aerospace" className="footerService"  onClick={()=>{
                                window.scrollTo(0,0);
                            }}> 
                            Automotive & Aerospace</Link>


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
            <div className="title newslettertitle" >SUBSCRIBE TO OUR NEWSLETTER</div>
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
