import React, { Component } from 'react';
import styled from 'styled-components';

const Welcome = (props) =>  {

  const welcomeStyle = {
    width: '500px',
    height: '500px',
    position: 'absolute',
    backgroundColor: 'pink',
    zIndex: 50
  }

    return (
      <div style={welcomeStyle} className="Welcome">

      </div>

    )

}

export default Welcome;
