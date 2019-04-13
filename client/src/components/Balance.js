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


    return (
      <div className="Balance">
        <div className="balance-value"></div>
      </div>

    )

  }


}

export default Balance;
