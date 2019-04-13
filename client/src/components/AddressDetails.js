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
      backgroundColor: 'white'
  }

    return (
      <div className="AddressDetails">

          <div>
            <Header address={props.address} />
            <Balance balance={props.balance}/>
            <ReactTable
              data={props.transactions}
              columns={columns}
              defaultPageSize = {10}
              pageSizeOptions = {[10, 50]}
              style={tableStyles} />
          </div>


      </div>

    )

}

export default AddressDetails;
