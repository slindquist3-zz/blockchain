# Hello, Blockchain! (part II)

## Requirements

* This project queries the Blockchain API to render the balance and transactions of a given address. The project listens for changes in the transaction history of the address and re-renders if the most recent transaction has changed.

## High-level Overview of App Architecture

* The parent App component maintains the state of the app and holds the functions necessary for fetching data. The Loading component renders through a boolean when a request is made to the API and as the user awaits a response. A Header contains the search input and button that triggers events to update App state. The AddressDetails receives data from App state and passes it to the Balance and ReactTable components to be rendered in a grid.

## Challenges

* Bypassing CORS to access the balance and transaction data for an address in a single request

* Re-rendering components after updates to the database

## Solutions

* After researching different solutions for bypassing CORS, I decided to use a proxy server for my requests so that Access-Control-Allow-Origin would be present in the header when querying the database.

* To monitor changes in the database, I used the setInterval callback function to query the database every 30 seconds. By doing a shallow comparison of the first item in the transaction array to the previous first item in the transaction array from the last API call, I can determine if there have been any new transactions. If the first items are different from one another, I setState with the new data that triggers a re-render of the AddressDetails component, which displays the transaction data. If the first items are the same, setState is not called, and there is no need to re-render the component.

## Featured Libraries

*<a href="https://www.styled-components.com/docs/advanced" target="_blank"> styled-components</a>

*<a href="https://github.com/axios/axios" target="_blank"> axios</a>

*<a href="https://expressjs.com" target="_blank"> express</a>

*<a href="https://lodash.com/" target="_blank"> lodash</a>

*<a href="https://www.npmjs.com/package/react-table" target="_blank"> react-table</a>


## Improvements for Future Iterations

* If I were to build the second iteration of this project, I would in include Unit Testing. I've worked with Rspec and Jasmine/Karma testing tools before, and I understand the setup for Jest is intended for Create React App projects, so I would try including that testing library.

* I would also include validations for the user's input address and perhaps an Error component that renders inline errors to prevent submissions if user's input is invalid or a SQL injection.

* Finally, I know there are better solutions for dynamically responding to database changes from a performance standpoint than querying the database with setInterval. While my solution works for the purposes of this project, I would research other solutions in the future like Websockets or another tool that could minimize the amount of calls I need to make to the Blockchain API.
