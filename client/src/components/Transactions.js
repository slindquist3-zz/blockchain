import React from 'react';
import styled from 'styled-components';

const Transactions = (props) => {

  const List = styled.ul`
    width: 600px;
    height: 60px;
  `;

  const Item = styled.li`
    color: pink;
  `;

  // let rows = this.props.transactions.map( (item) =><span>{item.transaction}</span>);

  return (
    <div className="Transactions">
      <List>
        <Item>{/*rows*/}</Item>
      </List>
    </div>

  )
}

export default Transactions;
