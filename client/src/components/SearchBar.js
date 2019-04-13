import React, { Component } from 'react';
import styled from 'styled-components';

 const SearchBar = (props) => {

    const input = {
      width: '400px',
      height: '40px',
      margin: '100px'
    }

    const Button = styled.button`
      width: 400px;
      height: 40px;
      margin: 100px;
    `

    return (
      <div className="SearchBar">
          <input type="text" placeholder="Your Search Here" style={input} onChange={props.handleChange}/>
          <Button onClick={props.handleSearch}>Search</Button>
      </div>
    )

}

export default SearchBar
