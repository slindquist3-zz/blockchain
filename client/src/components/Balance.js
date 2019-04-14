import React, { Component } from 'react';
import styled from 'styled-components';


class Balance extends Component {

  constructor(props) {

    super(props);

    this.state = { currentBalance: props.balance}

  }

  render() {

    const Value = styled.h3`
    position: absolute;
    top: 210px;
    left: 10%;
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: 300;
    width: 80%;
    `

    const balanceStyle = {

    }


    return (
      <div className="Balance" style={balanceStyle}>
        <Value>Current Balance: {this.state.currentBalance}</Value>
      </div>

    )

  }


}

export default Balance;
