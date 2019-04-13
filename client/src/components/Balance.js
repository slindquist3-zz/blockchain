import React, { Component } from 'react';
import styled from 'styled-components';


class Balance extends Component {

  constructor(props) {

    super(props);

    this.state = { currentBalance: props.balance}

  }

  render() {

    const Value = styled.h3`
      color: purple;
    `;

    const balanceStyle = {
      position: 'absolute',
      top: '40%'
    }


    return (
      <div className="Balance" style={balanceStyle}>
        <Value>{this.state.currentBalance}</Value>
      </div>

    )

  }


}

export default Balance;
