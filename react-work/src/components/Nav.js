import React from 'react';
// pages
import Contact from '../pages/Contact';
import Work from '../pages/Work';
import About from '../pages/About';
import Home from '../pages/Home';

// icons
import { FaInfoCircle, FaTimesCircle } from 'react-icons/fa';

// components
import Modal from './Modal';
import AboutReactSite from './modalContent/AboutReactSite';

// routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
          <nav>
            <Modal content={<AboutReactSite />} open={<FaInfoCircle />} close={<FaTimesCircle />} />
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/work">work</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>


          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
