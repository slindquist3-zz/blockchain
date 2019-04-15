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
     top: 85px;
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
      border: 3px solid black;
    `;

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
      font-weight: 600;
      letter-spacing: 2px;
      border: 3px solid black;
      margin-top: 20px;
      float:right;
      transform: translate(85px, 0px);
      transition: all 0.3s ease 0s;
      &:hover {
        background:white;
        color: black;
      }
      &:active {
        background:black;
        color: white;
      }
    `;

    const SearchContainer = styled.div`
      width: 60%;
    `;

     const headerStyle = {
       position: 'relative',
       backgroundColor: '#004a7c',
       width: `100%`,
       paddingBottom: '100px'
     };

    return (
      <div className="Header" style={headerStyle}>
         <a href="https://www.blockchain.com/" target="_blank"><BlockchainLogo src={require("../assets/white-blockchain.svg")} /></a>
            <SearchContainer>
              <SearchIcon src={require("../assets/search-icon.png" )}/>
              <AddressInput type="text" placeholder="Enter Address" onChange={props.handleChange}/>
              <Button onClick={props.handleSearch}>Search</Button>
            </SearchContainer>
      </div>
    )

  }

export default Header
