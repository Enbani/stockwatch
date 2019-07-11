module.exports = function (io) {
  io.on('connection', (client) => {
    console.log('Connection with client established\n\n');

    client.on('fetchStocks', (data, callback) => {
      console.log('client fetching stocks');
      callback('fetchStocks server callback');
    })
  });
};
