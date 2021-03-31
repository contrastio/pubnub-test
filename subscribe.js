const PubNub = require('pubnub');
const readline = require('readline');

const pubnub = new PubNub({
  publishKey: "pub-c-629a6440-63f5-4fd1-aad3-7b0c0bd669fc",
  subscribeKey: "sub-c-e18afbba-8e20-11eb-9de7-3a1dcc291cdf",
  uuid: "francis",
  authKey: "francis_key",
});

pubnub.channelGroups.listChannels(
  {
    channelGroup: `cg_francis`,
  },
  (status, response) => {
    if (status.error) {
      console.error('pubnub error:', status);
      return;
    }

    console.log('List of channels : ');
    console.log(JSON.stringify(response.channels));

    console.log('Listen to the messages on one_francis_john :');

    pubnub.subscribe({channels: ["one_francis_john"]});

    pubnub.addListener({
      message: (m) => {
        console.log(m.message);
      },
      presence: (p) => {
        console.log(p.uuid);
      },
    });

  }
);

// wait
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  console.log(line);
})
