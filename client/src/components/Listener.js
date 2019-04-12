var address = "1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp";

var evtSource = new EventSource(`https://blockchain.info/rawaddr/${address}`);

evtSource.onmessage = function(e) {
  console.log("data has changed!!!");

}

evtSource.addEventListener("ping", function(e) {

  var obj = JSON.parse(e.data);
  console.log("ping at " + obj.time);

}, false);
