import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';



 const SearchBar = (props) => {

    const AddressInput = styled.input`
      width: 30%;
      height: 40px;
      top: 0px;
      left: 25%;
      position: relative;
      display: inline;
      font-size: 14px;
      border: none;
      padding-left: 80px;
      border-radius: 50px;
      transform: 'translate(-10%, 0)';
        @media (max-width: 700px) {
          left: 10px;
          padding-left: 60px;
    }

    `;

    const changeColor = keyframes`
      @keyframes change-background {
        0% {
          background: #69b7eb;
        }

        100% {
          background: #f4d6db;
        }
      }
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
      display: inline;
      margin-left: 50px;
      font-weight: 400;
      letter-spacing: 1px;
      left: 25%;
      border: 2px solid white;
      @media (max-width: 700px) {
        left: 10px;
        margin-left: 20px;
      }
    `;


    const SearchIcon = styled.img.attrs(({ src }) => ({
      src: src,
    }))`
      width: 30px;
      position: absolute;
      left: 28%;
      z-index: 50;
      margin: auto;
      padding-top: 5px;
      @media (max-width: 700px) {
        left: 30px;
      }
    `;

    const BlockchainLogo = styled.img.attrs(({ src }) => ({
      src: src,
    }))`
      width: 200px;
      position: absolute;
      left: 5%;
      top: 40px;
      z-index: 50;
      @media (max-width: 700px) {
        left: 30px;
      }
    `;

    const searchBarStyle = {
      position: 'absolute',
      backgroundColor: '#004a7c',
      width: `100%`,
      padding: '30px 0'
    }




    return (
      <div className="SearchBar" style={searchBarStyle}>
            <BlockchainLogo src={require("../assets/white-blockchain.svg")} />
            <SearchIcon src={require("../assets/search-icon.png" )}/>
            <AddressInput type="text" placeholder="Enter Address" onChange={props.handleChange}/>
          <Button onClick={props.handleSearch}>Search</Button>
      </div>
    )

}

export default SearchBar
