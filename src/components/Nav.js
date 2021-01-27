import React, {useContext,useState} from "react"
import {cartContext} from "../Global/cartContext.js"
import {Link,NavLink} from "react-router-dom"
import {NavDropdown,Button,Collapse} from 'react-bootstrap'
import '../App.css';
import './nav.css';
import ProductContextProvider from "../Global/productContext"
import Logo from '../assets/cost.svg'


const Nav= ({cartToggle})=> {    
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [opensolution, setOpensolution] = useState(false);
  const [Openreport, setOpenreport] = useState(false);
  const [openconsultancy, setOpenconsultancy] = useState(false);
  const [openInsight, setOpenInsight] = useState(false);
  const [openInsightSide, setOpenInsightSide] = useState(false);
  const {shoppingCart} = useContext(cartContext);
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

   
 
  
    window.onscroll = function() {

if(window.innerWidth>1100)
{
      if (window.pageYOffset > document.getElementById("hamMenu").offsetTop) {
         document.getElementById("hamMenu").style.display = "block";
                
         document.getElementById("hamMenu").style.background = "#000";
      } else {
         document.getElementById("hamMenu").style.display = "none";
  
         document.getElementById("hamMenu").style.background = "transparent";
      }}
      else
      {
        document.getElementById("hamMenu").style.display = "block";
      
      }
      const menuIcon=document.getElementById('hamMenu');
      const menu=document.getElementById('sidenav');
      const closebtn=document.getElementById('closebtn');
      const sidenavlinks=document.getElementById('sidenavlinks');
      const sidenavlinkcomponent=document.querySelectorAll('.sidenavcomponent');

    
      sidenavlinkcomponent.forEach(function(link) {
        link.addEventListener("click", function() {
            closeNav();
            setOpen(false);
            window.scrollTo(0, 0);
        });
    });
 


      menuIcon.addEventListener('click',()=>{
       openNav();

      })
     closebtn.addEventListener('click', () => {
     closeNav();
   
    });

   

    function openNav()
    {
      menu.style.width="300px";
      closebtn.style.display="flex";
      sidenavlinks.style.display="flex";
    }
    function closeNav()
    {
      menu.style.width="0";
      closebtn.style.display="none";
      sidenavlinks.style.display="none";
    }
  };

  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    // console.log(pathname);
    return pathname === "/";
}
// const sidenavlinkdropdown=document.querySelector('.sidenavlinkdropdown');
// sidenavlinkdropdown.addEventListener('click',()=>
// {
//   sidenavlinkdropdown.classList.toggle('sidenavlinkcomponent')
// })
  
  return (
    <>
    <nav>
        <Link to="/" style={navStyle}><h3>Dhanania</h3>
        {/* <img src={Logo} className="logo" alt="logo"/> */}
        </Link>
      <div className="hamburgerMenu" id="hamMenu"><i className="fa fa-bars"></i></div>
      <div className="sidenav" id="sidenav">
        <div className="closebtn" id="closebtn">&times;</div>
        <ul className="sidenavlinks" id="sidenavlinks">
            <li className="sidenavlinkcomponent sidenavcomponent" ><NavLink style={navStyle} exact to='/' activeClassName="SideActive" isActive={checkActive}>
            Home
            </NavLink></li>
           <li className="sidenavlinkcomponent sidenavcomponent"><NavLink style={navStyle} to='/about' activeClassName="SideActive">
            About
            </NavLink></li>
           
            <li className="sidenavlinkdropdown">
            <div
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        aria-controls="collapseNav"
        aria-expanded={open}
      >
        Solutions <i className="fa fa-caret-down"></i>
      </div>
      <Collapse in={open}>
        <div id="collapseNav" className="sideNavDropdown">
        {/* <span> Chemicals & Materials</span>
        <span>Consumer Goods</span>
        <span>Food & Beverages</span>
        <span>HealthCare</span>
        <span>Internet, Communication & Technology</span>
        <span>Banking, Financial Services & Insurance</span>
        <span>Automotive & Aerospace</span> */}
       
        <div
        onClick={() => setOpen2(!open2)}
        aria-controls="collapseReport"
        aria-expanded={open2}
        style={{color:"#fff"}} >               
      Reports <i className="fa fa-caret-right"></i>
      </div>
      <Collapse in={open2}>
        <div id="collapseReport" className="" >
        <div><Link className="dropdowngray"to="/shop/Chemicals&Materials"> Chemicals & Materials</Link></div>
        <div><Link className="dropdowngray"to="/shop/ConsumerGoods">Consumer Goods</Link></div>
        <div><Link className="dropdowngray"to="/shop/Food&Bevarages">Food & Beverages</Link></div>
        <div><Link className="dropdowngray"to="/shop/HealthCare">HealthCare</Link></div>
        <div><Link className="dropdowngray"to="/shop/ICT">Internet, Comms & Technology</Link></div>
        <div><Link className="dropdowngray"to="/shop/BFS">Banking, Finance & Insurance</Link></div>
        <div><Link className="dropdowngray"to="/shop/Automotive&Aerospace">Automotive & Aerospace</Link></div>
        </div>
        </Collapse>
        <div
        onClick={() => setOpen3(!open3)}
        aria-controls="collapseReport"
        aria-expanded={open3}
        style={{color:"#fff"}} >               
      Consultancy <i className="fa fa-caret-right"></i>
      </div>
      <Collapse in={open3}>
        <div id="collapseReport" className="" >
        <div><Link className="dropdowngray"to="/shop/Chemicals&Materials"> Strategy Consulting</Link></div>
        <div><Link className="dropdowngray"to="/shop/ConsumerGoods">Advanced Formative Research</Link></div>
      
        </div>
        </Collapse>
        </div>
      </Collapse>
            </li>
         
          <li className=" ">  <span style={navStyle}  activeClassName="SideActive"
          
          onClick={() => setOpenInsightSide(!openInsightSide)}
          aria-controls="collapseInsightSide"
          aria-expanded={openInsightSide}>
            Insights <i className="fa fa-caret-down"></i>
            </span>
            <Collapse in={openInsightSide}>
        <div id="collapseInsightSide" className="sideNavDropdown">
          <Link to="/blogs" className="dropdowngray"style={{marginBottom:"-20px"}}>Blogs</Link><br/>
          <Link to="/article"className="dropdowngray"style={{marginBottom:"-20px"}}>Article</Link><br/>
          <Link to="/pressRelease"className="dropdowngray"style={{marginBottom:"-20px"}}>Press Release</Link><br/>
        </div>
      </Collapse>
            </li>
            <li className="sidenavlinkcomponent sidenavcomponent">  <NavLink style={navStyle} to='/career' activeClassName="SideActive">
            Career
            </NavLink></li>
             <li className="sidenavlinkcomponent sidenavcomponent"><NavLink style={navStyle} to='/login' activeClassName="SideActive">
           Login
            </NavLink></li>
             <li onClick={cartToggle}><NavLink to="/cart" className="sidenavlinkcomponent sidenavcomponent">           
          <span className="shoppingCartIcon">Your Cart ({shoppingCart ? shoppingCart.length : 0})</span>               
            </NavLink> </li>
            </ul>
      </div> 

        <ul className="navlinks">
             <li><NavLink style={navStyle} exact to='/' activeClassName="SideActive" isActive={checkActive}>
           Home</NavLink></li>
            <li><NavLink style={navStyle} to='/about' activeClassName="SideActive">
            About
           </NavLink></li>
            {/* <li> <NavLink style={navStyle} to='/shop/AllCategories' activeClassName="SideActive">
           Shop
           </NavLink></li> */}
            <li className="dropdown">
           <NavLink style={navStyle} to="/solution" activeClassName="SideActive"> Solutions  <i className="fa fa-caret-down"></i></NavLink>
           <div className="dropdownItems">
             <span className="dropdownright">
             <NavLink to="/shop/AllCategories"  activeClassName="dropdownActive" className="dropdownitem" >Reports &nbsp;<i className="fa fa-caret-right"></i></NavLink>
             <div className="dropdownItemsright" style={{borderRadius:"4px"}}>
            <Link style={{fontSize:"16px"}} to="/shop/Chemicals&Materials"> Chemicals & Materials</Link>
            <Link style={{fontSize:"16px"}} to="/shop/ConsumerGoods">Consumer Goods</Link>
            <Link style={{fontSize:"16px"}} to="/shop/Food&Bevarages">Food & Beverages</Link>
            <Link style={{fontSize:"16px"}} to="/shop/HealthCare">HealthCare</Link>
            <Link style={{fontSize:"16px"}} to="/shop/ICT">ICT</Link>
            <Link style={{fontSize:"16px"}} to="/shop/BFS">BFI</Link>
            <Link style={{fontSize:"16px"}} to="/shop/Automotive&Aerospace">Automotive & Aerospace</Link>
             </div>
             </span>
             <span className="dropdownright">
             <NavLink to="/consultancy"  activeClassName="dropdownActive" className="dropdownitem">Consultancy <i className="fa fa-caret-right"></i></NavLink>
             <div className="dropdownItemsright" style={{borderRadius:"4px"}}>
            <Link style={{fontSize:"18px"}} to="/shop/Chemicals&Materials"> Strategy Consulting</Link>
            <Link style={{fontSize:"18px"}} to="/shop/ConsumerGoods">Advanced Formative Research</Link>
            
             </div>
             </span>
           </div>
          </li>
         
           <li> <NavLink style={navStyle} to='/insights'activeClassName="SideActive"
            onMouseEnter={() => setOpenInsight(true)}
            onMouseLeave={() => setOpenInsight(false)}
            // onClick={() => setOpenInsight(!openInsight)}
            aria-controls="collapseInsight"
            aria-expanded={openInsight}>
              Insights <i className="fa fa-caret-down"></i>
              
              <Collapse in={openInsight}>
              <div id="collapseInsight" className="navDrop">
            <Link to="/blogs" >Blogs</Link> <br/>
            <Link to="/article">Article</Link><br/>
            <Link to="/pressRelease">Press Release</Link><br/>
          </div>
           </Collapse>
           </NavLink>
           </li>
           <li> <NavLink style={navStyle} to='/career'activeClassName="SideActive">
            Career
           </NavLink></li>
           <li> <NavLink style={navStyle} to='/contact'activeClassName="SideActive">
            Contact
           </NavLink></li>
           <li className="sidenavlinkcomponent sidenavcomponent"> <NavLink style={navStyle} to='/login' activeClassName="SideActive">
            Login
            </NavLink></li>
    <li onClick={cartToggle} className="sidenavlinkcomponent sidenavcomponent"> <NavLink to="/cart">
    <div className=" cart" id="cartPc" onClick={cartToggle}>
   
      <span className="shoppingCartIcon">🛒</span>         
      <span className="shoppingCartTotal">
        {shoppingCart ? shoppingCart.length : 0}
        </span>
     
      </div>
    
       </NavLink></li>
 </ul>

    </nav>





   
    </>
  );
}

export default Nav;