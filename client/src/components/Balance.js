import React, { Component } from 'react';
import styled from 'styled-components';


class Balance extends Component {

  constructor(props) {

    super(props);

    this.state = { currentBalance: props.balance,
                   address: props.address }

  }

  render() {
    console.log("this.state.address");

    const Value = styled.p`
    position: relative;
    background-color: white;
    font-weight: 300;
    width: 100%;
    display: block;
    border: 3px solid black;

    @media (max-width: 700px) {
      font-size: 14px;
    }`;


    const ValueStyle = {

    }

    const ValueTextStyle = {
      display: 'block',
      padding: '10px',
      border: '1px solid gray'


    }

    const ValueTextStyleKey = {
      fontWeight: '600'

    }

    const BalanceStyle = {

      marginTop: '150px'

    }



    return (
      <div className="Balance" style={BalanceStyle}>
        <Value style={ValueStyle}>
          <span style={ValueTextStyle}><span className={ValueTextStyleKey}>Address</span>: {this.state.address}</span>
          <span style={ValueTextStyle}><span className={ValueTextStyleKey}>Current Balance</span>: {this.state.currentBalance}</span>
        </Value>
      </div>

    )

  }


}

export default Balance;
