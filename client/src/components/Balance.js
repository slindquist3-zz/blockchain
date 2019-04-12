import React from 'react';
import styled from 'styled-components';

const Balance = (props) => {

  const Total = styled.h3`
    color: purple;
  `;

  const convertIntegerToDollars = (integer) =>  {
    return integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //lifecycle of access to props or compondent did update where we return balance string with balance

  return (
    <div className="Balance">
      Total Account Balance: {}
    </div>

  )
}

export default Balance;
