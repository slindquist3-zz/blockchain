import React, { Component } from 'react';
import styled from 'styled-components';

import Balance from './Balance.js';

import ReactTable from "react-table";
import 'react-table/react-table.css';

const AddressDetails = (props) =>  {

  const columns = [{
    Header: 'Transactions', Header: () => (
          <div
            style={{
              textAlign:"left"
            }}
          >Transactions</div>),
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
      width: '100%',
      top: '100px',
      fontSize: '10px',
      border: '3px solid black'
  }

  const detailsContainer = {
    position: 'relative',
    minWidth: '300px',
    margin: '0 20px',
    width: '100%'
  }

  const AddressDetailsStyles = {
    position: 'relative',
    marginTop: '-130px',
    width: '90%',
    marginRight:'20px'
  }


    return (
      <div className="AddressDetails" style={AddressDetailsStyles}>

      {props.showTable &&
        <div className="detailsContainer" style={detailsContainer}>
          <Balance balance={props.balance} address={props.address}/>
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
