import React from 'react';
import styled from 'styled-components';

const Balance = () => {

  const Total = styled.h3`
    color: purple;
  `;

  return (
    <div className="Balance">
      Total Account Balance:
      <Total>
        {/* grab value from API call coming from props*/}
      </Total>
    </div>

  )
}

export default Balance;
