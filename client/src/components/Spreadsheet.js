import React from 'react';
import styled from 'styled-components';

import Balance from './Balance.js'
import Transactions from './Transactions.js'


const Spreadsheet = (props) => {

  //does the listener belong in here?

  return (
    <div className="Spreadsheet">
        <Balance balance={props.balance} />
        <Transactions transactions={props.transactions} />
    </div>

  )
}

export default Spreadsheet;
