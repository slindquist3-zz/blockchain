import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.js'
import Balance from './Balance.js';
import Transactions from './Transactions.js';

const AddressDetails = (props) =>  {

    return (
      <div className="AddressDetails">
        <Header address={props.address} />
        <Balance balance={props.balance}/>
        <Transactions transactions={props.transactions}/>
      </div>

    )

}

export default AddressDetails;
