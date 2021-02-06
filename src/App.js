import './App.css';
import React from 'react';
import {Button} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Chat from './components/chatsupport/Chat'
import About from './pages/About';
import Shop from './Shop';
import Solution from './pages/Solution';
import Consultancy from './pages/Consultancy';
import Contact from './components/contact/Contact'
// import Details from './components/about/About';
import Landing from './components/Landing/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

import User from './components/user/User';
import Cart from './components/Cart'
import Footer from './components/footer/Footer';
import Industries from './components/industries/Industries';
import Missing from './Missing';
 
import Custom from './components/customModal/CustomModal'

import Strategy from './components/consultancy/Strategy';
import Formative from './components/consultancy/Formative';
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext";
import Insights from './pages/Insights';
import Article from './pages/Article';
import Press from './pages/PressRelease'
import Career from './pages/Career'
import Blogs from './pages/Blogs';
import Blog1 from './components/blogs/blogpages/Blog1'
import Blog2 from './components/blogs/blogpages/Blog2'
import Blog3 from './components/blogs/blogpages/Blog3'
import Blog4 from './components/blogs/blogpages/Blog4'

import'./form-submission-handler';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return ( 
  <div className="App">
    <ProductContextProvider>
    <CartContextProvider>
    <Router>
   
      <Nav />  
      <Switch> 
      
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />

{/* ROUTES FOR SHOPS */}
      <Route path="/shop" component={Shop}  /> 
      <Route path="/solution" component={Solution} />
      <Route path="/consultancy" component={Consultancy} />
      <Route path="/shop/AllCategories" exact component={Shop}/>
      <Route path="/shop/Chemicals&Materials" exact component={Shop}/>
      <Route path="/shop/ConsumerGoods" exact component={Shop}/>
      <Route path="/shop/Food&Bevarages" exact component={Shop}/>
      <Route path="/shop/HealthCare" exact component={Shop}/>
      <Route path="/shop/ICT" exact component={Shop}/>
      <Route path="/shop/BFS" exact component={Shop}/>
      <Route path="/shop/Automotive&Aerospace" exact component={Shop}/>
      <Route path="/cart" component={Cart} />

{/* ROUTES END FOR SHOPS */}

{/* ROUTES FOR CONSULTANCY */}
      <Route path="/strategy" component={Strategy}></Route>
      <Route path="/formative" component={Formative}></Route>
{/* ROUTES END FOR CONSULTANCY */}
{/* ROUTES FOR INSIGHT */}
      <Route path="/insights" component={Insights}/>
      <Route path="/blogs" component={Blogs} />
      <Route path="/article" component={Article} />
      <Route path="/pressRelease" component={Press} />
      
{/* ROUTES END FOR INSIGHT */}

      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/user" component={User} />

    {/* ROUTES FOR ADDING BLOG PAGES !!!! CHANGE CODE BELOW ONLY*/}
      <Route path="/blog1" component={Blog1} />
      <Route path="/blog2" component={Blog2} />
      <Route path="/blog3" component={Blog3} />
      <Route path="/blog4" component={Blog4} />



      {/* END ROUTES OF BLOG PAGES. MODIFY ABOVE THIS ONLY */}





      <Route path="*" component={Missing} />
      </Switch>
      <Footer/>
      

    </Router>
    </CartContextProvider>
    </ProductContextProvider>
    <Chat/>
    </div>
  );
}

const Home = () => {
  
  return(
    <>
  <div>
   <Landing/>
  <Industries/>
 

  </div>
  </>
  )
  };

export default App;
