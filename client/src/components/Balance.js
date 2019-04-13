import React, { Component } from 'react';
import styled from 'styled-components';


class Balance extends Component {

  constructor(props) {

    super(props);

    this.state = { currentBalance: props.balance}

  }

  convertIntegerToDollars(integer) {
    return integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }


  render() {

    const Total = styled.h3`
      color: purple;
    `;


    return (
      <div className="Balance">
         {this.props.balance}
      </div>

    )

  }


}

export default Balance;
