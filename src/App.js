import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Shop from './Shop';
import Solution from './pages/Solution';
import Contact from './pages/Contact';
import Landing from './components/Landing/Landing';
import Details from './components/about/About';
import Cart from './components/Cart'
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />  
      <Switch> 
      
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      <Route path="/solution" component={Solution} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

const Home = () => {
  return(
    <>
  <div>
   <Landing/>
   <Details/>
   <Shop/>
  </div>
  </>
  )
  };

export default App;
