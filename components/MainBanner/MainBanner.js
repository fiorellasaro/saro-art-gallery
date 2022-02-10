import React, { useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
// import {NavLink} from 'react-router-dom';
import Link from 'next/link';
import {CircularProgress, Badge} from '@material-ui/core';





const MainBanner = (props) => {
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


  return (
    <>
    <FlexContainer>
        <MainTitle>SARO</MainTitle>
        <h2>Entre la no mente y la abstracción</h2> 
        <a href='#gallery'>
            <BtnGallery>
                VER GALERÍA
            </BtnGallery>
        </a>
    </FlexContainer>
   </>
  )
}

export default MainBanner



export const FlexContainer = styled.div`
  width: 90%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: left;
  justify-content: center;
  background-color: black;
  color: white;
  @media (max-width: 425px){
  flex-direction: row;
  }
`;

export const MainTitle = styled.h1`
font-size: 35px;
@media (max-width: 425px){
    font-size: 20px;
    }
`;

export const BtnGallery = styled.button`
font-size: 25px;
color: white;
background-color: black;
border: 2px solid white;
padding: 20px;
cursor: pointer;
border-radius: 10px;
margin-top: 35px;
&:hover{
color: black;
background-color: white;
transition: 0.5s;
}

@media (max-width: 425px){
    font-size: 18px;
    }
`;


 
