const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  symbol: {
    type: String
  },
  description: {
    type: String
  },
  currency: {
    type: String
  },
  exchange: {
    type: String
  }
});

const Stock = mongoose.model('Stock', StockSchema);

module.exports = { Stock };
