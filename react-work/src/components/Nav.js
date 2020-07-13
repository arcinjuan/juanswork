import React from 'react';

// routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

// styles
import styled from 'styled-components';

function Nav() {
  return (
      <Router>
          <Navigation>
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
          </Navigation>

          <Content>
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
          </Content>
      </Router>
  );
}

export default Nav;

// styles
const Navigation = styled.nav`
	position:relative;
		ul{
			padding: 10px;
			text-align:center;
			margin:0;
			list-style:none;
			position:absolute;
			top:0;
			left:0;
			width: 100vw;
			padding: 10px;
			li{
				display:inline-block;
				a{
					color:#333;
					text-decoration:none;
					padding: 10px;
				}
			}
		}
`
const Content = styled.div`
	margin-top:20px;
`