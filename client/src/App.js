import React, { Component } from 'react';
import axios from 'axios';
import { jsx } from '@emotion/core'

import Header from './components/Header.js';
import AddressDetails from './components/AddressDetails';
import Loading from './components/animations/Loading.js';
// import Welcome from './components/Welcome.js'
import Blank from './';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      balance: '',
      transactions: [],
      loadingData: false,
      welcome: true,
      showTable: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleChange(event) {
    this.setState({ address: event.target.value })
  }

  handleSearch() {
    this.setState({ loadingData: true,
                    showTable: false })

    const KEY = '1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp';
    axios.get(`/blockchain/${KEY}`)

    // axios.get(`/blockchain/${this.state.address}`)

      .then((response) => {

        console.log(response.data.txs);
        console.log(response.data.final_balance);

        this.setState({ transactions: response.data.txs,
                        balance: '$' + (response.data.final_balance.toLocaleString('en')),
                        loadingData: false,
                         showTable: true });
                        //need to parse the balance when I pass to state
      })
      .catch((error) => {
        // handle error
        // make error component
        console.log('Error', error);
      })

  }


  render() {
    return (
      <div className="App">

        <Header handleSearch={this.handleSearch}
                   address={this.state.address} />

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

//
// {this.state.loadingData ?
//   <Loading />  :
//   <AddressDetails
//     address={this.state.address}
//     balance={this.state.balance}
//     transactions={this.state.transactions} />
//  }
