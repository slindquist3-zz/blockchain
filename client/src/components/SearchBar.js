import React, { Component } from 'react';
import styled from 'styled-components';

 const SearchBar = (props) => {

    const InputContainer = styled.div`
      height: 60px;

    `

    const input = {
      width: '300px',
      height: '40px',
      margin: '100px',
      border: '2px solid #004a7c',
      borderRadius: '15px'

    }

    const Button = styled.button`
      width: 300px;
      height: 40px;
      margin: 50px;
      background-color: #004a7c;
      cursor: pointer;
      border-radius: 15px;
      color: white;
      font-size: 18px;
    `

    return (
      <div className="SearchBar">
          <div>
          <InputContainer>
            <img src={require('./search-icon.png')}/>
            <input type="text" placeholder=" Your Search Here" style={input} onChange={props.handleChange}/>
          </InputContainer>
          </div>
          <Button onClick={props.handleSearch}>Search</Button>
      </div>
    )

}

export default SearchBar
