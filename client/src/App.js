import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar.js';
import SpreadSheet from './components/Spreadsheet.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      transations: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    // need a lifecycle method to run when state gets updated on onClick
    // 1. on click updates state
    // 2. when state updates, query the API with state term
    // 3. render new data
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
        // return transactions
        console.log(response);
        // //return balance

        // might need a helper function to massage thinpms data
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
        <SpreadSheet balance="" transations="" />
      </div>
    );
  }
}

export default App;
