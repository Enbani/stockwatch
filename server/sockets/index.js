const axios = require('axios');

const apiKey = process.env.WTD_API_KEY;

module.exports = function (io) {
  io.on('connection', (client) => {
    console.log('Connection with client established\n\n');

    client.on('fetchStocks', (data, callback) => {
      callback('fetchStocks server callback');
      axios.get(`https://api.worldtradingdata.com/api/v1/stock?symbol=${data.stocks}&api_token=${apiKey}`)
        .then((res) => {
          let stocksList = res.data.data;
          client.emit('updateStocks', stocksList);
        })
        .catch((e) => {
          callback(e)
        })
    })
  });
};
