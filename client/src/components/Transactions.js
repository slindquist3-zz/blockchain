import React from 'react';
import styled from 'styled-components';

const Transactions = (props) => {



function convertUnixTime(unix) {

  var date = new Date(unix *1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return formattedTime;

}


  let rows = props.transactions.map( (item, i) =><div key={i}>Hash: {item.hash} | <span>Time: {convertUnixTime(item.time)}</span></div>);



  return (
    <div className="Transactions">
        {rows}
    </div>

  )
}

export default Transactions;
