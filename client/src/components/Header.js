import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

 const Header = (props) => {

   const BlockchainLogo = styled.img.attrs(({ src }) => ({
     src: src,
   }))`
     width: 200px;
     position: relative;
     margin-left: 30px;
     top: 40px;
     z-index: 50;
     display: block;
   `;

   const SearchIcon = styled.img.attrs(({ src }) => ({
     src: src,
   }))`
     width: 30px;
     position: absolute;
     z-index: 50;
     top: 65px;
     left: 40px;
   `;

   const AddressInput = styled.input`
      height: 40px;
      position: relative;
      display: inline;
      font-size: 14px;
      border: none;
      border-radius: 50px;
      margin-top: 60px;
      width: 100%;
      margin-left: 10%;
      padding-left: 50px;
      transform: translate(-50px, 0px);
      margin-left: 80px;

      @media (max-width: 700px) {

     }`;

    const Button = styled.button`
      width: 100px;
      height: 40px;
      background-color: #00aee6;
      cursor: pointer;
      position: relative;
      border-radius: 50px;
      color: white;
      font-size: 14px;
      display: inline-block;
      font-weight: 400;
      letter-spacing: 1px;
      border: 2px solid white;
      margin-top: 20px;
      float:right;
      margin-left: 30px;
      transform: translate(80px, 0px);




      @media (max-width: 700px) {

     }`;


    const SearchContainer = styled.div`

      width: 70%;

      @media (max-width: 700px) {

     }`;

     const headerStyle = {
       position: 'absolute',
       backgroundColor: '#004a7c',
       width: `100%`,
       paddingBottom: '40px',
       display: 'block'
     };

    return (
      <div className="Header" style={headerStyle}>
            <SearchContainer>
              <SearchIcon src={require("../assets/search-icon.png" )}/>
              <AddressInput type="text" placeholder="Enter Address" onChange={props.handleChange}/>
              <Button onClick={props.handleSearch}>Search</Button>
            </SearchContainer>
      </div>
    )

  }

export default Header
