import React, { Component } from 'react';
import styled from 'styled-components';

import Balance from './Balance.js';

import ReactTable from "react-table";
import 'react-table/react-table.css';

const AddressDetails = (props) =>  {

  const columns = [{
    Header: 'Transactions',
    columns:
      [{ Header: 'Hash',
      accessor: 'hash',
      width: 400 },
      { Header: 'Time',
      accessor: 'time',
      width: 100 }]
    }];

  const tableStyles = {
      backgroundColor: 'white',
      position: 'absolute',
      width: '80%',
      left: '10%',
      top: '250px',
      fontSize: '10px',
      border: '1px solid black'
  }

  const detailsContainer = {
    position: 'relative',
    minWidth: '300px',
    margin: 'auto'
  }

  const AddressDetailsStyles = {
    position: 'relative'
  }

    return (
      <div className="AddressDetails" style={AddressDetailsStyles}>

      {props.showTable &&
        <div className="detailsContainer" style={detailsContainer}>
          <Balance balance={props.balance}/>
          <ReactTable
            data={props.transactions}
            columns={columns}
            defaultPageSize = {15}
            pageSizeOptions = {[15, 50]}
            style={tableStyles} />
        </div>}
      </div>

    )

}

export default AddressDetails;
