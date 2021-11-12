import React, { useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
// import {NavLink} from 'react-router-dom';
import Link from 'next/link';
import {CircularProgress, Badge} from '@material-ui/core';



import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";




const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });


  const [open, setOpen] = useState(false);
  const node = useRef();
  // const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Link href="/">
            <div className="link-brand">
              <Brand />
            </div>
          </Link>


        
       
          <NavLinks style={linkAnimation}>

            <Link href="/work" activeStyle={{ borderBottom: "2px solid #ffffff"}} >WORK</Link>
            <Link href="/tarot">TAROT</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="https://t.me/fiorellasaro" > 
              
                <a target="_blank">CONTACT</a>
            </Link>
            
            <Link
                href="/cart"
            >
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
          </NavLinks>
          

         
            <BurgerMenu 
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />

        </FlexContainer>
      </NavBar>
      {/* <div ref={node}>
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div> */}
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
        cart={props.cart}
      />
   </>
  )
}

export default Navbar

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

const NavBar = styled(animated.nav)`
  /* position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1 !important;
  background: #2d3436;

  font-size: 1.4rem; */
  background: black;
  z-index: 1 !important;
  position: sticky;
  top: 0;
  left: 0;
  background: black;
  height: 10vh;
  display: flex;
  align-items:center;
`;

export const FlexContainer = styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 425px){
  flex-direction: ${(props) => props.mobile ? 'column' : 'row' };
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  }
`;

const NavLinks = styled(animated.ul)`
  & Badge{

  }
  /* justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a span {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
    @media (max-width: 768px) {
      display: none;
    }
  } */

  display: flex;
  justify-content: center;
  align-items: center;

  /* display: block; */
  /* margin: auto 0; */
  & a {

    color: #ffffff;
    font-weight: bolder;
    transition: all 300ms linear 0s;
    /* display: block;
    height: 100%; */
    font-size: 20px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin: 0 1.5rem;
    cursor: pointer;
    &:hover {
      /* color: #c0c0c0;
      border-bottom: 1px solid #1b9481; */
      left: 0;
      right: 0;
      border-bottom-color: inherit;
    }
    &:active {
      left: 0;
      right: 0;
      border-bottom-color: inherit;
    }
    
    /* &:before {
      content: '';
      position: absolute;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      left: 50%;
      right: 50%;
      bottom: 0;
      border-bottom-width: 3px;
      border-bottom-style: solid;
      border-bottom-color: transparent;
    } */
    @media (max-width: 768px) {
      display: none;
    }
  }

  & span.MuiBadge-root {
    & span{
      margin-right:-15px;
      color: #000;
      background-color: white;
      border-radius: 30px;
    }
    color: #ffffff;
    font-weight: bolder;
    transition: all 300ms linear 0s;
    /* display: block;
    height: 100%; */
    font-size: 20px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin: 0 1.5rem;
    cursor: pointer;
    &:hover {
      /* color: #c0c0c0;
      border-bottom: 1px solid #1b9481; */

      border-bottom-color: inherit;
      z-index: -1;
    }
    &:active {
      left: 0;
      right: 0;
      border-bottom-color: inherit;
      z-index: -1;
    }
    
    /* &:before {
      content: '';
      position: absolute;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      left: 50%;
      right: 50%;
      bottom: 0;
      border-bottom-width: 3px;
      border-bottom-style: solid;
      border-bottom-color: transparent;
    } */
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
 
