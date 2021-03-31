const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey: "pub-c-629a6440-63f5-4fd1-aad3-7b0c0bd669fc",
  subscribeKey: "sub-c-e18afbba-8e20-11eb-9de7-3a1dcc291cdf",
  uuid: "john",
  authKey: "john_key",
});

pubnub.publish(
  {
    channel: "one_francis_john",
    message: {"text": "Hello group !"}
  },
  (status, response) => {
    console.log(status);
    //console.log(JSON.stringify(status, null, 2));
    console.log(response);
  }
);
