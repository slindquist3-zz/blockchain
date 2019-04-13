import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.js'
import Balance from './Balance.js';

import ReactTable from "react-table";
import 'react-table/react-table.css';


const AddressDetails = (props) =>  {

  const columns = [{
      Header: 'Hash',
      accessor: 'hash'
    },{
      Header: 'Time',
      accessor: 'time'
  }];

  const tableStyles = {
      backgroundColor: 'white',
      position: 'absolute',
      top: '15%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      width: '80%'
  }

    return (
      <div className="AddressDetails">

      {props.showTable &&
        <div>
          <Header address={props.address} />
          <Balance balance={props.balance}/>
          <ReactTable
            data={props.transactions}
            columns={columns}
            defaultPageSize = {10}
            pageSizeOptions = {[10, 50]}
            style={tableStyles} />
        </div>}
      </div>

    )

}

export default AddressDetails;
