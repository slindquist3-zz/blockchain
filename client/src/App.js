import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar.js';
import SpreadSheet from './components/Spreadsheet.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      balance: '',
      transactions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleIntegers = this.handleIntegers.bind(this);

  }

  handleIntegers(integer) {
    return '$' + integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  handleChange(event) {
    this.setState({ term: event.target.value }, console.log(this.state));
  }



  handleSearch() {
    console.log('Searching!!!');

    const KEY = '1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp';

    // axios.get(`https://blockchain.info/rawaddr/${KEY}`)
    axios.get(`/blockchain/${KEY}`)
      .then((response) => {

        console.log(response.data.txs);
        console.log(response.data.final_balance);

        this.setState({ transactions: response.data.txs,
                        balance: response.data.final_balance });
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
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} term={this.state.term} />
        <SpreadSheet balance={this.state.balance} transations={this.state.transactions} />
      </div>
    );
  }
}

export default App;
