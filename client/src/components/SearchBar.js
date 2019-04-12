import React, { Component } from 'react';
import styled from 'styled-components';

export default class SearchBar extends Component {

  render() {

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
         <input
            type="text"
            placeholder="Your Search Here"
            onChange={this.props.handleChange}
            value={this.props.term}
            style={input}/>

         <Button onClick={this.props.handleSearch}>Search</Button>
      </div>
    );
  }



}
