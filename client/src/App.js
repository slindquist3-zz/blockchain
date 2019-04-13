import React, { Component } from 'react';
import axios from 'axios';
import { jsx } from '@emotion/core'

import SearchBar from './components/SearchBar.js';
import AddressDetails from './components/AddressDetails'
import Loading from './components/animations/Loading.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      balance: '',
      transactions: [],
      loadingData: false
    };

    this.handleState = this.handleState.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleState(event) {
    this.setState({ address: event.target.value,loadingData: true}, this.handleSearch(this.state.address));
  }

  handleSearch(address) {

    const KEY = '1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp';
    axios.get(`/blockchain/${KEY}`)

    // axios.get(`/blockchain/${this.state.address}`)

      .then((response) => {

        console.log(response.data.txs);
        console.log(response.data.final_balance);

        this.setState({ transactions: response.data.txs,
                        balance: response.data.final_balance,
                        loadingData: false});
                        //need to parse the balance when I pass to state

        console.log(this.state);

      })
      .catch((error) => {
        // handle error
        console.log('Error', error);
      })

  }


  render() {
    return (
      <div className="App">
        <SearchBar handleChange={this.handleChange} handleState={this.handleState} address={this.state.address} />

        {this.state.loadingData ?
          <Loading />  :
          <AddressDetails address={this.state.address} balance={this.state.balance} transactions={this.state.transactions} />
         }

      </div>
    );
  }
}

export default App;
