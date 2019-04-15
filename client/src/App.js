import React, { Component } from 'react';
import axios from 'axios';
import { jsx } from '@emotion/core'

import Header from './components/Header.js';
import AddressDetails from './components/AddressDetails';
import Loading from './components/animations/Loading.js';
import Blank from './';

import isEqual from 'lodash/isEqual'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      balance: '',
      transactions: [],
      loadingData: false,
      welcome: true,
      showTable: false,
      interval: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getBlockChainData = this.getBlockChainData.bind(this);
  }

  handleChange(event) {
    this.setState({ address: event.target.value })
  }

  getBlockChainData(address) {

    const {transactions} = this.state;

    axios.get(`/blockchain/${address}`)

      .then((response) => {

        console.log(response.data.txs);
        console.log(response.data.final_balance);
        console.log(isEqual(transactions[0], response.data.txs[0]))
       if (!isEqual(transactions[0], response.data.txs[0])) {

        this.setState({ transactions: response.data.txs,
          balance: '$' + (response.data.final_balance.toLocaleString('en')),
          loadingData: false,
           showTable: true });
       }

      })
      .catch((error) => {
        console.log('Error', error);
        this.setState({loadingData: false});
        alert('Please double-check the address and try searching again.')
      })
  }


  handleSearch(address) {


    // const ADDRESS = '1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp';
    this.setState({ loadingData: true,
                    showTable: false,
                    interval: setInterval(() => {
                      console.log('Made another call to api');
                      this.getBlockChainData(this.state.address);
                    }, 30000)
                 });

    this.getBlockChainData(this.state.address);

  }

  render() {
    console.log('Am I getting re-rendered');
    return (
      <div className="App">
        <Header handleSearch={this.handleSearch}
                address={this.state.address}
                handleChange={this.handleChange}/>

        {this.state.loadingData && <Loading/>}

        <AddressDetails
                showTable={this.state.showTable}
                address={this.state.address}
                balance={this.state.balance}
                transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
