import React, {useContext,usestate} from "react"
import {cartContext} from "../Global/cartContext.js"
import {Link,NavLink} from "react-router-dom"
import '../App.css';
import ProductContextProvider from "../Global/productContext"


const Nav= ({cartToggle})=> {    
  
  const {shoppingCart} = useContext(cartContext);
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

   
   console.log(shoppingCart.length)
  
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
      const sidenavlinkcomponent=document.querySelectorAll('.sidenavlinkcomponent');

    
      sidenavlinkcomponent.forEach(function(link) {
        link.addEventListener("click", function() {
            closeNav();
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
    console.log(pathname);
    return pathname === "/";
}
  
  return (
    <>
    <nav>
        <Link to="/" style={navStyle}><h3>Dhanania</h3></Link>
      <div className="hamburgerMenu" id="hamMenu"><i className="fa fa-bars"></i></div>
      <div className="sidenav" id="sidenav">
        <div className="closebtn" id="closebtn">&times;</div>
        <ul className="sidenavlinks" id="sidenavlinks">
            <li className="sidenavlinkcomponent" ><NavLink style={navStyle} exact to='/' activeClassName="SideActive" isActive={checkActive}>
            Home
            </NavLink></li>
           <li className="sidenavlinkcomponent"><NavLink style={navStyle} to='/about' activeClassName="SideActive">
            About
            </NavLink></li>
           <li className="sidenavlinkcomponent"><NavLink style={navStyle} to='/shop' activeClassName="SideActive">
           Shop
            </NavLink></li>
            <li className="sidenavlinkcomponent"><NavLink style={navStyle} to='/solution' activeClassName="SideActive">
            Solutions
            </NavLink></li>
          <li className="sidenavlinkcomponent">  <NavLink style={navStyle} to='/blogs' activeClassName="SideActive">
            Blogs
            </NavLink></li>
             <li className="sidenavlinkcomponent"><NavLink style={navStyle} to='/login' activeClassName="SideActive">
           Login
            </NavLink></li>
             <li onClick={cartToggle}><NavLink to="/cart" className="sidenavlinkcomponent">           
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
            <li> <NavLink style={navStyle} to='/shop' activeClassName="SideActive">
           Shop
           </NavLink></li>
            <li><NavLink style={navStyle} to='/solution'activeClassName="SideActive">
           Solutions
          </NavLink> </li>
           <li> <NavLink style={navStyle} to='/blogs'activeClassName="SideActive">
            Blogs
           </NavLink></li>
           <li className="sidenavlinkcomponent"> <NavLink style={navStyle} to='/login' activeClassName="SideActive">
            Login
            </NavLink></li>
    <li onClick={cartToggle} className="sidenavlinkcomponent"> <NavLink to="/cart">
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