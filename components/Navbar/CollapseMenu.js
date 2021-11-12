import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// import {NavLink} from 'react-router-dom';
import {CircularProgress, Badge} from '@material-ui/core';

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
          <li><Link href="/" onClick={props.handleNavbar}>WORK</Link></li>
          <li><Link href="/" onClick={props.handleNavbar}>TAROT</Link></li>
          <li><Link href="/" onClick={props.handleNavbar}>ABOUT</Link></li>
          <li><Link href="https://t.me/fiorellasaro" onClick={props.handleNavbar}>
                <a target="_blank">CONTACT</a>
              </Link>
          </li>
          <li>
            <Link href="/cart">
              {props.cart.loading ? (
                      <CircularProgress />
                    ) : props.cart.data.total_items > 0 ? (
                      <Badge
                      badgeContent={props.cart.data.total_items} 
                      color="primary"
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      >
                        CART
                      </Badge>
                    ) : (
                      'CART'
                    )}
            </Link>
          </li>

          
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
  background: #000;
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
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
  & span.MuiBadge-root {
    & span{
      margin-right:-15px;
      margin-top:15px;
      color: #000;
      background-color: white;
      border-radius: 30px;
    }
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fff;
      border-bottom: 1px solid #fff;
    }
    
  }

  
`;