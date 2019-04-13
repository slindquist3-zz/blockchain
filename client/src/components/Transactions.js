import React from 'react';
import styled from 'styled-components';
import moment from 'moment'

const Transactions = (props) => {


const formatUnix = (unix) => {

  console.log(new Date(unix));
}


//figure out how to convert the time since 1970 format to timestamp

  let rows = props.transactions.map( (item, i) =><div key={i}>Hash: {item.hash} | <span>Time: {formatUnix(item.time)}</span></div>);



  return (
    <div className="Transactions">
        {rows}
    </div>

  )
}

export default Transactions;
