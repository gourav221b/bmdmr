import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Shop from './Shop';
import Solution from './pages/Solution';
import Contact from './pages/Blogs';
// import Details from './components/about/About';
import Landing from './components/Landing/Landing';
import Login from './pages/Login';
import Cart from './components/Cart'
import Footer from './components/footer/Footer';
import Industries from './components/industries/Industries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import Blogs from './pages/Blogs';
import Blog1 from './components/blogs/blogpages/Blog1'
import Blog2 from './components/blogs/blogpages/Blog2'
import Blog3 from './components/blogs/blogpages/Blog3'
import Blog4 from './components/blogs/blogpages/Blog4'
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
      <Route path="/shop" component={Shop} />
      <Route path="/solution" component={Solution} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/blog1" component={Blog1} />
      <Route path="/blog2" component={Blog2} />
      <Route path="/blog3" component={Blog3} />
      <Route path="/blog4" component={Blog4} />
      </Switch>
      <Footer/>

    </Router>
    </CartContextProvider>
    </ProductContextProvider>
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
