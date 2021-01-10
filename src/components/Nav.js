import React, {useContext} from "react"
import {cartContext} from "../Global/cartContext.js"
import {Link} from "react-router-dom"
import '../App.css';



const Nav= ({cartToggle})=> {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };
    // const{shopping} = useContext(cartContext);
   
    
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

 
  
  return (
    <nav>
        <h3>Dhanania</h3>
      <div className="hamburgerMenu" id="hamMenu"><i className="fa fa-bars"></i></div>
      <div className="sidenav" id="sidenav">
        <div className="closebtn" id="closebtn">&times;</div>
        <ul className="sidenavlinks" id="sidenavlinks">
            <Link style={navStyle} to='/'>
            <li className="sidenavlinkcomponent">Home</li>
            </Link>
            <Link style={navStyle} to='/about'>
            <li className="sidenavlinkcomponent">About</li>
            </Link>
            <Link style={navStyle} to='/shop'>
            <li className="sidenavlinkcomponent">Shop</li>
            </Link>
            <Link style={navStyle} to='/solution'>
            <li className="sidenavlinkcomponent">Solutions</li>
            </Link>
            <Link style={navStyle} to='/contact'>
            <li className="sidenavlinkcomponent">Contact</li>
            </Link>
            <Link style={navStyle} to=''>
            <li className="sidenavlinkcomponent">Login</li>
            </Link>
            </ul>
      </div> 

        <ul className="navlinks">
            <Link style={navStyle} to='/'>
            <li>Home</li>
            </Link>
            <Link style={navStyle} to='/about'>
            <li>About</li>
            </Link>
            <Link style={navStyle} to='/shop'>
            <li>Shop</li>
            </Link>
            <Link style={navStyle} to='/solution'>
            <li>Solutions</li>
            </Link>
            <Link style={navStyle} to='/contact'>
            <li>Contact</li>
            </Link>
            <Link style={navStyle} to=''>
            <li className="sidenavlinkcomponent">Login</li>
            </Link>
    
    <li onClick={cartToggle}>
    <div className="cart" id="cartPc">
      <span className="shoppingCartIcon">🛒</span>         
      <span className="shoppingCartTotal">2</span>
      </div>
      </li>
 </ul>

    </nav>
  );
}

export default Nav;