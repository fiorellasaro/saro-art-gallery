import React from 'react';
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  // if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -5000],
        }).interpolate(openValue => `translate3d( ${openValue}px,0, 0`),
     
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>WORK</a></li>
          <li><a href="/" onClick={props.handleNavbar}>TAROT</a></li>
          <li><a href="/" onClick={props.handleNavbar}>ABOUT</a></li>
          <li><a href="/" onClick={props.handleNavbar}>CONTACT</a></li>
          
            {/* <NavLink exact to="/" ></NavLink>
            <NavLink exact to="/work" activeStyle={{ borderBottom: "2px solid #ffffff"}} >WORK</NavLink>
            <NavLink exact to="/tarot">TAROT</NavLink>
            <NavLink exact to="/about">ABOUT</NavLink>
            <NavLink exact to="/contact">CONTACT</NavLink> */}

        </NavLinks>
      </CollapseWrapper>
    );
  // }
  // return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #1c1c1c;
  position: fixed;
  left: 0;
  right: 0;
  height: 90vh;
  width: 100%;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;