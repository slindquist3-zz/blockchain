import React, { Component } from 'react';
import styled from 'styled-components';

const Header = (props) =>  {

    return (
      <div className="Header">
        <h1>{props.address}</h1>
      </div>

    )

}

export default Header;
