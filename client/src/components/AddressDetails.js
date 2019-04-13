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
      width: 600 },
      { Header: 'Time',
      accessor: 'time',
      width: 100 }]
    }];



  const tableStyles = {
      backgroundColor: 'white',
      position: 'absolute',
      top: '35%',
      left: '50%',
      transform: 'translate(-50%, 0)',
  }

  const detailsContainer = {
    position: 'absolute',
    maxWidth: '80%',
    minWidth: '300px',
    left: '50%',
    transform: 'translate(-50%, 0)',
    top: '30%'
  }

    return (
      <div className="AddressDetails">

      {props.showTable &&
        <div className="detailsContainer" style={detailsContainer}>
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
