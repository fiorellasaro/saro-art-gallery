import React from 'react';
import styled from "styled-components";

const Burgermenu = (props) => {
  return (
    <Wrapper onClick={props.handleNavbar} >
   <div className={ props.navbarState ? "open flex" : "flex" }>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}

export default Burgermenu;

const Wrapper = styled.div`

  @media (min-width: 769px) {
      display: none;
  }

  width: 50px;
  height: 45px;
  display: flex;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
& .flex{
  display: flex;
  flex-direction: column;
  width: 100%;
}
  & span{
  justify-content: space-between;
  height: 9px;
  width: 100%;
  background: #ffffff;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
  }

  & span:nth-child(2){
 margin-top: 9px;
 margin-bottom: 9px;
  }


  .open span:nth-child(2) {
      opacity: 0;
    }
  .open span:nth-child(3) {
    transform: rotate(-45deg);
    margin-top: -36px;
  
  }
  .open span:nth-child(1) {
    transform: rotate(45deg);
    margin-top: 20px;
  } 
`;