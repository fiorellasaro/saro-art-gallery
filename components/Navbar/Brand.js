import React from 'react'
import styled from "styled-components";
import Image from 'next/image';


import logo from "../../assets/LogoBolderFS.svg";



const Brand = () => {

  return (

      <Image src={logo} alt="Fiorella Saro Logo" width={50} height={50}  />
  

  )
}

export default Brand

