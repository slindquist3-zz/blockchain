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
      width: '100%',
      top: '250px',
      fontSize: '10px',
      border: '1px solid black'
  }

  const detailsContainer = {
    position: 'relative',
    minWidth: '300px',
    margin: '0 20px'
  }

  const AddressDetailsStyles = {
    position: 'relative'
  }

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
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
