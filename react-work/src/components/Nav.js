import React, {useEffect} from 'react';

// routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import Contact from '../pages/Contact';
import Work from '../pages/Work';
import About from '../pages/About';
import Home from '../pages/Home';

// icons
import { FaReact, FaTimesCircle } from 'react-icons/fa';

// components
import Modal from './Modal';
import AboutReactSite from './modalContent/AboutReactSite';

// styles
import styled from 'styled-components';
import styles from '../styles/pages.css';

// transitions & animations
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';
import transitions from '../styles/transitions.css';


function Nav() {

  return (
      <Router>
          <Navigation>
            <Modal content={<AboutReactSite />} open={<FaReact />} close={<FaTimesCircle />} />
            <ul id="links">
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
          	<Route render={({location}) => (
          		<TransitionGroup>
			          <CSSTransition key={location.key} timeout={300} classNames="fade">
				          <Switch location={location}>
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
			          </CSSTransition>
		          </TransitionGroup>
          	)} />
          </Content>
      </Router>
  );
}

export default Nav;

// styles
const Navigation = styled.nav`
	color:#0fd3f8;
	background: #3a3e42;;
	position:relative;
	min-height: 40px;
	max-width: 100vw;
	overflow:hidden;
	z-index: 1;
		ul#links{
			text-align:right;
			margin:0;
			list-style:none;
			position:absolute;
			top:0;
			left:0;
			width: 100vw;
			padding: 10px;
			box-sizing: border-box;
			li{
				display:inline-block;
				vertical-align: top;
				a{
					color:#0fd3f8;
					text-decoration:none;
					padding: 10px;
				}
			}
		}
`
const Content = styled.div`
	margin-top:20px;
`